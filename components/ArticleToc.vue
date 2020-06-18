<template>
  <div class="lg:inset-0 z-90 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block">
    <div class="lg:overflow-y-auto lg:scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-24">
      <div class="flex flex-col sm:flex-row px-4 pt-8 justify-between lg:justify-start lg:flex-col lg:overflow-y-auto lg:pr-0 lg:pl-8 sticky?lg:h-(screen-24)">
        <div class="flex flex-col lg:w-full sm:w-1/3">
          <h3
            class="mb-3 lg:mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
          >
            {{ toc.title }} help
          </h3>
          <nav>
            <scrollactive highlight-first-item active-class="text-green-500" tag="ul">
              <li
                v-for="link of toc"
                :key="link.id"
                class="text-gray-600 dark:text-gray-500"
                :class="{
                  'border-t border-dashed dark:border-gray-800 first:border-t-0 font-semibold': link.depth === 2
                }"
              >
                <a
                  :href="`#${link.id}`"
                  class="block text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1"
                  :class="{
                    'py-2': link.depth === 2,
                    'ml-2 pb-2': link.depth === 3
                  }"
                >{{ link.text }}</a>
              </li>
            </scrollactive>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.affix {
  top: 6rem;
  height: calc(100vh - 6rem)
}
li{
  list-style: none;
}
</style>
