<template>
  <v-container>
    <h1>Masks</h1>
    <v-card>
      <v-card-text>
        <v-text-field v-model="mask" label="Mask"></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field :mask="mask" v-model="value" label="Value"></v-text-field>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    mask: "credit-card",
    value: "4444444444444444"
  })
};
</script>