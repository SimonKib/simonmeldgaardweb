import { MultilinkStoryblok } from '~/component-types-sb'

export default defineNuxtPlugin(() => {
  const { resolveMultilinkUrl } = useContentHelper()
  return {
    provide: {
      url: (
        multilink?: MultilinkStoryblok
      ) => resolveMultilinkUrl(multilink)
    }
  }
})
