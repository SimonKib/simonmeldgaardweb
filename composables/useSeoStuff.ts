/* eslint-disable camelcase */
import { ITypeableStoryStoryBlok } from '~~/models/storyblok/Story'
import { GlobalSettingsInternationalStoryblok } from '~/component-types-sb'

export interface IGetOgItemsParams {
  siteUrl: string
  locale: string
  siteName: string
  pageName: string
  pageDescription: string
  pageUrl: string
  ogImageUrl: string
}

export interface IOgItem {
  hid?: string
  property?: string
  content: string
  name?: string
}

export const useSeoStuff = () => {
  const getOgMetaItems = (params: IGetOgItemsParams): IOgItem[] => {
    return [
      // Facebook meta tags
      {
        hid: 'og:url',
        property: 'og:url',
        content: params.pageUrl
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: params.locale
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: params.pageName
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: params.siteName
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: params.pageDescription
      },
      {
        hid: 'ogimage',
        property: 'og:image',
        content: params.ogImageUrl
      },
      {
        hid: 'ogimagesecure',
        property: 'og:image:secure_url',
        content: params.ogImageUrl
      },
      // Twitter meta tags: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      /* { DEPRECATED, I GUESS
        hid: 'twitter:domain',
        name: 'twitter:domain',
        content: params.siteUrl.split('.').slice(-2).join('.')
      }, */
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: params.pageName
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: params.pageDescription
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: params.ogImageUrl
      }]
  }

  const getJsonLd = (g: GlobalSettingsInternationalStoryblok): Object => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: g.organisation_name,
      legalName: g.organisation_name_legal,
      url: g.site_url.cached_url,
      logo: g.logo.filename,
      foundingDate: g.founding_date,
      founders: g.founders.map(
        ({ image, title, name, social_media_links }) => ({
          '@type': 'Person',
          image: image && image.filename ? image.filename : '',
          jobTitle: title,
          name,
          sameAs: social_media_links.map(
            ({ profile_link }) => profile_link.cached_url
          )
        })
      ),
      address: {
        '@type': 'PostalAddress',
        streetAddress: g.street_address,
        addressCountry: g.country_code
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Info',
        telephone: `[${ g.contact_phone.replace(/ /g, '') }]`,
        email: g.contact_email
      },
      sameAs: g.social_media_links.map(
        ({ profile_link }) => profile_link.cached_url
      )
    }
    return jsonLd
  }

  const getMergeHead = (
    pageStory: ITypeableStoryStoryBlok<any>,
    g?: GlobalSettingsInternationalStoryblok
  ) => {
    // Update SEO stuff
    const metaObject: any = {
      charset: 'utf-8',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: []
    }
    const siteUrlParts = (g?.site_url?.cached_url || '//').split('/')
    const fullSlug = (pageStory.full_slug === 'home') ? '' : pageStory.full_slug
    const pageUrl = siteUrlParts.slice(0, -1).join('/') + '/' + fullSlug
    metaObject.title = pageStory.name + ' | ' + g?.site_name || ''
    console.log('Update HEAD: ' + metaObject.title)
    if (
      pageStory.content.seo_description !== undefined &&
      pageStory.content.seo_description.trim() !== ''
    ) {
      metaObject.meta.push({ name: 'description', content: pageStory.content.seo_description.trim() })
    }
    if (g?.language_code !== undefined) {
      metaObject.htmlAttrs = {
        lang: g.language_code
      }
    }
    metaObject.link.push({
      rel: 'canonical',
      href: pageUrl
    })
    if (g !== undefined) {
      metaObject.meta = getOgMetaItems({
        locale: g.locale,
        ogImageUrl: g.og_image.filename,
        pageDescription: pageStory.content.seo_description,
        pageName: pageStory.name,
        pageUrl,
        siteName: g.site_name,
        siteUrl: g.site_url.cached_url
      })

      metaObject.script.push({
        children: JSON.stringify(getJsonLd(g)),
        type: 'application/ld+json',
        hid: 'website-jsonld'
      })
    }
    return metaObject
  }

  return {
    getOgMetaItems,
    getJsonLd,
    getMergeHead
  }
}
