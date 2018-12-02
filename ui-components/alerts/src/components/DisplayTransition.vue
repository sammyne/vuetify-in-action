<template>
  <v-container>
    <h1>Display Transition</h1>
    <div class="text-xs-center">
      <v-btn color="primary" @click="alert = !alert">Toggle</v-btn>
    </div>
    <v-alert :value="alert" type="success" transition="scale-transition">This is a success alert.</v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      alert: true
    };
  }
};
</script>