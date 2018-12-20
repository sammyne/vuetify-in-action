<template>
  <div id="app">
    <v-app>
      <usage/>
      <font-awesome/>
      <material-design-icons/>
      <color/>
      <buttons/>
      <clickable/>
    </v-app>
  </div>
</template>

<script>
import Buttons from "./components/Buttons";
import Clickable from "./components/Clickable";
import Color from "./components/Color";
import FontAwesome from "./components/FontAwesome";
import MaterialDesignIcons from "./components/MaterialDesignIcons";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Buttons,
    Clickable,
    Color,
    FontAwesome,
    MaterialDesignIcons,
    Usage
  }
};
</script>
