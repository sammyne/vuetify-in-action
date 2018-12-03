<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <company-footer/>
        <indigo-footer/>
        <teal-footer/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import CompanyFooter from "./components/CompanyFooter";
import IndigoFooter from "./components/IndigoFooter";
import TealFooter from "./components/TealFooter";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    CompanyFooter,
    IndigoFooter,
    TealFooter,
    Usage
  }
};
</script>
