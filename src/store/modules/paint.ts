import { defineStore } from "pinia";
interface PaintState {
  lineWidth: number;
  ctx: Nullable<CanvasRenderingContext2D>;
  canvas: Nullable<HTMLCanvasElement>;
  activeColor: Nullable<ColorGroup>;
  painting: boolean;
  historyData: ImageData[];
}

export const usePaintStore = defineStore({
  id: "paint",
  state: (): PaintState => ({
    lineWidth: 2,
    ctx: null,
    canvas: null,
    activeColor: null,
    painting: false,
    historyData: [],
  }),

  getters: {
    getActiveColor(): ColorGroup {
      if (!this.activeColor) {
        return {
          type: "black",
          backgroundColor: "rgb(0, 0, 0)",
        };
      } else {
        return this.activeColor;
      }
    },
  },

  actions: {
    setCanvasCtx(ctx: CanvasRenderingContext2D) {
      this.ctx = ctx;
    },
    setCanvasElement(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
    },
    setActiveColor(activeColor: Nullable<ColorGroup>) {
      this.activeColor = activeColor;
    },
    setLineWidth(lineWidth: number) {
      this.lineWidth = lineWidth;
    },
    initCanvas(canvas: Nullable<HTMLCanvasElement>) {
      if (canvas) {
        this.setCanvasElement(canvas);
        const ctx = canvas.getContext("2d");
        if (ctx) {
          this.setCanvasCtx(ctx);
        } else {
          throw new Error("ctx cannot init");
        }
      } else {
        throw new Error("canvas cannot init");
      }
    },
    fillBg(color: string) {
      if (this.ctx && this.canvas) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas?.width, this.canvas?.height);
        this.ctx.fillStyle = "black";
      }
    },
    listenToPaint() {
      if (this.canvas) {
        this.canvas.onmousedown = (e) => {
          if (this.ctx && this.canvas) {
            const canvasData = this.ctx.getImageData(
              0,
              0,
              this.canvas.width,
              this.canvas.height
            ); //在这里储存绘图表面
            this.pushHistory(canvasData);
            this.painting = true;
            let x = e.clientX;
            let y = e.clientY;
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.lineWidth, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.getActiveColor.backgroundColor;
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
          }
        };
        this.canvas.onmousemove = (e) => {
          if (this.painting && this.ctx) {
            let x = e.clientX;
            let y = e.clientY;
            this.ctx.lineTo(x, y);
            this.ctx.lineWidth = this.lineWidth * 2;
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = "round";
            this.ctx.strokeStyle = this.getActiveColor.backgroundColor;
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
          }
        };

        this.canvas.onmouseup = () => {
          this.painting = false;
          this.ctx && this.ctx.beginPath();
        };

        this.canvas.onmouseleave = () => {
          this.painting = false;
          this.ctx && this.ctx.beginPath();
        };
      }
    },
    pushHistory(imageData: ImageData) {
      this.historyData.length === 10 && this.historyData.shift();
      // 上限为储存10步，太多了怕挂掉
      this.historyData.push(imageData);
      console.log(this.historyData);
    },
    undo() {
      console.log(this.historyData);
      if (this.historyData.length < 1) return false;
      this.ctx &&
        this.ctx.putImageData(
          this.historyData[this.historyData.length - 1],
          0,
          0
        );
      this.historyData.pop();
    },
  },
});
