<template>
  <div>
    <s-welcome/>
    <section class="Landscape">
      <div class="Landscape__Logo">
        <nuxt-logo/>
        <h1 class="Landscape__Logo__Title">NUXT</h1>
      </div>
      <h2 class="Landscape__Title">
        {{ $store.state.lang.homepage.title }}
      </h2>
      <ul class="Landscape__List">
        <li class="Landscape__List__Item">
          <nuxt-link class="button button--green" to="/guide/installation">
            {{ $store.state.lang.links.get_started }}
          </nuxt-link>
        </li>
        <li class="Landscape__List__Item">
          <a class="button button--grey" href="https://github.com/nuxt/nuxt.js" target="_blank">
            {{ $store.state.lang.links.github }} <span class="version">{{ $store.state.ghVersion }}</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="Codesandbox">
      <h3>{{ $store.state.lang.homepage.codesandbox_title }}</h3>
      <p>
        <a class="Codesandbox__Link" href="https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?autoresize=1&hidenavigation=1&view=preview" target="_blank" rel="noopener"><svg class="Codesandbox__Link__Icon" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 1024 1024"><g id="Layer_1"><polyline class="fill" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline><polyline class="fill" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline class="fill" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g id="Layer_2"><polyline fill="none" class="stroke" stroke-width="80" stroke-miterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" class="stroke" stroke-width="80" stroke-miterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" class="stroke" stroke-width="80" stroke-miterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g></svg> {{ $store.state.lang.homepage.codesandbox_open }}</a>
        <br>
        <nuxt-link class="Codesandbox__Examples" to="/examples">{{ $store.state.lang.homepage.codesandbox_examples }}</nuxt-link>
      </p>
      <iframe src="https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?autoresize=1&hidenavigation=1&view=preview" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
    </section>
    <nuxt-footer/>
  </div>
</template>

<script>
import sWelcome from '@/partials/home/welcome'
import NuxtLogo from '~/components/VueToNuxtLogo.vue'
import NuxtFooter from '~/components/Footer.vue'

export default {
  components: {
    sWelcome,
    NuxtLogo,
    NuxtFooter
  },
  head() {
    return {
      title: this.$store.state.lang.homepage.meta.title,
      meta: [
        { name: 'description', hid: 'description', content: this.$store.state.lang.homepage.meta.description },
        // Open Graph
        { name: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://nuxtjs.org' },
        { name: 'og:image', content: 'https://i.imgur.com/PzEm5j2.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'twitter:image', content: 'https://i.imgur.com/PzEm5j2.png' },
        { name: 'twitter:image:alt', content: 'Nuxt.js Logo' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Landscape
{
  $footer-height: 120px;

  min-height: calc(100vh - #{$footer-height});
  background-color: #fff;
  padding: 70px 15px;
  padding-top: 100px;
  text-align: center;
  @media (min-width: 992px)
  {
    padding: 100px 30px;
    padding-top: 200px;
  }
  &__Logo
  {
    &__Title
    {
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
      padding: 25px 15px;
      @media (min-width: 992px)
      {
        font-size: 120px;
        display: inline-block;
        padding: 0;
        padding-left: 30px;
      }
    }
  }
  &__Title
  {
    font-weight: 300;
    font-size: 45px;
    line-height: normal;
    margin: 30px 0;
    color: #526488;
    word-spacing: 5px;
    @media (min-width: 992px)
    {
      font-size: 60px;
    }
  }
  &__List
  {
    list-style: none;
    margin: 0;
    padding: 0;
    &__Item
    {
      display: inline-block;
      padding: 15px;
      padding-bottom: 0;
      span {
        font-weight: 400;
      }
    }
  }
}
.Codesandbox {
  background: #141618;
  padding: 30px 0 50px 0;
  text-align: center;
  h3 {
    color: #EEE;
    font-weight: 600;
  }
  &__Link {
    border: 1px solid #41B883;
    padding: 10px 20px;
    font-size: 20px;
    position: relative;
    right: 0;
    margin: 10px 0;
    text-decoration: none;
    display: inline-flex;
    align-self: center;
    &:hover {
      background: #41B883;
      color: #141618;
      .fill {
        fill: #141618;
      }
      .stroke {
        stroke: #141618;
      }
    }
    &__Icon {
      margin-right: 8px;
      .fill {
        fill: #41B883;
      }
      .stroke {
        stroke:#41B883;
      }
    }
  }
  &__Examples {
    color: #999;
    text-decoration: underline;
    display: inline-block;
    margin-bottom: 10px;
  }
  iframe {
    width:100%;
    max-width: 1400px;
    height:700px;
    border:0;
    border-radius: 4px;
    overflow:hidden;
    margin: 0 auto;
  }
}
@media (max-width: 991px) {
  .Codesandbox iframe {
    display: none;
  }
}
</style>
