<template>
  <v-app>
    <v-container>
      <h1>Enabling flexbox</h1>
      <v-card class="d-flex pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
      <v-card class="d-inline-flex pa-2" outlined tile>
        <div>I'm an inline flexbox container!</div>
      </v-card>

      <h1>Flex direction</h1>
      <div>
        <v-card class="d-flex flex-row mb-6" color="grey lighten-2" flat tile>
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item {{ n }}</v-card>
        </v-card>
      </div>
      <div>
        <v-card class="d-flex flex-row-reverse" color="grey lighten-2" flat tile>
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item {{ n }}</v-card>
        </v-card>
      </div>
      <div>
        <div class="d-flex flex-column mb-6">
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item {{ n }}</v-card>
        </div>
        <div class="d-flex flex-column-reverse">
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item {{ n }}</v-card>
        </div>
      </div>

      <h1>Flex justify</h1>
      <div>
        <v-card
          v-for="j in justify"
          :key="j"
          :class="`d-flex justify-${j} mb-6`"
          color="grey lighten-2"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>

      <h1>Flex align</h1>
      <div>
        <v-card
          v-for="a in align"
          :key="a"
          :class="`d-flex align-${a} mb-6`"
          color="grey lighten-2"
          flat
          height="100"
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>

      <h1>Flex align self</h1>
      <div>
        <v-card
          v-for="j in justify"
          :key="j"
          class="d-flex mb-6"
          color="grey lighten-2"
          flat
          height="100"
          tile
        >
          <v-card
            v-for="n in 3"
            :key="n"
            class="pa-2"
            :class="[n === 2 && `align-self-${j}`]"
            outlined
            tile
          >{{ n === 2 ? 'Aligned flex item' : 'Flex item' }}</v-card>
        </v-card>
      </div>

      <h1>Auto margins</h1>
      <div>
        <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>

        <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
          <v-card
            v-for="n in 3"
            :key="n"
            :class="n === 1 && 'mr-auto'"
            class="pa-2"
            outlined
            tile
          >Flex item</v-card>
        </v-card>

        <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
          <v-card
            v-for="n in 3"
            :key="n"
            :class="n === 3 && 'ml-auto'"
            class="pa-2"
            outlined
            tile
          >Flex item</v-card>
        </v-card>
      </div>

      <h2>Using align-items</h2>
      <div>
        <v-card
          class="d-flex align-start flex-column mb-6"
          color="grey lighten-2"
          flat
          tile
          height="200"
        >
          <v-card
            v-for="n in 3"
            :key="n"
            :class="n === 1 && 'mb-auto'"
            class="pa-2"
            outlined
            tile
          >Flex item</v-card>
        </v-card>
        <v-card class="d-flex align-end flex-column" color="grey lighten-2" flat tile height="200">
          <v-card
            v-for="n in 3"
            :key="n"
            :class="n === 3 && 'mt-auto'"
            class="pa-2"
            outlined
            tile
          >Flex item</v-card>
        </v-card>
      </div>

      <h1>Flex wrap</h1>
      <div>
        <v-card class="d-flex flex-no-wrap py-3" color="grey lighten-2" flat tile width="125">
          <v-card v-for="n in 5" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>
      <div>
        <v-card class="d-flex flex-wrap" color="grey lighten-2" flat tile>
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>
      <div>
        <v-card class="d-flex flex-wrap-reverse" color="grey lighten-2" flat tile>
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>

      <h1>Flex order</h1>
      <div>
        <v-card class="d-flex flex-wrap-reverse" color="grey lighten-2" flat tile>
          <v-card class="order-3 pa-2" outlined tile>First flex item</v-card>
          <v-card class="order-2 pa-2" outlined tile>Second flex item</v-card>
          <v-card class="order-1 pa-2" outlined tile>Third flex item</v-card>
        </v-card>
      </div>

      <h1>Flex align content</h1>
      <div>
        <v-card
          class="d-flex align-content-start flex-wrap"
          color="grey lighten-2"
          flat
          tile
          min-height="200"
        >
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>
      <hr class="my-1" />
      <div>
        <v-card
          class="d-flex align-content-end flex-wrap"
          color="grey lighten-2"
          flat
          tile
          min-height="200"
        >
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>
      <hr class="my-1" />
      <div>
        <v-card
          class="d-flex align-content-center flex-wrap"
          color="grey lighten-2"
          flat
          tile
          min-height="200"
        >
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>
      <hr class="my-1" />
      <div>
        <v-card
          class="d-flex align-content-space-between flex-wrap"
          color="grey lighten-2"
          flat
          tile
          min-height="200"
        >
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
      </div>
      <hr class="my-1" />
      <div>
        <v-card
          class="d-flex align-content-space-around flex-wrap"
          color="grey lighten-2"
          flat
          tile
          min-height="200"
        >
          <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>Flex item</v-card>
        </v-card>
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