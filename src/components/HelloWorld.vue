<template>
  <div class="flex items-center justify-center h-screen text-green-500">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    message: {
      type: String,
      default: 'default'
    },
    disabled: Boolean
  });
</script>
