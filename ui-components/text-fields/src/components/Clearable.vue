<template>
  <v-form>
    <v-container>
      <h1>Clearable</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field v-model="message1" label="Regular" clearable></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field v-model="message2" solo label="Solo" clearable></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field v-model="message3" box label="Box" clearable></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field v-model="message4" label="Outline" outline clearable></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>