import {EConfigEnvironment} from '@/models'

export interface ISMConfigEnvironment {
  is: EConfigEnvironment
  tracking: {
    sentry: {
      dsn: string
      tracingOrigin: string
    }
  }
}

export interface IMesterlaereConfig {
  [environmentId: string]: ISMConfigEnvironment
}

const SENTRY_DSN = 'https://07ab78a839e344f78c2ab784b1d9c041@o512479.ingest.sentry.io/4505152952401920'

const simonmeldgaardConfig: IMesterlaereConfig = {
  'develop': {
    is: EConfigEnvironment.PRODUCTION,
    tracking: {
      sentry: {
        dsn: SENTRY_DSN,
        tracingOrigin: 'https://www.simonmeldgaard.dk'
      }
    }
  }
}

export default simonmeldgaardConfig
