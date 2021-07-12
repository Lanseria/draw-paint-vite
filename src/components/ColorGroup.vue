<template>
  <div class="color-group">
    <ul>
      <li
        v-for="item in tools"
        :key="item.type"
        class="color-item"
        :class="{ active: active === item.type }"
        :style="{ backgroundColor: item.backgroundColor }"
        @click="handleColor(item)"
      ></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { usePaintStore } from "../store/modules/paint";
export default defineComponent({
  setup() {
    const paintStore = usePaintStore();
    const tools = ref<ColorGroup[]>([
      {
        type: "white",
        backgroundColor: "rgb(255, 255, 255)",
      },
      {
        type: "black",
        backgroundColor: "rgb(0, 0, 0)",
      },
      {
        type: "red",
        backgroundColor: "rgb(253, 51, 51)",
      },
      {
        type: "blue",
        backgroundColor: "rgb(0, 102, 255)",
      },
      {
        type: "yellow",
        backgroundColor: "rgb(255, 255, 51)",
      },
      {
        type: "gray",
        backgroundColor: "rgb(128, 128, 128)",
      },
    ]);
    const active = computed(() => {
      return paintStore.getActiveColor.type;
    });
    // method
    const handleColor = (item: ColorGroup) => {
      paintStore.setActiveColor(item);
    };
    return {
      active,
      tools,
      // method
      handleColor,
    };
  },
});
</script>
<style lang="css" scoped>
.color-group {
  position: fixed;
  width: 30px;
  left: 30px;
  top: 50%;
  transform: translate(0, -150px);
}
.color-group ul {
  list-style: none;
}
.color-group ul li {
  width: 30px;
  height: 30px;
  margin: 10px 0;
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
}
.color-group ul li.active {
  box-shadow: 0 0 15px #00ccff;
}

@media screen and (max-width: 768px) {
  .color-group {
    left: 0;
    top: auto;
    bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    transform: translate(0, 0);
  }
  .color-group ul li {
    display: inline-block;
    margin: 0 5px;
  }
  .color-group ul li.active {
    box-shadow: 0 0 10px #00ccff;
  }
}
</style>
