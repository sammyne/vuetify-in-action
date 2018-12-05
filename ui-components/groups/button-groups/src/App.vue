<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <in-toolbar/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import InToolbar from "./components/InToolbar";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    InToolbar,
    Usage
  }
};
</script>
