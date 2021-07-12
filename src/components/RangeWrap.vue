<template>
  <div id="range-wrap">
    <input
      type="range"
      id="range"
      min="1"
      max="30"
      v-model="lineWidth"
      title="调整笔刷粗细"
      @change="handleChange()"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePaintStore } from "../store/modules/paint";
export default defineComponent({
  setup() {
    const paintStore = usePaintStore();
    const lineWidth = ref(2);
    const handleChange = () => {
      paintStore.setLineWidth(lineWidth.value);
    };
    return {
      // ref
      lineWidth,
      // method
      handleChange,
    };
  },
});
</script>
<style lang="css" scoped>
#range-wrap {
  position: fixed;
  top: 50%;
  right: 30px;
  width: 30px;
  height: 150px;
  margin-top: -75px;
}
#range-wrap input {
  transform: rotate(-90deg);
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  border-radius: 15px;
  -webkit-appearance: none;
  outline: none;
  position: relative;
}
#range-wrap input::after {
  display: block;
  content: "";
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-right: 150px solid #00ccff;
  border-left-width: 0;
  position: absolute;
  left: 0;
  top: 5px;
  border-radius: 15px;
  z-index: 0;
}
#range-wrap input[type="range"]::-webkit-slider-thumb,
#range-wrap input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
}
#range-wrap input[type="range"]::-webkit-slider-runnable-track,
#range-wrap input[type="range"]::-moz-range-track {
  height: 10px;
  border-radius: 10px;
  box-shadow: none;
}
#range-wrap input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  margin-top: -1px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ccff;
  position: relative;
  z-index: 999;
}

@media screen and (max-width: 768px) {
  #range-wrap {
    right: auto;
    left: 20px;
  }
}
</style>
