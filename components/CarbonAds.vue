<template>
  <div class="ad" ref="carbonads">
    <a href="https://vuejobs.com/?ref=nuxtjs" target="_blank" class="vuejobs" v-if="$store.state._lang !== 'en'"></a>
  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.state._lang === 'en') {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg')
      script.setAttribute('id', '_carbonads_js')
      this.$refs.carbonads.appendChild(script)
    }
  }
}
</script>

<style lang="scss">
.ad
{
  background-color: #fff;
  font-size: 13px;
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
  .carbon-img
  {
    display: inline-block;
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
