<template>
  <div class="result-intro">
    <!-- <h1>this is 成果介绍页面</h1> -->
    <div introduction-top>
      <img :src="pic1" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'ResultIntro',
  data() {
    return {
      pic1: require('@/assets/images/pic1.jpg')
    }
  }
}
</script>

<style scoped>
.result-intro{
  width: 80%;
  padding: 20px;
  margin: 0 auto;
}
.introduction-top{
  width: 100%;
  text-align: center;
}

</style>
