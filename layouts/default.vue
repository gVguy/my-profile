<script setup lang="ts">
import BasicLayout from './basic.vue'

const auth = useAuth()

function signOut() {
  auth.value = null
  navigateTo('/signin')
}

</script>

<template>
  <BasicLayout>
    <header class="header">
      <div class="user">
        <p>Hi there, <span class="username">{{ auth?.user }}</span></p>
        <button
          class="logout-button"
          @click="signOut"
        >
          Exit
          <SvgoLogoutIcon :fontControlled="false" />
        </button>
      </div>
    </header>
    <main class="main">
      <slot></slot>
    </main>
  </BasicLayout>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  margin-bottom: 44px;
  .user {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    .username {
      font-weight: normal;
    }
    .logout-button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      outline: none;
      color: rgba(white, .8);
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: color .4s;
      margin-left: auto;
      &:deep(svg) {
        width: 24px;
      }
      &:hover,
      &:focus {
        color: lightseagreen;
      }
    }
  }
}
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>