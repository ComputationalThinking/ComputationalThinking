<template>
  <div class="resultBody">
    <div class="resultList">
      <div class="top">
        <div class="back" @click="Back">返回>></div>
        <div class="search">
          <input type="text" class="search-full" name="result" />
          <div class="search-right">
            <span
              v-show="true"
              style="float:left;padding-left:10px;margin-top:5px;"
            >
              <i class="fa fa-search" id="search-i" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <ul>
        <li
          v-for="(database, index) of databases"
          :key="index"
          style="list-style: none"
        >
          <router-link
            :to="{
              path: '/result1',
              query: {
                id: database.id,
                name: 'vue'
              }
            }"
          >
            <div class="list">
              <div class="list-left"><img :src="pic1" alt="" /></div>
              <div class="list-right">
                <span>{{ database.title }}</span>
                <span>{{ database.time }}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 1,
      title: '真实世界挑战赛',
      content: '',
      databases: [
        {
          id: 1,
          title: '',
          time: ''
        }
      ],
      pic1: require('@/assets/images/m1.jpg'),
      pic2: require('@/assets/images/m2.jpg'),
      pic3: require('@/assets/images/m3.jpg'),
      pic4: require('@/assets/images/m4.jpg'),
      pic5: require('@/assets/images/m5.jpg'),
      pic6: require('@/assets/images/m6.jpg'),
      pic7: require('@/assets/images/m7.jpg'),
      pic8: require('@/assets/images/m8.jpg'),
      pic9: require('@/assets/images/m9.jpg'),
      pic10: require('@/assets/images/m10.jpg')
    }
  },
  creat() {
    const that = this
    this.$axios
      .get('http://localhost:8083/achieve/getDataBySort?=1')
      .then(function(response) {
        that.form = response.data.data //??
      })
  },
  methods: {
    Back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.resultBody {
  width: 100%;
}
.resultList {
  width: 80%;
  margin: 0 auto;
}
.resultList ul {
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
}
.top {
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.back {
  margin-left: 25px;
  width: 60%;
  text-align: left;
}
.back:hover {
  color: rgb(87, 153, 228);
  cursor: pointer;
}
.search {
  width: 40%;
  height: 30px;
  padding-left: 40px;
}
.search-full {
  width: 70%;
  height: 30px;
  border-radius: 10px;
  outline: none;
  float: left;
}
.search-right {
  width: 10%;
  height: 30px;
  float: left;
}
.search-right:hover {
  cursor: pointer;
}
.list {
  width: 100%;
  height: auto;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  border: 1px solid rgb(2, 2, 2);
}
.list-left {
  width: 25%;
  height: auto;
}
.list-left img {
  width: 100%;
  height: 200px;
}
.list-right {
  width: 75%;
  font-size: 30px;
  padding-top: 70px;
  text-align: center;
}
@media screen and (max-width: 1000px) {
  .resultBody {
    width: 1000px;
  }
  .resultList {
    width: 800px;
  }
}
</style>
