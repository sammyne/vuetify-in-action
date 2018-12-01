<template>
  <div id="app">
    <v-app>
      <usage/>
      <offset/>
      <order/>
    </v-app>
  </div>
</template>

<script>
import Offset from "./components/Offset.vue";
import Order from "./components/Order.vue";
import Usage from "./components/Usage.vue";

export default {
  name: "app",
  components: {
    Offset,
    Order,
    Usage
  }
};
</script>