<template>
  <div class="result-introduction">
    <div class="introduction-top" :style="backgroundDiv">
        <!-- <img :src="pic1" alt=""> -->
        <div class="top-p"><p>成果介绍</p></div>
    </div>
    <div class="intro">
      <!-- <h1>this is 成果介绍页面</h1> -->
      <div class="wrap">
        <span>国内外赛事</span>
      </div>
      <div class="wrap">
        <span>科研成果</span>
      </div>
      <div class="wrap">
        <span>涉及领域</span>
      </div>
      <div class="wrap">
        <span>应用实例</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ResultIntro',
  data() {
    return {
      pic1: require('@/assets/images/pic1.jpg'),
      backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/images/pic1.jpg') + ')'
      }
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
    top: 90px;
    left: 40px;
    color: rgb(250, 250, 250);
    border-bottom: 5px solid rgb(255, 255, 255);
  }
  .intro{
    width: 80%;
    margin: 0 auto;
  }
  .wrap span{
    font-size: 260%;
  }
  .wrap{
    border: 1px solid rgb(138, 138, 139);
    width: 80%;
    height: 300px;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media screen and (max-width: 1000px) {
  .introduction-top{
    width: 1000px;
  }
  .intro{
    width: 1000px;
  }
}
</style>
