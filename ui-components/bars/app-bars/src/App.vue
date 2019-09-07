<template>
  <v-app>
    <usage />
    <playground />
    <dense />
    <prominent-w-scroll-shrink />
    <prominent-w-scroll-shrink-and-image />
    <hiding-on-scroll />
    <collapsible-bars />
    <elevate-bar-on-scroll />
    <inverted-scrolling />
    <scroll-threshold />
    <prominent-w-scroll-shrink-and-image-fading-on-scroll />
    <with-menu />
  </v-app>
</template>

<script>
import CollapsibleBars from "./components/CollapsibleBars";
import Dense from "./components/Dense";
import ElevateBarOnScroll from "./components/ElevateBarOnScroll";
import HidingOnScroll from "./components/HidingOnScroll";
import InvertedScrolling from "./components/InvertedScrolling";
import Playground from "./components/Playground";
import ProminentWScrollShrink from "./components/ProminentWScrollShrink";
import ProminentWScrollShrinkAndImage from "./components/ProminentWScrollShrinkAndImage";
import ProminentWScrollShrinkAndImageFadingOnScroll from "./components/ProminentWScrollShrinkAndImageFadingOnScroll";
import ScrollThreshold from "./components/ScrollThreshold";
import Usage from "./components/Usage";
import WithMenu from "./components/WithMenu";

export default {
  name: "app",
  components: {
    CollapsibleBars,
    Dense,
    ElevateBarOnScroll,
    HidingOnScroll,
    InvertedScrolling,
    Playground,
    ProminentWScrollShrink,
    ProminentWScrollShrinkAndImage,
    ProminentWScrollShrinkAndImageFadingOnScroll,
    ScrollThreshold,
    Usage,
    WithMenu
  }
};
</script>
