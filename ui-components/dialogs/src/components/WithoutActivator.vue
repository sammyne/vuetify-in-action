<template>
  <v-container>
    <h1 class="text-sm-center">Without Activator</h1>
    <v-layout row wrap justify-center>
      <v-btn color="primary" class="text-sm-center" dark @click="dialog = true">Open Dialog</v-btn>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Disagree</v-btn>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>