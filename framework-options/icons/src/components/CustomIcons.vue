<template>
  <div>
    <v-icon>$vuetify.icons.product</v-icon>

    <v-icon v-text="'$vuetify.icons.support'"></v-icon>

    <v-icon v-html="'$vuetify.icons.steam'"></v-icon>

    <v-icon v-text="platform"></v-icon>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "John Leider",
      platform: "pc"
    }
  }),

  computed: {
    platform() {
      return "$vuetify.icons." + this.user.platform;
    }
  }
};
</script>