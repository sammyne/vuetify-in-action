<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h3 ref="radio" class="headline">Target</h3>
          <v-radio-group v-model="type" row>
            <v-radio label="Number" value="number"></v-radio>
            <v-radio label="Selector" value="selector"></v-radio>
            <v-radio label="DOMElement" value="element"></v-radio>
          </v-radio-group>
          <v-text-field v-if="type === 'number'" v-model="number" type="number" label="Number"></v-text-field>
          <v-text-field v-if="type === 'selector'" v-model="selector" label="Selector"></v-text-field>
          <v-select
            v-if="type === 'element'"
            v-model="selected"
            :items="elements"
            label="DOMElement"
          ></v-select>
        </v-flex>
        <v-flex xs12>
          <h3 class="headline">Options</h3>
          <v-select v-model="easing" :items="easings" label="Easing"></v-select>
          <v-slider v-model="duration" min="0" max="1000" label="Duration" thumb-label></v-slider>
          <v-slider v-model="offset" min="-500" max="500" label="Offset" thumb-label></v-slider>
        </v-flex>
        <v-flex>
          <v-btn ref="button" color="primary" block @click="$vuetify.goTo(target, options)">scroll</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="headline primary--text" id="first">First</h2>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="headline primary--text" id="second">Second</h2>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="headline primary--text" id="three">Three</h2>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
        <v-flex xs12>
          <p>{{ lobrem }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import * as easings from "vuetify/es5/util/easing-patterns";

export default {
  name: "app",
  data() {
    return {
      type: "number",
      number: 9999,
      selector: "#first",
      selected: "Button",
      elements: ["Button", "Radio group"],
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
      lobrem:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    };
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    },
    element() {
      if (this.selected === "Button") return this.$refs.button;
      else if (this.selected === "Radio group") return this.$refs.radio;
      return "unknown";
    }
  }
};
</script>
