<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <slot-no-data/>
        <slot-items-and-headers/>
        <slot-header-cell/>
        <slot-progress/>
        <slot-footer/>
        <slot-expand/>
        <slot-page-text/>
        <selectable-rows/>
        <search-with-custom-no-results-slot/>
        <external-pagination/>
        <external-sorting/>
        <custom-icons/>
        <paginate-and-sort-server-side/>
        <remove-default-header-and-footer/>
        <inline-editing/>
        <crud-actions/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import CustomIcons from "./components/CustomIcons";
import CrudActions from "./components/CRUDActions";
import ExternalPagination from "./components/ExternalPagination";
import ExternalSorting from "./components/ExternalSorting";
import InlineEditing from "./components/InlineEditing";
import PaginateAndSortServerSide from "./components/PaginateAndSortServerSide";
import RemoveDefaultHeaderAndFooter from "./components/RemoveDefaultHeaderAndFooter";
import SearchWithCustomNoResultsSlot from "./components/SearchWithCustomNoResultsSlot";
import SelectableRows from "./components/SelectableRows";
import SlotExpand from "./components/SlotExpand";
import SlotFooter from "./components/SlotFooter";
import SlotHeaderCell from "./components/SlotHeaderCell";
import SlotItemsAndHeaders from "./components/SlotItemsAndHeaders";
import SlotNoData from "./components/SlotNoData";
import SlotProgress from "./components/SlotProgress";
import SlotPageText from "./components/SlotPageText";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    CustomIcons,
    CrudActions,
    ExternalPagination,
    ExternalSorting,
    InlineEditing,
    PaginateAndSortServerSide,
    RemoveDefaultHeaderAndFooter,
    SearchWithCustomNoResultsSlot,
    SelectableRows,
    SlotExpand,
    SlotFooter,
    SlotHeaderCell,
    SlotItemsAndHeaders,
    SlotNoData,
    SlotProgress,
    SlotPageText,
    Usage
  }
};
</script>