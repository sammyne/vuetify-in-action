<!-- eslint-disable -->
<template>
  <v-container>
    <h1>Absolute Position without Activator</h1>
    <v-layout flex justify-center>
      <v-card
        class="portrait"
        img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
        height="300px"
        @contextmenu="show"
      ></v-card>
    </v-layout>

    <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" @click>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    x: 0,
    y: 0,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),

  methods: {
    show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    }
  }
};
</script>

<style lang="css" scoped>
.portrait.v-card {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
</style>