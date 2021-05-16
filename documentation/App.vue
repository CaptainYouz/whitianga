<template>
  <MDButton />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MDButton from './Button.md';

  export default defineComponent({
    name: 'App',
    components: {
      MDButton
    }
  });
</script>
