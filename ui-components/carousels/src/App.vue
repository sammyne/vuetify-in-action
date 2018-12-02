<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <custom-transition/>
        <custom-icons/>
        <hide-controls/>
        <hide-delimiters/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import CustomIcons from "./components/CustomIcons";
import CustomTransition from "./components/CustomTransition";
import HideControls from "./components/HideControls";
import HideDelimiters from "./components/HideDelimiters";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    CustomIcons,
    CustomTransition,
    HideControls,
    HideDelimiters,
    Usage
  }
};
</script>