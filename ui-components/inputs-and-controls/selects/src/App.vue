<template>
  <div id="app">
    <v-app>
      <usage/>
      <light-theme/>
      <icons/>
      <multiple/>
      <customized-item-text-and-value/>
      <prepend-append-item-slots/>
      <change-selection-apperance/>
    </v-app>
  </div>
</template>

<script>
import ChangeSelectionApperance from "./components/ChangeSelectionApperance";
import CustomizedItemTextAndValue from "./components/CustomizedItemTextAndValue";
import Icons from "./components/Icons";
import LightTheme from "./components/LightTheme";
import Multiple from "./components/Multiple";
import PrependAppendItemSlots from "./components/PrependAppendItemSlots";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    ChangeSelectionApperance,
    CustomizedItemTextAndValue,
    Icons,
    LightTheme,
    Multiple,
    PrependAppendItemSlots,
    Usage
  }
};
</script>