<template>
  <div class="resultBody">
    <div class="resultList">
      <div class="top">
        <div class="back" @click="Back">返回>></div>
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
                <span>{{ database.title }}</span
                ><br />
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
      databases: [],
      key: '',
      pic1: require('@/assets/images/m1.jpg')
    }
  },
  created() {
    this.key = this.$route.query.title
    const that = this
    this.$axios
      .get('http://localhost:8083/achieve/getDataByTitle?title=' + this.key)
      .then(function(response) {
        that.databases = response.data
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
  /* margin-left: 10px; */
  width: 95%;
  text-align: left;
}
.back:hover {
  color: rgb(87, 153, 228);
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
