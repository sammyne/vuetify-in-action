<template>
  <div id="app">
    <v-app>
      <usage/>
      <media-with-text/>
      <horizontal-cards/>
      <grids/>
      <custom-actions/>
    </v-app>
  </div>
</template>

<script>
import CustomActions from "./components/CustomActions";
import Grids from "./components/Grids";
import HorizontalCards from "./components/HorizontalCards";
import MediaWithText from "./components/MediaWithText";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    CustomActions,
    Grids,
    HorizontalCards,
    MediaWithText,
    Usage
  }
};
</script>