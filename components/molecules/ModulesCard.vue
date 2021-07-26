<template>
  <Link :to="module.website" target="blank" class="hover:bg-gray-50 hover:dark:bg-opacity-80 dark:bg-sky-darker rounded-md shadow-md h-40 p-4 flex flex-col justify-between">
    <div class="flex space-x-3">
      <img :src="iconUrl(module)" :alt="module.name" class="w-10 h-10 mt-2" />
      <div class="flex flex-col space-y-1">
        <span class="font-medium">{{ module.name }}</span>
        <div class="max-h-20 text-sm overflow-y-auto">
          {{ module.description }}
        </div>
      </div>
    </div>
    <div class="flex justify-between w-full">
      <div class="flex items-center space-x-4 w-1/2 text-xs font-medium">
        <Link :to="module.github" class="flex space-x-2 items-center" target="blank">
          <IconStar alt="Star icon" class="text-sky-darker dark:text-white"/>
          <span class="truncate pt-0.5">{{ numberFormat(module.stars) }} star{{ module.stars !== 1 ? 's' : '' }}</span>
        </Link>
        <Link :to="npmUrl(module)" class="flex space-x-2 items-center" target="blank" >
          <IconDownload alt="Download icon" class="w-4 h-4 text-sky-darker dark:text-white" />
          <span class="truncate pt-0.5">{{ numberFormat(module.downloads) }} download{{ module.downloads !== 1 ? 's' : '' }}</span>
        </Link>
      </div>
      <ul class="flex space-x-1">
        <li v-for="maintainer in module.maintainers" :key="maintainer.name">
          <Link :to="githubUrl(maintainer)" target="blank">
            <img :src="maintainer.avatar" :alt="maintainer.name" class="rounded-full w-6 h-6">
          </Link>
        </li>
      </ul>
    </div>
  </Link>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import millify from 'millify'

export default defineComponent({
  props: {
    module: {
      type: Object,
      required: true
    }
  },
  setup() {
    //methods
    function iconUrl({ icon, category}) {
      if (icon)
        return `img/modules/${icon}`

      return `img/modules/categories/${category.toLowerCase()}.svg`
    }

    function npmUrl ({ npm }) {
      return `https://npmjs.com/package/${npm}`
    }

    function githubUrl({ github }) {
     return `https://github.com/${github}`
    }

    function numberFormat(num: any, options = { precision: 1 }) {
      return millify(num || 0, options)
    }

    return {
      iconUrl,
      npmUrl,
      githubUrl,
      numberFormat
    }
  }
})
</script>
