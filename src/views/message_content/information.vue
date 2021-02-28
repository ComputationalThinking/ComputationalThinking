<template>
  <div class="information_frame">
    <div class="left">
      <ul>
        <li class="li_first" @click="changeTitle($event), changeContent(0)">
          实验室资讯
        </li>
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
            <li @click="changeTitle($event), changeContent(1)">
              国内信息化教育
            </li>
            <li @click="changeTitle($event), changeContent(2)">
              国内实时活动资讯
            </li>
          </ul>
        </div>
        <li @click="changeTitle($event), changeContent(3)">国外资讯</li>
      </ul>
    </div>
    <div class="right">
      <div class="right_title">
        <div class="title_text">{{ title }}</div>
        <div class="title_search">
          <input />
          <span @click="changeContent(4)"
            ><i class="fa fa-search" aria-hidden="true"></i
          ></span>
        </div>
      </div>
      <div class="right_content">
        <div style="width:100%;height:100%" v-show="content_boolean[0].show">
          <div style="width:50%;height:100%;float:left">
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_head">
                <div class="head_img">图片1</div>
                <div class="head_text">{{search_title}}</div>
              </div>
            </router-link>
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_txt" style="background-color:#fff">
                <div class="head_text" style="padding-top:4%">{{search_title}}</div>
                <div class="content_title_text">{{content}}</div>
              </div>
            </router-link>
            <div class="content_txt" @click="changeContent(4)">
              <div class="more">more</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div style="width:100%;height:100%" v-show="content_boolean[1].show">
          <div style="width:50%;height:100%;float:left">
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_head">
                <div class="head_img">图片1</div>
                <div class="head_text">{{search_title}}</div>
              </div>
            </router-link>
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_txt" style="background-color:#fff">
                <div class="head_text" style="padding-top:4%">{{search_title}}</div>
                <div class="content_title_text">{{content}}</div>
              </div>
            </router-link>
            <div class="content_txt" @click="changeContent(4)" style="background-color:#FD5F00">
              <div class="more">more</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div style="width:100%;height:100%" v-show="content_boolean[2].show">
          <div style="width:50%;height:100%;float:left">
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_head">
                <div class="head_img">图片1</div>
                <div class="head_text">{{search_title}}</div>
              </div>
            </router-link>
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_txt" style="background-color:#fff">
                <div class="head_text" style="padding-top:4%">{{search_title}}</div>
                <div class="content_title_text">{{content}}</div>
              </div>
            </router-link>
            <div class="content_txt" @click="changeContent(4)" style="background-color:#FF9900">
              <div class="more">more</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div style="width:100%;height:100%" v-show="content_boolean[3].show">
          <div style="width:50%;height:100%;float:left">
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_head">
                <div class="head_img">图片1</div>
                <div class="head_text">{{search_title}}</div>
              </div>
            </router-link>
            <router-link
              :to="{
                path: '/information_detail',
                query: { id: search_title, content: content, name: 'vue' }
              }"
            >
              <div class="content_txt" style="background-color:#fff">
                <div class="head_text" style="padding-top:4%">{{search_title}}</div>
                <div class="content_title_text">{{content}}</div>
              </div>
            </router-link>
            <div class="content_txt" @click="changeContent(4)" style="background-color:#66CC99">
              <div class="more">more</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
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
                <div class="content_title">{{search_title}}</div>
                <div class="content_title_text" style="width:30%;height:70%;padding:5%;padding-top:0">{{content}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div style="width:100%;height:100%" v-show="content_boolean[4].show">
          <div class="page">
            <ul>
              <router-link
                :to="{
                  path: '/information_detail',
                  query: { id: search_title, name: 'vue' }
                }"
              >
                <li v-for="(item, index) of list" :key="index">
                  <span style="margin-left:2%">{{ search_title }}</span>
                  <span style="float:right;margin-right:2%;color:#999">{{
                    time
                  }}</span>
                </li>
              </router-link>
            </ul>
          </div>
          <div class="page_number">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              :hide-on-single-page="true"
              layout="prev, pager, next, jumper"
              :total="1000"
            >
            </el-pagination>
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
      title: '实验室资讯',
      content_boolean: [
        { show: true },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ],
      currentPage: 1,
      time: '2021/2/17 23:09',
      search_title: '实验室成员获得了xxxxx',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.',
    }
  },
  methods: {
    leftNationClick() {
      this.leftHidden = !this.leftHidden
    },
    changeTitle(e) {
      this.title = e.target.innerHTML + ''
    },
    changeContent(index) {
      for (var i = 0; i < 5; i++) {
        this.content_boolean[i].show = false
      }
      this.content_boolean[index].show = !this.content_boolean[index].show
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
  height: 43.5em;
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
}
.right {
  width: 80%;
  height: 43.5em;
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
  background-color:#fff;
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
.head_img{
  width: 100%;
  height: 80%;
  background-color: black;
  /* float: left; */
}
.head_text{
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
.content_title_text{
  width: 80%;
  height: 70%;
  margin: 0 auto;
  font-size: 0.75em;
  line-height: 1.25em;
  overflow: hidden;
}
.content_title_img{
  width: 70%;
  height: 100%;
  background-color:#000;
  float: left;
}
.content_title{
  width: 30%;
  padding: 2.5%;
  font-size: 1.25em;
  margin:0 auto;
  font-weight:bolder;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float:left;
}
.more{
  width:50%;
  height:50%;
  margin:0 auto;
  margin-top:25%;
  font-size:3em;
  font-weight:bolder;
  color:#fff;
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
  .more{
    margin-top: 30%;
    font-size: 2.75em;
  }
}
@media screen and (max-width: 1250px) {
  .more{
    margin-top: 35%;
    font-size: 2.5em;
  }
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 1100px) {
  .more{
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
