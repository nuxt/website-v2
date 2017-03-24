<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"></div>
    <div class="Triangle Triangle--one"></div>
    <div class="Triangle Triangle--three"></div>
    <div class="Triangle Triangle--four"></div>
  </div>
</template>

<style lang="scss" scoped>
.VueToNuxtLogo
{
  display: inline-block;
  animation: turn 2s linear forwards;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}
.Triangle
{
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  &--one
  {
    border-left: 105px solid transparent;
    border-right: 105px solid transparent;
    border-bottom: 180px solid #41B883;
  }
  &--two
  {
    top: 30px;
    left: 35px;
    animation: goright 0.5s linear forwards 2.5s;
    border-left: 87.5px solid transparent;
    border-right: 87.5px solid transparent;
    border-bottom: 150px solid #3B8070;
  }
  &--three
  {
    top: 60px;
    left: 35px;
    animation: goright 0.5s linear forwards 2.5s;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 120px solid #35495E;
  }
  &--four
  {
    top: 120px;
    left: 70px;
    animation: godown 0.5s linear forwards 2s;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 60px solid #fff;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 180px;
  }
}
@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
