<template>
  <div id="app">
    <v-app>
      <usage/>
      <colored/>
      <icon/>
      <outline/>
      <m-label/>
      <closable/>
      <in-selects/>
    </v-app>
  </div>
</template>

<script>
import Closable from "./components/Closable";
import Colored from "./components/Colored";
import Icon from "./components/Icon";
import InSelects from "./components/InSelects";
import mLabel from "./components/Label";
import Outline from "./components/Outline";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Closable,
    Colored,
    Icon,
    InSelects,
    mLabel,
    Outline,
    Usage
  }
};
</script>