<template>
  <div id="app">
    <v-app>
      <!--
      <usage/>
      <colored-drawer/>
      <permanent-floating-drawer/>
      <avatars/>
      -->
      <!--<combined-drawers/>-->
      <!--<dark-theme/>-->
      <!--<mini/>-->
      <!--<nested-lists/>-->
      <temporary/>
    </v-app>
  </div>
</template>

<script>
/*
import Avatars from "./components/Avatars";
import ColoredDrawer from "./components/ColoredDrawer";
import PermanentFloatingDrawer from "./components/PermanentFloatingDrawer";
import Usage from "./components/Usage";
*/

//import CombinedDrawers from "./components/CombinedDrawers";
//import DarkTheme from "./components/DarkTheme";
//import Mini from "./components/Mini";
//import NestedLists from "./components/NestedLists";
import Temporary from "./components/Temporary";

export default {
  name: "app",
  components: {
    /*
    Avatars,
    ColoredDrawer,
    PermanentFloatingDrawer,
    Usage
    */

    //CombinedDrawers
    //DarkTheme
    //Mini
    //NestedLists
    Temporary
  }
};
</script>
