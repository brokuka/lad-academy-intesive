import { useLocalStorage, usePreferredDark } from "@vueuse/core";
import { Ref } from "vue";
import { useTheme } from "vuetify";

export type Theme = "light" | "dark" | "auto";

export default function useUpdateTheme() {
  const dark = usePreferredDark();
  const theme = useTheme();
  const themeStorage = useLocalStorage<Theme>("theme", null, {
    writeDefaults: false,
  });

  const change = (variant: Theme) => {
    theme.global.name.value = variant;

    if (variant !== "auto") {
      themeStorage.value = variant;
    } else themeStorage.value = undefined;

    update();
  };

  const update = () => {
    // if (themeStorage.value !== "auto")
    //   return (theme.global.name.value = themeStorage.value);

    // (theme.global.name.value as Theme) = dark.value ? "dark" : "light";

    if (themeStorage.value)
      return (theme.global.name.value = themeStorage.value);

    (theme.global.name.value as Theme) = dark.value ? "dark" : "light";
  };

  return {
    storage: themeStorage,
    current: theme.global.name as Ref<Theme>,
    change,
    update,
  };
}
