import dayjs from 'dayjs'
import { IFakeTranslationValue, IMesterLaereTranslations, TLocale } from '../../models/translation'
import 'dayjs/locale/da'

const rosetta: IMesterLaereTranslations = {
  da: {
    helloWorld: 'Hej verden',
    locales: {
      da: 'dansk',
      en: 'engelsk'
    },
    labels: {
      new: 'ny',
      comingSoon: 'Kommer snart'
    },
    error: {
      fourofour: {
        title: 'Av, det var pinligt',
        text: 'Vi kan ikke finde den side',
        actionLabel: 'Til forsiden'
      },
      unknown: {
        title: 'Av, det var pinligt',
        text: 'Noget gik galt',
        actionLabel: 'Til forsiden'
      },
      title: 'Fejl'
    },
    warning: {
      title: 'Advarsel'
    },
    info: {
      title: 'Information'
    },
    success: {
      title: 'Success'
    },
    auth: {
      signup: {
        spinning: 'Opretter bruger...',
        error: {
          title: 'Brugeren kunne ikke oprettes',
          content: 'Vi kunne ikke oprette en bruger med den emailadresse. Måske tastede du forkert eller måske er du allerede startet i Mesterlære (prøv i så fald at logge ind)?'
        }
      },
      login: {
        title: 'Medlemslogin',
        linkLabel: 'Log ind',
        actionLabel: 'Log ind',
        error: 'Der var fejl i emailadresse eller kodeord'
      },
      logout: {
        actionLabel: 'Log ud'
      },
      recoverPassword: {
        forgotPasword: 'Glemt adgangskoden?',
        resetLinkLabel: 'Nulstil her',
        intro: 'Indtast din email og tryk på knappen, så modtager du en mail i din inbox med et link til at sætte et nyt password.',
        success: 'Kig i din inbox og klik på linket i mailen fra os, for at lave en ny adgangskode til Mesterlære.\n\nDer kan gå et par minutter inden du modtager emailen. Husk også at kigge efter den i din spam-folder.',
        actionLabel: 'Send email',
        backToLoginLinkLabel: 'Tilbage til login',
        error: 'Vi kunne ikke finde en bruger med den email.',
        resetVerificationTitle: 'Angiv din nye adgangskode',
        resetVerificationPreample: 'Vælg et, der er svært at gætte, men let at huske.',
        resetLinkInvalid: 'Vi kunne ikke nulstille din adgangskode.\nDet skyldes formodentlig, at linket er udløbet.',
        resetSucceeded: 'Din adgangskode er nu nulstillet!',
        needANewLink: 'Brug for et nyt nulstillings-link?',
        goToLogin: 'Gå til login'
      }
    },
    conversion: {
      coupons: {
        linkLabel: 'Har du en rabatkode?',
        title: 'Indtast din rabatkode',
        success: 'Rabatkoden er gyldig',
        actionLabel: 'Tjek rabatkoden',
        spinning: 'Tjekker rabatkoden...',
        remove: 'Fjern rabat',
        redeem: {
          actionLabel: 'Anvend rabatkode',
          success: {
            title: 'Rabatten er din!',
            body: 'Vi har nu tilskrevet rabatten til dit abonnement'
          }
        },
        error: {
          error85: 'Rabatkoden kan ikke anvendes i kombination med andre rabatter',
          error86: 'Rabatkoden kunne ikke genkendes eller indløses til dette abonnement',
          error87: 'Rabatkoden er allerede anvendt'
        }
      },
      payment: {
        error: {
          title: 'Noget gik galt',
          content: 'Noget gik galt, da vi forsøgte at gennemføre betalingen. Reload dette vindue for at prøve igen',
          actionLabel: 'Reload vindue'
        }
      },
      newsletter: {
        error: {
          title: 'Noget gik galt',
          content: 'Noget gik galt, da vi forsøgte at tilmelde dig. Prøv venligst igen eller send en mail til info@mesterlaere.dk',
          actionLabel: 'Prøv igen'
        }
      }
    },
    plans: {
      interval: {
        month: 'måned',
        year: 'år',
        day: 'dag'
      }
    },
    myList: {
      actionTitle: 'Hvem inspirerer dig?',
      actionLabel: 'Fortsæt',
      addToMyList: {
        add: {
          actionLabel: 'Tilføj til favoritter',
          success: 'Tilføjet til dine favoritter'
        },
        added: {
          actionLabel: 'Dine favoritter',
          success: 'Fjernet fra dine favoritter'
        }
      }
    },
    settings: {
      title: 'Indstillinger',
      preample: 'Herunder kan du se og redigere forskellige detaljer som knytter sig til din profil på Mesterlære.',
      subscription: {
        title: 'Dit abonnement',
        preample: 'Her kan du se og rette dine abonnementsoplysninger.',
        current: {
          none: {
            title: 'Intet abonnement',
            body: 'Du har ikke et aktivt abonnement på Mesterlære. Det kan vi selvfølgelig rette op på. Klik på "Bliv medlem" for at komme i gang.',
            actionLabel: 'Bliv medlem'
          },
          appstoreNotice: {
            title: 'Dit abonnement styres i App Store',
            body: 'Åben app\'en "App Store" på dit Apple device og se under "Konto -> Abonnementer"'
          },
          googlePlayNotice: {
            title: 'Dit abonnement styres i Google Play',
            body: 'Åben app\'en "Play" på dit Android device og se under "Konto -> Betalinger og abonnementer"'
          },
          since: {
            label: 'Abonnent siden'
          },
          latestPayment: {
            label: 'Seneste betaling',
            dunning: {
              title: 'Advarsel',
              body: 'Din seneste betaling fejlede og du risikerer at miste din fulde adgang til Mesterlære',
              updatePaymentInfoAction: 'Opdater betalingsmetode'
            }
          },
          ending: {
            label: 'Ophører automatisk'
          },
          firstPayment: {
            label: 'Første betaling'
          },
          nextPayment: {
            label: 'Næste betaling'
          },
          discounts: {
            title: 'Dine rabatter',
            duration: {
              infinite: 'For altid',
              limited: 'Anvendt %count% af %total% tilgængelige',
              disclaimer: 'Rabatter anvendes automatisk i forbindelse med kommende betalinger af dit abonnement.'
            }
          },
          credits: {
            title: 'Dine kreditter',
            disclaimer: 'Kreditter anvendes automatisk i forbindelse med kommende betalinger af dit abonnement.'
          }
        },
        switch: {
          actionLabel: 'Skift abonnement',
          title: 'Skift abonnement',
          preample: 'Find den pakke, der passer dig bedst',
          detailedInfo: `Hvis du ønsker at ændre dit abonnement kan du gøre det her.

Din ændring gennemføres straks og fungerer således:`,
          details: `1. Din nuværende prøveperiode stopper og din konto krediteres et beløb svarende til den resterende forudbetalte tid.'

1. Din nye abonnementsperiode starter straks og vi trækker beløbet for den første periode fratrukket evt. kredit på din konto. Hvis din kredit overstiger periodens omkostninger, vil den resterende kredit blive anvendt ved kommende abonnementsbetalinger. Kreditten kan ikke udbetales.`,
          goSwitch: 'Skift nu',
          success: 'Dit abonnement er nu ændret',
          error: 'Kontakt os venligst via support@mesterlaere.dk, så hjælper vi dig med abonnementsskiftet.'
        },
        coupon: {
          actionLabel: 'Anvend rabatkode',
          title: 'Anvend rabatkode',
          preample: 'Har du en rabatkode, kan du bruge den her'
        },
        manage: {
          actionLabel: 'Opsig abonnement',
          resumeAction: 'Genoptag abonnement',
          title: 'Administrer abonnement',
          preample: 'Hvis du er træt af Mesterlære eller allerede savner os',
          detailedInfo: 'Du kan til enhver til opsige dit abonnement med virkning fra udgangen af indeværende periode.\n\nHvis du opsiger dit abonnement vil du stadig have fri adgang til alt læring indtil perioden udløber, hvorefter du automatisk bliver gratis medlem af Mesterlære.\nØnsker du helt at blive glemt af Mesterlære, kan du slette din bruger under "Din profil -> Opdater bruger-oplysninger".',
          apple: 'Dit Mesterlære-abonnement styres via Apple App Store. Du skal åbne App Store på din Mac, iPhone eller iPad og finde Mesterlære under Abonnementer for at annullere abonnementet.',
          status: {
            active: {
              actionLabel: 'Opsig mit abonnement',
              verify: 'Er du sikker?',
              success: 'Dit abonnement er nu opsagt.\n\nDu modtager en bekræftelse i din inbox'
            },
            canceled: {
              body: 'Du har opsagt dit abonnement med virkning fra udgangen af indeværende periode.\n\n%endDate% slutter dit abonnement og du overgår automatisk til gratis medlemsskab af Mesterlære.',
              uncancel: {
                actionLabel: 'Genoptag mit abonnement',
                apple: 'Hvis du alligevel fortryder, kan du forny dit abonnement i Apple App Store. Du skal åbne App Store på din Mac, iPhone eller iPad og finde Mesterlære under Abonnementer for at genoptage abonnementet.',
                body: 'Hvis du har fortrudt, kan du forny dit abonnemennt ved at klikke her',
                success: 'Dit abonnement er igen aktivt'
              }
            }
          }
        },
        paymentMethods: {
          actionLabel: 'Dine betalingsmetoder',
          title: 'Dine betalingsmetoder',
          preample: 'Herunder kan du styre, hvordan du betaler for dit abonnement på Mesterlære',
          currentMethods: 'Registrerede betalingsmetoder',
          noMethods: {
            title: 'Ingen betalingsmetoder',
            body: 'Du har ingen registerede betalingsmetoder og derfor kan dit abonnement ikke fornys.\n\nSkynd dig at tilføje en betalingsmetode via knappen nedenfor, så du ikke risikerer at miste adgang til Mesterlære'
          },
          method: {
            numberMasked: 'Kortnummer',
            epiryDate: 'Udløber',
            delete: {
              actionLabel: 'Slet betalingsmetode',
              verify: 'Er du helt sikker?'
            }
          },
          detailedInfo: 'Ønsker du at opdatere betalingsmetode kan du gøre det i vores betalingsportal.\n\nNår du åbner betalingsportalen, vises dit nuværende abonnement samt en formular til at opdatere din betalingsmetode.\n\nDen nye betalingsmetode anvendes ved næste automatiske fornyelse af dit abonnement.',
          goToAppStore: 'Din betalingsmetode er styret via Apple App Store.\n\nDu skal åbne App Store på din Mac, iPhone eller iPad og finde Mesterlære under Abonnementer for at ændre betalingsmetode.',
          paymentProviderPortal: {
            actionLabel: 'Tilføj betalingsmetode'
          },
          storeNotSupported: 'Dit abonnement muliggør ikke ændring af betalingsmetode. Kontakt venligst support@mesterlaere.dk for hjælp til at skifte betalingsmetode.'
        },
        invoices: {
          actionLabel: 'Dine kvitteringer',
          title: 'Dine kvitteringer',
          preample: 'Herunder kan du se kvitteringer fra dine betalinger til Mesterlære.',
          headings: {
            state: 'Status',
            product: 'Produkt',
            total: 'Total',
            date: 'Dato'
          },
          states: {
            created: 'oprettet',
            pending: 'venter',
            dunning: 'til betaling',
            settled: 'betalt',
            cancelled: 'annulleret',
            authorized: 'godkendt',
            failed: 'fejlet'
          },
          transactionTypes: {
            payment: 'indbetalt',
            refund: 'refunderet'
          }
        }
      },
      user: {
        title: 'Din profil',
        preample: 'Her kan du se og rette de oplysninger der knytter sig til din profil.',
        changeYourLanguage: 'Skift dit sprog',
        save: {
          success: 'Din profil er opdateret'
        },
        account: {
          actionLabel: 'Opdater bruger-oplysninger',
          title: 'Dine brugeroplysninger',
          preample: 'Her kan du se og rette dine brugeroplysninger',
          delete: {
            actionLabel: 'Slet din bruger',
            title: 'Slet din bruger',
            preample: '',
            warning: 'Du er ved at slette din bruger',
            areYouSure: 'Advarsel: Hvis du sletter din bruger vil du øjeblikkeligt miste adgang til Mesterlære, evt. abonnementer ophører og alle dine oplysninger vil blive slettet hos Mesterlære.\n\n Dette kan ikke fortrydes.',
            verificationGuide: 'Hvis du ønsker at fortsætte, skal du skrive "slet min bruger" i feltet nedenfor og trykke på knappen "Slet"',
            verificationPhrase: 'slet min bruger',
            input: {
              label: 'Verifikation',
              invalid: 'Skriv "slet min bruger" i feltet'
            },
            appStoreWarning: 'Fordi dit abonnement administreres i App Store, er det vigtigt, at du også husker at annullere det i app\'en "App Store" på din Apple-enhed.'
          },
          email: {
            actionLabel: 'Opdater emailaddresse',
            title: 'Opdater din email',
            preample: 'Her kan du opdatere den email-adresse, der knytter sig til din profil.\n\nDu skal benytte denne email til at logge ind på Mesterlære og til at modtage beskeder fra Mesterlære - fx, når du vil nulstille din adgangskode.',
            tryAgain: 'Prøv igen',
            confirmation: 'Du har nu verificeret din nye email-addresse: %email%.\nDu skal nu logge ind med den, for at fortsætte',
            error: {
              inUse: '%email% er allerede tilknyttet en anden bruger',
              identical: 'Dette er din eksisterende email-addresse',
              verificationTimeout: 'Vi kunne ikke opdatere din email-adresse. Måske ventede du for længe med at trykke på linket i emailen?'
            },
            success: {
              title: 'Check din inbox!',
              body: 'Vi har sendt en email til %email% med et link, som du skal klikke på, for at verificere din nye email-adresse.'
            }
          }
        }
      },
      invoices: {
        notFound: 'Vi kunne desværre ikke finde den faktura.',
        invoice: 'faktura',
        invoiceSettled: 'kvittering',
        id: 'fakturanr.',
        dueDate: 'betalingsdato',
        receiverTitle: 'faktura til',
        lines: {
          description: 'beskrivelse',
          amount: 'stk.',
          unitPrice: 'enhedspris',
          sum: 'beløb'
        },
        toPay: 'at betale',
        paidTotal: 'i alt betalt',
        allIncludesVat: 'alle vores priser er inkl 25 % salgsmoms',
        states: {
          created: 'oprettet',
          pending: 'venter',
          dunning: 'til betaling',
          settled: 'betalt',
          cancelled: 'annulleret',
          authorized: 'godkendt',
          failed: 'fejlet'
        },
        transactionTypes: {
          payment: 'indbetalt',
          refund: 'refunderet'
        }
      },
      debug: {
        version: 'version'
      }
    },
    forms: {
      actions: {
        save: 'Gem',
        send: 'Send',
        delete: 'Slet'
      },
      first: {
        label: 'Fornavn',
        invalid: 'Fornavn mangler',
        placeholder: 'Indtast fornavn'
      },
      last: {
        label: 'Efternavn',
        invalid: 'Efternavn mangler',
        placeholder: 'Indtast efternavn'
      },
      fullName: {
        label: 'Navn',
        invalid: 'Navn mangler',
        placeholder: 'Indtast navn'
      },
      address1: {
        label: 'Adresselinje 1',
        invalid: 'Adresselinje 1 mangler',
        placeholder: 'Indtast adresselinje 1'
      },
      address2: {
        label: 'Adresselinje 2',
        invalid: 'Adresselinje 2 mangler',
        placeholder: 'Indtast adresselinje 2'
      },
      postalCode: {
        label: 'Postnummer',
        invalid: 'Postnummer mangler',
        placeholder: 'Indtast postnummer'
      },
      city: {
        label: 'By',
        invalid: 'By mangler',
        placeholder: 'Indtast by'
      },
      country: {
        label: 'Land',
        invalid: 'Land mangler',
        placeholder: 'Indtast land'
      },
      email: {
        label: 'Email-adresse',
        invalid: 'Email-adresse er ikke gyldig',
        placeholder: 'Indtast din email'
      },
      password: {
        label: 'Adgangskode',
        labelNew: 'Ny adgangskode',
        invalid: 'Adgangskoden skal være mindst 8 tegn',
        missing: 'Husk at indtaste password',
        placeholder: 'Indtast adgangskode'
      },
      newsletter: {
        label: 'Send mig venligst e-mails med nyheder og tilbud fra Mesterlære'
      },
      coupon: {
        label: 'Rabatkode',
        invalid: 'Rabatkoden er ikke gyldig',
        placeholder: 'Indtast rabatkoden'
      },
      genericErrorMessage: 'Der var en fejl i det indtastede'
    },
    content: {
      watchTrailer: 'Se trailer',
      units: {
        minutes: 'min.'
      },
      episodesLabel: 'episoder'
    },
    player: {
      download: {
        wipMessage: 'Vi arbejder på, at gøre Mesterlære tilgængelig offline. Du får besked, så snart vi er klar.'
      },
      chromecast: {
        wipMessage: 'Vi arbejder på, at gøre Chromecast tilgængelig i vores web app. Indtil da, kan du hente vores app i AppStore. Den understøtter både AirPlay og Chromecast.'
      }
    }
  },
  en: {
    helloWorld: 'Hello world',
    locales: {
      da: 'Danish',
      en: 'English'
    },
    errors: {
      fourofour: {
        title: 'Yikes, that\'s awkward',
        text: 'We cannot find that page',
        actionLabel: 'Go to frontpage'
      }
    },
    auth: {
      login: {
        linkLabel: 'Sign in',
        actionLabel: 'Sign in'
      }
    },
    settings: {
      title: 'Settings',
      preample: 'Review and edit information related to your Mesterlære profile',
      subscription: {
        title: 'Your subscription',
        preample: 'Review and edit your subscription'
      },
      user: {
        title: 'Your profile',
        preample: 'Review and edit your personal information.',
        changeYourLanguage: 'Change your language'
      }
    },
    forms: {
      first: {
        label: 'First name',
        invalid: 'First name is missing',
        placeholder: 'Input first name'
      },
      last: {
        label: 'Last name',
        invalid: 'Last name is missing',
        placeholder: 'Input last name'
      },
      email: {
        label: 'Email',
        invalid: 'Email is missing',
        placeholder: 'Input your email'
      }
    }
  }
}

