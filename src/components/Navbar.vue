<template>
  <div class="navbar">
    <div class="navbar_frame">
    <el-row>
      <el-col :span="8">
        <div class="navbar-warp1">
          <div class="navbar-title">
            <span :title= 'title' class="title_text">
              计算思维
            </span>
            <!-- <router-link :to="{ name: 'HomeIcon' }" :title= 'title' class="title_text" @click="handleActive">计算思维</router-link> -->
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="navbar-content">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-navbar"
            mode="horizontal"
            background-color="#ffffff"
            text-color="#666666"
            active-text-color="#4C5870"
          >
            <el-menu-item index="0">
              <router-link :to="{ name: 'HomeReturn' }">首页</router-link>
            </el-menu-item>
            <el-menu-item index="1">
              <router-link :to="{ name: 'ComputerThought' }">计算机思维</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link :to="{ name: 'Laboratory' }">实验室</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link :to="{ name: 'Message' }">当前咨询</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link :to="{ name: 'ResultIntro' }">成果介绍</router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link :to="{ name: 'Cs4c' }">CS4C</router-link>
            </el-menu-item>
            <!-- <div class="icon">
                <router-link :to="{ name: 'Icon' }">
                  <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
                </router-link>
            </div> -->
            <div class="icon">
                <a href="">
                  <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
                </a>
            </div>
          </el-menu>
        </div>
        
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '-1',
      title: '计算思维首页',
      icon_active: true
    }
  }
}
</script>

<style>
.el-menu-item{
  height: 4em !important; 
  font-size: 1em !important;
  width: 8em;
  line-height: 4em !important;
  padding: 0% !important;
  text-align: center;
}
@media screen and (max-width: 1340px) {
  .el-menu-item{
    width: 7em;
  }
}
@media screen and (max-width: 1200px) {
  .el-menu-item{
    width: 6em;
  }
  .icon{
    margin-left: 1em;
  }
}
@media screen and (max-width: 1000px) {
  .navbar_frame{
    width: 1000px;
  }
}
/* @media screen and (max-width: 700px) {
  
} */
</style>

<style scoped>
a{
  text-decoration: none;
}
.navbar-title {
  background-color: #fff;
  /* width:15%; */
  color: #000;
  /* line-height: 60px; */
  line-height: 4em;
  height: 4.0625em;
  /* padding-top:.75em; */
  padding-left: 10%;
  overflow: hidden;
  border-bottom: solid 1px #e6e6e6
}
.title_text{
  font-size:1.75em;
  text-align: center;
}
.icon{
  float: left;
  margin-left: 3em;
  padding-top: 1em;
}
.el-menu-item.is-active {
    border-bottom: 2px solid teal;
    color: #303133;
}
</style>
