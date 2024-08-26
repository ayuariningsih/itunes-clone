<template>
  <component
    :is="icon"
    :class="computedStyle"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { twMerge } from 'tailwind-merge';

// Define props
const props = defineProps({
  icon: {
    type: Object as () => typeof import('*.svg'),
    required: true,
  },
  size: {
    type: String as () => 'xs' | 'small' | 'medium' | 'large',
    default: 'medium',
  },
  style: {
    type: String,
    default: '',
  },
});

// Define size variants
const iconVariants = {
  xs: 'w-3 h-3',
  small: 'w-4 h-4',
  medium: 'w-5 h-5',
  large: 'w-6 h-6',
};

// Compute the combined style name
const computedStyle = computed(() => {
  return twMerge(iconVariants[props.size], props.style);
});
</script>
