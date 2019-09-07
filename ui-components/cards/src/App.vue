<template>
  <v-app>
    <v-content>
      <v-container>
        <usage />
        <playground />
        <outlined-cards />
        <intermediate />
        <information-card />
        <media-with-text />
        <grids />
        <horizontal-cards />
        <custom-actions />
        <twitter-card />
        <loading-card />
        <weather-card />
        <advanced />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Advanced from "./components/Advanced";
import CustomActions from "./components/CustomActions";
import Grids from "./components/Grids";
import HorizontalCards from "./components/HorizontalCards";
import InformationCard from "./components/InformationCard";
import Intermediate from "./components/Intermediate";
import LoadingCard from "./components/LoadingCard";
import MediaWithText from "./components/MediaWithText";
import OutlinedCards from "./components/OutlinedCards";
import Playground from "./components/Playground";
import TwitterCard from "./components/TwitterCard";
import Usage from "./components/Usage";
import WeatherCard from "./components/WeatherCard";

export default {
  name: "app",
  components: {
    Advanced,
    CustomActions,
    Grids,
    HorizontalCards,
    InformationCard,
    Intermediate,
    LoadingCard,
    MediaWithText,
    OutlinedCards,
    Playground,
    TwitterCard,
    Usage,
    WeatherCard
  }
};
</script>