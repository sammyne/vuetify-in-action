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
          <vertical/>
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
import Vertical from "./components/Vertical";

export default {
  name: "app",
  components: {
    EditableSteps,
    HelloWorld,
    Horizontal,
    NonEditableSteps,
    Optionals,
    Vertical
  }
};
</script>
