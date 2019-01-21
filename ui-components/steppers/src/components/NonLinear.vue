<template>
  <v-layout row wrap>
    <v-flex sm12>
      <h1>Non-linear steppers</h1>
    </v-flex>
    <v-flex sm12>
      <v-stepper non-linear>
        <v-stepper-header>
          <v-stepper-step editable step="1">Select campaign settings</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="2">Create an ad group</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" editable>Create an ad</v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <v-stepper class="mt-5" non-linear>
        <v-stepper-header>
          <v-stepper-step complete editable step="1">Select campaign settings</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="2">Create an ad group</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step complete editable step="3">Create an ad</v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <v-stepper class="mt-5" non-linear value="3">
        <v-stepper-header>
          <v-stepper-step complete editable step="1">Select campaign settings</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step complete editable step="2">Create an ad group</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step complete editable step="3">Create an ad</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>