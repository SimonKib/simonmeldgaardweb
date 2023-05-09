export const useRouteHelper = () => {
  /**
   * @returns First path segment of route. Returns undefined if not found
   */
  const firstPathSegment = computed<string | undefined>(() => {
    const { slug } = useRoute().params
    if (slug) {
      if (Array.isArray(slug)) {
        return slug[0]
      }
      return slug
    }
    return undefined
  })

  /**
   *
   */
  const isNestedRoute = computed<boolean>(() => {
    const config = useRuntimeConfig()
    const startNestedRoutesFrom = config.public.startNestedRoutesFrom as string[]
    const path = useRoute().fullPath.split('/')
    return startNestedRoutesFrom.includes(`/${ path[1] }`)
  })

  const isRouteToLeaveUponLogin = computed<boolean>(() => {
    const config = useRuntimeConfig()
    const routesToLeaveUponLogin = config.public.routesToLeaveUponLogin as string[]
    return routesToLeaveUponLogin.includes(useRoute().path)
  })

  /**
   * Navigate up one path segment
   */
  const goUpOneLevel = () => {
    const path = useRoute().fullPath.split('/')
    let nextRoute = '/'
    if (path.length > 0) {
      const parentPath = path.slice(0, -1)
      nextRoute = parentPath.join('/')
      if (nextRoute.startsWith('/') === false) {
        nextRoute = '/' + nextRoute
      }
    }
    useRouter().replace(nextRoute)
  }

  /**
   * Return parent path
   */
  const parentPath = computed<string>(() => {
    const path = useRoute().fullPath.split('/')
    let nextRoute = '/'
    if (path.length > 0) {
      const parentPath = path.slice(0, -1)
      nextRoute = parentPath.join('/')
      if (nextRoute.startsWith('/') === false) {
        nextRoute = '/' + nextRoute
      }
    }
    return nextRoute
  })

  /**
   * Navigates user back, following some language-related rules
   */
  const goBack = () => {
    const router = useRouter()
    const { locale } = useTranslation()
    if (isNestedRoute.value) {
      if (parentPath.value === '/') {
        // Go to language-related home
        router.push('/' + locale.value)
      } else {
        // Go up one level
        router.push(parentPath.value)
      }
    } else {
      if (document.referrer?.includes(location.host) === true) {
        // Just go back
        router.go(-1)
      } else {
        // We come from outside the app, so we prefer to go to homepage instead
        router.push('/' + locale.value)
      }
    }
  }

  const goHome = () => {
    const router = useRouter()
    const { locale } = useTranslation()
    router.push('/' + locale.value)
  }

  return {
    firstPathSegment,
    goUpOneLevel,
    isNestedRoute,
    isRouteToLeaveUponLogin,
    parentPath,
    goBack,
    goHome
  }
}
