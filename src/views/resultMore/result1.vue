<template>
  <div class="app-body">
    <div class="example">
      <div class="tittle" style="font-size: 30px">计算思维成果{{ id }}</div>
      <hr />
      <div class="content">
        成果内容：计算思维在某些领域取得的一些成果。{{ data }}
      </div>
      <div class="back" @click="Back">返回>></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: '',
      data: '获得奖项如下：'
    }
  },
  created() {
    this.id = this.$route.query.id
    if (this.$route.query.content != null) this.data = this.$route.query.content
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
