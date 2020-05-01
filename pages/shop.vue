<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <nui-container class="py-16">
    <div class="flex justify-between mb-16">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
=======
  <nui-container class="pt-16">
    <div ref="shop" class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
>>>>>>> c7763d43 (New design with illustrations)
          The NUXT<span class="text-nuxt-lightgreen">JS</span> Shop<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni cum, nisi animi quae sit in, corporis explicabo architecto natus vero voluptate maiores beatae, et quo possimus. Rerum, consequatur aperiam!
        </h3>
      </div>
      <i-shop class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <section class="flex flex-wrap items-stretch -mx-4">
      <div v-for="product in products" :key="product.name" class="w-full lg:w-1/2 p-4">
        <div class="block sm:flex w-full bg-gray-100 hover:bg-gray-200 p-6 rounded">
          <img :src="'/shop/' + product.img + '.png'" :srcset="'/shop/' + product.img + '-2x.png 2x'" :alt="product.name" class="w-full sm:w-auto rounded border border-gray-300">
          <div class="w-full px-6 py-2">
            <h4 class="block w-full font-medium text-xl pb-4">
              {{ product.name }}
              <!-- <span class="float-right text-nuxt-lightgreen">{{ theme.price }}</span> -->
            </h4>
            <p class="mb-4 text-gray-600 leading-relaxed" v-html="product.description"></p>
            <nui-button :href="product.url" rel="noopener" target="_blank" class="sm:mr-4 p-3 mt-3 text-sm text-left">
              GET IT for {{ product.price }}€
            </nui-button>
=======
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div ref="shop" class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1 class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4">
            The NUXT<span class="text-primary-base">JS</span> Shop<br>
          </h1>
          <h3 class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6">
            You want to support the NuxtJS project and show your love to the rest of the community?<br/> Here our products with the best quality ever!
          </h3>
        </div>
        <i-shop class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"/>
      </div>
      <section class="flex flex-wrap items-stretch -mx-4">
        <div v-for="(product, i) in products" :key="i" class="w-full lg:w-1/2 p-4">
          <div class="block sm:flex w-full bg-light-surface dark:bg-dark-surface p-6 rounded transition-colors duration-300 ease-linear">
            <img :src="'/shop/' + product.img + '.png'" :srcset="'/shop/' + product.img + '-2x.png 2x'" :alt="product.name" class="w-full sm:w-auto rounded border border-gray-300">
            <div class="w-full px-6 py-2">
              <h4 class="block w-full font-medium text-xl pb-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">
                {{ product.name }}
              </h4>
              <p class="mb-4 text-gray-600 leading-relaxed">{{ product.description }}</p>
              <nui-button href="#" rel="noopener sponsored" target="_blank" class="sm:mr-4 p-3 mt-3 text-sm text-left">
                Coming soon
              </nui-button>
              <!-- <button class="snipcart-add-item inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md sm:mr-4 p-3 mt-3 text-sm text-left" :data-item-id="i + 1" :data-item-name="product.name" :data-item-description="product.description" :data-item-image="'/shop/' + product.img + '.png'" :data-item-price="product.price" :data-item-url="{ name: 'shop' }">
              </button> -->
            </div>
>>>>>>> 1b87907b (feat: dark mode (#303))
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import iShop from '@/components/svg/fogg/shop'

export default {
  components: {
    iShop
  },
  head: {
    title: 'The NuxtJS Shop',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data () {
    return {
      products: [
        {
          name: 'Classic T-shirt White',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'tshirt_white',
          url: '',
          price: 29
        },
        {
          name: 'Classic T-shirt Blue',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'tshirt_blue',
          url: '',
          price: 29
        },
        {
          name: 'NuxtJS Sweatshirt White',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'sweat_white',
          url: '',
          price: 49
        },
        {
          name: 'NuxtJS Sweatshirt Blue',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'sweat_blue',
          url: '',
          price: 49
        },
        {
          name: 'New Stickers',
          description: '8 New Design stickers: <br> - 4 Mountains Logo Stickers <br> - 4 NuxtJS Logo Stickers',
          img: 'new_stickers',
          url: '',
          price: 5
        },
        {
          name: 'Vintage Stickers',
          description: '8 Vintage design stickers: <br> - 4 Mountains Logo Stickers <br> - 4 Are You Nuxt? Stickers',
          img: 'vintage_stickers',
          url: '',
          price: 5
        }
      ]
    }
<<<<<<< HEAD
=======
  // },
  // mounted () {
  //   const jquery = document.createElement('script')
  //   jquery.setAttribute('type', 'text/javascript')
  //   jquery.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js')
  //   const script = document.createElement('script')
  //   script.setAttribute('type', 'text/javascript')
  //   script.setAttribute('src', '//cdn.snipcart.com/scripts/2.0/snipcart.js')
  //   script.setAttribute('id', 'snipcart')
  //   script.setAttribute('data-api-key', 'YzRlMjRiNmItNWJjNC00OWMxLWE1ODgtZmIyNzAwYmIyMmI5NjM3MDM3MTc0OTkxOTU5OTA0')
  //   this.$refs.shop.appendChild(jquery)
  //   this.$refs.shop.appendChild(script)
  },
  head () {
    const title = 'The NuxtJS Shop'
    const description = 'You want to support the NuxtJS project and show your love to the rest of the community? Here our products with the best quality ever!'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
>>>>>>> 419b6c38 (chore: improve meta and add sponsor)
  }
}
</script>

<style>

</style>
