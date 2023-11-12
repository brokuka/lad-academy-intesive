<template>
  <router-view />
</template>

<script lang="ts" setup>
import useUpdateTheme from "./composables/useUpdateTheme";

// При загрузке приложения обновляем тему
useUpdateTheme().update();
</script>
