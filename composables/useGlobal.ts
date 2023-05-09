import { TLocale } from '../../models/translation'
import { GlobalSettingsInternationalStoryblok } from '~/component-types-sb'
const { locale } = useTranslation()

interface IState {
  globalLocale: TLocale | null
  global: GlobalSettingsInternationalStoryblok | null
}
const state = reactive<IState>({
  globalLocale: null,
  global: null
})

export const useGlobal = () => {
  const storyblokApi = useStoryblokApi()
  const fetchGlobal = async (forLocale: TLocale) => {
    console.log('fetching Global', forLocale)
    const config = useRuntimeConfig()
    try {
      // Set globalLocale to avoid duplicate requests
      state.globalLocale = forLocale
      const { data } = await storyblokApi.get(
        `cdn/stories/${ forLocale as unknown as string }/site-settings`,
        {
          version: config.public.storyblokVersion as 'draft' | 'published',
          resolve_relations: 'blocks'
          // cv: config.public.storyblokCacheVersion
        }
      )
      const content = {
        ...data.story.content,
        blocks: (data.rels || []).flatMap((story: any) => story.content.blocks)
      }
      state.global = content
      return state.global
    } catch (error) {
      console.log('fetchGlobal: Error')
      console.error(error)
    }
  }

  const getGlobal = async (
    params?: {
      forSlug?: string | string[],
      forLocale?: TLocale
    }): Promise<GlobalSettingsInternationalStoryblok | null> => {
    const useLocale = params?.forLocale || locale.value
    if (useLocale === undefined) {
      throw new Error('getGlobal: locale is undefined')
    }
    if (state.globalLocale === useLocale && state.globalLocale !== null) {
      console.log(`getGlobal: already have Global ${ useLocale }: ${ state.global?.site_name } for slug: ${ params?.forSlug }`)
    } else {
      await fetchGlobal(useLocale)
    }
    return state.global
  }

  return {
    ...toRefs(state),
    getGlobal
  }
}
