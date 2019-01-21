<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-content>
          <hello-world/>
          <editable-steps/>
          <non-editable-steps/>
          <optionals/>
          <horizontal/>
        </v-content>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import EditableSteps from "./components/EditableSteps";
import HelloWorld from "./components/HelloWorld.vue";
import Horizontal from "./components/Horizontal";
import NonEditableSteps from "./components/NonEditableSteps";
import Optionals from "./components/Optionals";

export default {
  name: "app",
  components: {
    EditableSteps,
    HelloWorld,
    Horizontal,
    NonEditableSteps,
    Optionals
  }
};
</script>
