<script setup lang="ts">

const {
  borderWidth = '1px',
  tag = 'div',
} = defineProps<{
  borderWidth?: string
  tag?: string
  padding?: string
}>()

const cardEl = useTemplateRef<HTMLElement>('card')

const gradientOpacity = ref(0)
const gradientX = ref(0)
const gradientY = ref(0)
const gradientStyle = computed(() => ({
  opacity: gradientOpacity.value,
  transform: `translate(calc(${gradientX.value}px - 50%), calc(${gradientY.value}px - 50%))`
}))

const onPointerMove = (event: MouseEvent) => {
  const { clientX, clientY } = event
  if (!cardEl.value) return
  const { x: cardX, y: cardY } = cardEl.value?.getBoundingClientRect()
  gradientX.value = clientX - cardX
  gradientY.value = clientY - cardY
  gradientOpacity.value = 1
}

onMounted(() => {
  document.addEventListener('mousemove', onPointerMove)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onPointerMove)
})
</script>

<template>
  <Component
    :is="tag"
    class="card"
    ref="card"
    :style="{ padding: borderWidth }"
  >
    <div class="gradient-layer" :style="gradientStyle" />
    <div class="content" :style="{ padding }">
      <slot />
    </div>
  </Component>
</template>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  position: relative;
  background: rgba(white, .2);
  .gradient-layer {
    position: absolute;
    height: 777px;
    width: 777px;
    pointer-events: none;
    background: radial-gradient(circle at 50% 50%, rgba(lightseagreen, .6), transparent 70%);
    transition: opacity 1s, transform .1s;
  }
  .content {
    position: relative;
    height: 100%;
    width: 100%;
    background: black;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
