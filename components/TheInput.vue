<script setup lang="ts">

const props = defineProps<{
  name: string
  type: 'text'|'password'
  label?: string
  required?: boolean
  autocomplete?: string
}>()

const model = defineModel<string>()

const focus = ref(false)

const showPassword = ref(false)
const resultType = computed(() => {
  if (props.type == 'password' && showPassword.value) {
    return 'text'
  }
  return props.type
})

</script>

<template>
  <div class="the-input">
    <label v-if="label" :for="name">
      {{ label }}
      <span v-if="required" class="asterisk">*</span>
    </label>
    <div class="input-container">
      <input
        v-model="model"
        :id="name"
        :type="resultType"
        :name="name"
        :required="required"
        :autocomplete="autocomplete"
        @focus="focus = true"
        @blur="focus = false"
      >
      <button
        type="button"
        class="eye-icon"
        v-if="type == 'password'"
        @click.prevent="showPassword = !showPassword"
        aria-label="Toggle password visibility"
      >
        <SvgoEyeIconOff v-if="showPassword" />
        <SvgoEyeIcon v-else />
      </button>
      <Transition name="border">
        <div class="border" v-show="focus"></div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the-input {
  position: relative;
  --border-radius: 6px;
  %hover-input {
    background: rgba(white, .15);
  }
  &:hover .input-container input {
    @extend %hover-input;
  }
  .input-container {
    position: relative;
    input {
      background: rgba(white, .1);
      border-radius: var(--border-radius);
      font-family: var(--font-2);
      color: white;
      font-size: 32px;
      padding: 18px 12px 12px;
      width: 100%;
      color: rgba(white, .8);
      outline: none;
      border: none;
      transition: background-color .4s;
      &[type="password"] {
        padding-right: 36px;
      }
      &:focus {
        @extend %hover-input;
      }
    }
    .border {
      // height: var(--border-radius);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      pointer-events: none;
      mask: linear-gradient(0deg, black, transparent);
      border-color: lightseagreen;
      border-width: 0 1px 1px;
      border-style: solid;
      border-radius: 0 0 var(--border-radius) var(--border-radius);
      clip-path: rect(0 100% 100% 0);
      &-enter-from {
        clip-path: rect(0 0 100% 0);
      }
      &-leave-to {
        // clip-path: rect(0 100% 100% 100%);
        opacity: 0;
      }
      &-enter-active,
      &-leave-active {
        transition: clip-path .4s, opacity .4s;
      }
    }
    .eye-icon {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 0 12px;
      cursor: pointer;
      background: none;
      outline: none;
      border: none;
      font-size: 24px;
      color: rgba(white, .6);
      transition: color .4s;
      &:hover,
      &:focus {
        color: rgba(aquamarine, .8);
      }
    }
  }
  label {
    color: rgba(white, .8);
    margin-bottom: 4px;
    display: block;
    // position: absolute;
    // top: -12px;
    // left: 12px;
    // border-radius: 3px;
    // background: black;
    // padding: 2px 6px;
    // border: 1px solid rgba(white, .1);
    .asterisk {
      color: indianred;
    }
  }
}
</style>