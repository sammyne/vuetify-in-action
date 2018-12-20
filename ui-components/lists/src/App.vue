<template>
  <div id="app">
    <v-app>
      <usage/>
      <avatar-with-title-and-action/>
      <icon-with2-lines-and-action/>
      <avatar-with3-lines/>
      <avatar-with-title-and-action2/>
      <subheadings-and-dividers/>
      <card-image-with-toolbar-and-list/>
      <title-with-subtitle-actions-and-action-text/>
      <action-with-title-and-sub-title/>
      <expansion-lists/>
    </v-app>
  </div>
</template>

<script>
import ActionWithTitleAndSubTitle from "./components/ActionWithTitleAndSubTitle";
import AvatarWith3Lines from "./components/AvatarWith3Lines";
import AvatarWithTitleAndAction from "./components/AvatarWithTitleAndAction";
import AvatarWithTitleAndAction2 from "./components/AvatarWithTitleAndAction2";
import CardImageWithToolbarAndList from "./components/CardImageWithToolbarAndList";
import ExpansionLists from "./components/ExpansionLists";
import IconWith2LinesAndAction from "./components/IconWith2LinesAndAction";
import SubheadingsAndDividers from "./components/SubheadingsAndDividers";
import Usage from "./components/Usage";
import TitleWithSubtitleActionsAndActionText from "./components/TitleWithSubtitleActionsAndActionText";

export default {
  name: "app",
  components: {
    ActionWithTitleAndSubTitle,
    AvatarWithTitleAndAction,
    AvatarWithTitleAndAction2,
    AvatarWith3Lines,
    CardImageWithToolbarAndList,
    ExpansionLists,
    IconWith2LinesAndAction,
    SubheadingsAndDividers,
    TitleWithSubtitleActionsAndActionText,
    Usage
  }
};
</script>
