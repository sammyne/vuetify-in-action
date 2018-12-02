<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>Blockquote</h1>
          </v-flex>
          <v-flex xs12>
            <blockquote
              class="blockquote"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</blockquote>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>Paragraphs</h1>
          </v-flex>
          <v-flex xs12>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>Variables</h1>
          </v-flex>
          <v-flex xs12>
            <var>v</var> =
            <var>u</var> *
            <var>e</var>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>User Input</h1>
          </v-flex>
          <v-flex xs12 text-xs-justify>To install Vuetify, type
            <kbd>npm install vuetify</kbd> into your console. Once complete, type
            <kbd>cd <code>&lt;project name&gt;</code></kbd> and run
            <kbd>npm install</kbd>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>