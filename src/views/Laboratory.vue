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
      <div :style="mem4"><img :src="pic1" style="height:40.8em"></div>
      <div :style="mem5" class="picc">
        <img :src="pic2" style="height: 42.3em;">
        <div style="margin-top:-33em;font-family:FangSong;margin-left:6em;">
          <p style="font-size:25px">地点:</p><br>
          <p>重庆市巴南区红光大道69号</p>
          <p>重庆理工大学花溪校区第四教学楼306</p>
          <img :src="pic5" style="margin-top:0.8em;width:18em;margin-left:-1em;">
          <div style="margin-top:-23em;margin-left:25em;"><img :src="pic6" style="width:15em;"></div>
          <div style="margin-top:2em;margin-left:25em;"><img :src="pic7" style="width:15em;"></div>
        </div>
      </div>
      <div :style="mem6" class="picc">
        <img :src="pic3" style="height: 42.3em;">
        <div style="margin-top:-32em;font-family:FangSong;margin-left:4em;">
          <p style="font-size:25px">人才需求：</p>
          <div style="width:17em;margin-top:5em;margin-left:2em;font-size:17px">计算思维是一种对解决问题非常有效的特殊思维方式，适用范围很广。无论设计学、历史，还是地理，每个学科都应该包含一种计算思维方法。
            <br><br>很重要的问题是，核心教育学科可以没有计算思维吗？
            <br><br>在美国，很多人似乎认为这是可以的，但我不这么认为——至少在学校层面不行。因为计算思维方法需要了解什么是可能的、如何应用计算思维的经验，以及执行它的机器(概念和工具)的相关知识。我不认为你只在其他学科中就能学到这点；这里需要有一个锚点来培养这些现代基础知识。
          </div>
        <div style="margin-top:-30.5em;margin-left:36.7em">
          <p style="font-size:23px">研究方向:</p><br>
          <p style="font-size:18px">算法和编程、<br>数据表证与结构、<br>计算过程和硬件、<br>通信和网络以及交互、<br>系统和社会</p>
        </div>
        </div>
      </div>
      <div :style="mem7" class="picc">
        <img :src="pic4" style="height: 42.3em;">
      <div style="margin-top:-36.5em;font-family:FangSong;margin-left:5.6em;">
        <p style="font-size:26px;font-family:Arial;">Selina</p>
        <p style="font-size:18px;margin-top:5em;margin-left:-3em;width:20em">不读书，不知道路在何方；不行路，不明白书中含义。
          <br><br>走过的路和读过的书，本质上是一样的，只有经历了才会称为你的阅历，最终形成你的格局。这是这些五星的事物，让你能保持清澈的头脑看待自己的人生和这个世界。
          <br><br>三毛说：读书多了，容颜自然改变，许多时候，自己可能以为许多看过的书籍都成了过眼云烟，不复记忆，其实他们仍是潜在的。在气质里，在谈吐上，在胸襟的无涯，当然也可以显露在生活和文字里。
        </p>
        <router-link to='member'>
          <p style="font-family:SimSun;font-size:20px;margin-top:5em;margin-left:10em">更多人员 >></p>
        </router-link>
        <div style="margin-top:-30em;margin-left:30em">
          <img :src="pic8" style="width:24.6em;">
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'laboratory',
  data(){
    return {
      pic1:require("@/assets/images/image2.png"),
      pic2:require("@/assets/images/点击实验地点.png"),
      pic3:require("@/assets/images/点击实验室介绍.png"),
      pic4:require("@/assets/images/点击人员介绍.png"),
      pic5:require("@/assets/images/map.png"),
      pic6:require("@/assets/images/pos1.jpg"),
      pic7:require("@/assets/images/pos2.jpg"),
      pic8:require("@/assets/images/test.png"),
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
      this.mem4 = "visibility: hidden";
      this.mem5 = "visibility: visible";
      this.mem6 = "visibility: hidden";
      this.mem7 = "visibility: hidden";
    },
    click2() {
      this.mem4 = "visibility: hidden";
      this.mem5 = "visibility: hidden";
      this.mem6 = "visibility: visible";
      this.mem7 = "visibility: hidden";
    },
    click3() {
      this.mem4 = "visibility: hidden";
      this.mem5 = "visibility: hidden";
      this.mem6 = "visibility: hidden";
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
  width: 38.5em;
  float: left;
  height: 41.1em;
}
.right{
  width: 50em;
  float: left;
  height: 41.1em;
}
.class1{
  width: 100%;
  font-size: 400%;
  margin-left: 2.6em;
  margin-top: 2em;
}
.class2{
  font-size: 550%;
  margin-left: 3.4em;
  margin-top: 0%;
  width: 100%;
}
.class3{
  color: rgb(160, 159, 159);
  font-size: 170%;
  margin-left: 8em;
  margin-top: 3em;
}
.class4{
  color: rgb(160, 159, 159);
  font-size: 170%;
  margin-left: 8em;
  margin-top: 1em;
}
.picc{
  height: 41.1em;
  margin-top: -41.1em;
  visibility: hidden;
}
</style>
