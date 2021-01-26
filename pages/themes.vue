<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
    <div class="container mx-auto px-4 pt-16">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            NUXT<span class="text-primary-base">JS</span> Themes<br />
          </h1>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            With the themes below built by our partners from Creative Tim and
            Theme Forest you can see how a real world application is built, with
            Nuxt.js stack behind.
          </h3>
        </div>
<<<<<<< HEAD
        <i-themes class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"/>
=======
        <ThemesIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
>>>>>>> 26a70b2b (chore: add guides section (#407))
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <i-themes class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <section class="flex flex-wrap items-stretch -mx-4">
<<<<<<< HEAD
      <div v-for="theme in themes" :key="theme.title" class="w-full lg:w-1/2 p-4">
        <a :href="theme.link" target="_blank" rel="noopener" class="block sm:flex w-full bg-gray-100 hover:bg-gray-200 rounded">
          <img :src="'/themes/' + theme.img + '.jpg'" :srcset="'/themes/' + theme.img + '-2x.jpg 2x'" :alt="theme.title" class="w-full sm:w-auto">
=======
      <div v-for="theme in themes" :key="theme.title" class="w-full p-4">
        <div class="block sm:flex w-full h-full items-start bg-gray-100 hover:bg-gray-200 rounded">
          <img :src="'/themes/' + theme.img + '.jpg'" :srcset="'/themes/' + theme.img + '-2x.jpg 2x'" :alt="theme.title" class="block w-full sm:w-auto sm:h-full rounded">
>>>>>>> b25bdbb3 (add resources)
          <div class="w-full p-6">
            <h4 class="block w-full font-medium text-xl pb-2">
              {{ theme.title }}
              <span class="float-right text-nuxt-lightgreen">{{ theme.price }}</span>
            </h4>
<<<<<<< HEAD
            <p class="pb-2 text-gray-600">{{ theme.description }}</p>
            <p class="text-sm italic text-nuxt-lightgreen" v-if="theme.discount" v-html="theme.discount" />
=======
            <p class="mb-3 text-gray-600">{{ theme.description }}</p>
            <p v-if="theme.discount" class="text-sm italic text-nuxt-lightgreen" v-html="theme.discount" />
            <nui-button :href="theme.link" rel="noopener sponsored" target="_blank" class="sm:mr-4 p-3 mt-3 text-sm text-left">
              <!-- <nui-svg-shopping slot="icon" class="h-4 -mb-1 mr-1" /> -->
              GET IT for {{ theme.price }}
            </nui-button>
>>>>>>> fa45fc8a (shop wireframe)
          </div>
        </a>
      </div>
    </section>
    <section class="text-center">
    </section>
  </nui-container>
=======
      <section class="flex flex-wrap items-stretch -mx-4">
=======
      <section class="flex flex-wrap items-stretch -mx-4 pb-8">
>>>>>>> f2b090e2 (add more themes)
        <div v-for="theme in themes" :key="theme.title" class="w-full p-4">
          <div
            class="block sm:flex w-full h-full items-start bg-light-surface dark:bg-dark-surface rounded transition-colors duration-300 ease-linear"
          >
            <img
              :src="'/themes/' + theme.img + '.jpg'"
              :srcset="'/themes/' + theme.img + '-2x.jpg 2x'"
              :alt="theme.title"
              class="block w-full sm:w-auto sm:h-full rounded"
            />
            <div class="w-full p-6">
              <h4
                class="block w-full font-medium text-xl pb-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
              >
                {{ theme.title }}
                <!-- <span class="float-right text-nuxt-lightgreen">{{ theme.price }}</span> -->
              </h4>
<<<<<<< HEAD
              <p class="mb-3 text-gray-600">{{ theme.description }}</p>
              <p v-if="theme.discount" class="text-sm italic text-nuxt-lightgreen" v-html="theme.discount" />
              <nui-button :href="theme.link" rel="noopener sponsored" target="_blank" class="sm:mr-4 p-3 mt-3 text-sm text-left">
=======
              <p class="mb-3 text-gray-600">
                {{ theme.description }}
              </p>
              <p
                v-if="theme.discount"
                class="text-sm italic text-nuxt-lightgreen"
              >
                {{ theme.discount1 }}
                <b class="whitespace-no-wrap">
                  {{ theme.discount2 }}
                </b>
              </p>
              <AppButton
                :href="theme.link"
                rel="noopener sponsored"
                target="_blank"
                class="sm:mr-4 p-3 mt-3 text-sm text-left"
              >
>>>>>>> 26a70b2b (chore: add guides section (#407))
                <!-- <nui-svg-shopping slot="icon" class="h-4 -mb-1 mr-1" /> -->
                GET IT for {{ theme.price }}
              </nui-button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
>>>>>>> 1b87907b (feat: dark mode (#303))
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import iTheme from '@/components/svg/streamline/theme.vue'
=======
import ThemesIllustration from '~/assets/illustrations/themes.svg?inline'
>>>>>>> 26a70b2b (chore: add guides section (#407))

export default {
  components: {
    iTheme
  },
=======
export default {
>>>>>>> c0fbfb0b (add illustrations)
=======
import iThemes from '@/components/svg/fogg/themes'

export default {
  components: {
    iThemes
  },
>>>>>>> 163e1225 (Use icons8 SVG Illustrations)
  head: {
    title: 'NuxtJS Themes',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data() {
    return {
      themes: [
        {
          title: 'Nuxt Argon Dashboard PRO',
          description: 'Premium Bootstrap 4 + NuxtJS Admin Template.',
          price: '99$',
          link:
            'https://www.creative-tim.com/product/nuxt-argon-dashboard-pro?partner=120213',
          img: 'nuxt-argon-dashboard-pro',
<<<<<<< HEAD
          discount: 'Get 30% off with the discount code: <b class="whitespace-no-wrap">30nuxt-exclusive</b>'
=======
          discount1: '-30% discount code:',
          discount2: '30nuxt-exclusive'
>>>>>>> 26a70b2b (chore: add guides section (#407))
        },
        {
          title: 'Nuxt Argon Dashboard PRO Laravel',
          description: 'FULL STACK APP WITH NUXT, LARAVEL & JSON:API.',
          price: '149$',
          link:
            'https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel?partner=120213',
          img: 'nuxt-argon-dashboard-pro-laravel'
        },
        {
          title: 'Nuxt Now UI Kit',
          description: 'Premium Bootstrap Nuxt.js UI Kit.',
          price: '89$',
          link:
            'https://www.creative-tim.com/product/nuxt-now-ui-kit-pro?partner=120213',
          img: 'nuxt-now-ui-kit'
        },
        {
          title: 'Nuxt Black Dashboard PRO',
          description: 'Premium Bootstrap 4 Nuxt.js Admin Template.',
          price: '79$',
          link:
            'https://www.creative-tim.com/product/nuxt-black-dashboard-pro?partner=120213',
          img: 'nuxt-black-dashboard-pro'
        },
        {
          title: 'Nuxt Scutum Dashboard',
          description: 'Professional Material Design UIkit Admin Template.',
          price: '26$',
          link: 'https://1.envato.market/scutum-nuxt',
          img: 'nuxt-scutum-dashboard'
        },
        {
          title: 'Luma Nuxt',
          description: 'A beautifully crafted user interface with Nuxt.js for modern Education Platforms.',
          price: '27$',
          link: 'https://1.envato.market/luma',
          img: 'luma-nuxt'
        },
        {
          title: 'Multikart',
          description: 'Responsive Nuxtjs eCommerce Template.',
          price: '28$',
          link: 'https://1.envato.market/multikart',
          img: 'multikart'
        },
        {
          title: 'Sofbox',
          description: 'Software landing page template.',
          price: '22$',
          link: 'https://1.envato.market/sofbox',
          img: 'sofbox'
        },
        {
          title: 'Veluxi',
          description: 'Modern template collection to present your startup & your companies the way they truly deserve.',
          price: '15$',
          link: 'https://1.envato.market/veluxi',
          img: 'veluxi'
        },
        {
          title: 'Bolster',
          description: 'Nuxt.js eCommerce Template.',
          price: '25$',
          link: 'https://1.envato.market/bolster',
          img: 'bolster'
        }
      ]
    }
<<<<<<< HEAD
=======
  },
  head() {
    const title = 'NuxtJS Themes'
    const description =
      'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
>>>>>>> 419b6c38 (chore: improve meta and add sponsor)
  }
}
</script>

<style></style>
