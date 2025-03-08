<script setup lang="ts">

definePageMeta({
  layout: 'basic'
})

const auth = useAuth()

function onAnimationEnd() {
  navigateTo('/')
}

</script>

<template>
  <Transition name="auth-container" mode="out-in">
    <div v-if="!auth" class="auth-container">
      <AuthForm />
    </div>
    <div
      v-else="auth"
      class="success-circle"
      @animationend.self="onAnimationEnd"
    >
      <SvgoCheckIcon :fontControlled="false" />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.auth-container {
  margin: auto;
  &-leave-to {
    opacity: 0;
    scale: 1.1;
  }
  &-leave-active {
    transition: all .5s;
  }
}
.success-circle {
  position: relative;
  background: lightseagreen;
  height: 122px;
  width: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 50%;
  color: black;
  animation: success-circle 1.4s forwards;
  @keyframes success-circle {
    from {
      transform: scale(0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    25% {
      transform: scale(1);
      animation-timing-function: ease-in;
    }
    75% {
      transform: scale(1.2);
      opacity: 1;
      animation-timing-function: linear;
    }
    100% {
      transform: scale(2.2);// rotate(-540deg);
      opacity: 0;
    }
  }
  &:deep(svg) {
    width: 86px;
    animation: check .6s forwards;
    @keyframes check {
      from {
        clip-path: rect(0 0 100% 0);
      }
      to {
        clip-path: rect(0 100% 100% 0);
      }
    }
  }
}
</style>
