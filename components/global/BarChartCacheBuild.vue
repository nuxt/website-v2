<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          'Basic(vercel)',
          'Basic(netlify)',
          'storybook.nuxt.js.org(netlify)',
          'content.nuxtjs.org(netlify)',
          'nuxt.js.org(netlify)'
        ],
        datasets: [
          {
            label: 'Cache',
            backgroundColor: '#108775',
            data: [3, 5.6, 5.6, 13, 25]
          },
          {
            label: 'Build',
            backgroundColor: '#2F495E',
            data: [9, 16.4, 30, 41, 114]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>
