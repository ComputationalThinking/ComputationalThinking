<template>
  <div class="home">
    <div class="home_frame">
      <div class="head">
        <div style="float:left">
          <div class="title">计算思维研究实验室</div>
          <div class="title_en">Computational Thinking Research Laboratory</div>
          <div class="icon">
            <img :src="icon" />
          </div>
        </div>
        <div class="big_icon">
          <img :src="bigicon" />
        </div>
      </div>
      <div
        class="body"
        style="height:25em;margin-top:0em;background: #f4f7f8;width:100%"
      >
        <div class="message_text">相关资讯情况</div>
        <div class="line"></div>
        <div
          @click="MessageInformationClick()"
          class="message"
          style="margin-left:15%;background-color: #4C5870;"
        >
          实验室资讯
        </div>
        <div
          @click="MessageClick()"
          class="message"
          style="background-color: #A2A9AF;"
        >
          国内资讯
        </div>
        <div
          @click="MessageClick()"
          class="message"
          style="background-color: #fff;color:#5C5C5C"
        >
          国外资讯
        </div>
      </div>
      <div
        class="body"
        style="width:100%;height:50em;background: #f4f7f8;margin-top:0;padding-top:3.5em"
      >
        <div class="computer_left">
          <div class="computer_content" style="background:#3D3D3B">
            <div class="computer_title">
              计算思维
            </div>
          </div>
          <div class="computer_content" style="background:#4C5870">
            <div class="computer_title">
              我们的实验室
            </div>
          </div>
        </div>
        <div class="computer_right">
          <div class="computer_content" style="background:#F2F2F2">
            <div class="computer_top">
              <img :src="upicon" style="width:2em;height:2em;" />
            </div>
            <div class="computer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </div>
          </div>
          <div class="computer_content" style="background:#fff">
            <div class="computer_top"></div>
            <div class="computer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </div>
          </div>
        </div>
      </div>
      <div class="body" style="height:35em">
        <div class="message_text">实验室重要组成</div>
        <div class="teacher">
          <div class="people_icon">
            <img :src="teacher" />
          </div>
          <div class="people_text">
            <h2>实验室</h2>
            <br />
            <p>主要负责老师</p>
          </div>
          <div @click="LaboratoryClick()" class="people_button">详情信息</div>
        </div>
        <div class="student">
          <div class="people_icon">
            <img :src="student" />
          </div>
          <div class="people_text">
            <h2>实验室</h2>
            <br />
            <p>主要负责成员</p>
          </div>
          <div @click="LaboratoryClick()" class="people_button">详情信息</div>
        </div>
      </div>
      <div class="body" style="background:#E9E9E9;width:100%">
        <div class="cs4c_content">
          <div style="font-size:1em;line-height:1.5em">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
          </div>
          <div @click="CS4CClick()" class="cs4c_button">进入</div>
        </div>
        <div class="cs4c_icon">
          <div style="color:#2888B0;font-size:25em">
            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
          </div>
          <div style="font-size:3.5em;font-weight:bolder;margin-left:0.75em">
            CS4C
          </div>
        </div>
      </div>
      <div class="body" style="height:35em">
        <div class="message_text" style="margin-top:1.5em;">相关成果展示</div>
        <div @click="ResultintroClick()" class="gain">
          <div class="gain_icon">
            <!-- <i class="fa fa-trophy" aria-hidden="true"></i> -->
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          <div class="gain_text">成果一</div>
        </div>
        <div @click="ResultintroClick()" class="gain">
          <div class="gain_icon">
            <!-- <i class="fa fa-trophy" aria-hidden="true"></i> -->
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          <div class="gain_text">成果二</div>
        </div>
        <div @click="ResultintroClick()" class="gain" style="margin-right:0">
          <div class="gain_icon">
            <!-- <i class="fa fa-trophy" aria-hidden="true"></i> -->
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          <div class="gain_text">更多...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      icon: require('@/assets/images/computer.png'),
      bigicon: require('@/assets/images/AI.png'),
      upicon: require('@/assets/images/upicon.png'),
      teacher: require('@/assets/images/teacher.png'),
      student: require('@/assets/images/student.png')
    }
  },
  methods: {
    MessageClick() {
      this.$router.push({ path: '/Message' })
    },
    MessageInformationClick() {
      this.$router.push({ path: '/Information' })
    },
    LaboratoryClick() {
      this.$router.push({ path: '/Laboratory' })
    },
    CS4CClick() {
      this.$router.push({ path: '/CS4C' })
    },
    ResultintroClick() {
      this.$router.push({ path: '/Resultintro' })
    }
  }
}
</script>
<style>
body {
  width: 100%;
  overflow-x: hidden;
}
@media screen and (max-width: 1000px) {
  body {
    overflow-x: scroll;
  }
}
</style>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.head {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-left: 10%;
  background: #f4f7f8;
  /* background: brown; */
}
.title {
  font-size: 2.75em;
  font-weight: bolder;
  color: #666;
  /* margin-left: 10%; */
  margin-top: 70px;
}
.title_en {
  font-size: 2em;
  font-weight: bolder;
  color: #999;
  /* margin-left: 10%; */
  margin-top: 25px;
}
.icon {
  margin-top: 15px;
  width: 120px;
  height: 120px;
}
.big_icon {
  float: left;
  width: 280px;
  height: 280px;
  margin-left: 10%;
  margin-top: 30px;
  /* background: cornflowerblue; */
}
.body {
  width: 80%;
  height: 45em;
  margin: 0 auto;
  margin-top: 3.5em;
  /* background-color: blueviolet; */
}
.message_text {
  text-align: center;
  margin: 0 auto;
  font-size: 1.75em;
  font-weight: bolder;
  color: #003366;
}
.line {
  width: 20%;
  margin: 0 auto;
  height: 0.5em;
  border-radius: 16px;
  background: #003366;
  margin-top: 0.625em;
}
.message {
  width: 25%;
  height: 8em;
  background: #666;
  float: left;
  margin-top: 1.5em;
  cursor: pointer;
  text-align: center;
  font-size: 2em;
  color: white;
  font-weight: bolder;
  padding-top: 3.5em;
}
.message:hover {
  margin-top: 1em;
  transition: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.people_icon {
  width: 50%;
  height: 35%;
  /* background: chartreuse; */
  margin: 0 auto;
  margin-top: 5em;
}
.people_text {
  margin-top: 2em;
  text-align: center;
  font-size: 1em;
}
.people_text p {
  font-size: 1.25em;
}
.people_button {
  width: 40%;
  height: 2em;
  padding-top: 0.5em;
  margin: 0 auto;
  margin-top: 1.5em;
  font-size: 1.5em;
  font-weight: bolder;
  background-color: #006699;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.computer_left {
  width: 40%;
  height: 100%;
  background: violet;
  float: left;
}
.computer_right {
  width: 60%;
  height: 100%;
  background: yellowgreen;
  float: left;
}
.computer_content {
  width: 100%;
  height: 50%;
}
.computer_top {
  /* background: #663600; */
  width: 100%;
  height: 3em;
  padding-left: 4em;
  padding-top: 1em;
}
.computer_text {
  width: 75%;
  height: 12em;
  margin: 0 auto;
  color: #999;
  font-size: 1em;
  line-height: 2em;
  margin-top: 3em;
  overflow: hidden;
}
.computer_title {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 3em;
  font-weight: bolder;
  color: #fff;
  padding-top: 3em;
}
.teacher {
  width: 40%;
  height: 40em;
  margin-left: 7.5%;
  /* background: lightblue; */
  float: left;
}
.student {
  width: 40%;
  height: 40em;
  margin-left: 5%;
  /* background: rgb(173, 230, 195); */
  float: left;
}
.cs4c_content {
  width: 45%;
  height: 35em;
  margin-top: 1em;
  margin-left: 10%;
  margin-right: 10%;
  padding: 5%;
  background: #4c5870;
  color: #fff;
  float: left;
}
.cs4c_icon {
  width: 20%;
  height: 35em;
  margin-top: 1em;
  float: left;
  /* background: lightslategray; */
  color: #003366;
}
.cs4c_button {
  width: 5em;
  height: 2em;
  text-align: center;
  font-size: 1em;
  background: #fff;
  margin-top: 1em;
  padding-top: 0.5em;
  font-weight: bolder;
  color: #4c5870;
  cursor: pointer;
}
.gain {
  width: 20%;
  height: 25em;
  border-radius: 16px;
  margin-right: 20%;
  margin-top: 2em;
  background: #e4f9fe;
  float: left;
  cursor: pointer;
}
.gain_icon {
  width: 80%;
  height: 40%;
  margin-top: 20%;
  margin-left: 10%;
  /* background-color:aquamarine; */
  color: #2888b0;
  text-align: center;
  font-size: 10em;
}
.gain_text {
  margin-top: 1em;
  font-size: 2.25em;
  color: #666;
  text-align: center;
}
.gain:hover {
  margin-top: 1em;
  transition: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width: 1350px) {
  .big_icon {
    margin-left: 9%;
  }
  .title {
    font-size: 2.65em;
  }
  .title_en {
    font-size: 1.85em;
  }
  .body {
    width: 85%;
  }
}
@media screen and (max-width: 1250px) {
  .head {
    padding-left: 8%;
  }
  .body {
    width: 90%;
  }
}
@media screen and (max-width: 1200px) {
  .head {
    padding-left: 6.5%;
  }
  .body {
    width: 95%;
  }
  .title {
    font-size: 2.5em;
  }
  .title_en {
    font-size: 1.75em;
  }
}
@media screen and (max-width: 1100px) {
  .head {
    padding-left: 5%;
  }
  .body {
    width: 100%;
  }
  .title {
    font-size: 2.35em;
  }
  .title_en {
    font-size: 1.6em;
  }
}
@media screen and (max-width: 1000px) {
  .home_frame {
    width: 1000px;
  }
}
</style>
