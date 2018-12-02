<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <slots/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Slots from "./components/Slots";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Slots,
    Usage
  }
};
</script>
