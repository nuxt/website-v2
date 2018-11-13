<template>
  <section class="nWhy">
    <div class="container">
      <h2 class="nWhy_Title"><span>Why Nuxt?</span></h2>
      <div class="row">
        <div class="nWhy_Block">
          <i-performant/>
          <h4 class="nWhy_Block_Title">Performant</h4>
          <p class="nWhy_Block_Description">
            With Nuxt.js, your application will be optimized by default. We do our best to build performant applications by respecting Vue.js and Node.js best practices.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-modular/>
          <h4 class="nWhy_Block_Title">Modular</h4>
          <p class="nWhy_Block_Description">
            Nuxt is based on a powerful modular architecture. You can use 50+ modules to make your developement faster & simplier. By installing a Nuxt module, you can benefits from enhancements like PWA, Offline and AMP support.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-enjoyable/>
          <h4 class="nWhy_Block_Title">Enjoyable</h4>
          <p class="nWhy_Block_Description">
            Our main focus is the Developer Experience. We want Nuxt.js to be enjoyable, this is why we created Nuxt cli, the modules ecosystem, the ability to switch with one option between the rendering modes and more <3.
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
  padding: 8rem 0;
  background-color: $background-color-light;
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
    width: 30%;
    text-align: center;
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
