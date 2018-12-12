<template>
  <v-container>
    <h1>Switches - Array</h1>
    <p>{{ people }}</p>
    <v-switch v-model="people" label="John" value="John"></v-switch>
    <v-switch v-model="people" label="Jacob" value="Jacob"></v-switch>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      people: ["John"]
    };
  }
};
</script>