<template>
  <div id="app">
    <v-app>
      <usage/>
      <thumb/>
      <custom-range-slider/>
      <ticks/>
      <discrete/>
      <icons/>
      <with-an-editable-numeric-value/>
      <custom-colors/>
      <validation/>
      <range/>
      <min-max-values/>
      <metronome/>
    </v-app>
  </div>
</template>

<script>
import CustomColors from "./components/CustomColors";
import CustomRangeSlider from "./components/CustomRangeSlider";
import Discrete from "./components/Discrete";
import Icons from "./components/Icons";
import Metronome from "./components/Metronome";
import MinMaxValues from "./components/MinMaxValues";
import Range from "./components/Range";
import Thumb from "./components/Thumb";
import Ticks from "./components/Ticks";
import Usage from "./components/Usage";
import Validation from "./components/Validation";
import WithAnEditableNumericValue from "./components/WithAnEditableNumericValue";

export default {
  name: "app",
  components: {
    CustomColors,
    CustomRangeSlider,
    Discrete,
    Icons,
    Metronome,
    MinMaxValues,
    Range,
    Thumb,
    Ticks,
    Usage,
    Validation,
    WithAnEditableNumericValue
  }
};
</script>