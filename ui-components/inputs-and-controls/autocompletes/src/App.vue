<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <searching-an-api/>
        <scoped-slots/>
        <custom-filter/>
        <asynchronous-items/>
        <advanced-slots/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AdvancedSlots from "./components/AdvancedSlots";
import AsynchronousItems from "./components/AsynchronousItems";
import CustomFilter from "./components/CustomFilter";
import ScopedSlots from "./components/ScopedSlots";
import SearchingAnApi from "./components/SearchingAnAPI";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    AdvancedSlots,
    AsynchronousItems,
    CustomFilter,
    ScopedSlots,
    SearchingAnApi,
    Usage
  }
};
</script>
