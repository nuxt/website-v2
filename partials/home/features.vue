<template>
  <section class="Home__Features">
    <nui-container>
      <div>
        <nui-title>Features</nui-title>
      </div>
      <nui-row style="padding-bottom: 4rem;">
        <div class="Home__Features__Section">
          <h4 class="Home__Features__Section__Title">
            .vue files based
          </h4>
          <p class="Home__Features__Section__Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nemo quasi quae amet blanditiis facere aliquid ducimus eum sunt aut magnam ipsam rem culpa ratione consectetur, recusandae vero odit illum?
          </p>
        </div>
        <div class="Home__Features__Section">
          <h4 class="Home__Features__Section__Title">
            .vue files based
          </h4>
          <p class="Home__Features__Section__Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nemo quasi quae amet blanditiis facere aliquid ducimus eum sunt aut magnam ipsam rem culpa ratione consectetur, recusandae vero odit illum?
          </p>
        </div>
        <div class="Home__Features__Section">
          <h4 class="Home__Features__Section__Title">
            .vue files based
          </h4>
          <p class="Home__Features__Section__Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nemo quasi quae amet blanditiis facere aliquid ducimus eum sunt aut magnam ipsam rem culpa ratione consectetur, recusandae vero odit illum?
          </p>
        </div>
      </nui-row>
      <nui-row>
        <div class="Home__Features__Section">
          <h4 class="Home__Features__Section__Title">
            .vue files based
          </h4>
          <p class="Home__Features__Section__Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nemo quasi quae amet blanditiis facere aliquid ducimus eum sunt aut magnam ipsam rem culpa ratione consectetur, recusandae vero odit illum?
          </p>
        </div>
        <div class="Home__Features__Section">
          <h4 class="Home__Features__Section__Title">
            .vue files based
          </h4>
          <p class="Home__Features__Section__Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nemo quasi quae amet blanditiis facere aliquid ducimus eum sunt aut magnam ipsam rem culpa ratione consectetur, recusandae vero odit illum?
          </p>
        </div>
        <div class="Home__Features__Section">
          <h4 class="Home__Features__Section__Title">
            .vue files based
          </h4>
          <p class="Home__Features__Section__Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nemo quasi quae amet blanditiis facere aliquid ducimus eum sunt aut magnam ipsam rem culpa ratione consectetur, recusandae vero odit illum?
          </p>
        </div>
      </nui-row>
    </nui-container>
  </section>
</template>

<script>
import nuiRow from '@/components/commons/Row'
import nuiTitle from '@/components/commons/Title'

export default {
  components: {
    nuiRow,
    nuiTitle
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;

.Home__Features {
  color: $grey_blue;
  text-align: center;
  padding: 5rem 0;
  &__Section {
    width: 25%;
    &__Title {
      font-size: 1.35rem;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
      padding: 0;
      padding-bottom: 1.5rem;
    }
    &__Description {
      text-align: justify;
      color: $grey;
      font-weight: 500;
      margin: 0;
      line-height: 1.7rem;
      font-size: 1rem;
    }
  }
}
</style>
