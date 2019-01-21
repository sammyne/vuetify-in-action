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
          <linear/>
          <non-linear/>
          <alternate-labels/>
        </v-content>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AlternateLabels from "./components/AlternateLabels";
import EditableSteps from "./components/EditableSteps";
import HelloWorld from "./components/HelloWorld.vue";
import Horizontal from "./components/Horizontal";
import Linear from "./components/Linear";
import NonEditableSteps from "./components/NonEditableSteps";
import NonLinear from "./components/NonLinear";
import Optionals from "./components/Optionals";
import Vertical from "./components/Vertical";

export default {
  name: "app",
  components: {
    AlternateLabels,
    EditableSteps,
    HelloWorld,
    Horizontal,
    Linear,
    NonEditableSteps,
    NonLinear,
    Optionals,
    Vertical
  }
};
</script>
