<script setup lang="ts">
defineProps<{
  disabled?: boolean
  type?: 'button'|'submit'
}>()

const onMouseMove = (e: MouseEvent) => {
  glowLeft.value = e.offsetX
  glowTop.value = e.offsetY
}

const glowLeft = ref(0)
const glowTop = ref(0)

</script>

<template>
  <button
    class="button"
    :type="type"
    :class="{ disabled }"
    :disabled="disabled"
    @mousemove="onMouseMove"
  >
    <div class="glow-layer"
      :style="{
        left: glowLeft + 'px',
        top: glowTop + 'px',
      }"
    ></div>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<style lang="scss" scoped>
button {
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 10px 22px;
  border-radius: 10px;
  background: none;
  border: none;
  position: relative;
  overflow: hidden;
  // height: 42px;
  // min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: rgba(lightseagreen, .8);
  outline: 1px solid transparent;
  transition: outline-color .4s, background-color .4s;
  &.disabled {
    background: rgba(lightseagreen, .4);
    pointer-events: none;
    .glow-layer {
      visibility: hidden;
    }
  }
  &:focus {
    outline-color: aquamarine;
  }
  .content {
    position: relative;
    pointer-events: none;
  }
  .glow-layer {
    position: absolute;
    transition: opacity .6s;
    background: rgba(aquamarine, .5);
    border-radius: 50%;
    width: 100%;
    height: 200%;
    filter: blur(32px);
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }
  @media (hover:hover) {
    &:hover {
      .glow-layer {
        opacity: 1;
      }
    }
  }
}
</style>