const fallBackLocale = ref<TLocale>('da')
const userLocale = ref<TLocale | undefined>(undefined)

export const useTranslation = () => {
  const locale = computed<TLocale>(() => {
    // We prefer locale from Route, if locale is first part of route
    if (localeFromRoute.value !== undefined) {
      return localeFromRoute.value
    }
    // If locale has been set by user, we revert to that
    if (userLocale.value !== undefined) {
      return userLocale.value
    }
    // Else, we will use the fallback locale
    return fallBackLocale.value
  })

  const localeFromRoute = computed<TLocale | undefined>(() => {
    const { firstPathSegment } = useRouteHelper()
    const locale = firstPathSegment.value as keyof IMesterLaereTranslations | undefined
    if (locale === undefined || rosetta[locale] === undefined) {
      return undefined
    }
    return locale as TLocale
  })

  const locales = computed<TLocale[]>(() => {
    return Object.keys(rosetta) as TLocale[]
  })

  const translate = (params: {
    key: string,
    capitalise?: boolean,
    interpolate?: {
      [key: string]: string | number
    }
  }): IFakeTranslationValue => {
    const { key, capitalise, interpolate } = params
    const localePath = locale.value.concat('.', key)
    let result = get(rosetta, localePath)
    if (result === undefined) {
      console.warn(`[useTranslation]: Missing translation for "${ localePath }"`)
      return undefined
    }
    if (interpolate !== undefined) {
      const interpolationKeys = Object.keys(interpolate)
      if (interpolationKeys.length > 0) {
        for (const iKey of interpolationKeys) {
          result = (result || '').replaceAll(`%${ iKey }%`, interpolate[iKey] + '')
        }
      }
    }
    if (capitalise === true && result.length > 0) {
      result = result.charAt(0).toUpperCase() + result.slice(1)
    }
    return result
  }

  const localeDateString = (params: {
    date?: Date | string
    format?: 'writtenDate' | 'numbersDate'
  }): string => {
    const { date, format } = params
    if (date === undefined) {
      return ''
    }
    // eslint-disable-next-line import/no-named-as-default-member
    dayjs.locale(locale.value)
    const day = dayjs(date)
    if (format === 'writtenDate') {
      return day.format('D. MMMM YYYY')
    } else if (format === 'numbersDate') {
      return day.format('DD.MM.YYYY')
    }
    return day.format()
  }

  return {
    fallBackLocale: readonly(fallBackLocale),
    locale,
    locales,
    userLocale,
    translate,
    localeDateString
  }
}

const get = (t: any, path: string): string | undefined => {
  return path.split('.').reduce((r, k) => r?.[k], t)
}
