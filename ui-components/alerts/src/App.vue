<template>
  <div id="app">
    <v-app>
      <usage/>
      <closable/>
      <custom-icons/>
      <display-transition/>
      <outline/>
    </v-app>
  </div>
</template>

<script>
import Closable from "./components/Closable";
import CustomIcons from "./components/CustomIcons";
import DisplayTransition from "./components/DisplayTransition";
import Outline from "./components/Outline";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Closable,
    CustomIcons,
    DisplayTransition,
    Outline,
    Usage
  }
};
</script>