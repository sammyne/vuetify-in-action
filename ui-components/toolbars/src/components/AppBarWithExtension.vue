<template>
  <v-container>
    <h1>App Bar with Extension</h1>
    <v-toolbar color="primary" dark extended>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title slot="extension" class="white--text">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>