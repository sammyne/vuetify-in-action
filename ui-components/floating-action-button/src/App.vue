<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <small-variant/>
        <display-animation/>
        <lateral-screens/>
        <speed-dial/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import DisplayAnimation from "./components/DisplayAnimation";
import LateralScreens from "./components/LateralScreens";
import SmallVariant from "./components/SmallVariant";
import SpeedDial from "./components/SpeedDial";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    DisplayAnimation,
    LateralScreens,
    SmallVariant,
    SpeedDial,
    Usage
  }
};
</script>
