<template>
  <div id="app">
    <v-app>
      <usage/>
      <auto-grow/>
      <beautiful-forms/>
    </v-app>
  </div>
</template>

<script>
import AutoGrow from "./components/AutoGrow";
import BeautifulForms from "./components/BeautifulForms";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    AutoGrow,
    BeautifulForms,
    Usage
  }
};
</script>