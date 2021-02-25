<template>
  <div class="member">
    <div class="word">
      <p class="word1">我们具有创造力</p>
      <p class="word2">来看看我们的团队</p>
      <hr class="hr">
    </div>
    <div class="teacher">
      <router-link to='detailmes'><div @mouseover="mouseOver1" @mouseleave="mouseLeave" :style="peo1" class="zuo">
        <img class="pic" :src="pic1">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver2" @mouseleave="mouseLeave" :style="peo2" class="you">
        <img class="pic" :src="pic1">
      </div></router-link>
    </div>
    <div class="stu">
      <router-link to='detailmes'><div @mouseover="mouseOver3" @mouseleave="mouseLeave" :style="peo3" class="stu1">
        <img class="picture" :src="pic2">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver4" @mouseleave="mouseLeave" :style="peo4" class="stu2">
        <img class="picture" :src="pic2">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver5" @mouseleave="mouseLeave" :style="peo5" class="stu2">
        <img class="picture" :src="pic2">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver6" @mouseleave="mouseLeave" :style="peo6" class="stu2">
        <img class="picture" :src="pic2">
      </div></router-link>
    </div>
    <div class="stu">
      <router-link to='detailmes'><div @mouseover="mouseOver7" @mouseleave="mouseLeave" :style="peo7" class="stu1">
        <img class="picture" :src="pic2">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver8" @mouseleave="mouseLeave" :style="peo8" class="stu2">
        <img class="picture" :src="pic2">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver9" @mouseleave="mouseLeave" :style="peo9" class="stu2">
        <img class="picture" :src="pic2">
      </div></router-link>
      <router-link to='detailmes'><div @mouseover="mouseOver10" @mouseleave="mouseLeave" :style="peo10" class="stu2">
        <img class="picture" :src="pic2">
      </div></router-link>
    </div>
    <div class="white"></div>
  </div>
</template>

<script>
export default {
  name: 'member',
  data() {
    return {
      pic1:require("@/assets/images/ren2.png"),
      pic2:require("@/assets/images/ren1.png"),
      peo1: "",peo2: "",peo3: "",peo4 : "",peo5 : "",peo6 : "",peo7 : "",peo8 : "",peo9 : "",peo10 : "",
    }
  },
  methods:{
    mouseOver1() {
      this.peo1 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver2() {
      this.peo2 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver3() {
      this.peo3 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver4() {
      this.peo4 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver5() {
      this.peo5 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver6() {
      this.peo6 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver7() {
      this.peo7 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver8() {
      this.peo8 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver9() {
      this.peo9 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseOver10() {
      this.peo10 = "opacity:85%;box-shadow: 10px 10px 5px #888888;";
    },
    mouseLeave() {
      this.peo1 = "";
      this.peo2 = "";
      this.peo3 = "";
      this.peo4 = "";
      this.peo5 = "";
      this.peo6 = "";
      this.peo7 = "";
      this.peo8 = "";
      this.peo9 = "";
      this.peo10 = "";
    },
    
  }
}
</script>

<style>
body{
  width: 100%;
  overflow-x: hidden;
}
@media screen and (max-width: 1000px) {
  body{
    overflow-x: scroll;
  }
}
</style>
<style scoped>
.white{
  height: 70px;
  width: 100%;
  float: top;
}
.word{
  margin-left: 10.3%;
  color: black;
  width: 100%;
  height:10em;
  float: top;
  margin-bottom: 3em;
}
.word1{
  margin-left: 500px;
  font-size: 170%;
  margin-top: 1em;
}
.word2{
  margin-left: 340px;
  width: 100%;
  font-size: 400%;
  font-weight: 600;
  margin-top: 0.5em;
}
.hr{
  width: 25em;
  margin:2em auto;
  border:none;
  border-top:4px solid black;
  margin-left: 400px;
}
.teacher{
  width: 100%;
  margin-left: 10.3%;
  float: top;
  height:19.61em;
  display: flex;
  margin-bottom: 0px;
}
.stu{
  margin-top: 3em;
  width: 100%;
  height: 22.9em;
  float: top;
  display: flex;
  margin-left: 10.3%;
}
.zuo{
  margin-left: 75px;
  background-color: black;
  width: 29em;
  height: 100%;
  float: left;
  flex:1;
}
.you{
  float: left;
  background-color: black;
  width: 29em;
  height: 100%;
  flex:1;
  margin-left: 25%;
}
.picture{
  width: 100%;
}
.stu1{
  background-color: black;
  width: 17em;
  float: left;
  height: 23.7em;
  flex:1;
}
.stu2{
  background-color: black;
  margin-left: 2.3em;
  width: 17em;
  float: left;
  height: 23.7em;
  flex:1;
}
@media screen and (max-width: 1200px) {
  .word1{
    margin-left: 33%;
  }
  .word2{
    margin-left: 17%;
  }
  .hr{
    margin-left: 23%;
  }
  .teacher{
    height: 11.81em;
    margin-left: 9.2%;
  }
  .zuo{
    margin-left: 105px;
    width: 17em;
  }
  .you{
    margin-left: 115px;
    width: 17em;
  }
  .stu1,.stu2{
    width: 10em;
    height: 13.7em;
  }
  .stu{
    height: 13.9em;
    margin-left: 15.3%;
  }
  .pic{
    width: 89%;
  }
}
@media screen and (max-width: 1000px) {
  .member{
    width: 1000px;
  }
}
</style>
