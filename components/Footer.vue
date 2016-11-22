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
  background-color: #fff;
  border-top: 1px solid #dbdfe1;
  &__Text
  {
    margin: 0;
    text-align: center;
    padding: 30px 0;
    color: #505153;
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
      color: #505153;
      &:hover
      {
        color: #00BCD4;
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
