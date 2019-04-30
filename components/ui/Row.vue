<template>
  <div class="nui-row">
    <slot/>
  </div>
</template>

<style lang="scss">
$screens-md: 768px;

.nui-row {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: stretch;
  @media (min-width: $screens-md) {
    flex-direction: row;
  }
}
</style>
