<template>
  <div class="message">
    <section class="laboratory">
      <p class="title1">实验室动态</p>
      <div class="mainly">
        <div class="labDynamic">
          <div class="leftLabDynamic">
            <el-carousel
              :interval="2000"
              indicator-position="outside"
              height="300px"
            >
              <el-carousel-item v-for="(index, item) in images" :key="item">
                <!-- <h3 class="medium">{{ item }}</h3> -->
                <img
                  :src="index.pic"
                  alt=""
                  style="width: 100%; height: 100%;"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="rightLabDynamic">
            <div class="dynamicBox">
              <p
                @click="InformationDetailClick(a)"
                class="dynamic"
                v-for="(index, item) in dynamics"
                :key="item"
              >
                <span class="title">{{ index.title }}</span>
                <span class="time">{{ index.time }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="internal">
      <p class="title11">国内动态</p>
      <p class="title12">信息化教育</p>
      <div class="inforEdu">
        <div class="leftInforEdu">
          <div class="information">
            <p
              @click="InformationDetailClick()"
              class="infor"
              v-for="(index, item) in informations"
              :key="item"
            >
              <span class="title">{{ index.title }}</span>
              <span class="time">{{ index.time }}</span>
            </p>
          </div>
        </div>
        <div class="rightInforEdu">
          <div class="bigBox">
            <div class="leftImgs">
              <div class="leftTop">
                <img :src="img1" alt="" />
                <p class="intro">{{ infor1 }}</p>
              </div>
              <div class="leftBottom">
                <div class="btn">
                  更多...
                </div>
              </div>
            </div>
            <div class="rightImgs">
              <img :src="img2" alt="" />
              <p class="intro">{{ infor2 }}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="title13" style="width:40px;">活 动</p>
      <div class="activities">
        <div
          class="act"
          v-for="(item, index) in acts[currentIndex]"
          :key="index"
        >
          <img :src="item.currentImg" alt="" class="img" />
          <div class="intro">
            <p class="title4" style="margin-bottom:20px;margin-top:10px;">
              {{ item.title }}
            </p>
            <p class="title5">{{ item.intro }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="foreign">
      <p class="title11">国外动态</p>
      <div class="foreDynamic">
        <div class="leftForeDynamic">
          <div class="information">
            <p
              @click="InformationDetailClick()"
              class="infor"
              v-for="(index, item) in foreigns"
              :key="item"
            >
              <span class="title">{{ index.title }}</span>
              <span class="time">{{ index.time }}</span>
            </p>
          </div>
        </div>
        <div class="rightForeDynamic">
          <div class="rightForeDynamicTop">
            <img :src="img3" alt="" />
            <div class="img3Intro">
              <p class="img3Intro1">
                {{ infor3 }}
              </p>
              <p class="img3Intro2">
                {{ infor4 }}
              </p>
            </div>
          </div>
          <div class="rightForeDynamicBottom">
            <img :src="img4" alt="" />
            <p class="img4Btn">More</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      currentIndex: 0,
      img1: require('@/assets/images/u5.png'),
      img2: require('@/assets/images/u6.png'),
      img3: require('@/assets/images/u8.png'),
      img4: require('@/assets/images/u9.png'),
      infor1: 'ISTE计算思维能力标准...',
      infor2:
        '任正非对自己独特的经经历年和管理哲学的坚持，成就了华为过去的辉煌...',
      infor3: 'ISTE Criteria for calculating thinking capacity',
      infor4:
        'ISTE Criteria for calculating thinking capacity Lorem ipsum dolor sit amet, Aenean laoreet. Proin gravida ...',
      images: [
        { pic: require('@/assets/images/u1.jpg') },
        { pic: require('@/assets/images/u2.jpg') },
        { pic: require('@/assets/images/u3.jpg') },
        { pic: require('@/assets/images/u4.jpg') }
      ],
      dynamics: [
        { title: '实验室成员参与某某比赛荣获一等奖', time: '2020/10/25' },
        { title: '实验室参与某某比赛荣获一等奖', time: '2020/10/25' },
        { title: '喜迎实第一个国庆！', time: '2020/10/25' },
        { title: '计算思维实验室招新啦！招新啦！', time: '2020/10/25' },
        { title: '开学第一次试验', time: '2020/10/25' },
        { title: '讲座！', time: '2020/10/25' },
        { title: '实验室参与某某比赛荣获一等奖', time: '2020/10/25' },
        { title: '喜迎实第一个国庆！', time: '2020/10/25' }
      ],
      informations: [
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' },
        { title: '计算思维将被纳入PISA2021测试', time: '2020/11/11' }
      ],
      foreigns: [
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' },
        { title: 'Computeational thinking will...', time: '2020/11/11' }
      ],
      acts: {
        0: [
          {
            id: '1',
            currentImg: require('@/assets/images/u7.png'),
            title: '活动一',
            intro:
              '借助信息技术的力量，教育攻击能力大大增强，使学习主体从在校学生向社会公众扩展，教育阶段从展，教育阶段从学校教育向终身教育延伸，真正实现“人人皆学，处处能学，时时可学”'
          },
          {
            id: '2',
            currentImg: require('@/assets/images/u7.png'),
            title: '活动一',
            intro:
              '借助信息技术的力量，教育攻击能力大大增强，使学习主体从在校学生向社会公众扩展，教育阶段从展，教育阶段从学校教育向终身教育延伸，真正实现“人人皆学，处处能学，时时可学”'
          },
          {
            id: '3',
            currentImg: require('@/assets/images/u7.png'),
            title: '活动一',
            intro:
              '借助信息技术的力量，教育攻击能力大大增强，使学习主体从在校学生向社会公众扩展，教育阶段从展，教育阶段从学校教育向终身教育延伸，真正实现“人人皆学，处处能学，时时可学”'
          },
          {
            id: '4',
            currentImg: require('@/assets/images/u7.png'),
            title: '活动一',
            intro:
              '借助信息技术的力量，教育攻击能力大大增强，使学习主体从在校学生向社会公众扩展，教育阶段从展，教育阶段从学校教育向终身教育延伸，真正实现“人人皆学，处处能学，时时可学”'
          },
          {
            id: '5',
            currentImg: require('@/assets/images/u7.png'),
            title: '活动一',
            intro:
              '借助信息技术的力量，教育攻击能力大大增强，使学习主体从在校学生向社会公众扩展，教育阶段从展，教育阶段从学校教育向终身教育延伸，真正实现“人人皆学，处处能学，时时可学”'
          },
          {
            id: '6',
            currentImg: require('@/assets/images/u7.png'),
            title: '活动一',
            intro:
              '借助信息技术的力量，教育攻击能力大大增强，使学习主体从在校学生向社会公众扩展，教育阶段从展，教育阶段从学校教育向终身教育延伸，真正实现“人人皆学，处处能学，时时可学”'
          }
        ]
      }
    }
  },
  methods: {
    InformationDetailClick(a) {
      this.$router.push({
        path: 'information_detail',
        params: {
          editType: a
        }
      })
    }
  }
}
</script>

