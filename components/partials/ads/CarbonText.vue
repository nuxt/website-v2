<template>
  <div ref="carbonadsText">
    <div class="bsa-cpc" />
  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.state.locale === 'en' && this.$refs.carbonadsText) {
      this.loadScript()
    }
  },
  methods: {
    loadScript () {
      // Order is important (https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag)
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      this.$refs.carbonadsText.appendChild(script)
      script.onload = this.scriptLoaded
      script.setAttribute('src', '//m.servedby-buysellads.com/monetization.js')
    },
    scriptLoaded () {
      if (typeof _bsa === 'undefined') { return console.warn('Could not load Carbon Ads Text') } // eslint-disable-line no-console
      window._bsa.init('default', 'CKYD62QW', 'placement:nuxtjsorg', {
        target: '.bsa-cpc',
        align: 'horizontal',
        disable_css: 'true'
      })
    }
  }
}
</script>

<style>
.bsa-cpc {
  font-size: 1em;
  background-color: #f8f8f8;
}
.bsa-cpc a._default_ {
  text-align: left;
  display: block;
  padding: 10px 15px 12px;
  margin-top: 20px;
  color: #666;
  font-weight: 400;
  line-height: 18px;
}
.bsa-cpc a._default_:hover {
  text-decoration: none;
}
.bsa-cpc a._default_ .default-image,
.bsa-cpc a._default_ .default-title,
.bsa-cpc a._default_ .default-description {
  display: inline;
  vertical-align: middle;
  margin-right: 6px;
}
.bsa-cpc a._default_ .default-image img {
  height: 20px;
  border-radius: 3px;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
.bsa-cpc a._default_ .default-title {
  font-weight: 600;
}
.bsa-cpc a._default_ .default-description:after {
  font-size: 0.85em;
  content: "Sponsored";
  color: #1c90f3;
  border: 1px solid #1c90f3;
  border-radius: 3px;
  padding: 0 4px 1px;
  margin-left: 6px;
}
.bsa-cpc .default-ad {
  display: none;
}
</style>
