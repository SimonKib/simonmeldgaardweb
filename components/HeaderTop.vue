<template>
  <header class="flex flex-row gap-4 items-center justify-between py-12 container print:hidden overflow-hidden">
    <NuxtLink :to="'/' + (global?.locale || '')">
      <IconsLogoIcon
        id="top"
        class="text-white max-w-full"
      />
    </NuxtLink>
    <client-only>
      <div class="hidden lg:block">
        <nav>
          <ul class="flex gap-8">
            <li
              v-for="navItem in navigationItems"
              :key="navItem._uid"
            >
              <nuxt-link
                :to="`/${ navItem.link.cached_url }`"
                class="uppercase"
              >
                {{ navItem.label }}
              </nuxt-link>
            </li>
            <li>
              <AuthLogin />
            </li>
          </ul>
        </nav>
      </div>
      <div class="block lg:hidden">
        <AuthLogin />
      </div>
    </client-only>
  </header>
</template>
<script setup lang="ts">
import { NavigationItemStoryblok } from '~/component-types-sb'
const { global } = useGlobal()

const navigationItems = computed<NavigationItemStoryblok[]>(() => {
  const nav = global.value?.navigation
  if (nav === undefined) {
    return []
  }
  return nav.filter(navItem =>
    navItem.show_in_top === true
  )
})

</script>
