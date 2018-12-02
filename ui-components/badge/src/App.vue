<template>
  <div id="app">
    <v-app>
      <usage/>
      <overlap/>
      <inline/>
      <icon/>
      <visibility/>
    </v-app>
  </div>
</template>

<script>
import Icon from "./components/Icon";
import Inline from "./components/Inline";
import Overlap from "./components/Overlap";
import Usage from "./components/Usage";
import Visibility from "./components/Visibility";

export default {
  name: "app",
  components: {
    Icon,
    Inline,
    Overlap,
    Usage,
    Visibility
  }
};
</script>