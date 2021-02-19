<template>
  <div class="CS4C">
    <div class="home" id="home">
      <div class="intro">
        <h1>CS4C计划</h1>
        <h4 class="first">Computer Science For Children</h4>
        <h4 class="two">2018年9月 倪伟 等.</h4>
      </div>
      <a
        class="btn"
        id="maodian"
        href="#content-wrapper"
        style="opacity: 0.5;"
      ></a>
    </div>
    <div class="content-wrapper" id="content-wrapper">
      <div class="cs4c" id="contentwrapper" name="intro">
        <p class="title1" name="intro">CS4C计划</p>

        <div class="container">
          <div class="containerLeft">
            <img class="imga" :src="img1" alt="" />
            <div class="partDown">
              <img class="imgb" :src="img2" alt="" />
              <i class="fa fa-arrow-right imgc"></i>
            </div>
          </div>
          <div class="containerRight">
            <h2 class="title2">
              Computer Science For Children Project
            </h2>
            <p class="intro2">
              该计划旨在加强K-12阶段青少年儿童的计算思维教育，激发青少年儿童对计算机科学的兴趣，为推动中国计算思维教育发展助力。该计划将从青少年儿童计算机科学类书籍编著、计算思维教育的落地实践教学研究、公益教学、社会教学、中小学信息化素养培养、科普等方面进行工作开展，通过打造教学体系、教学实践研究及推广、加强计算思维教育工作者良性互动交流等以期为形成计算思维教育社会良性氛围，为国家科教兴国、人工智能等高科技领域培养未来储备性人才作好基础教育工作。
            </p>
            <p class="intro3">
              The program aims to strengthen the computational thinking
              education of k-12 children, stimulate their interest in computer
              science, and contribute to the development of computational
              thinking education in China. The plan will be compiled from
              teenage children computer science books, computational thinking
              education ground practice teaching research, public welfare,
              social teaching, information literacy training of primary and
              secondary schools, the popular science work, through building
              teaching system, teaching practice research and promotion,
              strengthen the benign interaction to computational thinking
              education workers so as to form a good atmosphere of computational
              thinking education society, the science and education for the
              country, high-tech fields such as artificial intelligence training
              future reserve talents basic education work.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CS4C',
  data() {
    return {
      img1: require('@/assets/images/16.jpg'),
      img2: require('@/assets/images/17.jpg')
    }
  }
}
</script>

<style scoped>
template {
  overflow-x: hidden;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  font-family: Helvetica, 'PingFag SC', 'Microsoft YeHei', sans-serif;
}
.CS4C {
  width: 100vw;
}
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('../assets/images/5.jpg');
  background-size: 100% 100%;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home .intro {
  position: relative;
  top: -20px;
  color: #fff;

  /* color: black; */
  text-align: center;
}
.home .intro h1 {
  font-size: 66px;
  letter-spacing: 0.3rem;
  font-weight: 600;
}
.home .intro .first {
  margin-top: 10px;
  position: relative;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 5px 0px;
  width: 80%;
  text-align: center;
  left: 10%;
}
.home .intro .two {
  margin-top: 20px;
}
.home .btn {
  background: 0;
  border-radius: 0;
  padding-top: 0.4rem;
  position: absolute;
  left: 48%;
  background: url('../assets/images/arrow6.png') no-repeat;
  background-size: contain;
  cursor: pointer;
  color: white;
  width: 5%;
  height: 50px;
  -webkit-animation: opa_btm 1.5s ease-in-out;
  animation: opa_btm 1.5s ease-in-out;
  bottom: 38px;
  opacity: 0;
}

@-webkit-keyframes opa_btm {
  0%,
  25% {
    opacity: 0;
    -webkit-transform: translate(0, 20px);
  }
}

@keyframes opa_btm {
  0%,
  25% {
    opacity: 0;
    transform: translate(0, 20px);
  }
}
.home .btn {
  -webkit-animation: start 1.5s infinite ease-in-out;
  animation: start 1.5s infinite ease-in-out;
}
@-webkit-keyframes start {
  0%,
  30% {
    opacity: 0;
    transform: translate(0, -10px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate(0, 5px);
  }
}

@keyframes start {
  0%,
  30% {
    opacity: 0;
    transform: translate(0, -10px);
  }

  60% {
    opacity: 1;
    transform: translate(0, 0);
  }

  100% {
    opacity: 0;
    transform: translate(0, 5px);
  }
}

.content-wrapper {
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 一维布局 水平居中 */
  justify-content: center;
  flex-direction: column;
  /* padding: 60px 120px; */
  width: 100%;
  align-items: center;
}

.title1 {
  font-size: 36px;
  font-weight: 600;
  color: #2e2e2e;
  margin: 0 auto;
  margin-top: 50px;
  width: 15%;
  transform: translateX(5%);
}

.title1::after {
  content: '';
  display: block;
  width: 90%;
  height: 6px;
  background-color: rgb(50, 158, 208);
  margin-top: 14px;
  border-radius: 14px;
  /* transform: translateX(5%); */
}
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
  color: #2e2e2e;
  padding: 2% 7%;
}
.container .containerLeft {
  flex: 1;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  /* display: grid;
  grid-template-areas:
    "imga imga"
    "imgb imgc";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 1fr; */
}
.container .containerLeft .imga {
  /* grid-area: "imga"; */
  flex: 1.5;
  width: 100%;
  border-radius: 1rem;
}
.container .containerLeft .partDown {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}
.container .containerLeft .imgb {
  /* grid-area: "imgb"; */
  flex: 1;
  height: 80%;
  width: 45%;
}
.container .containerLeft i {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 45%;
  height: 80%;
  line-height: 100%;
  font-size: 88px;
  color: #fff;
  background-color: rgb(50, 158, 208);
  border-radius: 12px;
  transition: 0.4s linear;
  /* grid-area: "imgc"; */
}
.container .containerLeft i:hover {
  position: relative;
  top: -5px;
  box-shadow: 2px 2px 8px #a7a7a7;
  cursor: pointer;
}
.container .containerRight {
  flex: 1.8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  background-color: rgb(242, 242, 242);
  padding: 2% 3%;
}

.container .containerRight .title2 {
  flex: 1;
  font-size: 28px;
  text-align: left;
}

.container .containerRight .intro2 {
  flex: 3;
  text-align: justify;
  white-space: normal;
  word-break: break-all;
  font-size: 16px;
  justify-content: center;
  line-height: 1.5rem;
  align-items: flex-start;
}

.container .containerRight .intro3 {
  flex: 3;
  text-align: justify;
  white-space: normal;
  word-break: break-all;
  font-size: 16px;
  line-height: 1.3rem;
  justify-content: space-around;
  align-items: flex-start;
}
@media screen and (max-width: 1000px) {
  template {
    overflow-x: scroll;
  }
  .CS4C {
    width: 1000px;
  }
}
</style>
