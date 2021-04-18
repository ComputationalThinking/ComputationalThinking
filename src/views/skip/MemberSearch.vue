<template>
  <div class="membersearch" style="margin:0 auto">
    <div class="word">
      <p class="word1">我们具有创造力</p>
      <p class="word2">来看看我们的团队</p>
      <hr class="hr" />
      <p class="word2">指 导 老 师</p>
    </div>
    <div class="teacher">
      <div class="hh2">
        <li v-for="(teacher, index1) of teachers" :key="index1" style="list-style: none;">
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
        </li>
      </div>
    </div>
    <p class="word2" style="margin-bottom:20px">学 生 成 员</p>
    <div class="stu">
      <div class="hh2">
        <li v-for="(student, index2) of students" :key="index2" style="list-style: none;">
          <router-link :to="{path: '/detailmes',query: {id: 2}}">
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
        </li>
      </div>
    </div>
    <p v-html="text" style="height:50px"></p>
  </div>
</template>

<script>
export default {
  name: 'membersearch',
  data() {
    return {
      key:'',
      teachers: [],
      students: [],
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
      peo10: '',
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
    },
    Back() {
      this.$router.go(-1)
    }
  },
  created() {
    this.key = this.$route.query.name
    const that = this
    this.$axios
      .get('http://localhost:8083/member/memberSearch?name='+this.key)
      .then(function(response1) {
        that.teachers = response1.data
      })
    // this.$axios
    //   .get('http://localhost:8083/member/memberFindByCondition?attribute=identity&key=1')
    //   .then(function(response1) {
    //     that.teachers = response1.data
    //   })  
    this.$axios
      .get('http://localhost:8083/member/memberFindByCondition?attribute=identity&key=1')
      .then(function(response2) {
          that.teachers = that.teachers.filter(val=>{
                return new Set(response2.data).has(val)
            })
        })
   },
   doIntersection(firstArray, secondArray) {
        var hashmap = {};
        var intersectionArray = [];
        firstArray.forEach(function (element) {
        hashmap[element] = 1;
        });
        secondArray.forEach(function (element) {
            if (hashmap[element] === 1) {
            intersectionArray.push(element);
            hashmap[element]++;
            }
        });
        return intersectionArray;
    },
}
</script>

<style></style>
<style scoped>
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
  margin-top: 8.5em;
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
