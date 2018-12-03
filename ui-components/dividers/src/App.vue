<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <light-and-dark/>
        <inset-dividers/>
        <subheaders-and-dividers/>
        <list-dividers/>
        <dividers-in-portrait-view/>
        <vertical-dividers/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import DividersInPortraitView from "./components/DividersInPortraitView";
import InsetDividers from "./components/InsetDividers";
import LightAndDark from "./components/LightAndDark";
import ListDividers from "./components/ListDividers";
import SubheadersAndDividers from "./components/SubheadersAndDividers";
import Usage from "./components/Usage";
import VerticalDividers from "./components/VerticalDividers";

export default {
  name: "app",
  components: {
    DividersInPortraitView,
    InsetDividers,
    LightAndDark,
    ListDividers,
    SubheadersAndDividers,
    Usage,
    VerticalDividers
  }
};
</script>
