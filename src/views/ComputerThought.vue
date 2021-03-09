<template>
  <div class="Thought">
    <!-- <h1>This is an 计算机思维 page</h1> -->
    <div class="thought-body">
      <div class="thougut-top">
        <el-carousel
          :interval="4000"
          indicator-position="outside"
          height="420px"
        >
          <el-carousel-item v-for="(index, item) in images" :key="item">
            <!-- <h3 class="medium">{{ item }}</h3> -->
            <img :src="index.pic" alt="" style="width: 100%; height: 100%;" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="wrap" id="intro">
        <div class="introduction-left">
          <span>计算思维简介</span>
          <p>{{ introduction }}</p>
        </div>
        <div class="introduction-right">
          <img :src="picture1" alt="" />
        </div>
      </div>
      <div class="wrap">
        <div class="wrap-top">
          <p class="wrap-top-p">计算思维历史</p>
        </div>
        <div class="history-bottom">
          <div class="history">
            <div class="history-l">
              <img :src="img7" alt="" />
            </div>
            <div class="history-l">
              <p>{{ para1 }}</p>
            </div>
          </div>
          <div class="history">
            <div class="history-l">
              <p>{{ para2 }}</p>
            </div>
            <div class="history-l">
              <img :src="img13" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="wrap-top">
          <p class="wrap-top-p">聚焦</p>
        </div>
        <div class="focus-bottom">
          <div class="focus-bottom-content">
            <p>提出者</p>
            <img :src="img4" alt="" />
            <div class="focus-p">{{ para9 }}</div>
          </div>
          <div class="focus-bottom-content">
            <p>特点</p>
            <img :src="img5" alt="" />
            <div class="focus-p">
              {{ para4 }}<br />{{ para5 }}<br />{{ para6 }}<br />{{ para7
              }}<br />{{ para8 }}
            </div>
          </div>
          <div class="focus-bottom-content">
            <p>计算思维</p>
            <img :src="img6" alt="" />
            <div class="focus-p">
              操作模式<br />计算思维用途<br />计算思维是一种递归思维<br />抽象和分解<br />计算思维利用启发式推理来寻求解答，就是在不确定情况下的规划、学习和调度。
            </div>
          </div>
        </div>
      </div>
      <div class="wrap" id="learn-what">
        <div class="wrap-top">
          <p class="wrap-top-p">学什么</p>
        </div>
        <div class="learn-bottom">
          <div class="learn-img">
            <div class="learn"><img :src="img9" alt="" /></div>
            <div class="learn"><img :src="img10" alt="" /></div>
            <div class="learn"><img :src="img11" alt="" /></div>
            <div class="learn"><img :src="img12" alt="" /></div>
          </div>
          <div class="learn-p">
            <div class="learn-i" id="learn-one">
              <p>什么人类比计算机做的好？</p>
            </div>
            <div class="learn-i" id="learn-two">
              <p>什么计算机比人类做的好？</p>
            </div>
            <div class="learn-i" id="learn-three"><p>什么是可计算的？</p></div>
            <div class="learn-i" id="learn-four"><p>递归思维</p></div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="wrap-top">
          <p class="wrap-top-p">运用领域</p>
        </div>
        <div class="field-bottom">
          <div class="field-botttom-content">
            <img :src="img1" alt="" />
            <div class="field-botttom-content-p">计算思维</div>
          </div>
          <div class="field-botttom-content">
            <img :src="img2" alt="" />
            <div class="field-botttom-content-p">计算思维</div>
          </div>
          <div class="field-botttom-content">
            <img :src="img3" alt="" />
            <div class="field-botttom-content-p">计算思维</div>
          </div>
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
      introduction:
        '计算思维是运用计算机科学的基础概念进行问题求解、系统设计、以及人类行为理解等涵盖计算机科学之广度的一系列思维活动，计算思维是运用计算机科学的基础概念进行问题求解、系统设计、以及人类行为理解等涵盖计算机科学之广度的一系列思维活动，由周以真于2006年3月首次提出。2010年，周以真教授又指出计算思维是与形式化问题及其解决方案相关的思维过程，其解决问题的表示形式应该能有效地被信息处理代理执行。',
      history: '',
      picture1: require('@/assets/images/introduction.jpg'),
      picture2: require('@/assets/images/introduction.jpg'),
      picture3: require('@/assets/images/introduction.jpg'),
      images: [
        { pic: require('@/assets/images/pic2.jpg') },
        { pic: require('@/assets/images/pic3.jpg') },
        { pic: require('@/assets/images/pic4.jpg') },
        { pic: require('@/assets/images/pic5.jpg') },
        { pic: require('@/assets/images/pic6.jpg') },
        { pic: require('@/assets/images/pic7.jpg') }
      ],
      img1: require('@/assets/images/pic2.jpg'),
      img2: require('@/assets/images/m6.jpg'),
      img3: require('@/assets/images/m5.jpg'),
      img4: require('@/assets/images/m14.jpg'),
      img5: require('@/assets/images/m15.jpg'),
      img6: require('@/assets/images/m12.jpg'),
      img7: require('@/assets/images/pic8.jpg'),
      img8: require('@/assets/images/pic9.jpg'),
      img9: require('@/assets/images/m16.jpg'),
      img10: require('@/assets/images/m17.jpg'),
      img11: require('@/assets/images/m18.jpg'),
      img12: require('@/assets/images/m19.jpg'),
      img13: require('@/assets/images/pic9.jpg'),
      para1:
        '2006年3月，美国卡内基·梅隆大学计算机科学系主任周以真（Jeannette M. Wing）教授在美国计算机权威期刊《Communications of the ACM》杂志上给出，并定义的计算思维（Computational Thinking）。周教授认为：计算思维是运用计算机科学的基础概念进行问题求解、系统设计、以及人类行为理解等涵盖计算机科学之广度的一系列思维活动。',
      para2:
        '以上是关于计算思维的一个总定义，周教授为了让人们更易于理解，又将它更进一步地定义为：通过约简、嵌入、转化和仿真等方法，把一个看来困难的问题重新阐释成一个我们知道问题怎样解决的方法；是一种递归思维，是一种并行处理，是一种把代码译成数据又能把数据译成代码，是一种多维分析推广的类型检查方法；是一种采用抽象和分解来控制庞杂的任务或进行巨大复杂系统设计的方法，是基于关注分离的方法（SoC方法）；是一种选择合适的方式去陈述一个问题，或对一个问题的相关方面建模使其易于处理的思维方法；是按照预防、保护及通过冗余、容错、纠错的方式，并从最坏情况进行系统恢复的一种思维方法；是利用启发式推理寻求解答，也即在不确定情况下的规划、学习和调度的思维方法；是利用海量数据来加快计算，在时间和空间之间，在处理能力和存储容量之间进行折衷的思维方法。',
      para3:
        '优点: 计算思维建立在计算过程的能力和限制之上，由人由机器执行。计算方法和模型使我们敢于去处理那些原本无法由个人独立完成的问题求解和系统设计。',
      para4: '概念化，不是程序化。',
      para5: '根本的，不是刻板的技能。',
      para6: '是人的，不是计算机的思维方式。',
      para7: '数学与工程思维的互补与融合。',
      para8: '是思想，不是人造物。',
      para9:
        '2006年3月，美国卡内基·梅隆大学计算机科学系主任周以真（Jeannette M. Wing）教授在美国计算机权威期刊《Communications of the ACM》杂志上给出，并定义的计算思维（Computational Thinking）。'
    }
  }
}
</script>

