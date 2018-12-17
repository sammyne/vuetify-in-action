<template>
  <div id="app">
    <v-app>
      <usage/>
      <single-line/>
      <disabled-and-readonly/>
      <icons/>
      <clearable/>
      <icon-events/>
      <icon-slots/>
      <label-slot/>
      <character-counter/>
      <password-input/>
      <validation/>
      <full-width-text-field-with-character-counter/>
      <hint-text/>
      <prefixes-and-suffixes/>
      <custom-validation/>
      <box-style/>
      <solo-style/>
      <outline-style/>
      <custom-colors/>
      <masks/>
      <progress-bar/>
    </v-app>
  </div>
</template>

<script>
import BoxStyle from "./components/BoxStyle";
import CharacterCounter from "./components/CharacterCounter";
import Clearable from "./components/Clearable";
import CustomValidation from "./components/CustomValidation";
import CustomColors from "./components/CustomColors";
import DisabledAndReadonly from "./components/DisabledAndReadonly";
import FullWidthTextFieldWithCharacterCounter from "./components/FullWidthTextFieldWithCharacterCounter";
import HintText from "./components/HintText";
import Icons from "./components/Icons";
import IconEvents from "./components/IconEvents";
import IconSlots from "./components/IconSlots";
import LabelSlot from "./components/LabelSlot";
import Masks from "./components/Masks";
import OutlineStyle from "./components/OutlineStyle";
import PasswordInput from "./components/PasswordInput";
import PrefixesAndSuffixes from "./components/PrefixesAndSuffixes";
import ProgressBar from "./components/ProgressBar";
import SingleLine from "./components/SingleLine";
import SoloStyle from "./components/SoloStyle";
import Usage from "./components/Usage";
import Validation from "./components/Validation";

export default {
  name: "app",
  components: {
    BoxStyle,
    CharacterCounter,
    Clearable,
    CustomValidation,
    CustomColors,
    DisabledAndReadonly,
    FullWidthTextFieldWithCharacterCounter,
    HintText,
    Icons,
    IconEvents,
    IconSlots,
    LabelSlot,
    Masks,
    OutlineStyle,
    PasswordInput,
    PrefixesAndSuffixes,
    ProgressBar,
    SingleLine,
    SoloStyle,
    Usage,
    Validation
  }
};
</script>