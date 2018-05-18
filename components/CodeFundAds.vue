<template>
  <div class="ad" ref="codefundads" id="codefund_ad"></div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.locale === 'en') {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//codefund.io/scripts/7a55aa99-7866-418d-9720-8b1342303656/embed.js?template=vertical')
      script.setAttribute('id', '_codefund_ad_js')
      this.$refs.codefundads.appendChild(script)
    }
  }
}
</script>

<style lang="scss">
.ad
{
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 15px;
  height: 106px;
  @media (min-width: 625px)
  {
    float: right;
    width: 125px;
    margin-left: 25px;
    height: auto;
  }
  @media (min-width: 1280px)
  {
    position: fixed;
    bottom: 30px;
    right: 30px;
    margin-bottom: 0;
  }
  .vuejobs
  {
    display: block;
    width: 130px;
    height: 100px;
    background-image: url('/vuejobs.png');
  }
  #cf_ad,
  #cf_ad .cf-wrapper {
    width: auto;
  }
  #cf_ad .cf-text {
    font-size: 12px;
  }
  #cf_ad .cf-image-wrapper
  {
    float: left;
    margin-right: 10px;
    @media (min-width: 625px)
    {
      float: none;
      margin-right: 0;
    }
  }
  .carbon-text
  {
    color: #34495e;
    text-decoration: none;
    &:hover
    {
      text-decoration: none;
    }
    @media (min-width: 625px)
    {
      display: inline-block;
      margin-top: 5px;
    }
  }
  .carbon-wrap
  {
    @media (min-width: 625px)
    {
      display: inline-block;
      margin-bottom: 5px;
      line-height: normal;
    }
  }
  .carbon-poweredby
  {
    color: #7f8c8d;
    display: block;
  }
}
</style>
