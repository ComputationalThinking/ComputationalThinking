<template>
  <div class="Thought">
    <!-- <h1>This is an 计算机思维 page</h1> -->
    <div class="thougut-top">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="wrap">
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
      picture3: require('@/assets/images/introduction.jpg')
    }
  }
}
</script>

<style scoped>
  .Thought{
    width: 80%;
    padding: 20px;
    margin: 0 auto;
  }
  .thought-top{
    margin-bottom: 30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .wrap{
    padding: 20px;
    width: 100%;
    height: auto;
  }
  .introduction-left{
    width: 50%;
    height: auto;
    float: left;
    padding-top: 30px;
    margin-left: 5%;
  }
  .introduction-left span{
    font-size: 38px;
  }
  .introduction-left p{
    margin-top: 50px;
    line-height: 26px;
  }
  .introduction-right{
    width: auto;
    height: auto;
  }
  .introduction-right img{
    width: 300px;
    height: 300px;
    margin-left: 9%;
  }
  .wrap-top{
    width: fit-content;
    border-bottom: 5px solid rgb(132, 134, 134);
    margin: 0 auto;
    font-size: 38px;
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
</style>
