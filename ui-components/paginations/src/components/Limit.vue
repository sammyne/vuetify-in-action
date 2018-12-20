<template>
  <div class="text-xs-center">
    <h1>Limit</h1>
    <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  }
};
</script>