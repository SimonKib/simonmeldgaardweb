<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <NuxtLayout>
      <!-- <div
        v-if="showLoading"
        class="bg-black w-full h-screen text-center flex justify-center pt-[100px] sm:pt-[300px]"
      >
        <AtomsSpinnerBarsSpinner />
      </div>
      <template v-else> -->
      <n-message-provider>
        <NuxtPage />
        <PlayerStickyPlayer
          key="sticky-player"
        />
        <UtilsCookieNotice />
      </n-message-provider>
      <!-- </template> -->
    </NuxtLayout>
  </n-config-provider>
</template>
<script setup lang="ts">
import { NMessageProvider, NConfigProvider } from 'naive-ui'
import ls from 'localstorage-slim'
import { themeOverrides } from './naiveui.config'

const { onScrollEvent, onVisibilityEvent, hasHadUserInteraction, onDisplayModeFullscreenEvent } = useUserInteraction()

const HAS_AUTHENTICATED = 'hasAuthenticated'
const hasAuthenticatedAs = ls.get(HAS_AUTHENTICATED) as string | null
if (hasAuthenticatedAs !== null) {
  console.log(`Welcome back ${ hasAuthenticatedAs }, we're setting things up for you`)
}
/* const showLoading = computed(() => {
  return (hasAuthenticatedAs !== null && appAuthIsReady.value !== true)
}) */

onMounted(() => {
  window.addEventListener('scroll', onScrollEvent)
  window.addEventListener('click', onUserClick)
  document.addEventListener('visibilitychange', onVisibilityEvent)
  window.matchMedia('(display-mode: fullscreen)').addEventListener('change', onDisplayModeFullscreenEvent)
  const { mixpanelTrack } = useMixpanel()
  mixpanelTrack(
    'pwaLoaded'
  )
})
onUnmounted(() => {
  console.log('[app] Unmounted')
  window.removeEventListener('scroll', onScrollEvent)
  window.removeEventListener('click', onUserClick)
  window.removeEventListener('visibilitychange', onVisibilityEvent)
  window.matchMedia('(display-mode: fullscreen)').removeEventListener('change', onDisplayModeFullscreenEvent)
})
const onUserClick = () => {
  console.log('[app] User interaction registered')
  hasHadUserInteraction.value = true
  window.removeEventListener('click', onUserClick)
}
</script>
