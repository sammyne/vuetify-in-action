<!-- eslint-disable -->
<template>
  <v-container>
    <h1>Absolute Position</h1>
    <v-layout d-flex justify-center>
      <v-menu v-model="showMenu" absolute offset-y style="max-width: 600px">
        <v-card
          slot="activator"
          class="portrait"
          img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
          height="300"
          width="600"
        ></v-card>

        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index" @click>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
};
</script>