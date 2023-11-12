<template>
  <v-app-bar>
    <v-app-bar-title> TBD Project </v-app-bar-title>

    <v-menu location="bottom">
      <template #activator="{ props }">
        <v-btn v-bind="props" density="comfortable" :icon="getCurrentThemeIcon">
          <!-- Баг с фреймворком, пришлось ставить иконку снизу -->
          <v-icon
            :icon="getCurrentThemeIcon"
            color="blue-lighten-1"
            size="24"
          />
        </v-btn>
      </template>

      <v-list>
        <theme-item
          v-for="item in THEME_LIST_ITEMS"
          :key="item.id"
          :icon="item.icon"
          :label="item.label"
          @select="change(item.theme as Theme)"
          :is-active="
            (!storage && item.theme === 'auto') || storage === item.theme
          "
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
const THEME_LIST_ITEMS = [
  {
    id: 1,
    label: "Light",
    icon: "mdi-white-balance-sunny",
    theme: "light",
  },
  {
    id: 2,
    label: "Dark",
    icon: "mdi-weather-night",
    theme: "dark",
  },
  {
    id: 3,
    label: "System",
    icon: "mdi-monitor",
    theme: "auto",
  },
];
</script>

<script setup lang="ts">
import { computed } from "vue";
import ThemeItem from "./ThemeItem.vue";
import useUpdateTheme, { Theme } from "@/composables/useUpdateTheme";

const { change, current, storage } = useUpdateTheme();

const getCurrentThemeIcon = computed(() => {
  if (!storage.value) return "mdi-monitor";

  return current.value === "dark"
    ? "mdi-weather-night"
    : "mdi-white-balance-sunny";
});
</script>
