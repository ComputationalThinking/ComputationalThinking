<template>
  <div class="navbar">
    <el-row>
      <el-col :span="8">
        <div class="navbar-warp1">
          <h2 class="navbar-title">计算思维</h2>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="navbar-content">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-navbar"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <router-link :to="{ name: 'ComputerThought' }">
                计算机思维
              </router-link>
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
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>
.navbar-title {
  background-color: #545c64;
  /* width:15%; */
  color: white;
  line-height: 60px;
}
</style>
