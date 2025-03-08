<script setup lang="ts">

const canvasEl = useTemplateRef('canvas')
let spaceEffect: SpaceEffect|null = null

onMounted(() => {
  if (!canvasEl.value) {
    console.error('Failed to initialize space effect: canvas element not found')
    return
  }
  spaceEffect = new SpaceEffect(canvasEl.value)
  spaceEffect.start()

  ;(window as any).space = spaceEffect
})

onBeforeUnmount(() => {
  spaceEffect?.destroy()
  spaceEffect = null
})

function triggerSpeedOfLight() {
  spaceEffect?.speedOfLight()
  setTimeout(() => {
    spaceEffect?.normalSpeed()
  }, 2222)
}

const auth = useAuth()

watch(auth, () => {
  if (auth.value) {
    triggerSpeedOfLight()
  }
})

</script>

<template>
  <canvas ref="canvas" class="canvas" />
</template>

<style scoped lang="scss">
.canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  animation: fade-in 1s forwards;
  @keyframes fade-in {
    from { opacity: 0; }
  }
}
</style>
