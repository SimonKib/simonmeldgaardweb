
import axios from "axios"
export default {
  telemetry: false,

  // Disable servenr-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    trailingSlash: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SebbeJohansson',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/index',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/blog.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/axios',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
    
  axios: {
    proxy: false    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-css-variables': {
          variables: {
          },
          preserveAtRulesOrder: true,
          preserve: true,
        },
        'postcss-custom-media': {
          importFrom: [
            {
              customMedia: {
                '--phone': '(max-width: 767px)',
                '--phoneAndTablet': '(max-width: 1023px)',
                '--tablet': '(min-width: 768px) and (max-width: 1023px)',
                '--tabletAndDesktop': '(min-width: 768px)',
                '--desktop': '(min-width: 1024px)',
              },
            },
          ],
        },
        'postcss-preset-env': { },
        cssnano: { },
        'autoprefixer': {
          overrideBrowserslist: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
        },
      },
      preset: {
      },
    }
  },
  env: {
    apiUrl: process.env.API_URL || 'http://localhost/api'
  },
  generate: {
    async routes() {
      interface PortfolioEntry {
        title: string;
        description: string;
        slug: string;
        entryPic: string;
        link: string;
        size: number;
      }
      const data = [
        "fields slug,entryPic,title,description,size,link;",
        "filter status=1;",
        "sort orderID asc;",
      ];
      // console.log(process.env.API_URL);
      const portfolioEntries = await axios
        .post(process.env.API_URL+"/portfolios/get", data.join(""))
        .then((response) => {
          //// console.log(response.data);
          const entries = response.data as PortfolioEntry[];
          // console.log(entries);
          return entries;
          const routes = response.data?.map(entry => {
            return {
              route: '/portfolio/' + entry.slug,
              payload: entry,
            }
          })
        })
        .catch((error) => {
          // console.log(error.response);
        }) as PortfolioEntry[];

      /*const [articles, pages] = await Promise.all([
        api.list('/articles'),
        api.list('/pages'),
      ]);*/
      
      return [
        // Instead of returning only the slug of
        // each article or page, we provide an object
        // which also contains the data as payload.
        ...portfolioEntries.map((entry) => {
          console.log(entry);
          return {
            route: '/portfolio/' + entry.slug + "/",
            payload: entry,
          }
        }),
        /*...articles.map(article => ({
          route: article.slug,
          payload: article.data,
        })),
        ...pages.map(page => ({
          route: page.slug,
          payload: page.data,
        })),*/
      ];
    },
    /*routes(callback) {
      interface PortfolioEntry {
        title: string;
        description: string;
        slug: string;
        entryPic: string;
        link: string;
        size: number;
      }
      const data = [
        "fields slug,entryPic,title,description,size,link;",
        "filter status=1;",
        "sort orderID asc;",
      ];
      // console.log(process.env.API_URL);
      axios
        .post(process.env.API_URL+"/portfolios/get", data.join(""))
        .then((response) => {
          // console.log(response.data);
          const entries = response.data as PortfolioEntry[];
          const routes = response.data?.map(entry => {
            return {
              route: '/portfolio/' + entry.slug,
              payload: entry,
            }
          })
          callback(null, routes);
        })
        .catch((error) => {
          // console.log(error.response);
          callback();
        });
    }*/
  }
}
