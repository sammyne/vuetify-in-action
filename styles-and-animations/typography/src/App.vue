<template>
  <div id="app">
    <v-app>
      <font-sizes/>
      <font-weights/>
      <text-transforms/>
      <text-wrapping/>
    </v-app>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import FontSizes from "./components/FontSizes";
import FontWeights from "./components/FontWeights";
import TextTransforms from "./components/TextTransforms";
import TextWrapping from "./components/TextWrapping";

export default {
  name: "app",
  components: {
    FontSizes,
    FontWeights,
    TextTransforms,
    TextWrapping
  }
};
</script>