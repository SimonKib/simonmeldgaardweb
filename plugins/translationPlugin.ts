export default defineNuxtPlugin(() => {
  const { translate, localeDateString } = useTranslation()
  return {
    provide: {
      t: (
        key: string,
        capitalise?: boolean
      ) => translate({ key, capitalise }),
      ti: (
        key: string,
        capitalise: boolean,
        interpolate: {
          [key: string]: string | number
        }
      ) => translate({ key, capitalise, interpolate }),
      tDate: (
        date?: Date | string,
        format?: 'writtenDate' | 'numbersDate'
      ) => localeDateString({
        date,
        format
      })
    }
  }
})
