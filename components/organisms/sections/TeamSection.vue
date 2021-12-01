<template>
  <div class="pt-16 d-container-content">
    <h2 class="text-center pb-4 text-display-4 font-serif">
      <Markdown use="title" unwrap="p" />
    </h2>
    <div class="text-center text-lg pb-16 d-heading-description px-8 md:px-12 lg:px-18">
      <Markdown use="description" unwrap="p" />
    </div>
    <div class="flex justify-center">
      <div class="flex flex-wrap justify-center">
        <div v-for="member in team.members" :key="member.name">
          <TeamMember :member="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useNuxtApp, useLazyAsyncData } from '#app'
import { useDocusContent } from '#docus'

export default defineComponent({
  props: {
    teamName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const $content = useDocusContent()
    const { i18n } = useNuxtApp().vue2App

    const { data: teams } = useLazyAsyncData(
      'team-section',
      async () =>
        await $content
          .search(`/collections/teams/${props.teamName}`, { deep: true })
          .where({ language: i18n.locale })
          .sortBy('position', 'asc')
          .fetch()
    )

    const team = computed(() => teams?.value[0] || false)

    return {
      team
    }
  }
})
</script>
