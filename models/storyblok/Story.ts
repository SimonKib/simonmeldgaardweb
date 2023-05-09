export type SBGuid = string // Storyblok story id unique across application e.g. c33eb7a8-3631-4088-b560-640c99123b1a

export interface IStoryStoryBlok {
  name: string
  created_at: Date
  sort_by_date: null | Date
  first_published_at: Date
  published_at: Date
  id: number
  uuid: SBGuid
  slug: string
  full_slug: string
  position: number
  is_startpage: boolean
  parent_id: number
}

export interface ITypeableStoryStoryBlok<T> extends IStoryStoryBlok {
  content: T
}
