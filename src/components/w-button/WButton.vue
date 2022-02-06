<template>
  <button
    :class="defaultClass"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue';

  const props = defineProps({
    variant: {
      type: String,
      default: 'default'
    },
    disabled: Boolean
  });

  const defaultClass = ref('bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded');
</script>
