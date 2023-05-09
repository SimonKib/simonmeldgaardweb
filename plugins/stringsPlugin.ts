export default defineNuxtPlugin(() => {
  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const isNonEmptyString = (input: string | undefined | null): boolean =>
    (input?.trim().length || 0) > 0

  const areNonEmptyStrings = (inputs: (string | undefined | null)[]): boolean => {
    for (const input of inputs) {
      if (isNonEmptyString(input) === false) {
        return false
      }
    }
    return true
  }

  return {
    provide: {
      strings: {
        isValidEmail,
        isNonEmptyString,
        areNonEmptyStrings
      }
    }
  }
})
