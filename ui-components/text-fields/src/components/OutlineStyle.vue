<template>
  <v-form>
    <v-container>
      <h1>Outline Style</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field v-model="first" label="First Name" outline></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field v-model="last" label="Last Name" outline></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>