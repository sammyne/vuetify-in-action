<template>
  <v-container>
    <h1>Custom Icons/No Icons</h1>
    <v-alert
      :value="true"
      color="success"
      icon="new_releases"
    >This is a success alert with a custom icon.</v-alert>

    <!-- error is specified as color rather than type -->
    <v-alert :value="true" color="error">This is an error alert with no icon.</v-alert>
  </v-container>
</template>