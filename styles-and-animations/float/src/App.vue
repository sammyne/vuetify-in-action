<template>
  <v-app>
    <v-container>
      <h1>Classes</h1>
      <div>
        <div class="float-left">Float left on all viewport sizes</div>
        <br />
        <div class="float-right">Float right on all viewport sizes</div>
        <br />
        <div class="float-none">Don't float on all viewport sizes</div>
      </div>

      <h1>Responsive</h1>
      <div>
        <div class="float-sm-left">Float left on viewports sized SM (small) or wider</div>
        <br />
        <div class="float-md-left">Float left on viewports sized MD (medium) or wider</div>
        <br />
        <div class="float-lg-left">Float left on viewports sized LG (large) or wider</div>
        <br />
        <div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div>
        <br />
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      align: ["start", "end", "center", "baseline", "stretch"],
      justify: ["start", "end", "center", "space-between", "space-around"],
      selected: 0
    };
  }
};
</script>