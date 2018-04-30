<template>
  <div class="ContributorList">
    <h2>
      Contributors to this page
    </h2>

    <ul>
      <li class="Contributor" v-for="contributor in contributors" :key="contributor.userName">
        <a :href="`https://github.com/${contributor.userName}`" target="_blank" rel="noopener">
          <img class="Contributor__Image" :src="`https://github.com/${contributor.userName}.png`" />
          <p class="Contributor__UserName">
            {{ contributor.userName }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contributor-list',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    contributors() {
      return [
        { userName: 'inouetakuya' },
        { userName: 'shika358' },
        { userName: 'kazupon' },
        { userName: 'potato4d' },
        { userName: '38elements' },
        { userName: 'aytdm' },
        { userName: 'chikathreesix' },
        { userName: 'torounit' },
        { userName: 'MasahiroHarada' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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

  &__UserName {
    margin: 0;
  }
}
</style>
