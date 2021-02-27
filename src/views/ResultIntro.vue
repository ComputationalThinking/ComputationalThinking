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
            <div class="race-p" @click="open">
              国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
            </div>
          </div>
          <div class="race">
            <h3>标题2</h3>
            <img :src="pic2" alt="">
            <div class="race-p" @click="open">
              国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
            </div>
          </div>
          <div class="race">
            <h3>标题3</h3>
            <img :src="pic3" alt="">
            <div class="race-p" @click="open">
              国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××国际竞赛一等奖，创下新高。×××××××××××××××××××××××××
            </div>
          </div>
          <div class="race">
            <h3>标题4</h3>
            <img :src="pic4" alt="">
            <div class="race-p" @click="open">
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
            <div class="result-left-p" @click="open2">{{ p2 }}</div>
          </div>
          <div class="result-right">
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic11" alt=""></div>
              <div class="detail-right" @click="open2">
                {{ p2 }}
              </div>
            </div>
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic9" alt=""></div>
              <div class="detail-right" @click="open2">
                {{ p2 }}
              </div>
            </div>
            <div class="result-right-detail">
              <div class="detail-left"><img :src="pic10" alt=""></div>
              <div class="detail-right" @click="open2">
                {{ p2 }}
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="wrap" id="involve">
        <div class="involve-left"><img :src="pic12" alt=""></div>
        
        <div class="involve-center">
          <el-popover
            placement="top-start"
            title="计算思维涉及领域"
            width="600"
            trigger="hover"
            content="涉及领域甚是宽广，计算思维是应用可用于计算机学科中，比如zhi计算机编程，计算机应用等领域。计算思维吸取了问题解决所采用的一般数学思维方法，现实世界中巨大复杂系统的设计与评估的一般工程思维方法，以及复杂性、智能、心理、人类行为的理解等的一般科学思维方法。计算思维建立在计算过程的能力和限制之上，由人由机器执行。计算方法和模型使我们敢于去处理那些原本无法由个人独立完成的问题求解和系统设计。">
            <div slot="reference" class="involve-p"><p style="font-size: 30px;">涉及领域：</p><br><p>{{ p3 }}</p></div>
          </el-popover>
          </div>
        <div class="involve-right"><img :src="pic13" alt=""></div>
      </div>
      <div class="wrap" id="app-d">
        <span>应用实例</span>
        <div class="app">
          <div class="app-left">
            <img :src="pic5" alt="">
            <div class="app-p"><p>{{ p5 }}{{ p5 }}</p></div>
          </div>
          <div class="app-center">
            <img :src="pic6" alt="">
            <div class="app-p"><p>{{ p6 }}{{ p6 }}</p></div>
          </div>
          <div class="app-right">
            <img :src="pic2" alt="">
            <div class="app-p"><p>{{ p7 }}{{ p7 }}</p></div>
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
      pic12: require('@/assets/images/m12.jpg'),
      pic13: require('@/assets/images/m13.jpg'),
      p1: '成果×××××××××××××××××× 成果×××××××××××××××××× 成果×××××××××××××××××× 成果××××××××××××××××××',
      p2: '计算思维具有概念化、抽象化、有限性、自动化、可解释性、关联性等特征，是融合了数学、工程与科学思维的一种跨学科思维。',
      p3: '计算思维是应用可用于计算机学科中，比如zhi计算机编程，计算机应用等领域。计算思维吸取了问题解决所采用的一般数学思维方法，现实世界中巨大复杂系统的设计与评估的一般工程思维方法，以及复杂性、智能、心理、人类行为的理解等的一般科学思维方法。计算思维建立在计算过程的能力和限制之上，由人由机器执行。计算方法和模型使我们敢于去处理那些原本无法由个人独立完成的问题求解和系统设计。',
      p4: '实例××××××××××××××××××××××× ',
      p5: '计算机领域的研究',
      p6: '人工智能领域的研究',
      p7: '教育教学的研究等'
    }
  },
   methods: {
      open() {
        this.$alert('计算机思维设计大赛第一名<br>计算机思维设计大赛第一名<br>计算机思维设计大赛第一名<br>计算机思维设计大赛第一名<br>', '赛事', {
          dangerouslyUseHTMLString: true
        });
      },
      open2(){
        this.$alert('成果：×××<br>时间：×××<br>参赛人：×××<br>国际影响：×××<br>', '取得成果', {
          dangerouslyUseHTMLString: true
        });
      }
    }
}
</script>

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
    /* border: 1px solid rgb(138, 138, 139); */
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px;
    display: block;
  }
  #race-country{
    background: rgb(230, 231, 231);
    height: 470px;
  }
  #sci-result{
     /* background: rgb(241, 243, 243); */
     height: 580px;
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
    height: 450px;
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
   .race-p:hover{
    color: rgb(2, 85, 133);
  }
  .result{
    width: 100%;
    margin-top: 20px;
  }
  .result-left{
    width: 20%;
    height: auto;
    margin-left: 12%;
    margin-top: 20px;
    padding: 15px;
    float: left;
    /* border: 1px solid rgb(138, 138, 139); */

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
    margin-top: 30px;
    line-height: 28px;
    font-size: 16px;
  }
  .result-left-p:hover{
    color: rgb(2, 85, 133);
  }
  .result-right{
    width: 55%;
    height: auto;
    margin-left: 34%;
    /* border: 1px solid rgb(138, 138, 139); */
    border-left: 5px solid rgb(10, 10, 10);
    padding: 25px;
  }
  .result-right-detail{
    width: 100%;
    height: 130px;
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
    line-height: 28px;
    padding: 20px;
    font-size: 16px;
  }
  .detail-right:hover{
    color: rgb(2, 85, 133);
  }
  .involve-left{
    width: 33.33%;
    height: 400px;
    border: 1px solid rgb(138, 138, 139);
  }
  .involve-left img{
    width: 100%;
    height: 400px;
  }
  .involve-center{
    width: 33.33%;
    height: 400px;
    padding: 30px;
    /* border: 1px solid rgb(138, 138, 139); */
    background: rgb(230, 231, 231);
  }
  .involve-p p{
    /* margin-top: 40px; */
    line-height: 30px;
    font-size: 18px;
  }
   .involve-right{
    width: 33.33%;
    height: 400px;
    /* margin-left: 66.2%; */
    border: 1px solid rgb(138, 138, 139);
  }
  .involve-right img{
    width: 100%;
    height: 400px;
  }
  .app{
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
    margin: 30px;
  }
   .app-left{
    width: 28%;
    height: auto;
    border: 1px solid rgb(138, 138, 139);
    transition-duration: 0.5s;
  }
  .app-left:hover{
    -webkit-box-shadow: #ccc 0px 10px 10px;
    -moz-box-shadow: #ccc 0px 10px 10px;
    box-shadow: #ccc 0px 10px 10px;
  }
   .app-center{
    width: 28%;
    height: auto;
    border: 1px solid rgb(138, 138, 139);
    transition-duration: 0.5s;
  }
  .app-center:hover{
    -webkit-box-shadow: #ccc 0px 10px 10px;
    -moz-box-shadow: #ccc 0px 10px 10px;
    box-shadow: #ccc 0px 10px 10px;
  }
   .app-right{
    width: 28%;
    height: auto;
    border: 1px solid rgb(138, 138, 139);
    transition-duration: 0.5s;
  }
  .app-right:hover{
    -webkit-box-shadow: #ccc 0px 10px 10px;
    -moz-box-shadow: #ccc 0px 10px 10px;
    box-shadow: #ccc 0px 10px 10px;
  }
  .app img{
    width: 100%;
    height: 300px;
  }.app p{
    padding: 30px;
    font-size: 16px;
  }
  .app-p{
    overflow: hidden;
  }
  @media screen and (max-width: 1400px) {
  .race-p{
      font-size: 14px;
    }
  #sci-result{
    height: 640px;
  }
  .involve-left{
    height: 470px;
  }
  .involve-left img{
    height: 470px;
  }
  .involve-center{
    height: 470px;
  }
  .involve-right{
    height: 470px;
  }
  .involve-right img{
    height: 470px;
  }
  .app img{
    height: 250px;
    }
  }
  @media screen and (max-width: 1200px) {
  .introduction-top{
      height: 150px;
    }
  .race-p{
      font-size: 13px;
    }
  .result-right-detail{
    height: 150px;
    }
  .involve-left{
    height: 550px;
  }
  .involve-left img{
    height: 550px;
  }
  .involve-center{
    height: 550px;
  }
  .involve-right{
    height: 550px;
  }
  .involve-right img{
    height: 550px;
  }
  }
  @media screen and (max-width: 1100px) {
    .race-p{
    font-size: 12px;
  }
   .app img{
    height: 220px;
    }
  .involve-left{
    height: 580px;
  }
  .involve-left img{
    height: 580px;
  }
  .involve-center{
    height: 580px;
  }
  .involve-right{
    height: 580px;
  }
  .involve-right img{
    height: 580px;
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
  .app img{
    height: 200px;
  }

}
</style>
