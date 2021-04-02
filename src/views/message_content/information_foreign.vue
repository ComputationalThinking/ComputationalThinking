<template>
  <div class="information_frame">
    <div class="left">
      <ul>
        <router-link :to="{ path: '/information_lab' }">
          <li class="li_first">
            实验室资讯
          </li>
        </router-link>
        <li @click="leftNationClick()">
          国内资讯
          <span v-show="!leftHidden" style="float:right;padding-right:10px"
            ><i class="fa fa-angle-down" aria-hidden="true"></i
          ></span>
          <span v-show="leftHidden" style="float:right;padding-right:10px"
            ><i class="fa fa-angle-up" aria-hidden="true"></i
          ></span>
        </li>
        <div v-show="leftHidden" class="lefthidden">
          <ul>
            <router-link
              :to="{
                path: '/message',
                query: { PageId: 0 }
              }"
            >
              <li>
                国内信息化教育
              </li>
            </router-link>
            <router-link
              :to="{
                path: '/message',
                query: { PageId: 1 }
              }"
            >
              <li>
                国内实时活动资讯
              </li>
            </router-link>
          </ul>
        </div>
        <router-link :to="{ path: '/message' }">
          <li style="color:#fff">国外资讯</li>
        </router-link>
      </ul>
    </div>
    <div class="right">
      <div class="right_title">
        <div class="title_text">{{ PageTitle }}</div>
        <div class="title_search">
          <input />
          <router-link
            :to="{
              path: '/information_search',
              query: { PageTitle: PageTitle }
            }"
          >
            <span><i class="fa fa-search" aria-hidden="true"></i></span>
          </router-link>
        </div>
      </div>
      <div class="right_content">
        <div style="width:100%;height:100%">
          <div style="width:50%;height:100%;float:left">
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_head">
                <div class="head_img">图片1</div>
                <div class="head_text">{{ search_title }}</div>
              </div>
            </router-link>
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_txt" style="background-color:#fff">
                <div class="head_text" style="padding-top:4%">
                  {{ search_title }}
                </div>
                <div class="content_title_text">{{ content }}</div>
              </div>
            </router-link>
            <div class="content_txt" style="background-color:#66CC99">
              <router-link
                :to="{
                  path: '/information_search',
                  query: { PageTitle: PageTitle }
                }"
              >
                <div class="more">more</div>
              </router-link>
            </div>
          </div>
          <div style="width:50%;height:100%;float:left">
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_img">
                <div class="content_title_img">图片2</div>
                <div class="content_title">{{ search_title }}</div>
                <div
                  class="content_title_text"
                  style="width:30%;height:70%;padding:5%;padding-top:0"
                >
                  {{ content }}
                </div>
              </div>
            </router-link>
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_img">
                <div class="content_title_img">图片3</div>
                <div class="content_title">{{ search_title }}</div>
                <div
                  class="content_title_text"
                  style="width:30%;height:70%;padding:5%;padding-top:0"
                >
                  {{ content }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftHidden: false,
      PageTitle: '国外资讯',
      message: [
        {
          id: 1,
          title: '实验室成员获得了xxxxx',
          content:
            '华龙网-新重庆客户端12月31日13时42分讯（许义丽）深化媒体融合传播，强化新闻舆论宣传。近日，重庆理工大学第三届校媒领军论坛如期举行。学校党委副书记张晓洪，纪委书记、监察专员张绍荣，华龙网教育频道主编、重庆舆情研究院院长王大伦，及学校相关负责人、教师通讯员、学生记者代表共300余人出席会议。会议由重庆理工大学党委宣传部副部长、党委网络工作部副部长李洪普主持。',
          time: '2021/2/17 23:09',
          author: '',
          sort: ''
        }
      ],
      currentPage: 1,
      time: '2021/2/17 23:09',
      search_title: '实验室成员获得了xxxxx',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.'
    }
  },
  methods: {
    leftNationClick() {
      this.leftHidden = !this.leftHidden
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    getParams() {
      var routerParams = this.$route.params.editType
      // 将数据放在当前组件的数据内
      this.id = routerParams
      console.log('接收的参数为:' + this.id)
    }
  },
  created() {
    // const that = this
    // this.$axios
    //   .get('http://localhost:8083/News/information')
    //   .then(function(response) {
    //     // that.message = response.data
    //     that.message = response.data
    //     // console.log(response)
    //   })
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
.left {
  width: 20%;
  height: 39.15em;
  background-color: #2888b0;
  float: left;
  color: white;
}
.left ul {
  margin-top: 8em;
}
.lefthidden ul {
  margin-top: 0%;
}
.lefthidden ul li {
  height: 2.5em;
  font-size: 1em;
  padding-top: 0.75em;
  background-color: white;
  color: #2888b0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #2888b0;
}
.left li {
  width: 100%;
  padding-left: 25%;
  height: 3em;
  font-size: 1.5em;
  padding-top: 1em;
  cursor: pointer;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: white;
}
.li_first {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: white;
  color: #fff;
}
.right {
  width: 80%;
  height: 39em;
  background-color: #f4f7f8;
  float: left;
}
.right_title {
  height: 5em;
  padding-top: 2em;
  padding-left: 2em;
  padding-right: 5em;
}
.title_text {
  width: 50%;
  /* height: 5em; */
  color: #2888b0;
  font-size: 2em;
  font-weight: bolder;
  float: left;
}
.title_search {
  width: 50%;
  float: right;
  text-align: right;
}
.title_search input {
  border-radius: 1em;
  width: 15em;
  margin-top: 0.5em;
  height: 2em;
  border-style: solid;
  border-width: 2px;
  border-color: #2888b0;
  margin-right: 1em;
  padding-left: 10px;
  color: #999;
  font-size: 1em;
  outline: none;
  background-color: #f2f2f2;
}
.title_search span {
  color: #2888b0;
  font-size: 1.5em;
  cursor: pointer;
}
.right_content {
  width: 95%;
  height: 80%;
  margin: 0 auto;
  /* background-color: yellow; */
  margin-top: 1em;
}
.page {
  width: 100%;
  height: 92%;
  /* background-color: wheat; */
  overflow: hidden;
}
.page ul {
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
}
.page ul li {
  width: 100%;
  height: 9.09%;
  border-bottom-style: solid;
  border-bottom-width: 0.1px;
  border-bottom-color: #999;
  background-color: white;
  padding-top: 1em;
  cursor: pointer;
}
.page_number {
  width: 50%;
  margin: 0 auto;
  height: 5%;
  margin-top: 1em;
  /* background-color: white; */
}
.content_head {
  width: 90%;
  height: 45%;
  border-radius: 1em;
  background-color: white;
  float: left;
  margin: 5%;
  cursor: pointer;
  overflow: hidden;
}
.content_img {
  width: 80%;
  height: 35%;
  border-radius: 1em;
  background-color: #fff;
  float: left;
  margin: 5%;
  cursor: pointer;
  overflow: hidden;
}
.content_txt {
  width: 40%;
  height: 35%;
  background-color: turquoise;
  float: left;
  border-radius: 1em;
  margin: 5%;
  cursor: pointer;
}
.head_img {
  width: 100%;
  height: 80%;
  background-color: black;
  /* float: left; */
}
.head_text {
  /* position: absolute; */
  width: 80%;
  height: 20%;
  padding-top: 2%;
  margin: 0 auto;
  font-size: 1.25em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content_title_text {
  width: 80%;
  height: 70%;
  margin: 0 auto;
  font-size: 0.75em;
  line-height: 1.25em;
  overflow: hidden;
}
.content_title_img {
  width: 70%;
  height: 100%;
  background-color: #000;
  float: left;
}
.content_title {
  width: 30%;
  padding: 2.5%;
  font-size: 1.25em;
  margin: 0 auto;
  font-weight: bolder;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.more {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  margin-top: 25%;
  font-size: 3em;
  font-weight: bolder;
  color: #fff;
}
.content_head:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content_txt:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content_img:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media screen and (max-width: 1350px) {
  .more {
    margin-top: 30%;
    font-size: 2.75em;
  }
}
@media screen and (max-width: 1250px) {
  .more {
    margin-top: 35%;
    font-size: 2.5em;
  }
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 1100px) {
  .more {
    margin-top: 40%;
    font-size: 2.25em;
  }
}
@media screen and (max-width: 1000px) {
  .information_frame {
    width: 1000px;
  }
}
</style>
