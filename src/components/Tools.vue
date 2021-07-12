<template>
  <div class="tools">
    <button id="brush" class="active" title="画笔">
      <i class="iconfont icon-qianbi"></i>
    </button>
    <button id="eraser" title="橡皮擦">
      <i class="iconfont icon-xiangpi"></i>
    </button>
    <button id="clear" title="清空" @click="reset()">
      <i class="iconfont icon-qingchu"></i>
    </button>
    <button id="undo" title="撤销" @click="undo()">
      <i class="iconfont icon-chexiao"></i>
    </button>
    <button id="save" title="保存"><i class="iconfont icon-fuzhi"></i></button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { usePaintStore } from "../store/modules/paint";
export default defineComponent({
  setup() {
    // use
    const paintStore = usePaintStore();
    // method
    const reset = () => {
      paintStore.fillBg("white");
    };
    const undo = () => {
      paintStore.undo();
    };
    return {
      reset,
      undo,
    };
  },
});
</script>
<style lang="css" scoped>
.tools {
  position: fixed;
  left: 0;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.tools button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #eee;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0 10px;
  text-align: center;
  color: #ccc;
  line-height: 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.tools button.active,
.tools button:active {
  box-shadow: 0 0 15px #00ccff;
  color: #00ccff;
}
.tools button i {
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .tools {
    bottom: auto;
    top: 20px;
  }
  .tools button {
    width: 35px;
    height: 35px;
    line-height: 35px;
    margin-bottom: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .tools button.active,
  .tools button:active {
    box-shadow: 0 0 5px #00ccff;
  }
  .tools button i {
    font-size: 18px;
  }
  .tools #swatches {
    display: none;
  }
}
</style>
