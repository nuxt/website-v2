<template>
  <section class="nWhy">
    <div class="container">
      <h2 class="nWhy_Title">Why Nuxt?</h2>
      <div class="row">
        <div class="nWhy_Block">
          <i-modular/>
          <h3 class="nWhy_Block_Title">Modular</h3>
          <p class="nWhy_Block_Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque amet dolorum ea, quae commodi alias. In obcaecati optio, quis quaerat commodi, ducimus amet similique sed sequi, nobis fugit voluptatibus iusto.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-performant/>
          <h3 class="nWhy_Block_Title">Performant</h3>
          <p class="nWhy_Block_Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque amet dolorum ea, quae commodi alias. In obcaecati optio, quis quaerat commodi, ducimus amet similique sed sequi, nobis fugit voluptatibus iusto.
          </p>
        </div>
        <div class="nWhy_Block">
          <i-enjoyable/>
          <h3 class="nWhy_Block_Title">Enjoyable</h3>
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
  padding: 5rem 0;
  background-color: $background-color-light;
  &_Title {
    text-align: center;
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h2-font-size;
    font-weight: $font-weight-light;
    line-height: normal;
    padding-bottom: 30px;
  }
  &_Block {
    width: 30%;
    &_Title {
      text-align: center;
    }
    &_Description {
      text-align: justify;
    }
  }
}
</style>
