<template>
  <div id="app">
    <v-app>
      <usage/>
      <absolute-position/>
      <absolute-position-without-activator/>
      <hover/>
      <menus/>
      <custom-transitions/>
      <popover-menu/>
    </v-app>
  </div>
</template>

<script>
import AbsolutePosition from "./components/AbsolutePosition";
import AbsolutePositionWithoutActivator from "./components/AbsolutePositionWithoutActivator";
import CustomTransitions from "./components/CustomTransitions";
import Hover from "./components/Hover";
import Menus from "./components/Menus";
import PopoverMenu from "./components/PopoverMenu";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    AbsolutePosition,
    AbsolutePositionWithoutActivator,
    CustomTransitions,
    Hover,
    Menus,
    PopoverMenu,
    Usage
  }
};
</script>