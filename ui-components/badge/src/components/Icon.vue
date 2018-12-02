<template>
  <v-container>
    <div class="text-xs-center">
      <h1>Icon</h1>
      <v-badge left color="purple">
        <v-icon slot="badge" dark small>mdi-adjust</v-icon>
        <span>MDI icon</span>
      </v-badge>&nbsp;&nbsp;
      <v-badge color="orange">
        <v-icon slot="badge" dark small>fas fa-fighter-jet</v-icon>
        <span>Font Awesome icon</span>
      </v-badge>
    </div>
  </v-container>
</template>