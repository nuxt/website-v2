<template>
  <footer class="Footer">
    <div class="container">
      <div class="Footer__Text">
        Made with
        <div class="Footer__Text__Icon">
          <div class="smile icon">
            <i></i>
          </div>
        </div>
        by Chopin Brothers (
        <a href="https://github.com/Atinux" target="_blank">@Atinux</a>
        and
        <a href="https://github.com/alexchopin" target="_blank">@alexchopin</a>
        )
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.Footer
{
  width: 100%;
  background-color: #000;
  &__Text
  {
    margin: 0;
    text-align: center;
    padding: 30px 0;
    color: #9aabb1;
    letter-spacing: 0.5px;
    font-weight: 300;
    &__Icon
    {
      width: 30px;
      height: 15px;
      padding-left: 5px;
      display: inline-block;
    }
    a
    {
      color: #9aabb1;
      &:hover
      {
        color: #fff;
      }
    }
  }
}
.smile.icon
{
  color: #9aabb1;
  i
  {
    color: #000;
  }
}
</style>
