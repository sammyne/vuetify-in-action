<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <submit-and-clear/>
        <vuelidate/>
        <vee-validate/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import SubmitAndClear from "./components/SubmitAndClear";
import Usage from "./components/Usage";
import VeeValidate from "./components/VeeValidate";
import Vuelidate from "./components/Vuelidate";

export default {
  name: "app",
  components: {
    SubmitAndClear,
    Usage,
    VeeValidate,
    Vuelidate
  }
};
</script>
