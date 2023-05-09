import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface AllAuthorsStoryblok {
  title?: string;
  subtitle?: string;
  all_link?: MultilinkStoryblok;
  all_label?: string;
  _uid: string;
  component: "AllAuthors";
  [k: string]: any;
}

export interface AllAuthorsGridStoryblok {
  title?: string;
  subtitle?: string;
  _uid: string;
  component: "AllAuthorsGrid";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface BenefitStoryblok {
  icon?: AssetStoryblok;
  title?: string;
  text?: string;
  _uid: string;
  component: "Benefit";
  [k: string]: any;
}

export interface BenefitsStoryblok {
  title?: string;
  benefits?: BenefitStoryblok[];
  _uid: string;
  component: "Benefits";
  [k: string]: any;
}

export interface ButtonLinkPosterStoryblok {
  preheader?: string;
  title?: string;
  subtitle?: string;
  image?: AssetStoryblok;
  pill?: string;
  pill_color: "black" | "white";
  button_label?: string;
  button_link?: MultilinkStoryblok;
  _uid: string;
  component: "ButtonLinkPoster";
  [k: string]: any;
}

export interface BuyAOneTimeProductStoryblok {
  physical_product_preample?: any;
  first_name: string;
  first_name_invalid: string;
  last_name: string;
  last_name_invalid: string;
  address_line1: string;
  address_line1_invalid: string;
  postal_code: string;
  postal_code_invalid: string;
  city: string;
  city_invalid: string;
  title?: any;
  intro?: string;
  products?: OneTimeProductStoryblok[];
  email: string;
  email_invalid: string;
  newsletter_signup: string;
  terms: any;
  button_label: string;
  cancel_label?: string;
  success_destination: MultilinkStoryblok;
  cancel_destination: MultilinkStoryblok;
  background_image?: AssetStoryblok;
  _uid: string;
  component: "BuyAOneTimeProduct";
  [k: string]: any;
}

export interface CardStoryblok {
  title?: string;
  subtitle?: string;
  media: AssetStoryblok;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "Card";
  [k: string]: any;
}

export interface CategoryStoryblok {
  name?: string;
  hide_in_app?: boolean;
  description?: any;
  tags?: TagStoryblok[];
  cover?: AssetStoryblok;
  _uid: string;
  component: "category";
  [k: string]: any;
}

export interface CategorySwiperStoryblok {
  title?: string;
  subtitle?: string;
  category_id: string;
  show_all_label?: string;
  category_page?: MultilinkStoryblok;
  _uid: string;
  component: "CategorySwiper";
  [k: string]: any;
}

export interface ConversionHeroStoryblok {
  access: {
    _uid: string;
    plugin: string;
    selected: string[];
    [k: string]: any;
  };
  title?: string;
  text?: string;
  action_label?: string;
  action_link?: MultilinkStoryblok;
  image?: AssetStoryblok;
  _uid: string;
  component: "ConversionHero";
  [k: string]: any;
}

export interface CowboyPosterStoryblok {
  internal_name?: string;
  desktop_media: AssetStoryblok;
  mobile_media: AssetStoryblok;
  url?: MultilinkStoryblok;
  _uid: string;
  component: "CowboyPoster";
  [k: string]: any;
}

export interface CtaBlockButtonStoryblok {
  label?: string;
  use_main_signup_destination?: boolean;
  link?: MultilinkStoryblok;
  is_primary?: boolean;
  small_text?: string;
  is_section?: boolean;
  _uid: string;
  component: "CtaBlockButton";
  [k: string]: any;
}

export interface EpisodeStoryblok {
  subtitle?: string;
  list_item?: string;
  intro: any;
  length: number;
  cover: AssetStoryblok;
  episode_versions?: EpisodeVersionStoryblok[];
  _uid: string;
  component: "Episode";
  [k: string]: any;
}

export interface EpisodeLinkStoryblok {
  link: MultilinkStoryblok;
  _uid: string;
  component: "EpisodeLink";
  [k: string]: any;
}

export interface EpisodeVersionStoryblok {
  accessv2: {
    _uid: string;
    plugin: string;
    selected: string[];
    [k: string]: any;
  };
  video_version: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  audio_version: AssetStoryblok;
  extra_resources?: ExtraResourceStoryblok[];
  _uid: string;
  component: "EpisodeVersion";
  [k: string]: any;
}

export interface ExtraResourceStoryblok {
  title: string;
  content: any;
  image: AssetStoryblok;
  resource_link?: MultilinkStoryblok;
  _uid: string;
  component: "ExtraResource";
  [k: string]: any;
}

export interface FaqStoryblok {
  title?: string;
  faq_items?: FaqItemStoryblok[];
  _uid: string;
  component: "Faq";
  [k: string]: any;
}

export interface FaqItemStoryblok {
  question?: string;
  answer?: any;
  _uid: string;
  component: "FaqItem";
  [k: string]: any;
}

export interface FaqItemV2Storyblok {
  question: string;
  answer: any;
  _uid: string;
  component: "FaqItemV2";
  [k: string]: any;
}

export interface FaqV2Storyblok {
  title?: string;
  faq_items?: FaqItemV2Storyblok[];
  _uid: string;
  component: "FaqV2";
  [k: string]: any;
}

export interface FounderStoryblok {
  name: string;
  title: string;
  image: AssetStoryblok;
  social_media_links: SocialMediaLinkStoryblok[];
  _uid: string;
  component: "Founder";
  [k: string]: any;
}

export interface GlobalSettingsStoryblok {
  site_name: string;
  site_description?: string;
  locale: string;
  language_code: string;
  site_url: MultilinkStoryblok;
  header_logo_type: AssetStoryblok;
  cookie_notice_body?: any;
  cookie_notice_ok_label: string;
  og_image: AssetStoryblok;
  organisation_name: string;
  organisation_name_legal: string;
  logo: AssetStoryblok;
  founding_date: string;
  founders?: FounderStoryblok[];
  street_address?: string;
  country_code: string;
  contact_phone?: string;
  contact_email?: string;
  social_media_links: SocialMediaLinkStoryblok[];
  above_footer?: (
    | BuyAOneTimeProductStoryblok
    | CowboyPosterStoryblok
    | CtaBlockButtonStoryblok
    | FaqStoryblok
    | HeroStoryblok
    | HeroBlackStoryblok
    | LandscapeSwiperStoryblok
    | LogoWallStoryblok
    | NewsletterSignupStoryblok
    | PortraitSwiperStoryblok
    | PromoPosterStoryblok
    | SeasonContentsStoryblok
    | SignupStoryblok
    | TestimonialsStoryblok
    | TextStoryblok
    | TextAndMediaStoryblok
    | TileLinksStoryblok
    | UspsStoryblok
  )[];
  footer_nav_title: string;
  footer_contact_title?: string;
  newsletter_block?: NewsletterSignupStoryblok[];
  frontpage_link_label: string;
  navigation?: NavigationItemStoryblok[];
  season_contents_tab_episodes: string;
  season_contents_tab_more_info: string;
  footer_logo: AssetStoryblok;
  main_signup_destination: MultilinkStoryblok;
  _uid: string;
  component: "GlobalSettings";
  [k: string]: any;
}

export interface GlobalSettingsInternationalStoryblok {
  above_footer?: (
    | AllAuthorsStoryblok
    | AllAuthorsGridStoryblok
    | BenefitsStoryblok
    | ButtonLinkPosterStoryblok
    | CardStoryblok
    | CategorySwiperStoryblok
    | ConversionHeroStoryblok
    | FaqV2Storyblok
    | MediaWithQuoteStoryblok
    | MyListStoryblok
    | NewsletterSignupV2Storyblok
    | PageHeroStoryblok
    | PickupWhereYouLeftStoryblok
    | PlanPickerStoryblok
    | PlayableLinkPosterStoryblok
    | PosterWithCuffStoryblok
    | ProductionSwiperStoryblok
    | ResponsivePosterStoryblok
    | ReusableRelationStoryblok
    | SwiperCardsStoryblok
    | SwiperReelsStoryblok
    | SwiperSingleItemsStoryblok
    | TextBlockStoryblok
    | TitleAndSubtitlePosterStoryblok
    | TopListStoryblok
  )[];
  footer_nav_title: string;
  footer_contact_title?: string;
  newsletter_block?: NewsletterSignupStoryblok[];
  footer_logo: AssetStoryblok;
  blocks?: any;
  site_name: string;
  site_description?: string;
  locale: string;
  locale_full: string;
  site_url: MultilinkStoryblok;
  header_logo_type: AssetStoryblok;
  watch_mesterlaere_label: string;
  watch_episode_label: string;
  you_learn_label: string;
  you_get_label: string;
  global_production_blocks?: (
    | AllAuthorsStoryblok
    | AllAuthorsGridStoryblok
    | BenefitsStoryblok
    | ButtonLinkPosterStoryblok
    | CardStoryblok
    | CategorySwiperStoryblok
    | ConversionHeroStoryblok
    | FaqV2Storyblok
    | MediaWithQuoteStoryblok
    | MyListStoryblok
    | NewsletterSignupV2Storyblok
    | PageHeroStoryblok
    | PickupWhereYouLeftStoryblok
    | PlanPickerStoryblok
    | PlayableLinkPosterStoryblok
    | PosterWithCuffStoryblok
    | ProductionSwiperStoryblok
    | ResponsivePosterStoryblok
    | ReusableRelationStoryblok
    | SwiperCardsStoryblok
    | SwiperReelsStoryblok
    | SwiperSingleItemsStoryblok
    | TextBlockStoryblok
    | TitleAndSubtitlePosterStoryblok
    | TopListStoryblok
  )[];
  become_member_label: string;
  become_member_link: MultilinkStoryblok;
  signup_title: string;
  signup_have_coupon: string;
  signup_newsletter: string;
  signup_conditions: any;
  signup_already_member: string;
  signup_button_label: string;
  enable_sticky_cta?: boolean;
  product_label: string;
  price_before?: number;
  price: number;
  action_label: string;
  action_link: MultilinkStoryblok;
  categories?: CategoryStoryblok[];
  cookie_notice_body: string;
  cookie_notice_ok_label: string;
  og_image: AssetStoryblok;
  organisation_name: string;
  organisation_name_legal: string;
  logo: AssetStoryblok;
  founding_date: string;
  founders: FounderStoryblok[];
  street_address?: string;
  country_code: string;
  contact_phone: string;
  contact_email?: string;
  social_media_links: SocialMediaLinkStoryblok[];
  navigation?: NavigationItemStoryblok[];
  _uid: string;
  component: "GlobalSettingsInternational";
  [k: string]: any;
}

export interface HeroStoryblok {
  title?: string;
  text?: string;
  cta?: CtaBlockButtonStoryblok[];
  video?: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  image?: AssetStoryblok;
  _uid: string;
  component: "Hero";
  [k: string]: any;
}

export interface HeroBlackStoryblok {
  title: any;
  text?: any;
  image?: AssetStoryblok;
  image_floating_outside?: AssetStoryblok;
  _uid: string;
  component: "HeroBlack";
  [k: string]: any;
}

export interface LandscapeStoryblok {
  image: AssetStoryblok;
  text?: string;
  _uid: string;
  component: "Landscape";
  [k: string]: any;
}

export interface LandscapeSwiperStoryblok {
  title?: string;
  landscapes?: LandscapeStoryblok[];
  _uid: string;
  component: "LandscapeSwiper";
  [k: string]: any;
}

export interface LogoWallStoryblok {
  title?: string;
  logowall_items?: LogoWallItemStoryblok[];
  _uid: string;
  component: "LogoWall";
  [k: string]: any;
}

export interface LogoWallItemStoryblok {
  link?: MultilinkStoryblok;
  logo?: AssetStoryblok;
  _uid: string;
  component: "LogoWallItem";
  [k: string]: any;
}

export interface MediaWithQuoteStoryblok {
  quote: string;
  author: string;
  video: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  link_label?: string;
  link?: MultilinkStoryblok;
  is_new?: boolean;
  _uid: string;
  component: "MediaWithQuote";
  [k: string]: any;
}

export interface MyListStoryblok {
  title: string;
  show_all_label?: string;
  show_all_link?: MultilinkStoryblok;
  show_episodes?: boolean;
  _uid: string;
  component: "MyList";
  [k: string]: any;
}

export interface NavigationItemStoryblok {
  label: string;
  link: MultilinkStoryblok;
  show_in_top?: boolean;
  show_in_footer?: boolean;
  is_button?: boolean;
  is_primary?: boolean;
  only_when_logged_in?: boolean;
  only_when_not_logged_in?: boolean;
  show_in_sticky_navbar?: boolean;
  nav_icon?: number | string;
  _uid: string;
  component: "NavigationItem";
  [k: string]: any;
}

export interface NewsletterSignupStoryblok {
  title?: string;
  name?: string;
  email?: string;
  email_invalid?: string;
  terms?: any;
  send_label?: string;
  receipt?: any;
  _uid: string;
  component: "NewsletterSignup";
  [k: string]: any;
}

export interface NewsletterSignupV2Storyblok {
  title?: string;
  terms: any;
  send_label: string;
  receipt: any;
  _uid: string;
  component: "NewsletterSignupV2";
  [k: string]: any;
}

export interface OneTimeProductStoryblok {
  product_id: string;
  title?: string;
  title_box: any;
  text?: any;
  cta_label?: string;
  ribbon?: SignupProductRibbonStoryblok[];
  is_physical?: boolean;
  _uid: string;
  component: "OneTimeProduct";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | BuyAOneTimeProductStoryblok
    | CowboyPosterStoryblok
    | CtaBlockButtonStoryblok
    | FaqStoryblok
    | HeroStoryblok
    | HeroBlackStoryblok
    | LandscapeSwiperStoryblok
    | LogoWallStoryblok
    | NewsletterSignupStoryblok
    | PortraitSwiperStoryblok
    | PromoPosterStoryblok
    | SeasonContentsStoryblok
    | SignupStoryblok
    | TestimonialsStoryblok
    | TextStoryblok
    | TextAndMediaStoryblok
    | TileLinksStoryblok
    | UspsStoryblok
  )[];
  seo_description?: string;
  is_checkout?: boolean;
  season_length?: string;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PageHeroStoryblok {
  title: string;
  subtitle?: string;
  cuff?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: "PageHero";
  [k: string]: any;
}

export interface PartStoryblok {
  title?: string;
  intro?: string;
  episodes: EpisodeLinkStoryblok[];
  _uid: string;
  component: "Part";
  [k: string]: any;
}

export interface PickupWhereYouLeftStoryblok {
  title?: string;
  _uid: string;
  component: "PickupWhereYouLeft";
  [k: string]: any;
}

export interface PlanStoryblok {
  show_without_coupon_match?: boolean;
  title?: string;
  top_label?: string;
  price: number;
  price_before?: number;
  content?: any;
  action_label?: string;
  reepayPlanId?: "plan-5b6a7" | "plan-bdfbb" | "plan-0b5c0" | "plan-2b294";
  special_combo?: "fglwiejfdvkmcvsejfpefjeefaf" | "dsfwdfSDVefwefaxcaWDEWSAdd";
  _uid: string;
  component: "Plan";
  [k: string]: any;
}

export interface PlanPickerStoryblok {
  title?: string;
  plans: PlanStoryblok[];
  get_started_title?: string;
  get_started_bloks: (
    | AllAuthorsStoryblok
    | AllAuthorsGridStoryblok
    | BenefitsStoryblok
    | ButtonLinkPosterStoryblok
    | CardStoryblok
    | CategorySwiperStoryblok
    | ConversionHeroStoryblok
    | FaqV2Storyblok
    | MediaWithQuoteStoryblok
    | MyListStoryblok
    | NewsletterSignupV2Storyblok
    | PageHeroStoryblok
    | PickupWhereYouLeftStoryblok
    | PlanPickerStoryblok
    | PlayableLinkPosterStoryblok
    | PosterWithCuffStoryblok
    | ProductionSwiperStoryblok
    | ResponsivePosterStoryblok
    | ReusableRelationStoryblok
    | SwiperCardsStoryblok
    | SwiperReelsStoryblok
    | SwiperSingleItemsStoryblok
    | TextBlockStoryblok
    | TitleAndSubtitlePosterStoryblok
    | TopListStoryblok
  )[];
  _uid: string;
  component: "PlanPicker";
  [k: string]: any;
}

export interface PlayableLinkPosterStoryblok {
  title?: string;
  subtitle?: string;
  image: AssetStoryblok;
  has_play_button?: boolean;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "PlayableLinkPoster";
  [k: string]: any;
}

export interface PortraitStoryblok {
  image: AssetStoryblok;
  title?: string;
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "Portrait";
  [k: string]: any;
}

export interface PortraitSwiperStoryblok {
  title?: string;
  text?: string;
  portraits?: PortraitStoryblok[];
  _uid: string;
  component: "PortraitSwiper";
  [k: string]: any;
}

export interface PosterWithCuffStoryblok {
  preheader?: string;
  image?: AssetStoryblok;
  title?: string;
  cuff?: string;
  button_label?: string;
  button_link?: MultilinkStoryblok;
  image_float: "left" | "right";
  vertical_text_align: "top" | "middle";
  _uid: string;
  component: "PosterWithCuff";
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface ProductionStoryblok {
  planned_release_date?: string;
  subtitle?: string;
  intro: string;
  covers: MultiassetStoryblok;
  trailer: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  author_name: string;
  author_portrait: AssetStoryblok;
  you_get?: string;
  you_learn?: any;
  structure?: EpisodeLinkStoryblok[];
  blocks?: (SwiperReelsStoryblok | AllAuthorsStoryblok | ReusableRelationStoryblok)[];
  _uid: string;
  component: "Production";
  [k: string]: any;
}

export interface ProductionSwiperStoryblok {
  link: MultilinkStoryblok;
  _uid: string;
  component: "ProductionSwiper";
  [k: string]: any;
}

export interface PromoPosterStoryblok {
  title?: string;
  text?: any;
  cta?: CtaBlockButtonStoryblok[];
  image?: AssetStoryblok;
  video?: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  imageFloats: "" | "left" | "right";
  variant: "landscape" | "portrait";
  _uid: string;
  component: "PromoPoster";
  [k: string]: any;
}

export interface ReelStoryblok {
  title?: string;
  subtitle?: string;
  length?: string;
  video: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  link_label?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "Reel";
  [k: string]: any;
}

export interface ResponsivePosterStoryblok {
  internal_title?: string;
  media_desktop: AssetStoryblok;
  media_tablet: AssetStoryblok;
  media_mobile: AssetStoryblok;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "ResponsivePoster";
  [k: string]: any;
}

export interface ReusableStoryblok {
  blocks?: (
    | AllAuthorsStoryblok
    | AllAuthorsGridStoryblok
    | BenefitsStoryblok
    | ButtonLinkPosterStoryblok
    | CardStoryblok
    | CategorySwiperStoryblok
    | ConversionHeroStoryblok
    | FaqV2Storyblok
    | MediaWithQuoteStoryblok
    | MyListStoryblok
    | NewsletterSignupV2Storyblok
    | PageHeroStoryblok
    | PickupWhereYouLeftStoryblok
    | PlanPickerStoryblok
    | PlayableLinkPosterStoryblok
    | PosterWithCuffStoryblok
    | ProductionSwiperStoryblok
    | ResponsivePosterStoryblok
    | ReusableRelationStoryblok
    | SwiperCardsStoryblok
    | SwiperReelsStoryblok
    | SwiperSingleItemsStoryblok
    | TextBlockStoryblok
    | TitleAndSubtitlePosterStoryblok
    | TopListStoryblok
  )[];
  _uid: string;
  component: "reusable";
  [k: string]: any;
}

export interface ReusableRelationStoryblok {
  reusable: MultilinkStoryblok;
  _uid: string;
  component: "ReusableRelation";
  [k: string]: any;
}

export interface SeasonContentsStoryblok {
  _uid: string;
  component: "SeasonContents";
  [k: string]: any;
}

export interface SignupStoryblok {
  subscription_store: "stripe" | "reepay";
  first: string;
  last: string;
  email: string;
  email_invalid: string;
  password: string;
  password_invalid: string;
  repeat_password: string;
  repeat_password_invalid: string;
  coupon: string;
  newsletter_signup: string;
  user_exists: any;
  coupon_codes_not_valid: any;
  terms: any;
  button_label: string;
  cancel_label?: string;
  success_destination: MultilinkStoryblok;
  cancel_destination: MultilinkStoryblok;
  title: any;
  intro: string;
  products?: SignupProductStoryblok[];
  _uid: string;
  component: "Signup";
  [k: string]: any;
}

export interface SignupProductStoryblok {
  stripe_price_id: string;
  title?: string;
  text?: any;
  cta_label?: string;
  ribbon?: SignupProductRibbonStoryblok[];
  stripe_price_id_test: string;
  trial_period_override_code?:
    | "D0Mda9v4f2eFadf0Qe4580r"
    | "D7rwHEwS3dSfcnrNwJEx2sM"
    | "D14cnrNwJEx2sMrwHEwS3dS"
    | "D30RCJeW9FwhXEuCTg9Obty";
  coupon_codes?: string;
  behaviour: "takeTitleToWebApp";
  _uid: string;
  component: "SignupProduct";
  [k: string]: any;
}

export interface SignupProductRibbonStoryblok {
  subtitle?: string;
  title?: string;
  _uid: string;
  component: "SignupProductRibbon";
  [k: string]: any;
}

export interface SocialMediaLinkStoryblok {
  social_medium_name?: string;
  profile_link: MultilinkStoryblok;
  _uid: string;
  component: "SocialMediaLink";
  [k: string]: any;
}

export interface SwiperCardsStoryblok {
  title?: string;
  subtitle?: string;
  more_label?: string;
  more_link?: MultilinkStoryblok;
  cards?: CardStoryblok[];
  _uid: string;
  component: "SwiperCards";
  [k: string]: any;
}

export interface SwiperReelsStoryblok {
  title?: string;
  reels?: ReelStoryblok[];
  more_label?: string;
  more_link?: MultilinkStoryblok;
  _uid: string;
  component: "SwiperReels";
  [k: string]: any;
}

export interface SwiperSingleItemsStoryblok {
  access: {
    _uid: string;
    plugin: string;
    selected: string[];
    [k: string]: any;
  };
  internal_name?: string;
  items: PlayableLinkPosterStoryblok[];
  _uid: string;
  component: "SwiperSingleItems";
  [k: string]: any;
}

export interface TagStoryblok {
  name: string;
  subtitle?: string;
  hide_in_app?: boolean;
  _uid: string;
  component: "tag";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  title?: string;
  text?: string;
  _uid: string;
  component: "Testimonial";
  [k: string]: any;
}

export interface TestimonialsStoryblok {
  title?: string;
  testimonials?: TestimonialStoryblok[];
  _uid: string;
  component: "Testimonials";
  [k: string]: any;
}

export interface TextStoryblok {
  heading?: string;
  text?: any;
  _uid: string;
  component: "Text";
  [k: string]: any;
}

export interface TextAndMediaStoryblok {
  mediaFloats: "" | "left" | "right";
  video?: {
    _uid: string;
    plugin: string;
    selected: string;
    [k: string]: any;
  };
  video_aspect_ratio_adjustment: number;
  image?: AssetStoryblok;
  title?: string;
  text?: any;
  cta?: CtaBlockButtonStoryblok[];
  _uid: string;
  component: "TextAndMedia";
  [k: string]: any;
}

export interface TextBlockStoryblok {
  content?: any;
  _uid: string;
  component: "TextBlock";
  [k: string]: any;
}

export interface TileLinkStoryblok {
  media?: AssetStoryblok;
  title?: string;
  subtitle?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "TileLink";
  [k: string]: any;
}

export interface TileLinksStoryblok {
  title?: string;
  blocks?: TileLinkStoryblok[];
  _uid: string;
  component: "TileLinks";
  [k: string]: any;
}

export interface TitleAndSubtitlePosterStoryblok {
  title?: string;
  subtitle?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: "TitleAndSubtitlePoster";
  [k: string]: any;
}

export interface TopListStoryblok {
  title?: string;
  all_label?: string;
  all_link?: MultilinkStoryblok;
  list_items: TopListItemStoryblok[];
  _uid: string;
  component: "TopList";
  [k: string]: any;
}

export interface TopListItemStoryblok {
  title?: string;
  is_new?: boolean;
  subtitle?: string;
  cuff?: string;
  image: AssetStoryblok;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "TopListItem";
  [k: string]: any;
}

export interface UspStoryblok {
  icon?: AssetStoryblok;
  title?: string;
  subtitle?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "Usp";
  [k: string]: any;
}

export interface UspsStoryblok {
  title?: string;
  subtitle?: string;
  usps?: UspStoryblok[];
  variant: "DEFAULT" | "MOBILE_SLIDER" | "GRID";
  _uid: string;
  component: "Usps";
  [k: string]: any;
}

export interface V2PageStoryblok {
  blocks?: (
    | AllAuthorsStoryblok
    | AllAuthorsGridStoryblok
    | BenefitsStoryblok
    | ButtonLinkPosterStoryblok
    | CardStoryblok
    | CategorySwiperStoryblok
    | ConversionHeroStoryblok
    | FaqV2Storyblok
    | MediaWithQuoteStoryblok
    | MyListStoryblok
    | NewsletterSignupV2Storyblok
    | PageHeroStoryblok
    | PickupWhereYouLeftStoryblok
    | PlanPickerStoryblok
    | PlayableLinkPosterStoryblok
    | PosterWithCuffStoryblok
    | ProductionSwiperStoryblok
    | ResponsivePosterStoryblok
    | ReusableRelationStoryblok
    | SwiperCardsStoryblok
    | SwiperReelsStoryblok
    | SwiperSingleItemsStoryblok
    | TextBlockStoryblok
    | TitleAndSubtitlePosterStoryblok
    | TopListStoryblok
  )[];
  _uid: string;
  component: "V2Page";
  [k: string]: any;
}
