<template>
    <div class="resultBody">
        <div class="resultList">
            <div class="back" @click="Back">返回>></div>
            <div class="list">
                <div class="list-left"><img :src="pic1" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic2" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic3" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic4" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic1" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic2" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic3" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
            <div class="list">
                <div class="list-left"><img :src="pic4" alt=""></div>
                <div class="list-right">{{ data }}</div>
            </div>
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
.resultBody{
    width: 100%;
}
.resultList{
    width: 80%;
    margin: 0 auto;
}
.back{
    margin: 30px;
}
.back:hover{
    color: rgb(87, 153, 228);
}
.list{
    width: 100%;
    height: auto;
    margin: 20px;
    display: flex;
    justify-content: space-around;
    border: 1px solid rgb(2, 2, 2);
}
.list-left{
    width: 25%;
    height: auto;
}
.list-left img{
    width: 100%;
    height: 200px;
}
.list-right{
    width: 75%;
    padding: 30px;
}
 @media screen and (max-width: 1000px) {
    .resultBody{
        width: 1000px;
     }
    .resultList{
      width: 800px;
    }
  }
</style>