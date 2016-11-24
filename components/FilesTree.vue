<template>
  <div class="FilesTree">
    <div class="FilesTree__Left">
      <div class="FilesTree__Left__Header">

      </div>
      <div class="FilesTree__Left__Body">

      </div>
    </div>
    <div class="FilesTree__Right">

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    example: {
      type: String,
      required: true
    }
  },
  data () {
    // Default data
    let data = {
      releases: []
    }
    return axios({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/examples/' + this.example,
      headers: {
        'Authorization': 'token 4aa6bcf919d238504e7db59a66d32e78281c0ad3'
      }
    })
    .then((res) => {
      console.log(res.data)
      let releases = res.data
      return { releases }
    })
  }
}
</script>

<style lang="scss" scoped>
.FilesTree
{
  position: relative;
  background-color: #2e2f30;
  &__Left
  {
    &__Header
    {

    }
  }
  &__Right
  {

  }
  // @media (min-width: 768px)
  // {
  // }
}
</style>
