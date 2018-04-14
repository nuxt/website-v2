<template>
  <ul class="ContributorList">
    <li class="ContributorGroup" v-for="group in groups" :key="group.title">
      <h2>
        {{ group.title }}
      </h2>

      <ul>
        <li class="Contributor" v-for="contributor in group.contributors" :key="contributor">
          <a :href="`https://github.com/${contributor}`" target="_blank" rel="noopener">
            <img class="Contributor__Image" :src="`https://github.com/${contributor}.png`" />
            <p class="Contributor__Id">
              {{ contributor }}
            </p>
          </a>
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

<style lang="scss" scoped>
.ContributorGroup {
  list-style: none;
}

.Contributor {
  display: inline-block;
  margin: 10px 15px;
  text-align: center;
  list-style: none;

  &__Image {
    width: 64px;
    height: 64px;
    border-radius: 64px;
  }

  &__Id {
    margin: 0;
  }
}
</style>
