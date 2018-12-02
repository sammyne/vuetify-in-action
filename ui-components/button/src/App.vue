<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <flat/>
        <raised/>
        <depressed/>
        <dropdown-variants/>
        <icon/>
        <floating/>
        <loaders/>
        <sizing/>
        <outline/>
        <round/>
        <block/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Block from "./components/Block";
import Depressed from "./components/Depressed";
import DropdownVariants from "./components/DropdownVariants";
import Flat from "./components/Flat";
import Floating from "./components/Floating";
import Icon from "./components/Icon";
import Loaders from "./components/Loaders";
import Outline from "./components/Outline";
import Raised from "./components/Raised";
import Round from "./components/Round";
import Sizing from "./components/Sizing";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Block,
    Depressed,
    DropdownVariants,
    Flat,
    Floating,
    Icon,
    Loaders,
    Outline,
    Raised,
    Round,
    Sizing,
    Usage
  }
};
</script>
