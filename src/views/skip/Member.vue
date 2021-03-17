<template>
  <div class="member" style="margin:0 auto">
    <div class="word">
      <p class="word1">我们具有创造力</p>
      <p class="word2">来看看我们的团队</p>
      <hr class="hr" />
    </div>
    <div class="teacher">
      <router-link to="detailmes">
        <div style="width:50%;float: left;">
          <div
            @mouseover="mouseOver1"
            @mouseleave="mouseLeave"
            :style="peo1"
            class="zuo"
          >
            <img class="pic" :src="pic1" />
          </div>
        </div>
      </router-link>
      <router-link to="detailmes">
        <div style="width:50%;float: left;">
          <div
            @mouseover="mouseOver2"
            @mouseleave="mouseLeave"
            :style="peo2"
            class="you"
          >
            <img class="pic" :src="pic1" />
          </div>
        </div>
      </router-link>
    </div>
    <div class="stu">
      <div style="width:80%;margin:0 auto">
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver3"
              @mouseleave="mouseLeave"
              :style="peo3"
              class="stu1"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver4"
              @mouseleave="mouseLeave"
              :style="peo4"
              class="stu2"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver5"
              @mouseleave="mouseLeave"
              :style="peo5"
              class="stu3"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver6"
              @mouseleave="mouseLeave"
              :style="peo6"
              class="stu4"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="stu">
      <div style="width:80%;margin:0 auto">
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver7"
              @mouseleave="mouseLeave"
              :style="peo7"
              class="stu1"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver8"
              @mouseleave="mouseLeave"
              :style="peo8"
              class="stu2"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver9"
              @mouseleave="mouseLeave"
              :style="peo9"
              class="stu3"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
        <router-link to="detailmes">
          <div style="width:25%;float: left;">
            <div
              @mouseover="mouseOver10"
              @mouseleave="mouseLeave"
              :style="peo10"
              class="stu4"
            >
              <img class="picture" :src="pic2" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="white"></div>
  </div>
</template>

<script>
export default {
  name: 'member',
  data() {
    return {
      pic1: require('@/assets/images/ren2.png'),
      pic2: require('@/assets/images/ren1.png'),
      peo1: '',
      peo2: '',
      peo3: '',
      peo4: '',
      peo5: '',
      peo6: '',
      peo7: '',
      peo8: '',
      peo9: '',
      peo10: ''
    }
  },
  methods: {
    mouseOver1() {
      this.peo1 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver2() {
      this.peo2 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver3() {
      this.peo3 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver4() {
      this.peo4 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver5() {
      this.peo5 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver6() {
      this.peo6 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver7() {
      this.peo7 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver8() {
      this.peo8 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver9() {
      this.peo9 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseOver10() {
      this.peo10 = 'opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseLeave() {
      this.peo1 = ''
      this.peo2 = ''
      this.peo3 = ''
      this.peo4 = ''
      this.peo5 = ''
      this.peo6 = ''
      this.peo7 = ''
      this.peo8 = ''
      this.peo9 = ''
      this.peo10 = ''
    }
  }
}
</script>

<style></style>
<style scoped>
.white {
  height: 70px;
  width: 100%;
  float: top;
}
.word {
  text-align: center;
  color: black;
  width: 100%;
  height: 10em;
  float: top;
  margin-bottom: 3em;
}
.word1 {
  font-size: 170%;
  margin-top: 1em;
}
.word2 {
  font-size: 400%;
  font-weight: 600;
  margin-top: 0.5em;
}
.hr {
  width: 25em;
  margin: 2em auto;
  border: none;
  border-top: 4px solid black;
}
.teacher {
  width: 100%;
  margin: 0 auto;
  float: top;
  margin-bottom: 3.5em;
  overflow: auto;
}
.stu {
  width: 100%;
  float: top;
  margin-bottom: 3.5em;
  overflow: auto;
}
.zuo {
  background-color: black;
  width: 65%;
  margin-left: 30%;
  overflow: auto;
}
.you {
  background-color: black;
  width: 65%;
  margin-left: 5%;
  overflow: auto;
}
.picture {
  width: 100%;
}
.pic {
  width: 100%;
  height: auto;
}
.stu1 {
  background-color: black;
  width: 90%;
  float: left;
  margin-left: 5%;
}
.stu2,
.stu3,
.stu4 {
  background-color: black;
  width: 90%;
  margin-left: 5%;
  float: left;
}
@media screen and (min-width: 3000px) {
  .zuo {
    width: 30%;
    margin-left: 65%;
  }
  .you {
    width: 30%;
    margin-left: 5%;
  }
  .stu1 {
    width: 50%;
    margin-left: 85%;
  }
  .stu2 {
    width: 50%;
    margin-left: 45%;
  }
  .stu3 {
    width: 50%;
    margin-left: 5%;
  }
  .stu4 {
    width: 50%;
    margin-left: -35%;
  }
}
@media screen and (min-width: 2000px) and (max-width: 3000px) {
  .zuo {
    width: 50%;
    margin-left: 45%;
  }
  .you {
    width: 50%;
    margin-left: 5%;
  }
  .stu1 {
    width: 70%;
    margin-left: 45%;
  }
  .stu2 {
    width: 70%;
    margin-left: 25%;
  }
  .stu3 {
    width: 70%;
    margin-left: 5%;
  }
  .stu4 {
    width: 70%;
    margin-left: -15%;
  }
}
@media screen and (max-width: 1000px) {
  .member {
    width: 1000px;
  }
}
</style>
