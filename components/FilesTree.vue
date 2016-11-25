<template>
  <div class="FilesTree">
    <div class="FilesTree__Left">
      <div class="FilesTree__Left__Header">
        {{ this.example }}
      </div>
      <div class="FilesTree__Left__Body">
        <recursive-list :path="'examples/'+example"></recursive-list>
      </div>
    </div>
    <div class="FilesTree__Right">
      <!-- <div class="FilesTree__Right__Header"> -->
        <!-- {{ currentFile.name }} -->
      <!-- </div> -->
      <!-- <pre>
        <code>
          test
        </code>
      </pre> -->
      <!-- {{ currentFile.download_url }} -->
    </div>
  </div>
</template>

<script>
import RecursiveList from './RecursiveList.vue'
// Pour download_url
export default {
  props: {
    example: {
      type: String,
      required: true
    }
  },
  // data () {
  //   return {
  //     currentFile: null
  //   }
  // },
  computed: {
    file () {
      return this.$store.state.currentFile
    }
  },
  components: {
    RecursiveList
  }
}
</script>

<style lang="scss" scoped>
.FilesTree
{
  margin: 30px 0;
  position: relative;
  background-color: #2e2f30;
  &__Left
  {
    &__Header
    {
      padding: 15px 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      background-color: #222;
      color: #fff;
      font-weight: 300;
    }
    &__Body
    {
      padding: 8px 10px 14px 0;
    }
  }
  &__Right
  {
    overflow: hidden;
  }
}
</style>
