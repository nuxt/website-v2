<template>
  <section class="nWhy">
    <div class="container">
      <h2 class="nWhy_Title"><span>{{ $store.state.homepage.why.attrs.title }}</span></h2>
      <div class="row">
        <div class="nWhy_Block">
          <i-performant/>
          <h4 class="nWhy_Block_Title">{{ $store.state.homepage.why_performant.attrs.title }}</h4>
          <p class="nWhy_Block_Description" v-html="$store.state.homepage.why_performant.body">
          </p>
        </div>
        <div class="nWhy_Block">
          <i-modular/>
          <h4 class="nWhy_Block_Title">{{ $store.state.homepage.why_modular.attrs.title }}</h4>
          <p class="nWhy_Block_Description" v-html="$store.state.homepage.why_modular.body">
          </p>
        </div>
        <div class="nWhy_Block">
          <i-enjoyable/>
          <h4 class="nWhy_Block_Title">{{ $store.state.homepage.why_enjoyable.attrs.title }}</h4>
          <p class="nWhy_Block_Description" v-html="$store.state.homepage.why_enjoyable.body">
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
      font-size: 16px;
    }
  }
}
</style>
