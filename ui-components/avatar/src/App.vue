<template>
  <div id="app">
    <v-app>
      <usage/>
      <advanced-usage/>
      <icon-and-text/>
    </v-app>
  </div>
</template>

<script>
import AdvancedUsage from "./components/AdvancedUsage";
import IconAndText from "./components/IconAndText";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    AdvancedUsage,
    IconAndText,
    Usage
  }
};
</script>