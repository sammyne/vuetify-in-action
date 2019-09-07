<template>
  <div>
    <h1>Padless Footer</h1>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </div>
</template>