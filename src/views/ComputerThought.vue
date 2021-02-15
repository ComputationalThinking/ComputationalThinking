<template>
  <div class="Thought">
    <!-- <h1>This is an 计算机思维 page</h1> -->
    <div class="thought-body">
      <div class="thougut-top">
      <el-carousel :interval="4000" indicator-position="outside" height="420px">
        <el-carousel-item v-for="(index,item) in images" :key="item">
          <!-- <h3 class="medium">{{ item }}</h3> -->
          <img :src="index.pic" alt="" style="width: 100%; height: 100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="wrap" id="intro">
      <div class="introduction-left">
        <span>计算思维简介</span>
        <p>{{ introduction }}</p>
      </div>
      <div class="introduction-right">
        <img :src="picture1" alt="">
      </div>
    </div>
    <div class="wrap">
      <div class="wrap-top">
        <p  class="wrap-top-p">计算思维历史</p>
      </div>
      <div class="history-bottom">
        <div class="history-bottom1">
          <div class="history-bottom-left">
            <img :src="picture2" alt="">
          </div>
          <div class="history-bottom-right">
            <p>×××××××××××</p>
          </div>
        </div>
        <div class="history-bottom1">
          <div class="history-bottom-left">
            <p>×××××××××××</p>
          </div>
           <div class="history-bottom-right">
            <img :src="picture3" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="wrap-top">
        <p  class="wrap-top-p">聚焦</p>
      </div>
      <div class="focus-bottom">

      </div>
    </div>
    <div class="wrap">
      <div class="wrap-top">
        <p  class="wrap-top-p">学什么</p>
      </div>
      <div class="learn-bottom">
        
      </div>
    </div>
    <div class="wrap">
      <div class="wrap-top">
        <p  class="wrap-top-p">运用领域</p>
      </div>
      <div class="field-bottom">

      </div>
    </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'Thought',
  data() {
    return {
      introduction: '计算思维是运用计算机科学的基础概念进行问题求解、系统设计、以及人类行为理解等涵盖计算机科学之广度的一系列思维活动，计算思维是运用计算机科学的基础概念进行问题求解、系统设计、以及人类行为理解等涵盖计算机科学之广度的一系列思维活动，由周以真于2006年3月首次提出。2010年，周以真教授又指出计算思维是与形式化问题及其解决方案相关的思维过程，其解决问题的表示形式应该能有效地被信息处理代理执行。',
      history: '',
      picture1: require('@/assets/images/introduction.jpg'),
      picture2: require('@/assets/images/introduction.jpg'),
      picture3: require('@/assets/images/introduction.jpg'),
      images: [
        {pic: require('@/assets/images/pic2.jpg')},
        {pic: require('@/assets/images/pic3.jpg')},
        {pic: require('@/assets/images/pic4.jpg')},
        {pic: require('@/assets/images/pic5.jpg')},
        {pic: require('@/assets/images/pic6.jpg')},
        {pic: require('@/assets/images/pic7.jpg')}
      ]
    }
  }
}
</script>

<style>
  body{
    width: 100%;
    overflow-x: hidden;
  }
  @media screen and (max-width: 1000px) {
    body{
      overflow-x: scroll;
    }
  }
</style>

<style scoped>
  .Thought{
    /* padding: 20px; */
    width: 100%;
    /* margin: 0 auto; */
  }
  .thought-body{
    width: 80%;
    margin: 0 auto;
  }
  .thought-top{
    /* margin-bottom: 30px; */
    margin-top: 300px;
  }
  #intro{
    height: auto;
  }
  .wrap{
    padding: 20px;
    width: 100%;
    margin-top: 30px;
    height: fit-content;
  }
  .introduction-left{
    width: 50%;
    height: auto;
    float: left;
    /* padding-top: 30px; */
    margin-left: 5%;
  }
  .introduction-left span{
    font-size: 260%;
  }
  .introduction-left p{
    margin-top: 50px;
    font-size: 100%;
    line-height: 29px;
  }
  .introduction-right{
    width: auto;
    height: auto;
  }
  .introduction-right img{
    width: 27%;
    height: auto;
    margin-top: 1%;
    margin-left: 9%;
  }
  .wrap-top{
    width: fit-content;
    border-bottom: 5px solid rgb(132, 134, 134);
    margin: 0 auto;
    font-size: 230%;
  }
  .history-bottom{
    border: 5px solid rgb(138, 138, 139);
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
  }
  .history-bottom1{
    width: auto;
    height: auto;
  }
  .history-bottom-left{
    width: 50%;
    float: left;
  }
  .history-bottom-left img{
    width: 300px;
    height: 300px;
  }
  .history-bottom-left p{
    float: left;
  }
  .history-bottom-right img{
    width: 300px;
    height: 300px;
  }


  .focus-bottom{
    border: 5px solid rgb(138, 138, 139);
    width: 80%;
    height: 300px;
    margin: 0 auto;
    margin-top: 30px;
  }


  .learn-bottom{
    border: 5px solid rgb(138, 138, 139);
    width: 80%;
    height: 300px;
    margin: 0 auto;
    margin-top: 30px;
  }


  .field-bottom{
    border: 5px solid rgb(138, 138, 139);
    width: 80%;
    height: 300px;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media screen and (max-width: 1200px) {
    .wrap{
      margin-top: 116px;
    }
  }
  @media screen and (max-width: 1000px) {
    .Thought{
      width: 1000px;
    }
    .thought-body{
      widows: 800px;
    }
    .wrap{
      margin-top: 30px;
    }
  @media screen and (max-width: 990px) {
    .wrap{
      margin-top: 100px;
    }
  }
}
</style>
