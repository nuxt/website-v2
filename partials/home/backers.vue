<template>
  <section class="nBackers">
    <div class="container">
      <h2 class="nBackers_Title"><span>{{ $store.state.homepage.backers.attrs.title }}</span></h2>
      <p class="nBackers_Description" v-html="$store.state.homepage.backers.body">
      </p>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">{{ $store.state.lang.homepage.backer_partners }}</h3>
        <div class="nBackers_Group_Content">
          <a class="nBackers_Group_Content_Link" href="https://www.storyblok.com/?ref=nuxt" target="_blank" rel="noopener sponsored nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/storyblok-logo.svg" alt="Storyblok.com" style="height: 80px;"/>
          </a>
          <br>
          <a class="nBackers_Group_Content_Link" href="https://tipe.io/?ref=nuxt" target="_blank" rel="noopener sponsored nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/tipe-io-cms.png" alt="Tipe.io" style="height: 40px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://www.vuemastery.com/?ref=nuxt" target="_blank" rel="noopener sponsored nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/vueMastery-brand.svg" alt="VueMastery.com" style="height: 40px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=banner&utm_campaign=Open%20Collective" target="_blank" rel="noopener sponsored nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/vueschool.png" srcset="/vueschool-2x.png 2x" alt="VueSchool.io" style="height: 40px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://shipshape.io/?ref=nuxt" target="_blank" rel="noopener sponsored nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/shipshape-logo.svg" alt="Shipshape.io" style="height: 40px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://hapijs.com/?ref=nuxt" target="_blank" rel="noopener sponsored nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/hapi-logo.svg" alt="Hapi JS" style="height: 40px;"/>
          </a>
        </div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button nBackers_Group_Action_Button--green" href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">
            {{ $store.state.lang.homepage.backer_become_a_partner }}
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">{{ $store.state.lang.homepage.backer_sponsors }}</h3>
        <div class="nBackers_Group_Content">
          <a class="nBackers_Group_Content_Link" href="https://www.sparheld.de/?ref=nuxt" target="_blank" rel="noopener nofollow sponsored">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/sponsors/de-black.png" alt="Sparheld" style="height: 36px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://icons8.com/?ref=nuxt" target="_blank" rel="noopener nofollow sponsored">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/sponsors/icons8.png" alt="Icons8"  style="height: 36px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://clay.global/?ref=nuxt" target="_blank" rel="noopener nofollow sponsored">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/sponsors/clay.png" alt="Clay"  style="height: 36px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="https://uxplanet.org/top-ui-ux-design-agencies-user-experience-firms-8c54697e290/?ref=nuxt" target="_blank" rel="noopener nofollow sponsored">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/sponsors/ux-planet.png" alt="Ux Planet"  style="height: 36px;"/>
          </a>
          <a class="nBackers_Group_Content_Link" href="hhttps://www.firestickhow.com/?ref=nuxt" target="_blank" rel="noopener nofollow sponsored">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/sponsors/fire-stick-how.png" alt="Fire Stick How"  style="height: 36px;"/>
          </a>
        </div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button nBackers_Group_Action_Button--green" href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">
            {{ $store.state.lang.homepage.backer_become_a_sponsor }}
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">{{ $store.state.lang.homepage.backer_backers }}</h3>
        <div class="nBackers_Group_Content">
          <v-lazy-image alt="Nuxt Backers" src-placeholder="/oc-loading.svg" src="https://opencollective.com/nuxtjs/tiers/nuxters.svg?width=1155&button=false" />
        </div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button nBackers_Group_Action_Button--green" href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">
            {{ $store.state.lang.homepage.backer_become_a_backer }}
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">{{ $store.state.lang.homepage.backer_foundations }}</h3>
        <div class="nBackers_Group_Content">
          <a class="nBackers_Group_Content_Link" href="https://www.shuttleworthfoundation.org" target="_blank" rel="noopener nofollow">
            <v-lazy-image class="nBackers_Group_Content_Link_Image" src="/shuttleworth-funded.png" srcset="/shuttleworth-funded-2x.png 2x" alt="shuttleworth funded"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    VLazyImage
  }
}
</script>

<style lang="scss">
.nBackers {
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  text-align: center;
  padding: 5rem 1rem;
  padding-bottom: 0;
  @media (min-width: $--md) {
    padding: 0;
    padding-top: 8rem;
  }
  &_Title {
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h2-font-size;
    font-weight: $font-weight-regular;
    line-height: normal;
    span {
      padding-bottom: 10px;
      border-bottom: 4px solid $color-vue-green;
      border-radius: 4px;
    }
  }
  &_Description {
    padding: 3rem 0;
    font-size: 16px;
  }
  &_Group {
    padding-bottom: 6rem;
    &_Title {
      margin: 0;
      color: $color-text-regular;
      font-size: $h3-font-size;
      font-weight: $font-weight-regular;
    }
    &_Content {
      padding: 3rem 0;
      img {
        max-width: 100%;
      }
      &_Link {
        display: inline-block;
        margin-right: 30px;
        margin-bottom: 30px;
        &_Image {
          height: 64px;
          // max-width: 200px !important;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &_Action {
      &_Button {
        color: $color-text-regular;
        display: inline-block;
        padding: 1rem 2rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: $font-weight-bold;
        box-shadow: $--box-shadow-1;
        border-radius: 4px;
        margin-right: 30px;
        background-color: $background-color-lighter;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          text-decoration: none;
          color: $color-text-primary;
          box-shadow: $--box-shadow-2;
        }
        &--green {
          color: $background-color-lighter;
          background-color: $color-vue-green;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
