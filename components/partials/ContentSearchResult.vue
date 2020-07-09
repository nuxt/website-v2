<template>
  <div class="content-dropdown-menu">
    <div class="content-dataset">
      <div class="content-suggestions">
        <div
          v-for="(group, index) in regroupResults" :key="index" class="content-suggestion"
        >
          <div class="content-suggestion-header">
            nuxtjs {{ index }}
          </div>
          <nuxt-link
            v-for="result in group.data"
            :key="result.path"
            :to="result.path"
            aria-label="Link to result"
            class="content-suggestion--wrapper"
          >
            <div class="content-column-left">
              {{ result.category || 'no category' }}
            </div>
            <div class="content-column-right hover:bg-nuxt-lightgreen">
              {{ result.title }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    regroupResults () {
      const groups = {}
      this.results.forEach((result) => {
        const parsePathToGetGroupName = result.path.split('/')[2]
        if (!groups[parsePathToGetGroupName]) {
          groups[parsePathToGetGroupName] = {
            data: [result]
          }
        } else {
          groups[parsePathToGetGroupName].data.push(result)
        }
      })

      return groups
    }
  }
}
</script>

<style lang="scss" scoped>
.content-dropdown-menu {
    @apply absolute right-0 rounded p-0 text-left h-auto bg-transparent border-none shadow-2xl;

    top: 100%;
    z-index: 100;
    margin: 6px 0 0;
    max-width: 600px;
    min-width: 500px;
}

.mobile {
  .content-dropdown-menu {
    @apply overflow-auto;

    width: 100% !important;
    min-width: 0 !important;
    max-height: 500px;
  }
}

.content-dropdown-menu::before {
  @apply block absolute w-3 h-3 bg-white border;

  content: "";
  z-index: 1000;
  top: -7px;
  border-top: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border-radius: 2px;
  right: 48px;
}

.content-dataset {
  @apply relative bg-white rounded py-2 pr-2;
  border: 1px solid #d9d9d9;
}

.content-suggestion {
  @apply relative mt-2 px-2 py-0 bg-white overflow-hidden;

  z-index: 1000;
  color: #02060c;
}

.content-suggestion-header {
  @apply relative mb-2 px-1 text-base uppercase;
  border-bottom: 1px solid #ddd;
  color: #33363d;
}

.content-suggestion--wrapper {
  @apply w-full float-left pt-2 mb-2;
}

.content-column-right {
  @apply float-right relative px-2 flex items-center;

  width: 70%;
}

.content-column-right::before {
  @apply absolute block top-0 h-full;

    content: "";
    width: 1px;
    background: #ddd;
    left: -1px;
}

.content-column-left {
  @apply  flex items-center float-left justify-end relative px-2 text-sm;

  width: 30%;
  color: #a4a7ae;
}
</style>
