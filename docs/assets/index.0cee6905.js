import{d as t,a as i,U as a,r as s,o as n,c as o,b as e,w as l,e as c,f as r,g as h,p as d,h as u,F as v,i as g,j as p,v as C,k as b,l as x}from"./vendor.9be78fc7.js";const f=t({id:"paint",state:()=>({lineWidth:2,ctx:null,canvas:null,activeColor:null,painting:!1,historyData:[]}),getters:{getActiveColor(){return this.activeColor?this.activeColor:{type:"black",backgroundColor:"rgb(0, 0, 0)"}}},actions:{setCanvasCtx(t){this.ctx=t},setCanvasElement(t){this.canvas=t},setActiveColor(t){this.activeColor=t},setLineWidth(t){this.lineWidth=t},initCanvas(t){if(!t)throw new Error("canvas cannot init");{this.setCanvasElement(t);const i=t.getContext("2d");if(!i)throw new Error("ctx cannot init");this.setCanvasCtx(i)}},fillBg(t){var i,a;this.ctx&&this.canvas&&(this.ctx.fillStyle=t,this.ctx.fillRect(0,0,null==(i=this.canvas)?void 0:i.width,null==(a=this.canvas)?void 0:a.height),this.ctx.fillStyle="black")},listenToPaint(){this.canvas&&(this.canvas.onmousedown=t=>{if(this.ctx&&this.canvas){const i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);this.pushHistory(i),this.painting=!0;let a=t.clientX,s=t.clientY;this.ctx.beginPath(),this.ctx.arc(a,s,this.lineWidth,0,2*Math.PI),this.ctx.fillStyle=this.getActiveColor.backgroundColor,this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(a,s)}},this.canvas.onmousemove=t=>{if(this.painting&&this.ctx){let i=t.clientX,a=t.clientY;this.ctx.lineTo(i,a),this.ctx.lineWidth=2*this.lineWidth,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.strokeStyle=this.getActiveColor.backgroundColor,this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(i,a)}},this.canvas.onmouseup=()=>{this.painting=!1,this.ctx&&this.ctx.beginPath()},this.canvas.onmouseleave=()=>{this.painting=!1,this.ctx&&this.ctx.beginPath()})},pushHistory(t){10===this.historyData.length&&this.historyData.shift(),this.historyData.push(t),console.log(this.historyData)},undo(){if(console.log(this.historyData),this.historyData.length<1)return!1;this.ctx&&this.ctx.putImageData(this.historyData[this.historyData.length-1],0,0),this.historyData.pop()}}});var y=i({components:{UseWindowSize:a},setup(){const t=f(),i=s();return n((()=>{t.initCanvas(i.value),t.fillBg("white"),t.listenToPaint()})),{CanvasRef:i}}});const w=l("data-v-457c980e"),k=w(((t,i,a,s,n,l)=>{const h=c("use-window-size");return r(),o(h,null,{default:w((({width:t,height:i})=>[e("canvas",{class:"drawing-board",ref:"CanvasRef",width:t,height:i},null,8,["width","height"])])),_:1})}));y.render=k,y.__scopeId="data-v-457c980e";var m=i({setup(){const t=f(),i=s([{type:"white",backgroundColor:"rgb(255, 255, 255)"},{type:"black",backgroundColor:"rgb(0, 0, 0)"},{type:"red",backgroundColor:"rgb(253, 51, 51)"},{type:"blue",backgroundColor:"rgb(0, 102, 255)"},{type:"yellow",backgroundColor:"rgb(255, 255, 51)"},{type:"gray",backgroundColor:"rgb(128, 128, 128)"}]);return{active:h((()=>t.getActiveColor.type)),tools:i,handleColor:i=>{t.setActiveColor(i)}}}});const D=l("data-v-1356b80c");d("data-v-1356b80c");const W={class:"color-group"};u();const _=D(((t,i,a,s,n,l)=>(r(),o("div",W,[e("ul",null,[(r(!0),o(v,null,g(t.tools,(i=>(r(),o("li",{key:i.type,class:["color-item",{active:t.active===i.type}],style:{backgroundColor:i.backgroundColor},onClick:a=>t.handleColor(i)},null,14,["onClick"])))),128))])]))));m.render=_,m.__scopeId="data-v-1356b80c";var P=i({setup(){const t=f(),i=s(2);return{lineWidth:i,handleChange:()=>{t.setLineWidth(i.value)}}}});const A=l("data-v-1312e240");d("data-v-1312e240");const I={id:"range-wrap"};u();const T=A(((t,i,a,s,n,l)=>(r(),o("div",I,[p(e("input",{type:"range",id:"range",min:"1",max:"30","onUpdate:modelValue":i[1]||(i[1]=i=>t.lineWidth=i),title:"调整笔刷粗细",onChange:i[2]||(i[2]=i=>t.handleChange())},null,544),[[C,t.lineWidth]])]))));P.render=T,P.__scopeId="data-v-1312e240";var S=i({setup(){const t=f();return{reset:()=>{t.fillBg("white")},undo:()=>{t.undo()}}}});const B=l("data-v-1a2a245f");d("data-v-1a2a245f");const E={class:"tools"},R=e("button",{id:"brush",class:"active",title:"画笔"},[e("i",{class:"iconfont icon-qianbi"})],-1),z=e("button",{id:"eraser",title:"橡皮擦"},[e("i",{class:"iconfont icon-xiangpi"})],-1),L=e("i",{class:"iconfont icon-qingchu"},null,-1),U=e("i",{class:"iconfont icon-chexiao"},null,-1),j=e("button",{id:"save",title:"保存"},[e("i",{class:"iconfont icon-fuzhi"})],-1);u();const q=B(((t,i,a,s,n,l)=>(r(),o("div",E,[R,z,e("button",{id:"clear",title:"清空",onClick:i[1]||(i[1]=i=>t.reset())},[L]),e("button",{id:"undo",title:"撤销",onClick:i[2]||(i[2]=i=>t.undo())},[U]),j]))));S.render=q,S.__scopeId="data-v-1a2a245f";var H=i({name:"App",components:{DrawingBoard:y,ColorGroup:m,RangeWrap:P,ToolList:S}});H.render=function(t,i,a,s,n,l){const h=c("drawing-board"),d=c("color-group"),u=c("range-wrap"),g=c("tool-list");return r(),o(v,null,[e(h),e(d),e(u),e(g)],64)};const X=b();const Y=x(H);Y.use(X),Y.mount("#app");
