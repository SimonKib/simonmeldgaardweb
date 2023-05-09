<template>
  <footer class="print:hidden">
    <div
      class="container footer grid gap-y-12 gap-x-1 md:gap-12"
    >
      <div class="footer-logo hidden md:block">
        <a
          href="#top"
          class="flex-1"
        >
          <AtomsStoryImage
            v-if="global?.footer_logo"
            :image="global?.footer_logo"
            :width="32"
            :height="32"
            :img-attrs="{}"
          />
        </a>
      </div>
      <div class="footer-date text-grey-2 font-medium lg:self-end">
        <span class="mr-2">
          ©{{ new Date().getFullYear() }}
        </span>
        <span>{{ global?.site_name }}</span>
      </div>
      <div class="footer-nav">
        <AtomsTypographySubHeading class="mb-6">
          {{ global?.footer_nav_title }}
        </AtomsTypographySubHeading>
        <ul class="text-grey-2 font-medium">
          <li
            v-for="navItem in navigationItemsBottom"
            :key="navItem._uid"
          >
            <nuxt-link :to="$url(navItem.link)">
              {{ navItem.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer-contact">
        <AtomsTypographySubHeading class="mb-6">
          {{ global?.footer_contact_title }}
        </AtomsTypographySubHeading>
        <div class="text-grey-2 font-medium">
          <p>{{ global?.organisation_name_legal }}</p>
          <p>{{ global?.contact_phone }}</p>
          <p>{{ global?.contact_email }}</p>
          <p>{{ global?.street_address }}</p>
        </div>
      </div>
      <div class="footer-blocks">
        <div v-if="global?.blocks">
          <StoryblokComponent
            v-for="block in global?.blocks"
            :key="block._uid"
            :blok="block"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { NavigationItemStoryblok } from '~~/component-types-sb'
const { global } = useGlobal()


const navigationItemsBottom = computed<NavigationItemStoryblok[]>(() => {
  const nav = global.value?.navigation
  if (nav === undefined) {
    return []
  }
  return nav.filter(
    navItem =>
      navItem.show_in_footer === true
  )
})
</script>

<style lang="postcss" scoped>
.footer-logo {
  grid-area: logo;
}
.footer-date {
  grid-area: date;
}
.footer-nav {
  grid-area: nav;
}
.footer-contact {
  grid-area: contact;
}
.footer-blocks {
  grid-area: blocks;
}
.footer {
  grid-template:
      "blocks blocks"
      "nav contact"
      "date logo";
}

@screen md {
  .footer {
    grid-template:
      "logo nav blocks"
      "logo contact blocks"
      "date date date";
  }
}

@screen lg {
  .footer {
    grid-template:
      "logo nav contact blocks"
      "date nav contact blocks";
  }
}
</style>
