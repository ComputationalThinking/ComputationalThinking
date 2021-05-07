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
          id: 0,
          title: '',
          content: '',
          time: '',
          author: '',
          sort: ''
        }
      ]
    }
  },
  created() {
    this.news.id = this.$route.query.id
    this.news.title = this.$route.query.title
    this.news.content = this.$route.query.content
    this.news.time = this.$route.query.time
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
