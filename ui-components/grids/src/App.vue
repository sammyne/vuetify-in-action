<template>
  <v-app>
    <usage />
    <playground />
    <auto-sizing-columns />
    <equal-width-columns />
    <one-column-width />
    <variable-content-width />
    <grow-and-shrink />
    <row-and-column-breakpoints />
    <unique-layouts />
    <vertical-alignment />
    <horizontal-alignment />
    <no-gutters />
    <column-wrapping />
    <order-classes />
    <order-last-first />
    <offset />
    <offset-breakpoint />
    <margin-utilities />
    <nested-grid />
    <spacers />
  </v-app>
</template>

<script>
import AutoSizingColumns from "./components/AutoSizingColumns";
import ColumnWrapping from "./components/ColumnWrapping";
import EqualWidthColumns from "./components/EqualWidthColumns";
import GrowAndShrink from "./components/GrowAndShrink";
import HorizontalAlignment from "./components/HorizontalAlignment";
import MarginUtilities from "./components/MarginUtilities";
import NestedGrid from "./components/NestedGrid";
import NoGutters from "./components/NoGutters";
import Offset from "./components/Offset";
import OffsetBreakpoint from "./components/OffsetBreakpoint";
import OneColumnWidth from "./components/OneColumnWidth";
import OrderClasses from "./components/OrderClasses";
import OrderLastFirst from "./components/OrderLastFirst";
import Playground from "./components/Playground";
import RowAndColumnBreakpoints from "./components/RowAndColumnBreakpoints";
import Spacers from "./components/Spacers";
import UniqueLayouts from "./components/UniqueLayouts";
import Usage from "./components/Usage";
import VariableContentWidth from "./components/VariableContentWidth";
import VerticalAlignment from "./components/VerticalAlignment";

export default {
  name: "app",
  components: {
    AutoSizingColumns,
    ColumnWrapping,
    EqualWidthColumns,
    GrowAndShrink,
    HorizontalAlignment,
    MarginUtilities,
    NestedGrid,
    NoGutters,
    Offset,
    OffsetBreakpoint,
    OneColumnWidth,
    OrderClasses,
    OrderLastFirst,
    Playground,
    RowAndColumnBreakpoints,
    Spacers,
    UniqueLayouts,
    Usage,
    VariableContentWidth,
    VerticalAlignment
  }
};
</script>
