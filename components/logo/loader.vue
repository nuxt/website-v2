<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 25" fill="none" height="80" class="logo-loader">
    <path d="M24.236 22.006h10.742L25.563 5.822l-8.979 14.31a4 4 0 0 1-3.388 1.874H2.978l11.631-20 5.897 10.567" />
  </svg>
</template>

<style>
.logo-loader path {
  fill: none;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  /* Stroke-dasharray property */
  stroke-dasharray: 120;
  stroke-dashoffset: 120;

 animation: move 5s linear infinite;
}

@keyframes move {
  50% {
    stroke: #00dc82;
  }
  100% {
    stroke: #fff;
    stroke-dashoffset: -120;
  }
}
</style>
