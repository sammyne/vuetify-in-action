<template>
  <div id="app">
    <v-app>
      <usage/>
      <offset/>
      <order/>
      <direction-and-align/>
      <row-and-column-breakpoints/>
      <nested-grid/>
      <unique-layout/>
      <v-spacer/>
      <html-tags/>
    </v-app>
  </div>
</template>

<script>
import DirectionAndAlign from "./components/DirectionAndAlign.vue";
import HtmlTags from "./components/HTMLTags";
import NestedGrid from "./components/NestedGrid.vue";
import Offset from "./components/Offset.vue";
import Order from "./components/Order.vue";
import RowAndColumnBreakpoints from "./components/RowAndColumnBreakpoints.vue";
import UniqueLayout from "./components/UniqueLayout";
import Usage from "./components/Usage.vue";
import VSpacer from "./components/VSpacer";

export default {
  name: "app",
  components: {
    DirectionAndAlign,
    HtmlTags,
    NestedGrid,
    Offset,
    Order,
    RowAndColumnBreakpoints,
    UniqueLayout,
    Usage,
    VSpacer
  }
};
</script>