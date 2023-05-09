export interface IFakeTranslation {
  [key: string]: IFakeTranslationValue | IFakeTranslation
}

export type IFakeTranslationValue = string | undefined

export interface IMesterLaereTranslations {
  da: IFakeTranslation
  en: IFakeTranslation
}

export type TLocale = 'da' | 'en'
