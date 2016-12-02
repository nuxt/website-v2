<template>
  <footer class="Footer">
    <div class="container">
      <div class="Footer__Text">
        Made by Chopin Brothers:
        <a href="https://github.com/Atinux" target="_blank">@Atinux</a>
        and
        <a href="https://github.com/alexchopin" target="_blank">@alexchopin</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.Footer
{
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #dbdfe1;
  &__Text
  {
    margin: 0;
    text-align: center;
    padding: 30px 0;
    color: #35495e;
    letter-spacing: 0.5px;
    font-weight: 400;
    &__Icon
    {
      width: 30px;
      height: 15px;
      padding-left: 5px;
      display: inline-block;
    }
    a
    {
      color: #35495e;
      &:hover
      {
        color: #41b883;
      }
    }
  }
}
.smile.icon
{
  color: #000;
  i
  {
    color: #fff;
  }
}
</style>
