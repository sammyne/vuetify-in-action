<template>
  <div id="app">
    <v-app>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-card>
              <v-card-text>No Elevation</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="level in levels" v-bind:key="level" xs12 md6>
            <v-card :class="level">
              <v-card-text>{{ level }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      levels: [...new Array(25).keys()].map(item => `elevation-${item}`)
    };
  }
};
</script>
