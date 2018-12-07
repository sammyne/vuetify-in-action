<template>
  <div id="app">
    <v-app>
      <usage/>
      <no-data-with-chips/>
      <advanced-custom-options/>
      <multiple-combobox/>
    </v-app>
  </div>
</template>

<script>
import AdvancedCustomOptions from "./components/AdvancedCustomOptions";
import MultipleCombobox from "./components/MultipleCombobox";
import NoDataWithChips from "./components/NoDataWithChips";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    AdvancedCustomOptions,
    MultipleCombobox,
    NoDataWithChips,
    Usage
  }
};
</script>