<style scoped>
/* 实验室动态部分 */
.message {
  width: 100vw;
  height: 2600px;
  padding: 5% 8%;
  background-color: rgb(245, 249, 250);
}
section {
  width: 100%;
  margin-bottom: 40px;
}
.laboratory .title1 {
  font-size: 28px;
  color: #666666;
  border-left: 6px solid #3385ad;
  padding: 2px 10px;
  margin-bottom: 30px;
}
.laboratory .mainly {
  width: 100%;
}
.laboratory .mainly .labDynamic {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
}
.laboratory .mainly .labDynamic .leftLabDynamic {
  flex: 1.1;
}
.laboratory .mainly .labDynamic .rightLabDynamic,
.inforEdu .leftInforEdu,
.foreDynamic .leftForeDynamic {
  flex: 1;
  position: relative;
  /* top: -15px; */
  height: 300px;
  padding: 30px 40px;
  /* background-color: #f8f8ff; */
  background-color: rgb(255, 255, 255);
}
.laboratory .mainly .labDynamic .rightLabDynamic {
  position: relative;
  top: -15px;
}
.inforEdu .leftInforEdu,
.foreDynamic .leftForeDynamic {
  height: 400px;
  padding: 30px 40px;
  border-radius: 8px;
}
.laboratory .mainly .labDynamic .rightLabDynamic .dynamic,
.inforEdu .leftInforEdu .infor,
.foreDynamic .leftForeDynamic .infor {
  border-bottom: 1px solid #919090;
  padding: 8px 5px;
  padding-top: 0px;
  margin-bottom: 8px;
  width: 100%;
  cursor: pointer;
  /* .laboratory .mainly .labDynamic .rightLabDynamic .dynamic .title {
  text-align: left;
} */
}
.laboratory .mainly .labDynamic .rightLabDynamic .dynamic .time,
.inforEdu .leftInforEdu .infor .time,
.foreDynamic .leftForeDynamic .infor .time {
  float: right;
}
/* 国内动态部分 */
/* 信息化教育 */
.title11 {
  font-size: 28px;
  color: #666666;
  border-left: 6px solid #3385ad;
  padding: 2px 10px;
  margin-bottom: 20px;
}
.title12,
.title13 {
  font-size: 17px;
  width: 90px;
  color: #0066cc;
  border-bottom: 1px solid #0066cc;
  padding-bottom: 4px;
  position: relative;
  left: 20px;
  margin-bottom: 20px;
}
.inforEdu {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
}
.inforEdu .rightInforEdu {
  flex: 1;
  height: 400px;
  /* position: relative;
  top: -15px; */
}
.inforEdu .rightInforEdu .bigBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
}
.inforEdu .rightInforEdu .bigBox .leftImgs,
.inforEdu .rightInforEdu .bigBox .rightImgs {
  flex: 1;
  height: 100%;
}
.inforEdu .rightInforEdu .bigBox .leftImgs {
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.inforEdu .rightInforEdu .bigBox .leftImgs .leftTop {
  flex: 1;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  transition: 0.4s;
}
.inforEdu .rightInforEdu .bigBox .leftImgs .leftBottom {
  flex: 1;
  width: 100%;
  font-size: 28px;
  border-radius: 8px;
  /* padding: 40% 0; */
  /* position: relative;
  top: 45%; */
  color: white;
  background-color: rgb(47, 181, 225);
  /* margin: 0 auto; */
  cursor: pointer;
  transition: 0.4s;
}
.inforEdu .rightInforEdu .bigBox .leftImgs .leftTop:hover,
.inforEdu .rightInforEdu .bigBox .leftImgs .leftBottom:hover,
.inforEdu .rightInforEdu .bigBox .rightImgs:hover,
.rightForeDynamicBottom p:hover,
.rightForeDynamicTop:hover {
  /* box-shadow: 5px 5px 15px #868686; */
  box-shadow: 2px 2px 8px #a7a7a7;
}
.inforEdu .rightInforEdu .bigBox .leftImgs .leftBottom .btn {
  width: 100%;
  font-size: 28px;
  border-radius: 8px;
  text-align: center;
  line-height: 120px;
}
.inforEdu .rightInforEdu .bigBox .leftImgs .leftTop img {
  flex: 3;
  width: 100%;
  height: 80%;
}
.inforEdu .rightInforEdu .bigBox .leftImgs .leftTop p {
  flex: 1;
  padding: 0 5%;
}
.inforEdu .rightInforEdu .bigBox .rightImgs {
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  transition: 0.4s;
}
.inforEdu .rightInforEdu .bigBox .rightImgs img {
  width: 100%;
  height: 80%;
}
.inforEdu .rightInforEdu .bigBox .rightImgs p {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  padding: 0 10px;
}
/* 活动 */
.title13 {
  margin-top: 50px;
}
.activities {
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 60px;
  row-gap: 20px;
  flex-wrap: wrap;
}
.activities .act {
  width: 25%;
  height: 350px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  /* float: left; */
  /* margin-right: 40px; */
  margin-bottom: 20px;
  transition: 0.4s;
  cursor: pointer;
  border: 1px solid #dddddd;
}
.activities .act:hover {
  /* box-shadow: 5px 5px 15px #868686; */
  box-shadow: 2px 2px 8px #a7a7a7;
}
.activities .act img {
  width: 100%;
  height: 50%;
}
.activities .act .intro {
  width: 100%;
  padding: 10px;
  text-align: center;
}
.activities .act .intro .title4 {
  color: #333333;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 8px;
}
.activities .act .intro .title5 {
  color: #333333;
  font-size: 14px;
}
/* 国外动态 */
.foreDynamic {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
}
.foreDynamic .leftForeDynamic {
  flex: 1;
}
.foreDynamic .rightForeDynamic {
  flex: 1;
}
.title11 {
  margin-bottom: 40px;
}
.rightForeDynamic {
  flex: 1;
  height: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  /* row-gap: 1rem; */
}
.rightForeDynamicTop {
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  cursor: pointer;
}
.rightForeDynamicBottom {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.rightForeDynamicTop img {
  flex: 2;
  width: 30%;
  height: 100%;
}
.rightForeDynamicTop .img3Intro {
  flex: 1;
}
.rightForeDynamicTop .img3Intro1 {
  font-size: 14px;
  margin-bottom: 15px;
}
.rightForeDynamicTop .img3Intro2 {
  font-size: 6px;
}
.rightForeDynamicBottom img {
  flex: 1;
  height: 80%;
  width: 80%;
  cursor: pointer;
}
.rightForeDynamicBottom p {
  flex: 1;
  background-color: #23cf9f;
  height: 70%;
  width: 75%;
  border-radius: 8px;
  color: white;
  font-size: 50px;
  text-align: center;
  /* position: relative; */
  line-height: 160px;
  cursor: pointer;
  /* top: -3px; */
}
.dynamic:hover,
.infor:hover {
  color: #0066cc;
}
@media screen and (max-width: 1000px) {
  .message {
    width: 1000px;
  }
}
</style>
