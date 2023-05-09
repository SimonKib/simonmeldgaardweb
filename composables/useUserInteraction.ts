import { ref, nextTick } from 'vue'
import { ESubscriptionProduct } from '~~/../models/subscription/Product'

// const logId = '[useUserInteraction]'

// Global state across implementations of composable managed by the composable
const hasHadUserInteraction = ref(false)
const hasVisibility = ref(true)
const latestVisibilityEvent = ref<Date>()
const isScrolled = ref(false)
const appAuthIsReady = ref(false)
const playerScreenTakeover = ref(false)
const windowIsFullScreen = ref(false)

export const useUserInteraction = () => {
  // SCROLL
  const onScrollEvent = (/* event */) => {
    const bodyEl = document.querySelector('body')
    if (
      isScrolled.value === false &&
      window.scrollY > 16
    ) {
      isScrolled.value = true
      if (bodyEl !== null) {
        bodyEl.classList.add('scrolled')
      }
    } else if (
      isScrolled.value === true &&
      window.scrollY === 0
    ) {
      isScrolled.value = false
      if (bodyEl !== null) {
        bodyEl.classList.remove('scrolled')
      }
    }
  }

  // BROWSER WINDOW VISIBILITY
  const getVisibility = computed(() => {
    return hasVisibility.value
  })
  const getLatestVisibilityEvent = computed(() => {
    return latestVisibilityEvent.value
  })
  const onVisibilityEvent = async (/* event */) => {
    await nextTick()
    hasVisibility.value = (document.visibilityState === 'visible')
    latestVisibilityEvent.value = new Date()
    /* console.log(
      logId,
      'onVisibilityEvent',
      {
        documentVisibilityState: document.visibilityState,
        hasVisibility: hasVisibility.value,
        latestVisibilityEvent: latestVisibilityEvent.value
      }
    ) */
  }
  const onDisplayModeFullscreenEvent = (event: MediaQueryListEvent) => {
    console.log('(display-mode: fullscreen)', event)
    windowIsFullScreen.value = event.matches
    hasVisibility.value = (document.visibilityState === 'visible')
  }

  // USER ACCESS TO CONTENTS
  const AccessControlledElementVisibility = (params: {
    storyblokAccess: {
      selected: string[] // ESubscriptionProduct[]
    }
    activeSubscription: ESubscriptionProduct
  }): 'visible' | 'invisible' => {
    const selectedAccess = params.storyblokAccess.selected as ESubscriptionProduct[]
    const subscription = params.activeSubscription
    if (selectedAccess === undefined || selectedAccess.length < 1) {
      return 'invisible'
    }
    if (
      selectedAccess.includes(ESubscriptionProduct.standard) &&
      subscription === ESubscriptionProduct.standard
    ) {
      return 'visible'
    }
    if (
      selectedAccess.includes(ESubscriptionProduct.free) &&
      (
        subscription === ESubscriptionProduct.free ||
        subscription === ESubscriptionProduct.standard
      )
    ) {
      return 'visible'
    }
    if (
      selectedAccess.includes(ESubscriptionProduct.public) &&
      (
        subscription === ESubscriptionProduct.public
      )
    ) {
      return 'visible'
    }
    return 'invisible'
  }

  return {
    // App Loaded
    appAuthIsReady,
    // User interaction
    hasHadUserInteraction,
    // SCROLL
    onScrollEvent,
    // VISIBILITY
    getVisibility,
    getLatestVisibilityEvent,
    onVisibilityEvent,
    // PLAYER SCREEN TAKEOVER
    playerScreenTakeover,
    windowIsFullScreen,
    onDisplayModeFullscreenEvent,
    // USER ACCESS TO CONTENTS
    AccessControlledElementVisibility
  }
}
