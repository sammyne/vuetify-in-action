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
          <multi-line-error-state/>
          <alternate-labels-multi-line-error-state/>
          <vertical-multi-line-error-state/>
          <dynamic-steps/>
        </v-content>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AlternateLabels from "./components/AlternateLabels";
import AlternateLabelsMultiLineErrorState from "./components/AlternateLabelsMultiLineErrorState";
import DynamicSteps from "./components/DynamicSteps";
import EditableSteps from "./components/EditableSteps";
import HelloWorld from "./components/HelloWorld.vue";
import Horizontal from "./components/Horizontal";
import Linear from "./components/Linear";
import MultiLineErrorState from "./components/MultiLineErrorState";
import NonEditableSteps from "./components/NonEditableSteps";
import NonLinear from "./components/NonLinear";
import Optionals from "./components/Optionals";
import Vertical from "./components/Vertical";
import VerticalMultiLineErrorState from "./components/VerticalMultiLineErrorState";

export default {
  name: "app",
  components: {
    AlternateLabels,
    AlternateLabelsMultiLineErrorState,
    DynamicSteps,
    EditableSteps,
    HelloWorld,
    Horizontal,
    Linear,
    MultiLineErrorState,
    NonEditableSteps,
    NonLinear,
    Optionals,
    Vertical,
    VerticalMultiLineErrorState
  }
};
</script>
