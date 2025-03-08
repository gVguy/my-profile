<script setup lang="ts">

const name = ref('')
const password = ref('')

const isSubmitDisabled = computed(() => !name.value || isLoading.value)

function onSubmit () {
  handleAuth()
}

const auth = useAuth()

const {
  isLoading,
  load: handleAuth
} = useLoading(async () => {
  try {
    const body: Auth = {
      user: name.value,
      password: password.value
    }
    const response = await fakeFetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data: Auth = await response.json()
    console.log('fakeFetch response data:', data)
    auth.value = data
  } catch(error) {
    console.error(error) // this will never happen :)
  }
})

</script>

<template>
  <TheCard
    tag="form"
    class="auth-form"
    :class="{ success: !!auth }"
    @submit.prevent="onSubmit"
  >
    <h1 class="header">Welcome</h1>
    <div class="inputs">
      <TheInput
        v-model="name"
        class="form-input name"
        name="username"
        type="text"
        label="Name"
        required
      />
      <TheInput
        v-model="password"
        class="form-input password"
        name="password"
        type="password"
        label="Password"
      />
    </div>
    <p class="hint">
      This is a demo form.<br>Use any name you prefer. Password is optional.
    </p>
    <TheButton
      type="submit"
      class="submit-button"
      :disabled="isSubmitDisabled"
    >{{ isLoading ? 'Loading...' : 'Enter' }}</TheButton>
  </TheCard>
</template>

<style scoped lang="scss">
.auth-form {
  width: 350px;
  max-width: calc(100vw - 44px);
  height: 522px;
  border-radius: 20px;
  box-shadow: 0 0 222px rgba(royalblue, .2);
  animation: auth-form 1s forwards;
  @keyframes auth-form {
    from {
      opacity: 0;
      scale: .9;
    }
  }
  &:deep(> .content) {
    padding: 40px;
    @include screen($sm) {
      padding: 40px 22px;
    }
  }
  .header {
    font-weight: lighter;
  }
  .inputs {
    margin: auto 0;
    .name {
      margin-bottom: 22px;
    }
  }
  .submit-button {
    width: 100%;
    font-size: 18px;
  }
  .hint {
    text-align: center;
    color: rgba(white, .4);
    max-width: 222px;
    margin-bottom: 22px;
    font-size: 14px;
  }

  // form elements appear animation
  .header, .submit-button, .form-input, .hint {
    opacity: 0;
    animation: form-element .6s forwards;
    @keyframes form-element {
      from {
        translate: 0 22px;
      }
      to {
        opacity: 1;
      }
    }
  }
  .header {
    animation-delay: .4s;
  }
  .form-input {
    &.name {
      animation-delay: .5s;
    }
    &.password {
      animation-delay: .6s;
    }
  }
  .hint {
    animation-delay: .7s;
  }
  .button {
    animation-delay: .8s;
  }
}
</style>
