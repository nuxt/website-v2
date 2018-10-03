<template>
  <section class="nWhy">
    <div class="container">
      <h1 class="nWhy_Title">Why Nuxt?</h1>
      <div class="row">
        <div class="nWhy_Block">
          <i-performant/>
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
          <i-performant/>
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

export default {
  components: {
    iPerformant
  }
}
</script>

<style lang="scss">
.nWhy {
  padding: 5rem 0;
  background-color: $background-color-light;
  &_Title {
    text-align: center;
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h1-font-size;
    font-weight: $font-weight-regular;
    line-height: normal;
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
