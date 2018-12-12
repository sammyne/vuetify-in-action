<template>
  <v-container>
    <h1>Checkboxes - Array</h1>
    <p>{{ selected }}</p>
    <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: ["John"]
    };
  }
};
</script>