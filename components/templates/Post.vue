<template>
  <div>
    <div class="py-16 sm:py-24 relative">
      <div class="relative max-w-3xl mx-auto">
        <NuxtLink
          :to="$contentLocalePath(page.to.substr(0, page.to.indexOf('/', 1)))"
          class="absolute top-0 left-0 px-4 -mt-12 sm:-mt-16"
        >
          <span
            class="
              text-sm
              sm:text-base
              leading-none
              text-gray-900
              dark:text-gray-100
              hover:d-secondary-text
              font-medium
            "
            >← Back</span
          >
        </NuxtLink>
        <div class="mb-6 px-4">
          <h1 class="flex-1 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {{ page.title }}
          </h1>
          <p class="my-4 text-base font-medium d-secondary-text">
            {{ page.description }}
          </p>

          <div class="flex sm:flex-row items-center">
            <time v-if="page.date" :datetime="page.date" class="font-medium mr-2 text-sm d-tertiary-text">
              {{ formatDateByLocale($i18n.locale, page.date) }}
            </time>

            <div v-else class="font-medium mr-2 text-sm text-yellow-600 dark:text-yellow-500">
              ⚠️ Please add
              <ProseCodeInline>date: {{ today }}</ProseCodeInline>
              in the page front-matter`
            </div>
            <div v-if="page.authors && page.authors.length" class="text-sm d-tertiary-text">|</div>
            <div class="flex ml-4 sm:ml-2">
              <a
                v-for="(author, index) in page.authors"
                :key="index"
                :href="author.link"
                target="_blank"
                rel="noopener noindex nofollow"
                class="flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2 hover:d-secondary-text"
              >
                <NuxtImg
                  class="rounded-full border d-border-tertiary inline-block h-8 w-8 sm:mr-1"
                  height="32"
                  width="32"
                  :src="author.avatarUrl"
                  :alt="author.name"
                  :title="author.name"
                />
                <span class="hidden sm:inline-block font-medium text-sm">
                  {{ author.name }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 mb-8 mx-4">
          <NuxtImg :src="imgUrl" :alt="page.title" class="object-cover" />
        </div>
      </div>

      <div class="max-w-3xl mx-auto">
        <BlogpostToc :toc="page.body.toc.links" :title="page.body.toc.title" class="mb-8" />
        <DocusContent :document="page" class="px-4 docus-content" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    console.log(props.page)
    onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '')
        // do not remove setTimeout (wrong scroll pos)
        setTimeout(() => {
          scrollToHeading(hash, '--blogpost-scroll-margin-block')
        }, 300)
      }

      // do not remove setTimeout (headings missing)
      setTimeout(() => {
        const headings = [
          ...document.querySelectorAll('.docus-content h1'),
          ...document.querySelectorAll('.docus-content h2'),
          ...document.querySelectorAll('.docus-content h3')
        ]
        headings.forEach(heading => {
          heading.addEventListener('click', e => {
            e.preventDefault()
            const hash = e.target.href.split('#').pop()
            scrollToHeading(hash, '--blogpost-scroll-margin-block')
          })
        })
      }, 300)
    })

    const formatDateByLocale = (locale, d) => {
      const currentLocale = locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }

    function convertPropToPixels(prop) {
      const tempDiv = document.createElement('div')

      tempDiv.style.position = 'absolute'
      tempDiv.style.opacity = '0'
      tempDiv.style.height = getComputedStyle(document.documentElement).getPropertyValue(prop)

      document.body.appendChild(tempDiv)

      const pixels = parseInt(getComputedStyle(tempDiv).height)

      document.body.removeChild(tempDiv)

      return pixels
    }

    function scrollToHeading(id, scrollMarginCssVar) {
      history.replaceState({}, '', '#' + id)

      setTimeout(() => {
        const escapedId = id.replace(/\./g, '\\.')
        const offset = document.querySelector(`#${escapedId}`).offsetTop - convertPropToPixels(scrollMarginCssVar)
        window.scrollTo(0, offset)
      })
    }

    return {
      today: new Date().toISOString().split('T')[0],
      formatDateByLocale
    }
  },
  computed: {
    imgUrl() {
      return this.page.imgUrl || 'https://source.unsplash.com/random'
    }
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
})
</script>
