<template>
  <div id="app">
    <SpaceCanvas />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=VT323&display=swap');

:root {
  --font-1: 'Montserrat', sans-serif;
  --font-2: 'VT323', monospace;
}
body {
  margin: 0;
  padding: 0;
  background: black;
  color: white;
  font-family: var(--font-1);
  font-weight: lighter;
  text-wrap: pretty;
}
* {
  box-sizing: border-box;
}
h1,h2,h3,h4,p {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity .6s;
}

</style>