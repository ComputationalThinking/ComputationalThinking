<template>
  <div class="laboratory">
    <div class="left">
      <p class="class1">计算思维</p>
      <p class="class2">实验室</p>
      <p @click="click1" @mouseover="mouseOver1" @mouseleave="mouseLeave" :style="mem1" class="class3">实验室地点、图片</p>
      <p @click="click2" @mouseover="mouseOver2" @mouseleave="mouseLeave" :style="mem2" class="class4">实验室研究方向、人员需求</p>
      <p @click="click3" @mouseover="mouseOver3" @mouseleave="mouseLeave" :style="mem3" class="class4">实验室相关人员</p>
    </div>
    <div class="right">
      <div :style="mem4"><img :src="pic2"></div>
      <div class="picc" :style="mem5">
        bb
      </div>
      <div class="picc" :style="mem6">
        aa
      </div>
      <div class="picc" :style="mem7">
        cc
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'laboratory',
  data(){
    return {
      pic1:require("@/assets/images/ren1.png"),
      pic2:require("@/assets/images/image1.png"),
      pic3:require("@/assets/images/ren2.png"),
      pic4:require("@/assets/images/女.jpg"),
      mem1: "",
      mem2: "",
      mem3: "",
      mem4: "",
      mem5: "",
      mem6: "",
      mem7: "",
    }
  },
  methods:{
    mouseOver1() {
      this.mem1 = "color:black";
    },
    mouseOver2() {
      this.mem2 = "color:black";
    },
    mouseOver3() {
      this.mem3 = "color:black";
    },
    mouseLeave() {
      this.mem1 = "";
      this.mem2 = "";
      this.mem3 = "";
    },
    click1() {
      this.mem4 = "display: none";
      this.mem5 = "display: block";
      this.mem6 = "display: none";
      this.mem7 = "display: none";
    },
    click2() {
      this.mem4 = "display: none";
      this.mem5 = "display: none";
      this.mem6 = "visibility: visible";
      this.mem7 = "display: none";
    },
    click3() {
      this.mem4 = "display: none";
      this.mem5 = "display: none";
      this.mem6 = "display: none";
      this.mem7 = "visibility: visible";
    },
  }
}
</script>

<style>
.laboratory{
  color: black;
  height: 41.1em;
  overflow: hidden;
}
.left{
  width: 40%;
  float: left;
  height: 41.1em;
}
.right{
  width: 60%;
  float: left;
  height: 41.1em;
}
.class1{
  width: 100%;
  font-size: 400%;
  margin-left: 25%;
  margin-top: 2em;
}
.class2{
  font-size: 550%;
  margin-left: 50%;
  margin-top: 0%;
  width: 100%;
}
.class3{
  color: rgb(160, 159, 159);
  font-size: 170%;
  margin-left: 35%;
  margin-top: 3em;
}
.class4{
  color: rgb(160, 159, 159);
  font-size: 170%;
  margin-left: 35%;
  margin-top: 1em;
}
.picc{
  height: 41.1em;
  margin-top: -41.1em;
}
</style>
