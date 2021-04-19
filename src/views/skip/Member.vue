<template>
  <div class="member" style="margin:0 auto">
    <div class="word">
      <p class="word1">我们具有创造力</p>
      <p class="word2">来看看我们的团队</p>
      <hr class="hr" />
      <div>
        <input v-model="search_name"/>
        <router-link
          :to="{
            path: '/membersearch',
            query: { name: search_name }
          }"
        >
          <span><i class="fa fa-search" aria-hidden="true"></i></span>
        </router-link>
      </div>
      <p class="word2">指 导 老 师</p>
    </div>
    <div class="teacher">
      <div class="hh2">
        <li v-for="(teacher, index1) of teachers" :key="index1" style="list-style: none;">
          <div style="width:50%;float: left;">
            <div class="zuo"
              @mouseover="mouseOver($event)"
              @mouseleave="mouseLeave($event)"
            >
              <router-link :to="{path: '/detailmes',query: {id: teacher.id}}">
                <img class="pic" :src="pic1" />
              </router-link>
            </div>
          </div>
        </li>
      </div>
    </div>
    <p class="word2" style="margin-bottom:20px">学 生 成 员</p>
    <div class="stu">
      <div class="hh2">
        <li v-for="(student, index2) of students" :key="index2" style="list-style: none;">
          <div style="width:25%;float: left;">
            <div class="stu1"
              @mouseover="mouseOver($event)"
              @mouseleave="mouseLeave($event)"
            >
              <router-link :to="{path: '/detailmes',query: {id: student.id}}">
                <img class="picture" :src="pic2" />
              </router-link>
            </div>
          </div>
        </li>
      </div>
    </div>
    <p v-html="text" style="height:50px"></p>
  </div>
</template>

<script>
export default {
  name: 'member',
  data() {
    return {
      search_name:'',
      teachers: [],
      students: [],
      pic1: require('@/assets/images/ren2.png'),
      pic2: require('@/assets/images/ren1.png'),
    }
  },
  methods: {
    mouseOver($event) {
      $event.currentTarget.style='opacity:85%;box-shadow: 10px 10px 5px #888888;'
    },
    mouseLeave($event) {
      $event.currentTarget.style=''
    },
    Back() {
      this.$router.go(-1)
    }
  },
  created() {
    const that = this
    this.$axios
      .get('http://localhost:8083/member/memberFindByCondition?attribute=identity&key=1')
      .then(function(response1) {
        that.teachers = response1.data
      })
    this.$axios
      .get('http://localhost:8083/member/memberFindByCondition?attribute=identity&key=0')
      .then(function(response2) {
        that.students = response2.data
      })
  },
  change(){
    this.$forceUpdate()
  }
}
</script>

<style></style>
<style scoped>
input {
  border-radius: 1em;
  width: 30em;
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
  text-align: center;
  font-size: 400%;
  font-weight: 600;
  margin-top: 0.5em;
  color: #000;
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
  margin-top: 13em;
  overflow: auto;
}
.stu {
  width: 100%;
  float: top;
  margin-bottom: 3.5em;
  overflow: auto;
}
.hh2{
  width:80%;
  margin:0 auto;
}
.zuo {
  background-color: black;
  width: 80%;
  margin-left: 8.75%;
  overflow: auto;
  margin-bottom: 4em;
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
  margin-bottom: 4em;
}
@media screen and (min-width: 3000px) {
  .hh2{
    width: 35%;
  }
}
@media screen and (min-width: 2000px) and (max-width: 3000px) {
  .hh2{
    width: 65%;
  }
}
@media screen and (max-width: 1000px) {
  .member {
    width: 1000px;
  }
}
</style>
