<template>
  <div class="result-introduction">
    <div class="introduction-top" :style="backgroundDiv">
      <!-- <img :src="pic1" alt=""> -->
      <div class="top-p">
        <p>成果介绍</p>
      </div>
    </div>
    <div class="intro">
      <!-- <h1>this is 成果介绍页面</h1> -->
      <div class="wrap" id="race-country">
        <span>国内外赛事：</span>
        <div>
          <div class="race">
            <h3>{{ list1.title }}</h3>
            <img :src="pic1" alt="" />
            <div class="race-p" @click="race1">
              {{ list1.content }}
            </div>
          </div>
          <div class="race">
            <h3>{{ list2.title }}</h3>
            <img :src="pic2" alt="" />
            <div class="race-p" @click="race2">
              {{ list2.content }}
            </div>
          </div>
          <div class="race">
            <h3>{{ list3.title }}</h3>
            <img :src="pic3" alt="" />
            <div class="race-p" @click="race3">
              {{ list3.content }}
            </div>
          </div>
          <div class="race">
            <h3>{{ list4.title }}</h3>
            <img :src="pic4" alt="" />
            <div class="race-p" @click="race4">
              {{ list4.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="wrap" id="sci-result">
        <span>科研成果：</span>
        <div class="result">
          <div class="result-left">
            <img :src="pic7" alt="" />
            <span>LAST NEWS</span>
            <div class="result-left-p" @click="resu1">
              {{ result1.content }}
            </div>
          </div>
          <div class="result-right">
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic11" alt="" /></div>
              <div class="detail-right" @click="resu2">
                {{ result2.content }}
              </div>
            </div>
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic9" alt="" /></div>
              <div class="detail-right" @click="resu3">
                {{ result3.content }}
              </div>
            </div>
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic10" alt="" /></div>
              <div class="detail-right" @click="resu4">
                {{ result4.content }}
              </div>
            </div>
          </div>
        </div>
        <router-link to="resultList">
          <div class="result-link">更多成果>></div>
        </router-link>
      </div>
      <div class="wrap" id="involve">
        <div class="involve-left"><img :src="pic12" alt="" /></div>

        <div class="involve-center">
          <p style="font-size: 30px;">涉及领域：</p>
          <br />
          <p>{{ relation.content }}</p>
        </div>
        <div class="involve-right"><img :src="pic13" alt="" /></div>
      </div>
      <div class="wrap" id="app-d">
        <span>应用实例</span>
        <div class="app">
          <router-link
            :to="{
              path: '/appExample1',
              query: { id: app1.id, title: app1.title, content: app1.content }
            }"
            class="app-left"
          >
            <div>
              <img :src="pic5" alt="" />
              <div class="app-p">
                <p>{{ app1.title }}</p>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{
              path: '/appExample1',
              query: { id: app2.id, title: app2.title, content: app2.content }
            }"
            class="app-center"
          >
            <div>
              <img :src="pic6" alt="" />
              <div class="app-p">
                <p>{{ app2.title }}</p>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{
              path: '/appExample1',
              query: { id: app3.id, title: app3.title, content: app3.content }
            }"
            class="app-right"
          >
            <div>
              <img :src="pic2" alt="" />
              <div class="app-p">
                <p>{{ app3.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultIntro',
  data() {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('@/assets/images/pic1.jpg') + ')'
      },
      pic1: require('@/assets/images/m1.jpg'),
      pic2: require('@/assets/images/m2.jpg'),
      pic3: require('@/assets/images/m3.jpg'),
      pic4: require('@/assets/images/m4.jpg'),
      pic5: require('@/assets/images/m5.jpg'),
      pic6: require('@/assets/images/m6.jpg'),
      pic7: require('@/assets/images/m7.jpg'),
      pic8: require('@/assets/images/m8.jpg'),
      pic9: require('@/assets/images/m9.jpg'),
      pic10: require('@/assets/images/m10.jpg'),
      pic11: require('@/assets/images/m11.jpg'),
      pic12: require('@/assets/images/m12.jpg'),
      pic13: require('@/assets/images/m13.jpg'),
      p5: '计算机领域的研究',
      p6: '人工智能领域的研究',
      p7: '教育教学的研究等',
      list1: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      list2: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      list3: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      list4: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      result1: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      result2: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      result3: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      result4: {
        id: 0,
        title: '',
        content: '',
        time: '',
        hot: 0,
        participant_member: '',
        sort: 0,
        achieve_name: '',
        img: ''
      },
      relation: {
        content: '',
        img: ''
      },
      app1: {
        id: 0,
        title: '',
        img: ''
      },
      app2: {
        id: 0,
        title: '',
        img: ''
      },
      app3: {
        id: 0,
        title: '',
        img: ''
      }
    }
  },
  created() {
    const that = this
    this.$axios
      .get('http://localhost:8083/achieve/getDataBySort?sort=0')
      .then(function(response1) {
        that.form = response1.data
        that.list1.time = that.form[0].time
        that.list1.title = that.form[0].title
        that.list1.content = that.form[0].content
        that.list2.time = that.form[1].time
        that.list2.title = that.form[1].title
        that.list2.content = that.form[1].content
        that.list3.time = that.form[2].time
        that.list3.title = that.form[2].title
        that.list3.content = that.form[2].content
        that.list4.time = that.form[3].time
        that.list4.title = that.form[3].title
        that.list4.content = that.form[3].content
      })
    this.$axios
      .get('http://localhost:8083/achieve/getDataBySort?sort=1')
      .then(function(response2) {
        that.form = response2.data
        that.result1.time = that.form[0].time
        that.result1.title = that.form[0].title
        that.result1.content = that.form[0].content
        that.result1.participant_member = that.form[0].participantMember
        that.result1.achieve_name = that.form[0].achieveName
        that.result2.time = that.form[1].time
        that.result2.title = that.form[1].title
        that.result2.content = that.form[1].content
        that.result2.participant_member = that.form[1].participantMember
        that.result2.achieve_name = that.form[1].achieveName
        that.result3.time = that.form[2].time
        that.result3.title = that.form[2].title
        that.result3.content = that.form[2].content
        that.result3.participant_member = that.form[2].participantMember
        that.result3.achieve_name = that.form[2].achieveName
        that.result4.time = that.form[3].time
        that.result4.title = that.form[3].title
        that.result4.content = that.form[3].content
        that.result4.participant_member = that.form[3].participantMember
        that.result4.achieve_name = that.form[3].achieveName
      }),
      this.$axios
        .get('http://localhost:8083/achieve/getDataBySort?sort=2')
        .then(function(response3) {
          that.form = response3.data
          that.relation.content = that.form[0].content
        }),
      this.$axios
        .get('http://localhost:8083/achieve/getDataBySort?sort=3')
        .then(function(response4) {
          that.form = response4.data
          that.app1.id = that.form[0].id
          that.app1.title = that.form[0].title
          that.app2.id = that.form[1].id
          that.app2.title = that.form[1].title
          that.app3.id = that.form[2].id
          that.app3.title = that.form[2].title
        })
  },
  methods: {
    race1() {
      this.$alert(
        '内容：' + this.list1.content + '<br>时间：' + this.list1.time,
        this.list1.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    race2() {
      this.$alert(
        '内容：' + this.list2.content + '<br>时间：' + this.list2.time,
        this.list2.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    race3() {
      this.$alert(
        '内容：' + this.list3.content + '<br>时间：' + this.list3.time,
        this.list3.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    race4() {
      this.$alert(
        '内容：' + this.list4.content + '<br>时间：' + this.list4.time,
        this.list4.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    resu1() {
      this.$alert(
        '成果内容：' +
          this.result1.content +
          '<br>时间：' +
          this.result1.time +
          '<br>参赛人：' +
          this.result1.participant_member +
          '<br>获得奖项：' +
          this.result1.achieve_name,
        this.result1.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    resu2() {
      this.$alert(
        '成果内容：' +
          this.result2.content +
          '<br>时间：' +
          this.result2.time +
          '<br>参赛人：' +
          this.result2.participant_member +
          '<br>获得奖项：' +
          this.result2.achieve_name,
        this.result1.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    resu3() {
      this.$alert(
        '成果内容：' +
          this.result3.content +
          '<br>时间：' +
          this.result3.time +
          '<br>参赛人：' +
          this.result3.participant_member +
          '<br>获得奖项：' +
          this.result3.achieve_name,
        this.result3.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    },
    resu4() {
      this.$alert(
        '成果内容：' +
          this.result4.content +
          '<br>时间：' +
          this.result4.time +
          '<br>参赛人：' +
          this.result4.participant_member +
          '<br>获得奖项：' +
          this.result4.achieve_name,
        this.result4.title,
        {
          dangerouslyUseHTMLString: true
        }
      )
    }
  }
}
</script>

<style scoped>
.introduction-top {
  width: 100%;
  height: 200px;
  background: no-repeat center top;
  background-size: contain;
  position: relative;
}
.top-p {
  position: absolute;
  font-size: 260%;
  top: 45px;
  left: 40px;
  color: rgb(250, 250, 250);
  border-bottom: 5px solid rgb(255, 255, 255);
}
.intro {
  width: 100%;
  margin: 0 auto;
  /* margin-top: -20px; */
}
.wrap span {
  font-size: 240%;
  margin: 20px;
}
.wrap {
  /* border: 1px solid rgb(138, 138, 139); */
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
  display: block;
}
#race-country {
  background: rgb(230, 231, 231);
  height: 470px;
}
#sci-result {
  /* background: rgb(241, 243, 243); */
  height: 580px;
}
#involve {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#app-d {
  margin-bottom: 30px;
}
.race {
  width: 20%;
  height: 450px;
  float: left;
  margin-left: 4%;
  margin-top: 20px;
}
.race img {
  width: 100%;
  height: 150px;
  margin-top: 10px;
}
.race h3 {
  text-align: center;
}
.race-p {
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
}
.race-p:hover {
  color: rgb(2, 85, 133);
}
.result {
  width: 100%;
  margin-top: 20px;
}
.result-left {
  width: 20%;
  height: auto;
  margin-left: 12%;
  margin-top: 20px;
  padding: 15px;
  float: left;
  /* border: 1px solid rgb(138, 138, 139); */
}
.result-left img {
  width: 100%;
  height: auto;
  /* margin-bottom: 10px; */
}
.result-left span {
  font-size: 25px;
  /* padding-top: 10px; */
  text-align: center;
  display: block;
}
.result-left-p {
  width: 100%;
  margin-top: 30px;
  line-height: 28px;
  font-size: 16px;
}
.result-left-p:hover {
  color: rgb(2, 85, 133);
}
.result-right {
  width: 55%;
  height: auto;
  margin-left: 34%;
  /* border: 1px solid rgb(138, 138, 139); */
  border-left: 5px solid rgb(10, 10, 10);
  padding: 25px;
}
.result-right-detail {
  width: 100%;
  height: 130px;
  margin: 8px;
  padding: 5px;
  border-bottom: 1px solid rgb(117, 114, 114);
  display: block;
}
.result-link {
  width: auto;
  margin-left: 78%;
  margin-top: 10px;
}
.result-link:hover {
  color: blue;
}
.detail-left img {
  width: 100%;
  height: auto;
}
.detail-left {
  width: 15%;
  float: left;
}
.detail-right {
  width: 80%;
  float: right;
  line-height: 28px;
  padding: 20px;
  font-size: 16px;
}
.detail-right:hover {
  color: rgb(2, 85, 133);
}
.involve-left {
  width: 33.33%;
  height: 400px;
  border: 1px solid rgb(138, 138, 139);
}
.involve-left img {
  width: 100%;
  height: 400px;
}
.involve-center {
  width: 33.33%;
  height: 400px;
  padding: 30px;
  /* border: 1px solid rgb(138, 138, 139); */
  background: rgb(230, 231, 231);
}
.involve-center p {
  /* margin-top: 40px; */
  line-height: 30px;
  font-size: 18px;
}
.involve-right {
  width: 33.33%;
  height: 400px;
  /* margin-left: 66.2%; */
  border: 1px solid rgb(138, 138, 139);
}
.involve-right img {
  width: 100%;
  height: 400px;
}
.app {
  /* width: 100%; */
  display: flex;
  justify-content: space-around;
  margin: 30px;
}
.app-left {
  width: 28%;
  height: auto;
  border: 1px solid rgb(138, 138, 139);
  transition-duration: 0.5s;
}
.app-left:hover {
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}
.app-center {
  width: 28%;
  height: auto;
  border: 1px solid rgb(138, 138, 139);
  transition-duration: 0.5s;
}
.app-center:hover {
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}
.app-right {
  width: 28%;
  height: auto;
  border: 1px solid rgb(138, 138, 139);
  transition-duration: 0.5s;
}
.app-right:hover {
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}
.app img {
  width: 100%;
  height: 300px;
}
.app p {
  padding: 30px;
  font-size: 16px;
}
.app-p {
  overflow: hidden;
}
@media screen and (max-width: 1400px) {
  .race-p {
    font-size: 14px;
  }
  #sci-result {
    height: 640px;
  }
  .app img {
    height: 250px;
  }
  .involve-center p {
    line-height: 28px;
    font-size: 17px;
  }
}
@media screen and (max-width: 1200px) {
  .introduction-top {
    height: 150px;
  }
  .race-p {
    font-size: 13px;
  }
  .result-right-detail {
    height: 150px;
  }
}
@media screen and (max-width: 1100px) {
  .race-p {
    font-size: 12px;
  }
  .app img {
    height: 220px;
  }
  .involve-center p {
    line-height: 28px;
    font-size: 15px;
  }
}
@media screen and (max-width: 1000px) {
  .introduction-top {
    width: 1000px;
    height: 140px;
  }
  .intro {
    width: 1000px;
  }
  .wrap {
    width: 800px;
  }
  .app img {
    height: 200px;
  }
  .involve-center p {
    line-height: 24px;
    font-size: 16px;
  }
}
</style>
