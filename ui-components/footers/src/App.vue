<template>
  <v-app>
    <v-container>
      <usage />
      <playground />
      <absolute-footer />
      <padless-footer />
      <company-footer />
      <indigo-footer />
      <teal-footer />
    </v-container>
  </v-app>
</template>

<script>
import AbsoluteFooter from "./components/AbsoluteFooter";
import CompanyFooter from "./components/CompanyFooter";
import IndigoFooter from "./components/IndigoFooter";
import PadlessFooter from "./components/PadlessFooter";
import Playground from "./components/Playground";
import TealFooter from "./components/TealFooter";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    AbsoluteFooter,
    CompanyFooter,
    IndigoFooter,
    PadlessFooter,
    Playground,
    TealFooter,
    Usage
  }
};
</script>
