<template>
  <div class="detail_frame">
    <div class="body">
      <div class="head_title">{{ news.title }}</div>
      <div class="head_time">{{ news.time }}</div>
      <hr />
      <div class="text">
        {{ news.content }}
      </div>
      <div class="back" @click="Back">
        <span style="margin-right:.5em"
          ><i class="fa fa-arrow-left" aria-hidden="true"></i
        ></span>
        返回
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: '',
          content:
            '华龙网-新重庆客户端12月31日13时42分讯（许义丽）深化媒体融合传播，强化新闻舆论宣传。近日，重庆理工大学第三届校媒领军论坛如期举行。学校党委副书记张晓洪，纪委书记、监察专员张绍荣，华龙网教育频道主编、重庆舆情研究院院长王大伦，及学校相关负责人、教师通讯员、学生记者代表共300余人出席会议。会议由重庆理工大学党委宣传部副部长、党委网络工作部副部长李洪普主持。',
          time: '2021/2/17 23:09',
          author: '',
          sort: ''
        }
      ]
    }
  },
  created() {
    this.news.title = this.$route.query.id
    if (this.$route.query.content != null)
      this.news.content = this.$route.query.content
  },
  methods: {
    Back() {
      this.$router.go(-1)
    }
    // getInfo () {
    // 	this.$axios.get('http://localhost:8081/api/information')
    // 	.then(function (response) {
    // 		this.content = response.data['content'];
    // 		this.time = response.data['time'];
    // 		console.log (response);
    //   }).catch(function(error) {
    // 		console.log (error);
    //   });
    // }
  }
  // created() {
  //   var that = this
  //   this.$axios
  //     .get('http://localhost:8081/News/information_detail')
  //     .then(function(response) {
  //       that.news = response.data
  //       // console.log(response)
  //     })
  // }
}
</script>
<style></style>
<style scoped>
.body {
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 3em;
}
.head_title {
  font-size: 3em;
  text-align: center;
}
.head_time {
  margin-top: 1.5em;
  text-align: center;
  color: #999;
}
.body hr {
  width: 100%;
  background-color: #aaa;
  border-style: none;
  height: 0.2px;
  margin-top: 1em;
}
.text {
  margin-top: 2em;
  font-size: 1em;
  line-height: 1.5em;
}
.back {
  float: right;
  margin-top: 2em;
  margin-right: 5em;
  cursor: pointer;
}
@media screen and (max-width: 1350px) {
}
@media screen and (max-width: 1250px) {
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 1100px) {
}
@media screen and (max-width: 1000px) {
  .detail_frame {
    width: 1000px;
  }
}
</style>
