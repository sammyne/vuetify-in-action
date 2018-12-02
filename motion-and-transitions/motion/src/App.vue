<template>
  <div id="app">
    <v-app>
      <slide-x/>
      <slide-y/>
      <scale/>
      <fade/>
      <custom-origin/>
      <todo-list/>
    </v-app>
  </div>
</template>

<script>
import CustomOrigin from "./components/CustomOrigin";
import Fade from "./components/Fade";
import Scale from "./components/Scale";
import SlideX from "./components/SlideX";
import SlideY from "./components/SlideY";
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    CustomOrigin,
    Fade,
    Scale,
    SlideX,
    SlideY,
    TodoList
  }
};
</script>