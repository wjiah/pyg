<template>
    <div class="home_box">
        <el-container>
          <el-header>
            <el-button circle  style="color:#000" @click="menuchange()" icon="iconfont icon-menu" size="mini"></el-button>
            <span class="title">品优购后台管理系统</span>
            <el-button class="logout" round type="danger" @click="logout()">退出</el-button>
          </el-header>
          <el-container>
            <el-aside :width="iscollapse?'60px':'180px'">
                <el-menu
                  background-color="#333744"
                  text-color="#fff"
                  :collapse="iscollapse"
                  :collapse-transition="false"
                  active-text-color="#ffd04b"
                  router
                  :unique-opened="true">
                  <el-submenu v-for="(item,i) in menus" :index="item.id.toString()" :key="item.id">
                    <template slot="title">
                        <i></i>
                        <span>&nbsp;{{item.authName}}</span>
                    </template>
                      <el-menu-item v-for="lastItem in item.children" :key="lastItem.id" :index="lastItem.path">{{lastItem.authName}}</el-menu-item>
                  </el-submenu>
                </el-menu>
            </el-aside>
            <el-main><router-view></router-view></el-main>
          </el-container>
        </el-container>
    </div>
</template>
<script>
import mixin from './Home-Mixin.js'
export default {
  mixins: [mixin]
}
</script>
<style>
.home_box{
    height: 100%
}
.el-header{
    background-color: #373D41;
    height: 60px;
    line-height: 60px;
}
.el-container{
    height: 100%
}
.el-aside{
    background-color: #333744;
}
.logout{
    float: right;
    margin-top: 15px;
}
.title {
    color:#ccc;
    margin-left: 20px;
}
.el-menu{
    border:none;
}
</style>