<style scoped>
.Thought {
  /* padding: 20px; */
  width: 100%;
  /* margin: 0 auto; */
}
.thought-body {
  width: 80%;
  margin: 0 auto;
}
.thought-top {
  /* margin-bottom: 30px; */
  margin-top: 300px;
}
#intro {
  height: auto;
}
.wrap {
  padding: 20px;
  width: 100%;
  margin-top: 30px;
  height: fit-content;
  /* border: 1px solid rgb(132, 134, 134); */
}
.introduction-left {
  width: 50%;
  height: auto;
  float: left;
  /* padding-top: 30px; */
  margin-left: 5%;
}
.introduction-left span {
  font-size: 260%;
}
.introduction-left p {
  margin-top: 50px;
  font-size: 100%;
  line-height: 29px;
}
.introduction-right {
  width: auto;
  height: auto;
}
.introduction-right img {
  width: 27%;
  height: auto;
  margin-top: 1%;
  margin-left: 9%;
}
.wrap-top {
  width: fit-content;
  border-bottom: 1px solid rgb(54, 54, 54);
  margin: 0 auto;
  padding: 10px;
  font-size: 230%;
}
.history-bottom {
  /* border: 5px solid rgb(138, 138, 139); */
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
}
.history {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
}
.history-l {
  width: 50%;
  height: auto;
  /* float: left; */
  border: 1px solid rgb(138, 138, 139);
  background: rgb(233, 233, 232);
}
.history-l p {
  padding: 30px;
  line-height: 25px;
}
.history-l img {
  width: 100%;
  height: 100%;
}

