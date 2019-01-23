<template>
  <section class="nWhy">
    <div class="container">
      <h2 class="nWhy_Title"><span>Why Nuxt?</span></h2>
      <div class="row">
        <div class="nWhy_Block">
          <i-performant/>
          <h4 class="nWhy_Block_Title">Performant</h4>
          <p class="nWhy_Block_Description">
            With Nuxt.js, your application will be optimized out of the box.
            We do our best to build performant applications by utilizing Vue.js and Node.js best practices.
            To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities
            to fine-tune your app.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-modular/>
          <h4 class="nWhy_Block_Title">Modular</h4>
          <p class="nWhy_Block_Description">
            Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your
            development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics
            to your page or generate a sitemap.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-enjoyable/>
          <h4 class="nWhy_Block_Title">Enjoyable</h4>
          <p class="nWhy_Block_Description">
            Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework
            so you love it too! 💚<br>
            Expect appealing solutions, descriptive error messages, powerful defaults and a detailed
            documentation. If questions or problems come up, our helpful community will help you out.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import iPerformant from '@/components/icons/performant'
import iModular from '@/components/icons/modular'
import iEnjoyable from '@/components/icons/enjoyable'

export default {
  components: {
    iPerformant,
    iModular,
    iEnjoyable
  }
}
</script>

<style lang="scss">
.nWhy {
  position: relative;
  background-color: $background-color-light;
  padding: 5rem 1rem;
  @media (min-width: $--md) {
    padding: 8rem 0;
  }
  &_Title {
    text-align: center;
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h2-font-size;
    font-weight: $font-weight-regular;
    line-height: normal;
    margin-bottom: 6rem;
    span {
      padding-bottom: 10px;
      border-bottom: 4px solid $color-vue-green;
      border-radius: 4px;
    }
  }
  &_Block {
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    @media (min-width: $--md) {
      width: 30%;
      padding: 0;
    }
    .iPerformant, .iModular, .iEnjoyable {
      height: 100px;
      display: inline-block;
      margin-bottom: 15px;
    }
    .iEnjoyable {
      padding-left: 30px;
    }
    &_Title {
      color: $color-text-regular;
      font-size: $h4-font-size;
      font-weight: $font-weight-regular;
    }
    &_Description {
      text-align: justify;
    }
  }
}
</style>
