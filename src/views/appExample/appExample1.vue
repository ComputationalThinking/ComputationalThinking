<template>
    <div class="app-body">
        <div class="example">
            <div class="tittle" style="font-size: 30px">
                实例
            </div>
            <hr>
            <div class="content">
                实例内容：计算思维在现实生活中的应用！
            </div>
            <div class="back" @click="Back">返回>></div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        data: '获得奖项××××××××',
        pic1: require('@/assets/images/m1.jpg'),
        pic2: require('@/assets/images/m2.jpg'),
        pic3: require('@/assets/images/m3.jpg'),
        pic4: require('@/assets/images/m4.jpg'),
        pic5: require('@/assets/images/m5.jpg'),
        pic6: require('@/assets/images/m6.jpg'),
        pic7: require('@/assets/images/m7.jpg'),
        pic8: require('@/assets/images/m8.jpg'),
        pic9: require('@/assets/images/m9.jpg'),
        pic10: require('@/assets/images/m10.jpg'),
    }
  },
  	methods: {
		Back () {
        this.$router.go(-1);
        }
	}
}
</script>
<style scoped>
.app-body{
    width: 100%;
}
.example{
    width: 80%;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    line-height: 50px;
}
.back{
    float: right;
}
 @media screen and (max-width: 1000px) {
    .app-body{
        width: 1000px;
     }
    .example{
      width: 800px;
    }
  }
</style>