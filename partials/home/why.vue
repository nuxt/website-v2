<template>
  <section class="nWhy">
    <div class="container">
      <h2 class="nWhy_Title"><span>Why Nuxt?</span></h2>
      <div class="row">
        <div class="nWhy_Block">
          <i-modular/>
          <h4 class="nWhy_Block_Title">Modular</h4>
          <p class="nWhy_Block_Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque amet dolorum ea, quae commodi alias. In obcaecati optio, quis quaerat commodi, ducimus amet similique sed sequi, nobis fugit voluptatibus iusto.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-performant/>
          <h4 class="nWhy_Block_Title">Performant</h4>
          <p class="nWhy_Block_Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque amet dolorum ea, quae commodi alias. In obcaecati optio, quis quaerat commodi, ducimus amet similique sed sequi, nobis fugit voluptatibus iusto.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-enjoyable/>
          <h4 class="nWhy_Block_Title">Enjoyable</h4>
          <p class="nWhy_Block_Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque amet dolorum ea, quae commodi alias. In obcaecati optio, quis quaerat commodi, ducimus amet similique sed sequi, nobis fugit voluptatibus iusto.
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

    }
  }
}
</style>
