<template>
  <div id="app">
    <v-app>
      <usage/>
      <checkboxes-boolean/>
      <checkboxes-array/>
      <checkboxes-states/>
      <checkboxes-colors/>
      <checkboxes-inline-with-a-textfield/>

      <radios-default/>
      <radios-direction/>
      <radios-colors/>

      <switches-boolean/>
      <switches-array/>
      <switches-states/>
      <switches-colors/>

      <label-slot/>
    </v-app>
  </div>
</template>

<script>
import CheckboxesArray from "./components/CheckboxesArray";
import CheckboxesBoolean from "./components/CheckboxesBoolean";
import CheckboxesColors from "./components/CheckboxesColors";
import CheckboxesStates from "./components/CheckboxesStates";
import CheckboxesInlineWithATextfield from "./components/CheckboxesInlineWithATextfield";

import LabelSlot from "./components/LabelSlot";

import RadiosDefault from "./components/RadiosDefault";
import RadiosColors from "./components/RadiosColors";
import RadiosDirection from "./components/RadiosDirection";

import SwitchesArray from "./components/SwitchesArray";
import SwitchesBoolean from "./components/SwitchesBoolean";
import SwitchesColors from "./components/SwitchesColors";
import SwitchesStates from "./components/SwitchesStates";

import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    CheckboxesArray,
    CheckboxesBoolean,
    CheckboxesColors,
    CheckboxesStates,
    CheckboxesInlineWithATextfield,

    LabelSlot,

    RadiosDefault,
    RadiosColors,
    RadiosDirection,

    SwitchesArray,
    SwitchesBoolean,
    SwitchesColors,
    SwitchesStates,

    Usage
  }
};
</script>