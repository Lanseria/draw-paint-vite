<template>
  <use-window-size v-slot="{ width, height }">
    <canvas
      class="drawing-board"
      ref="CanvasRef"
      :width="width"
      :height="height"
    ></canvas>
  </use-window-size>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { UseWindowSize } from "@vueuse/components";
import { usePaintStore } from "../store/modules/paint";

export default defineComponent({
  components: {
    UseWindowSize,
  },
  setup() {
    const paintStore = usePaintStore();
    const CanvasRef = ref<Nullable<HTMLCanvasElement>>();
    onMounted(() => {
      paintStore.initCanvas(CanvasRef.value!);
      paintStore.fillBg("white");
      paintStore.listenToPaint();
    });
    return {
      CanvasRef,
    };
  },
});
</script>
<style lang="css" scoped>
.drawing-board {
  background: white;
  position: fixed;
  display: block;
  cursor: crosshair;
}
</style>
