<template>
  <div class="page-layout">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  max-width: 1122px;
  margin: 0 auto;
  position: relative;
  padding: 22px;
}
</style>