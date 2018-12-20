<template>
  <div id="app">
    <v-app>
      <usage/>
      <long/>
      <limit/>
      <round/>
      <icons/>
      <disabled/>
    </v-app>
  </div>
</template>

<script>
import Disabled from "./components/Disabled";
import Icons from "./components/Icons";
import Limit from "./components/Limit";
import Long from "./components/Long";
import Round from "./components/Round";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Disabled,
    Icons,
    Limit,
    Long,
    Round,
    Usage
  }
};
</script>
