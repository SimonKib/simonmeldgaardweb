import { MultiassetStoryblok, AssetStoryblok, MultilinkStoryblok } from '~/component-types-sb'

export const useContentHelper = () => {
  const getRandomAssetFromMultiasset = (multiasset: MultiassetStoryblok): AssetStoryblok => {
    const assetsArray = Object.values(multiasset)
    return assetsArray.sort(() => 0.5 - Math.random())[0]
  }

  const resolveMultilinkUrl = (multilink?: MultilinkStoryblok): string | undefined => {
    const EXTERNAL_URLS_START_WITH = ['http', '//']
    if (multilink?.cached_url === undefined || multilink.cached_url.trim() === '') {
      return undefined
    }
    const isExternalUrl = EXTERNAL_URLS_START_WITH.find(eu => multilink.cached_url.startsWith(eu)) !== undefined
    return (isExternalUrl) ? multilink.cached_url : '/' + multilink.cached_url
  }
  return {
    getRandomAssetFromMultiasset,
    resolveMultilinkUrl
  }
}
