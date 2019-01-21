<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-content>
          <hello-world/>
          <editable-steps/>
          <non-editable-steps/>
          <optionals/>
        </v-content>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import EditableSteps from "./components/EditableSteps";
import HelloWorld from "./components/HelloWorld.vue";
import NonEditableSteps from "./components/NonEditableSteps";
import Optionals from "./components/Optionals";

export default {
  name: "app",
  components: {
    EditableSteps,
    HelloWorld,
    NonEditableSteps,
    Optionals
  }
};
</script>
