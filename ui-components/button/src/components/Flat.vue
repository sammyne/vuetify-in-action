<template>
  <v-layout align-center row wrap>
    <v-flex xs12>
      <h1>Flat</h1>
    </v-flex>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn flat small>Normal</v-btn>
      </div>
      <div>
        <v-btn flat small color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn flat small color="error">Error</v-btn>
      </div>
      <div>
        <v-btn flat small disabled>Disabled</v-btn>
      </div>
    </v-flex>

    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn flat>Normal</v-btn>
      </div>
      <div>
        <v-btn flat color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn flat color="error">Error</v-btn>
      </div>
      <div>
        <v-btn flat disabled>Disabled</v-btn>
      </div>
    </v-flex>

    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn flat large>Normal</v-btn>
      </div>
      <div>
        <v-btn flat large color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn flat large color="error">Error</v-btn>
      </div>
      <div>
        <v-btn flat large disabled>Disabled</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>