<template>
  <div id="app">
    <v-app>
      <usage/>
      <without-activator/>
      <modal/>
      <fullscreen/>
      <my-form/>
      <scrollable/>
      <overflowed/>
      <simple-dialogs/>
      <loader/>
    </v-app>
  </div>
</template>

<script>
import Fullscreen from "./components/Fullscreen";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import MyForm from "./components/Form";
import Overflowed from "./components/Overflowed";
import Scrollable from "./components/Scrollable";
import SimpleDialogs from "./components/SimpleDialogs";
import Usage from "./components/Usage";
import WithoutActivator from "./components/WithoutActivator";

export default {
  name: "app",
  components: {
    Fullscreen,
    Loader,
    Modal,
    MyForm,
    Overflowed,
    Scrollable,
    SimpleDialogs,
    Usage,
    WithoutActivator
  }
};
</script>
