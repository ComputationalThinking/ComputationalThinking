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
      <div :style="mem4"><img :src="pic1" style="width:93%"></div>
      <div :style="mem5" class="picc" style="margin-top:-80%">
        <img :src="pic2" class="ppp1">
        <div style="margin-top:-63%;font-family:FangSong;margin-left:11%;">
          <p class="pos">地点:</p>
          <p style="width:36.6%">重庆市巴南区红光大道69号</p>
          <p style="width:36.6%;height:20px">重庆理工大学花溪校区第四教学楼306</p>
          <img :src="pic5" style="margin-top:20px;width:36%;margin-left:-1%;">
          <div style="margin-top:-47%;margin-left:54%;"><img :src="pic6" style="width:70%;"></div>
          <div style="margin-top:5%;margin-left:54%;"><img :src="pic7" style="width:70%;"></div>
        </div>
      </div>
      <div :style="mem6" class="picc" style="margin-top:-50.5%">
        <img :src="pic3" class="ppp2">
        <div style="margin-top:-60%;font-family:FangSong;margin-left:6%;">
          <p style="font-size:130%">人才需求：</p>
          <div style="width:48%;margin-top:10%;margin-left:-6%;font-size:100%;height:250px">计算思维是一种对解决问题非常有效的特殊思维方式，适用范围很广。每个学科都应该包含一种计算思维方法。
            <br>很重要的问题是，核心教育学科可以没有计算思维吗？
            <br>在美国，很多人似乎认为这是可以的，但我不这么认为——至少在学校层面不行。因为计算思维方法需要了解什么是可能的、如何应用计算思维的经验，以及执行它的机器的相关知识。我不认为你只在其他学科中就能学到这点；这里需要有一个锚点来培养这些现代基础知识。
          </div>
          <div class="aaa">
            <p class="dic">研究方向:</p>
            <p class="dicc">算法和编程、<br>数据表证与结构、<br>计算过程和硬件、<br>通信和网络以及交互、<br>系统和社会</p>
          </div>
        </div>
      </div>
      <div :style="mem7" class="picc3">
        <img :src="pic4" class="ppp3">
        <div style="margin-top:-70%;font-family:FangSong;margin-left:10%;">
          <p style="font-size:26px;font-family:Arial;" class="name">Selina</p>
          <p style="font-size:100%;margin-top:5em;margin-left:-10%;width:48%;height:250px">不读书，不知道路在何方；不行路，不明白书中含义。
            <br><br>走过的路和读过的书，本质上是一样的，只有经历了才会称为你的阅历，最终形成你的格局。这是这些五星的事物，让你能保持清澈的头脑看待自己的人生和这个世界。
            <br><br>三毛说：读书多了，容颜自然改变，许多时候，自己可能以为许多看过的书籍都成了过眼云烟，不复记忆，其实他们仍是潜在的。在气质里，在谈吐上，在胸襟的无涯，当然也可以显露在生活和文字里。
          </p>
          <router-link to='member'>
            <p style="font-family:SimSun;font-size:110%;margin-top:5%;margin-left:20%">更多人员 >></p>
          </router-link>
          <div style="margin-top:-373px;margin-left:65%">
            <img :src="pic8" style="width:150%;">
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
      pic1:require("@/assets/images/image1.png"),
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
</style>
<style scoped>
.laboratory{
  color: black;
  overflow: hidden;
  height: 41.1em;
}
.left{
  width: 400px;
  float: left;
  margin-left: 6%;
}
.right{
  margin-left: 120px;
  width: 840px;
  float: left;
}
.ppp1,.ppp2,.ppp3{
  width: 110%;
}
.class1{
  width: 150%;
  font-size: 400%;
  margin-top: 2em;
}
.class2{
  font-size: 550%;
  margin-left: 33%;
  margin-top: 0%;
  width: 150%;
}
.class3{
  color: rgb(160, 159, 159);
  font-size: 170%;
  margin-left: 15%;
  margin-top: 3em;
}
.class4{
  color: rgb(160, 159, 159);
  font-size: 170%;
  margin-left: 15%;
  margin-top: 1em;
  width: 100%;
}
.picc,.picc3{
  visibility: hidden;
}
.picc3{
  margin-top:-305px;
}
.pos{
  font-size: 25px;
  margin-bottom: 15px;
}
.aaa{
  height: 200px;
  margin-top:-26em;
  margin-left:76%;
}
.dic{
  font-size:23px;
  margin-bottom: 20px;
}
.dicc{
  font-size:18px;
}
@media screen and (min-width: 4500px){
  .right{
    width: 20%;
  }
  .left{
    margin-left: 34%;
    margin-top: 3em;
  }
  .laboratory{
    height: 60em;
  }
  .picc3{
    margin-top: -330px;
  }
}
@media screen and (min-width: 3500px) and (max-width:4500px){
  .right{
    width: 25%;
  }
  .left{
    margin-left: 28%;
    margin-top: 1em;
  }
  .laboratory{
    height: 60em;
  }
  .picc3{
    margin-top: -315px;
  }
}
@media screen and (min-width: 2800px) and (max-width:3500px){
  .right{
    width: 30%;
  }
  .left{
    margin-left: 24%;
  }
  .laboratory{
    height: 60em;
  }
}
@media screen and (min-width: 2300px) and (max-width:2800px){
  .right{
    width: 35%;
  }
  .left{
    margin-left: 20%;
  }
  .laboratory{
    height: 60em;
  }
}
@media screen and (min-width: 2000px) and (max-width:2300px){
  .right{
    width: 40%;
  }
  .left{
    margin-left: 18%;
  }
  .laboratory{
    height: 60em;
  }
}
@media screen and (min-width: 1800px) and (max-width:2000px){
  .right{
    width: 45%;
  }
  .left{
    margin-left: 15%;
  }
}
@media screen and (min-width: 1600px) and (max-width:1800px){
  .right{
    width: 50%;
  }
  .left{
    margin-left: 10%;
  }
}
@media screen and (max-width: 1500px) {
  .laboratory{
    height: 40em;
  }
  .left{
    width: 21%;
  }
  .right{
    width: 60%;
  }
  .pos{
    font-size: 120%;
    margin-bottom: 0px;
  }
  .dic{
    font-size: 120%;
    margin-bottom: 0px;
  }
  .dicc{
    font-size: 100%;
  }
  .aaa{
    margin-top: -24em;
  }
}
@media screen and (max-width: 1300px) {
  .ppp3{
    margin-top: 1em;
  }
  .class1{
    font-size: 300%;
  }
  .class2{
    font-size: 450%;
  }
  .class3,.class4{
    font-size: 120%;
  }
}
@media screen and (max-width: 1000px) {
  .laboratory{
    width: 1000px;
    height: 31.1em;
  }
}
</style>
