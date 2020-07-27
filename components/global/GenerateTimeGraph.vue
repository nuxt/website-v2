<template>
  <div>
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
      :title="chart_title"
    ></D3BarChart>
  </div>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts'

export default {
  components: {
    D3BarChart
  },
  data() {
    return {
      chart_title: 'Generate time: Cache vs full webpack build (seconds)',
      chart_data: [
        // ...
        { cache: 3, build: 9, site: 'Basic(vercel)' },
        { cache: 5.6, build: 16.3, site: 'Basic(netlify)' },
        { cache: 5.6, build: 30, site: 'storybook.nuxt.js.org(netlify)' },
        { cache: 13, build: 41, site: 'content.nuxtjs.org(netlify)' },
        { cache: 25, build: 114, site: 'nuxt.js.org(netlify)' }
      ],

      chart_config: {
        key: 'site',
        labelRotation: 45,
        axis: {
          yTitle: false,
          xTitle: false,
          yFormat: '.0f',
          xFormat: '.0f',
          yTicks: 10,
          xTicks: 10
        },
        currentKey: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        },
        orientation: 'vertical',
        tooltip: { label: true },
        values: ['cache', 'build'],
        color: {
          keys: {
            cache: '#108775',
            build: '#2F495E'
          }
        }
      }
    }
  }
}
</script>
<style>
.chart__wrapper {
  margin: 20px 0;
}
.chart__wrap--barchart {
  position: relative !important;
}
</style>
