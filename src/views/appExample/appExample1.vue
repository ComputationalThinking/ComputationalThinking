<template>
  <div class="app-body">
    <div class="example">
      <div class="tittle" style="font-size: 30px">
        实例:{{ database.title }}
      </div>
      <hr />
      <div class="content">实例内容：{{ database.content }}</div>
      <div class="back" @click="Back">返回>></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      database: {
        id: 0,
        title: '',
        content: ''
      }
    }
  },
  created() {
    this.id = this.$route.query.id
    const that = this
    this.$axios
      .get('http://localhost:8083/achieve/giveID?id=' + this.id)
      .then(function(response) {
        that.form = response.data
        that.database.id = that.form.id
        that.database.title = that.form.title
        that.database.content = that.form.content
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
.app-body {
  width: 100%;
}
.example {
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  line-height: 50px;
}
.back {
  float: right;
}
.back:hover {
  cursor: pointer;
}
@media screen and (max-width: 1000px) {
  .app-body {
    width: 1000px;
  }
  .example {
    width: 800px;
  }
}
</style>
