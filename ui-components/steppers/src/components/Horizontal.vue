<template>
  <v-layout row wrap>
    <v-flex sm12>
      <h1>Horizontal Steps</h1>
    </v-flex>
    <v-flex sm12>
      <v-stepper value="1">
        <v-stepper-header>
          <v-stepper-step step="1">Select campaign settings</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2">Create an ad group</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Create an ad</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>