.focus-bottom {
  /* border: 1px solid rgb(138, 138, 139); */
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.focus-bottom-content {
  width: 25%;
  margin: 20px;
  text-align: center;
}
.focus-bottom-content img {
  width: 100%;
  height: 280px;
}
.focus-bottom-content p {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
}
.focus-p {
  width: 100%;
  height: 250px;
  /* border: 1px solid rgb(138, 138, 139); */
  margin-top: 15px;
  background: rgb(233, 233, 232);
  padding: 20px;
  text-align: left;
  line-height: 30px;
}
#learn-what {
  background: rgb(233, 233, 232);
}
.learn-bottom {
  /* border: 5px solid rgb(138, 138, 139); */
  width: 100%;
  height: auto;
  padding: 16px;
  /* margin: 30px; */
  /* margin-top: 30px; */
}
.learn-img {
  width: 100%;
  height: auto;
  border-bottom: 3px solid rgb(138, 138, 139);
  display: flex;
  justify-content: space-around;
}
.learn {
  width: 15%;
  height: 170px;
}
.learn img {
  width: 100%;
  height: 100%;
}

.learn-p {
  width: 100%;
  height: auto;
  border-top: 1px solid rgb(138, 138, 139);
  display: flex;
  justify-content: space-around;
}
.learn-i {
  width: 15%;
  padding: 30px;
  height: 170px;
  border: 1px solid rgb(138, 138, 139);
  text-align: center;
}
#learn-one {
  background: rgb(233, 194, 202);
}
#learn-two {
  background: rgb(255, 255, 255);
}
#learn-three {
  background: rgb(127, 223, 191);
}
#learn-four {
  background: rgb(255, 255, 255);
}
.field-bottom {
  /* border: 1px solid rgb(138, 138, 139); */
  width: 100%;
  height: auto;
  /* margin: 0 auto; */
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-around;
  margin: 15px;
  padding: 10px;
}
.field-botttom-content {
  width: 26%;
  height: auto;
  /* border: 1px solid rgb(138, 138, 139); */
}
.field-botttom-content img {
  width: 100%;
  height: 230px;
}
.field-botttom-content-p {
  margin-top: 20px;
  padding: 30px;
  font-size: 16px;
  width: 100%;
  border: 1px solid rgb(138, 138, 139);
  background: rgb(231, 233, 233);
  line-height: 30px;
}
@media screen and (max-width: 1700px) {
  .focus-p {
    height: 300px;
  }
}
@media screen and (max-width: 1500px) {
  .focus-p {
    height: 320px;
  }
}
@media screen and (max-width: 1200px) {
  .wrap {
    margin-top: 116px;
  }
  .focus-p {
    height: 350px;
  }
}
@media screen and (max-width: 1100px) {
  .focus-p {
    height: 390px;
  }
}
@media screen and (max-width: 1000px) {
  .Thought {
    width: 1000px;
  }
  .thought-body {
    widows: 800px;
  }
  .wrap {
    margin-top: 30px;
  }
  .focus-p {
    height: 390px;
  }
}
@media screen and (max-width: 990px) {
  .wrap {
    margin-top: 100px;
  }
}
</style>
