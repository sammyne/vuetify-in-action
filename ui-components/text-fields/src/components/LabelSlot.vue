<template>
  <v-form>
    <v-container>
      <h1>Label Slot</h1>
      <v-text-field>
        <template slot="label">What about
          <strong>icon</strong> here?
          <v-icon style="vertical-align: middle">find_in_page</v-icon>
        </template>
      </v-text-field>
    </v-container>
  </v-form>
</template>