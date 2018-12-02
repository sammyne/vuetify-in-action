<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <icon-dividers/>
        <item-slot/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import IconDividers from "./components/IconDividers";
import ItemSlot from "./components/ItemSlot";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    IconDividers,
    ItemSlot,
    Usage
  }
};
</script>