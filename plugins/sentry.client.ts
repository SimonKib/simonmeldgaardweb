import { defineNuxtPlugin } from '#app'
import * as Sentry from '@sentry/vue'
import * as pkg from '@/package.json'

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp
  const release = `${ pkg.name }@${ pkg.version }`
  const environment = useRuntimeConfig().public.environment
  const mlConfig = useSmConfig().smConfig()
  const sentryEnabled = [
    'localhost',
    '127.0.0.1'
  ].includes(location.hostname) === false
  const enableDebug = (location.search?.includes('sentrydebug=true'))

  // console.log({ release, sentryEnabled })

  if (sentryEnabled) {
    Sentry.init({
      app: [vueApp],
      dsn: mlConfig.tracking.sentry.dsn,
      release,
      environment,
      debug: enableDebug,
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
      beforeSend (event, hint) {
        // Check if it is an exception, and if so, log it.
        if (event.exception) {
          console.error(`[Exeption handled by Sentry]: (${ hint.originalException })`, { event, hint })
        }
        // Continue sending to Sentry
        return event
      }
    })

    vueApp.mixin(Sentry.createTracingMixins({ trackComponents: true, timeout: 2000, hooks: ['activate', 'mount', 'update'] }))
    Sentry.attachErrorHandler(vueApp, { logErrors: false, attachProps: true, trackComponents: true, timeout: 2000, attachStacktrace: true, hooks: ['activate', 'mount', 'update'] })
  }

  return {
    provide: {
      sentry: {
        setTags: (tags: {
          [key: string]: number | boolean | string | undefined
        }): void => {
          for (const key in tags) {
            if (tags[key] === '') {
              tags[key] = undefined
            }
          }
          if (sentryEnabled) {
            Sentry.setTags(tags)
          }
        },
        captureException: Sentry.captureException
      }
    }
  }
})
