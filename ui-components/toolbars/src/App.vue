<template>
  <div id="app">
    <v-app>
      <usage/>
      <app-bar/>
      <app-bar-with-items/>
      <app-bar-with-extension/>
      <column-width-with-hierarchy/>
      <flexible-toolbar-and-card-toolbar/>
      <floating-with-search/>
      <variations/>
      <prominent-toolbars/>
      <dense-toolbars/>
      <scrolling-techniques/>
      <app-bar-with-menu/>
      <system-bars/>
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import ColumnWidthWithHierarchy from "./components/ColumnWidthWithHierarchy";
import AppBarWithExtension from "./components/AppBarWithExtension";
import AppBarWithItems from "./components/AppBarWithItems";
import AppBarWithMenu from "./components/AppBarWithMenu";
import DenseToolbars from "./components/DenseToolbars";
import FlexibleToolbarAndCardToolbar from "./components/FlexibleToolbarAndCardToolbar";
import FloatingWithSearch from "./components/FloatingWithSearch";
import ProminentToolbars from "./components/ProminentToolbars";
import ScrollingTechniques from "./components/ScrollingTechniques";
import SystemBars from "./components/SystemBars";
import Usage from "./components/Usage";
import Variations from "./components/Variations";

export default {
  name: "app",
  components: {
    AppBar,
    ColumnWidthWithHierarchy,
    AppBarWithExtension,
    AppBarWithItems,
    AppBarWithMenu,
    DenseToolbars,
    FlexibleToolbarAndCardToolbar,
    FloatingWithSearch,
    ProminentToolbars,
    ScrollingTechniques,
    SystemBars,
    Usage,
    Variations
  }
};
</script>
