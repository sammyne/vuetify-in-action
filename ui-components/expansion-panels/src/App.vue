<template>
  <div id="app">
    <v-app>
      <usage/>
      <expand/>
      <expand-control/>
      <disabled-and-readonly/>
      <popout-inset/>
      <custom-icon/>
      <focusable/>
    </v-app>
  </div>
</template>

<script>
import CustomIcon from "./components/CustomIcon";
import DisabledAndReadonly from "./components/DisabledAndReadonly";
import Expand from "./components/Expand";
import Focusable from "./components/Focusable";
import ExpandControl from "./components/ExpandControl";
import PopoutInset from "./components/PopoutInset";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    CustomIcon,
    DisabledAndReadonly,
    Expand,
    ExpandControl,
    Focusable,
    PopoutInset,
    Usage
  }
};
</script>