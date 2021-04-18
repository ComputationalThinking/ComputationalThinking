<template>
  <div class="detailmes">
    
    <div class="shang">
      <div class="con1">
        <div class="kuang"></div>
        <div class="photo">
          <img :src="pic1" style="width:99%;height:99%;" />
        </div>
      </div>
      <div class="con2">
        <p class="title">个人简介：</p>
        <br /><br /><br />
        <p v-html="information.name" style="width:70%"></p>
        <br />
        <p v-html="information.role" style="width:70%"></p>
        <br />
        <p style="width:70%">Tel: +86-{{information.tel}}</p>
        <br />
        <p style="width:70%">E-mail: {{information.email}}</p>
        <br />
      </div>
    </div>
    <div class="xia">
      <br />
      <p style="line-height:30px" v-html="information.content"></p>
    </div>
    <p class="return"><router-link to="member">返回 >></router-link></p>
    <div class="white"></div>
  </div>
</template>

<script>
export default {
  name: 'detailmes',
  data() {
    return {
      id:5,
      pic1: require('@/assets/images/男.jpg'),
      information:
        {
          name:'杨娟(Juan Yang)<br>Sichuan',
          tel:'12345678',
          email:'valleyqq@swu.edu.cn;yangjuan923@yahoo.com',
          role:'Faculty of Psychology,<br>Southwest University,Chongqing, China<br>No.2 Tiansheng Road, Beibei, Chongqing, China, 400715',
          content:'EMPLOYMENT & EDUCATION ——— Professor of Psychology, Social Psychology,2014-present, Southwest University, China. Visiting Scholar, 2013-2014,Department of Psychology, Peking University. Associate professor of Psychology, Basic Psychology, 2011-2014, Southwest University, China.Lecturer, Basic Psychology, 2009-2011, Southwest University, China.Visiting Ph.D. student, 2008-2009, Douglas Hospital, McGill University,Canada. Ph.D., Developmental and Educational Psychology, 2009, Southwest University, China. B.A., Educational Psychology, 2004, Sichuan Normal University, China.<br><br>AWARDS & HONORS<br><br>Excellent Doctoral thesis, Chongqing Educational commission, 2010'
        }
    }
  },
  created() {
    this.id = this.$route.query.id
    const that = this
    this.$axios
      .get('http://localhost:8083/member/memberGiveID?id=' + this.id)
      .then(function(response) {
        that.form = response.data

        that.information.name=that.form.name
        that.information.role=that.form.role
        that.information.tel=that.form.tel
        that.information.email=that.form.email
        that.information.content=that.form.content
      })
  },
  methods: {
    Back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style></style>

<style scoped>
.return {
  font-size: 20px;
  margin-left: 80%;
}
.white {
  height: 70px;
  width: 100%;
  float: top;
}
.shang {
  width: 100%;
  height: 28.125em;
  float: top;
}
.title {
  font-size: 400%;
  font-weight: 500;
  color: #494949;
  width: 5em;
}
.kuang {
  margin-top: 10%;
  width: 22em;
  height: 22em;
  background-color: white;
  border: 10px solid #ffc78e;
  max-width: 80%;
}
.photo {
  max-width: 80%;
  margin-top: -380px;
  margin-left: 2em;
  width: 22em;
  height: 22em;
  padding: 0.8em 0.5em 0.8em 0.8em;
  border: 2px solid black;
}
.con1 {
  float: left;
  width: 50%;
  padding-left: 20%;
  padding-top: 2%;
}
.con2 {
  width: 40%;
  float: left;
  margin-top: 6%;
  margin-bottom: 2%;
  margin-left: 2em;
}
.xia {
  margin-left: 18%;
  float: top;
  width: 63%;
  min-width: 800px;
  word-wrap: break-word;
}
@media screen and (max-width: 1000px) {
  .detailmes {
    width: 1000px;
  }
}
</style>
