<template>
  <drawing-board></drawing-board>
  <color-group></color-group>
  <range-wrap></range-wrap>
  <tool-list></tool-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DrawingBoard from "./components/DrawingBoard.vue";
import ColorGroup from "./components/ColorGroup.vue";
import RangeWrap from "./components/RangeWrap.vue";
import ToolList from "./components/Tools.vue";
export default defineComponent({
  name: "App",
  components: {
    DrawingBoard,
    ColorGroup,
    RangeWrap,
    ToolList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  overflow: hidden;
}
</style>
