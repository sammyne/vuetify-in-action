<template>
  <v-app>
    <v-container>
      <h1>Usage</h1>
      <v-row>
        <v-col v-for="n in 25" :key="n" cols="auto">
          <v-card :elevation="n - 1" height="100" width="100">
            <v-row class="fill-height" align="center" justify="center" v-text="n - 1"></v-row>
          </v-card>
        </v-col>
      </v-row>

      <h1>Playground</h1>
      <v-row>
        <v-col cols="12" md="4">
          <v-slider
            v-model="selected"
            prepend-icon="mdi-pan-horizontal"
            min="0"
            max="24"
            thumb-label
          ></v-slider>
        </v-col>
        <v-col cols="12" md="4" offset-md="3">
          <v-card :elevation="selected">
            <v-card-text>
              <p class="text-center ma-0">Elevation {{ selected }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h1>Example</h1>
      <h2>Dynamic elevation</h2>
      <v-row>
        <div class="text--primary">
          <!-- Using the elevation prop -->
          <v-hover>
            <template v-slot="{ hover }">
              <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-6">Prop based elevation</v-card>
            </template>
          </v-hover>

          <div class="my-6"></div>

          <!-- Using a dynamic class -->
          <v-hover>
            <template v-slot="{ hover }">
              <div
                :class="`elevation-${hover ? 24 : 6}`"
                class="mx-auto pa-6 transition-swing"
              >Class based elevation</div>
            </template>
          </v-hover>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      selected: 0
    };
  }
};
</script>