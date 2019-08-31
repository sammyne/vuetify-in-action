<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div>
            <div class="d-inline pa-2 deep-purple accent-4 white--text">d-inline</div>
            <div class="d-inline pa-2 black white--text">d-inline</div>
          </div>
        </v-flex>
        <v-flex xs12>
          <div>
            <div class="d-block pa-2 deep-purple accent-4 white--text">d-block</div>
            <div class="d-block pa-2 black white--text">d-block</div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>