<template>
  <div id="app">
    <custom-components/>
    <custom-icons/>
  </div>
</template>

<script>
import CustomComponents from "./components/CustomComponents.vue";
import CustomIcons from "./components/CustomIcons.vue";

export default {
  name: "app",
  components: {
    CustomComponents,
    CustomIcons
  }
};
</script>