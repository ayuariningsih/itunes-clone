<template>
  <form @submit.prevent="onSubmit">
    <div class="flex items-center shadow border border-solid border-[rgba(0,0,0,.07)] rounded-[10px] p-[14px]">
      <input @input="onInput" type="text" :value="inputText" class="flex-1 text-[2rem]" placeholder="input" />
      <button><IconSearch /></button>
    </div>
  </form>
</template>

<script setup lang="ts">
const props =  withDefaults(defineProps<{
  word?: string
}>(), {
  word: ''
})

const emit = defineEmits<{
  (e: 'search', word: string): void
}>()

const inputText = ref(props.word)

const onInput = (event: Event) => {
  const target = event.currentTarget as HTMLInputElement
  inputText.value = target.value
}

const onSubmit = async () => {
  emit('search', inputText.value)
}
</script>
