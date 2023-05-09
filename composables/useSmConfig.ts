import simonmeldgaardConfig, { ISMConfigEnvironment } from '~~/config'
import { EConfigEnvironment } from '~~/models'

export const useSmConfig = () => {
  const smConfig = (
    thatIs?: EConfigEnvironment
  ): ISMConfigEnvironment => {
    let environment

    if (thatIs !== undefined) {
      environment = thatIs.toLocaleLowerCase()
    } else {
      environment = (process.env.NODE_ENV || '').toLocaleLowerCase()
    }

    if (environment === undefined) {
      throw new Error('Environment not found: ' + thatIs)
    }

    const config = simonmeldgaardConfig[environment]
    if (config === undefined) {
      throw new Error(
        'Could not find environment config using key: ' + environment
      )
    }

    return config
  }

  return {
    smConfig
  }
}
