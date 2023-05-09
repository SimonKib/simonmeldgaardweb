<template>
  <StoryblokComponent
    v-if="story"
    :blok="story?.content"
    :story-name="story?.name"
    :story-uuid="story?.uuid"
    :parent-id="story?.parent_id"
  />
</template>

<script setup lang="ts">
import { ITypeableStoryStoryBlok } from '~/models/storyblok/Story'
import { GlobalSettingsInternationalStoryblok, PageStoryblok } from '~/component-types-sb'
const { slug } = useRoute().params
const { getStoryPath } = useStory()
const { getMergeHead } = useSeoStuff()
const { getGlobal } = useGlobal()
const config = useRuntimeConfig()

const sbUrl = getStoryPath(slug) || ''

const story = ref<ITypeableStoryStoryBlok<PageStoryblok> | null>(null)
const storyblokApi = useStoryblokApi()
const { data } = await useAsyncData(
  sbUrl,
  async () => await storyblokApi.get(`cdn/stories/${ sbUrl }`, {
    version: config.public.storyblokVersion as 'draft' | 'published',
    resolve_links: 'story'
  })
)
story.value = data.value?.data.story

onMounted(() => {
  if (story.value?.id) {
    useStoryblokBridge(story.value.id, evStory => ((story.value as unknown) = evStory))
  }
})

/* const story = await useAsyncStoryblok(
  sbUrl,
  {
    version: config.public.storyblokVersion as 'draft' | 'published',
    resolve_links: 'story'
  }
) */

const global = ref<GlobalSettingsInternationalStoryblok | null>(null)
global.value = await getGlobal({ forSlug: slug })

if (story.value?.uuid !== undefined) {
  useHead(getMergeHead(story.value, global.value || undefined))
} else {
  console.log('story not found', { sbUrl, slug, story: story.value, globalSiteName: global.value?.site_name })
  /* throw createError({
    statusCode: 404
  }) */
  showError({ message: 'Page not found', statusCode: 404 })
}
</script>
