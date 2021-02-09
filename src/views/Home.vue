<template>
  <div class="home">
    <div class="home_frame">
      <div class="head">
        <div style="float:left">
          <div class="title">计算思维研究实验室</div>
          <div class="title_en">Computational Thinking Research Laboratory</div>
          <div class="icon"></div>
        </div>
        <div class="big_icon"></div>
      </div>
      <div class="body" style="height:25em">
        <div class="message_text">相关资讯情况</div>
        <div class="line"></div>
        <div class="message" style="margin-left:5%;background-color: #4C5870;">实验室资讯</div>
        <div class="message" style="background-color: #A2A9AF;">国内资讯</div>
        <div class="message" style="background-color: #fff;color:#5C5C5C">国外资讯</div>
      </div>
      <div class="body" style="width:100%">
        <div class="computer_left">
          <div class="computer_content" style="background:#3D3D3B"></div>
          <div class="computer_content" style="background:#4C5870"></div>
        </div>
        <div class="computer_right">
          <div class="computer_content" style="background:#F2F2F2"></div>
          <div class="computer_content" style="background:#fff"></div>
        </div>
      </div>
      <div class="body">
        <div class="message_text">实验室重要组成</div>
          <div class="teacher">老师</div>
          <div class="student">学生</div>
      </div>
      <div class="body" style="background:#E9E9E9;width:100%">
        <div class="cs4c_content">cs4c的内容</div>
        <div class="cs4c_icon">里面的icon</div>
      </div>
      <div class="body" style="height:35em">
        <div class="message_text" style="margin-top:1.5em;">相关成果展示</div>
        <div class="gain">成果一</div>
        <div class="gain">成果二</div>
        <div class="gain" style="margin-right:0">更多</div>
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
    return {}
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
.home_frame{
  background: #f4f7f8;
}
.head{
  width: 100%;
  height:auto;
  overflow: hidden;
  padding-left: 10%;
  /* background: brown; */
}
.title{
  font-size: 2.75em;
  font-weight: bolder;
  color: #666;
  /* margin-left: 10%; */
  margin-top: 70px;
}
.title_en{
  font-size: 2em;
  font-weight: bolder;
  color: #999;
  /* margin-left: 10%; */
  margin-top: 25px;
}
.icon{
  /* margin-left: 10%; */
  margin-top: 15px;
  width: 200px;
  height: 200px;
  background: coral;
}
.big_icon{
  float: left;
  width: 350px;
  height: 350px;
  margin-left: 10%;
  margin-top: 30px;
  background: cornflowerblue;
}
.body{
  width: 80%;
  height: 45em;
  margin: 0 auto;
  margin-top: 3.5em;
  /* background-color: blueviolet; */
}
.message_text{
  text-align: center;
  margin: 0 auto;
  font-size: 1.5em;
  font-weight: bolder;
  color: #003366;
}
.line{
  width:20%;
  margin: 0 auto;
  height: 0.5em;
  border-radius: 16px;
  background: #003366;
  margin-top: 0.3125em;
}
.message{
  width: 30%;
  height: 8em;
  background: #666;
  float: left;
  margin-top: 1.5em;
  cursor: pointer;
  text-align: center;
  font-size: 2em;
  color: white;
  font-weight: bolder;
  padding-top:3.5em;
}
.message:hover{
  margin-top: 1em;
  transition: .5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.computer_left{
  width: 40%;
  height: 100%;
  background: violet;
  float: left;
}
.computer_right{
  width: 60%;
  height: 100%;
  background:yellowgreen;
  float: left;
}
.computer_content{
  width: 100%;
  height: 50%;
}
.teacher{
  width: 40%;
  height: 40em;
  margin-left:10%;
  background: lightblue;
  float: left;
}
.student{
  width: 40%;
  height: 40em;
  background: rgb(173, 230, 195);
  float: left;
}
.cs4c_content{
  width: 40%;
  height: 35em;
  margin-top: 5em;
  margin-left: 5%;
  margin-right: 5%;
  background: #4C5870;
  color: #fff;
  float: left;
}
.cs4c_icon{
  width: 40%;
  height: 35em;
  margin-top: 5em;
  float: left;
  background: lightslategray;
}
.gain{
  width: 20%;
  height: 25em;
  border-radius: 16px;
  margin-right: 20%;
  margin-top: 2em;
  background: lightsteelblue;
  float: left;
}

@media screen and (max-width: 1350px) {
  .big_icon{
    margin-left: 9%;
  }
  .title{
    font-size: 2.65em;
  }
  .title_en{
    font-size: 1.85em;
  }
  .body{
    width: 85%;
  }
}
@media screen and (max-width: 1250px) {
  .big_icon{
    margin-left: 6%;
    margin-top: 30px;
    width: 340px;
    height: 340px;
  }
  .icon{
    width: 190px;
    height: 190px;
  }
  .head{
    padding-left: 8%;
  }
  .body{
    width: 90%;
  }
}
@media screen and (max-width: 1200px) {
  .big_icon{
    margin-left: 4%;
    margin-top: 50px;
    width: 320px;
    height: 320px;
  }
  .head{
    padding-left: 6.5%;
  }
  .body{
    width: 95%;
  }
  .icon{
    width: 180px;
    height: 180px;
  }
  .title{
    font-size: 2.5em;
  }
  .title_en{
    font-size: 1.75em;
  }
}
@media screen and (max-width: 1100px) {
  .big_icon{
    margin-top: 55px;
    width: 315px;
    height: 315px;
  }
  .head{
    padding-left: 5%;
  }
  .body{
    width: 100%;
  }
  .title{
    font-size: 2.35em;
  }
  .title_en{
    font-size: 1.60em;
  }
}
@media screen and (max-width: 1000px) {
  .home_frame{
    width: 1000px;
  }
}
</style>
