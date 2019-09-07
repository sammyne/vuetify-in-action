<template>
  <v-container class="grey lighten-5">
    <v-row>
      <h1>Equal width columns</h1>
    </v-row>
    <v-row no-gutters>
      <template v-for="n in 4">
        <v-col :key="n">
          <v-card class="pa-2" outlined tile>Column</v-card>
        </v-col>
        <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>