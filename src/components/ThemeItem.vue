<template>
  <v-list-item>
    <v-btn
      :variant="isActive ? 'tonal' : 'text'"
      @click="emit('select')"
      :color="isActive ? 'blue-lighten-1' : undefined"
      class="rounded-lg"
    >
      <span class="d-flex ga-2">
        <v-icon :icon="icon" />

        {{ label }}
      </span>
    </v-btn>
  </v-list-item>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  isActive?: boolean;
}>();

const emit = defineEmits<{
  (e: "select"): void;
}>();
</script>

<style scoped></style>
