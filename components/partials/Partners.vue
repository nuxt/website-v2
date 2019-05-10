<template>
  <nui-hero class="nui-partners">
    <nui-container>
      <div>
        <nui-title>
          PROUDLY SUPPORT BY
        </nui-title>
      </div>
      <div>
        <nui-button to="/support-us" green>
          <nui-svg-open-collective/>
          become a partner
        </nui-button>
      </div>
    </nui-container>
  </nui-hero>
</template>

<script>
import nuiHero from '@/components/ui/Hero'
import nuiContainer from '@/components/ui/Container'
import nuiTitle from '@/components/ui/Title'
import nuiButton from '@/components/ui/Button.vue'
import nuiSvgOpenCollective from '@/components/svg/OpenCollective.vue'

export default {
  components: {
    nuiHero,
    nuiContainer,
    nuiTitle,
    nuiButton,
    nuiSvgOpenCollective
  }
}
</script>

<style lang="scss">
.nui-partners {
  text-align: center;
  .nui-svg-opencollective {
    height: 20px;
  }
}
</style>
