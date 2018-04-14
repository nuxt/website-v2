<template>
  <ul class="ContributorList">
    <li class="Contributor__Group" v-for="group in groups" :key="group.title">
      <h2>
        {{ group.title }}
      </h2>

      <ul>
        <li class="Contributor" v-for="contributor in group.contributors" :key="contributor">
          {{ contributor }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'contributor-list',
  computed: {
    groups() {
      return this.$store.state.contributors
    }
  }
}
</script>
