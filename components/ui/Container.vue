<template>
  <div class="nui-container">
    <slot/>
  </div>
</template>

<style lang="scss">
$screens-sm: 640px;
$screens-md: 768px;
$screens-lg: 1024px;
$screens-xl: 1280px;

.nui-container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (min-width: $screens-sm) {
    max-width: $screens-sm;
  }
  @media (min-width: $screens-md) {
    max-width: $screens-md;
  }
  @media (min-width: $screens-lg) {
    max-width: $screens-lg;
  }
  @media (min-width: $screens-xl) {
    max-width: $screens-xl;
  }
}
</style>
