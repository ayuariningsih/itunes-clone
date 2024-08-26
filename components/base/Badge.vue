<template>
  <div
    :class="computedClass"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

// Define props
const props = defineProps({
  intent: {
    type: String as () => 'success' | 'process' | 'failed' | 'info' | 'action' | 'disabled' | 'inactive' | 'selected' | 'new',
    default: 'selected',
  },
  size: {
    type: String as () => 'small' | 'medium',
    default: 'medium',
  },
  className: {
    type: String,
    default: '',
  },
});

// Handle incoming attributes
const attrs = useAttrs();

// Define Tailwind classes for different variants
const badgeVariants = {
  intent: {
    success: 'border-success-border bg-success !text-white',
    process: 'border-warning-orange-border bg-warning-orange-surface !text-white',
    failed: 'border-error-border bg-error-surface text-error',
    info: 'border-neutral-40 bg-neutral-20 text-neutral-100',
    action: 'border-primary-main-blue-border bg-primary-main-blue-surface text-primary-main-blue',
    disabled: 'border-neutral-30 bg-neutral-20 text-neutral-60',
    inactive: 'border-neutral-60 bg-neutral-50 text-white',
    selected: 'border-primary-main-blue-border bg-primary-main-blue text-white',
    new: 'border-error-border bg-error text-white',
  },
  size: {
    small: 'text-[10px] py-0.5 px-3',
    medium: 'text-[14px] px-4 py-1',
  },
};

// Compute the final class string based on props
const computedClass = computed(() => {
  const { intent, size, className } = props;
  return twMerge(
    'rounded-[100px] whitespace-nowrap font-medium w-fit',
    badgeVariants.intent[intent],
    badgeVariants.size[size],
    className
  );
});
</script>
