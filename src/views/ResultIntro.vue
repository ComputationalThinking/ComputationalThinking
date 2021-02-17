<template>
  <div class="result-introduction">

    <div class="introduction-top" :style="backgroundDiv">
        <!-- <img :src="pic1" alt=""> -->
        <div class="top-p"><p>成果介绍</p></div>
    </div>
    <div class="intro">
      <!-- <h1>this is 成果介绍页面</h1> -->
      <div class="wrap" id="race-country">
        <span>国内外赛事：</span>
        <div>
          <div class="race">
          <h3>标题1</h3>
          <img :src="pic1" alt="">
          <div class="race-p">
            国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
          </div>
        </div>
        <div class="race">
          <h3>标题2</h3>
          <img :src="pic2" alt="">
          <div class="race-p">
            国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
          </div>
        </div>
        <div class="race">
          <h3>标题3</h3>
          <img :src="pic3" alt="">
          <div class="race-p">
            国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
          </div>
        </div>
        <div class="race">
          <h3>标题4</h3>
          <img :src="pic4" alt="">
          <div class="race-p">
            国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
          </div>
        </div>
        </div>
        
      </div>
      <div class="wrap" id="sci-result">
        <span>科研成果：</span>
        <div class="result">
          <div class="result-left">
            <img :src="pic7" alt="">
            <span>LAST NEWS</span>
            <div class="result-left-p">{{ p1 }}</div>
          </div>
          <div class="result-right">
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic11" alt=""></div>
              <div class="detail-right">
                {{ p2 }}
              </div>
            </div>
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic11" alt=""></div>
              <div class="detail-right">
                {{ p2 }}
              </div>
            </div>
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic11" alt=""></div>
              <div class="detail-right">
                {{ p2 }}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="wrap" id="involve">
        <div class="involve-left"></div>
        <div class="involve-center"><span>涉及领域</span><p>{{ p3 }}</p></div>
        <div class="involve-right"></div>
      </div>
      <div class="wrap" id="app-d">
        <span>应用实例</span>
        <div class="app">
          <div class="app-left">
            <img src="" alt="">
            <p>{{ p4 }}</p>
          </div>
          <div class="app-center">
            <img src="" alt="">
            <p>{{ p4 }}</p>
          </div>
          <div class="app-right">
            <img src="" alt="">
            <p>{{ p4 }}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ResultIntro',
  data() {
    return {
      backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/images/pic1.jpg') + ')'
      },
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
      pic11: require('@/assets/images/m11.jpg'),
      p1: '成果×××××××××××××××××× 成果×××××××××××××××××× 成果×××××××××××××××××× 成果××××××××××××××××××',
      p2: '成果×××××××××××××××××× 成果×××××××××××××××××× ',
      p3: '领域×××××××××××××××××× 领域×××××××××××××××××× ',
      p4: '实例××××××××××××××××××'
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
  .introduction-top{
    width: 100%;
    height: 200px;
    background: no-repeat center top;
    background-size: contain;
    position: relative;
  }
  .top-p{
    position: absolute;
    font-size: 260%;
    top: 45px;
    left: 40px;
    color: rgb(250, 250, 250);
    border-bottom: 5px solid rgb(255, 255, 255);
  }
  .intro{
    width: 100%;
    margin: 0 auto;
    /* margin-top: -20px; */
  }
  .wrap span{
    font-size: 240%;
    margin: 20px;
  }
  .wrap{
    border: 1px solid rgb(138, 138, 139);
    width: 80%;
    height: 550px;
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 10px;
    display: block;
  }
  /* #race-country{
    background: rgb(230, 231, 231);
  } */
  #sci-result{
     background: rgb(241, 243, 243);
     /* width: 100%; */
  }
  #involve{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  #app-d{
    margin-bottom: 30px;
  }
  .race{
    width: 20%;
    height: 200px;
    float: left;
    margin-left: 4%;
    margin-top: 20px;
  }
  .race img{
    width: 100%;
    height: 150px;
    margin-top: 10px;
  }
  .race h3{
    text-align: center;
  }
  .race-p{
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
  }
  .result{
    width: 100%;
    margin-top: 20px;
  }
  .result-left{
    width: 20%;
    height: auto;
    margin-left: 8%;
    padding: 15px;
    float: left;
    border: 1px solid rgb(138, 138, 139);

  }
  .result-left img{
    width: 100%;
    height: auto;
    /* margin-bottom: 10px; */
  }
  .result-left span{
    font-size: 25px;
    /* padding-top: 10px; */
    text-align: center;
    display: block;
  }
  .result-left-p{
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
  }
  .result-right{
    width: 60%;
    height: auto;
    margin-left: 30%;
    border: 1px solid rgb(138, 138, 139);
    border-left: 5px solid rgb(10, 10, 10);
    padding: 15px;
  }
  .result-right-detail{
    width: 100%;
    height: 120px;
    margin: 8px;
    padding: 5px;
    border-bottom: 1px solid rgb(117, 114, 114);
    display: block;
  }
  .detail-left img{
    width: 100%;
    height: auto;
  }
  .detail-left{
    width: 15%;
    float: left;
  }
  .detail-right{
    width: 80%;
    float: right;
    padding: 20px;
  }
  .involve-left{
    width: 32%;
    height: 200px;
    /* float: left; */
    /* margin-left: 0.5%; */
    border: 1px solid rgb(138, 138, 139);
  }
   .involve-center{
    width: 32%;
    height: 200px;
    /* float: left; */
    /* margin-left: 0.1%; */
    border: 1px solid rgb(138, 138, 139);
  }
   .involve-right{
    width: 32%;
    height: 200px;
    /* margin-left: 66.2%; */
    border: 1px solid rgb(138, 138, 139);
  }
  .app{
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
  }
   .app-left{
    width: 28%;
    height: 200px;
    border: 1px solid rgb(138, 138, 139);
  }
   .app-center{
    width: 28%;
    height: 200px;
    border: 1px solid rgb(138, 138, 139);
  }
   .app-right{
    width: 28%;
    height: 200px;
    border: 1px solid rgb(138, 138, 139);
  }
  @media screen and (max-width: 1400px) {
     .race-p{
      font-size: 14px;
    }
   }
  @media screen and (max-width: 1200px) {
  .introduction-top{
      height: 150px;
    }
  .race-p{
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1100px) {
    .race-p{
    font-size: 12px;
  }
  }
  @media screen and (max-width: 1000px) {
  .introduction-top{
    width: 1000px;
    height: 140px;
  }
  .intro{
    width: 1000px;
  }
  .wrap{
    width: 800px;
  }

}
</style>
