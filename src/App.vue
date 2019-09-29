<template>
  <div id="app">
    <!--头部菜单栏-->
    <Head></Head>
    <!-- 内容 -->
    <div class="left-side">
      <div class="job">
        <!-- 左侧导航 -->
        <Side ></Side>         
        <!-- 详情部分 -->
        <HomeDetail ></HomeDetail>
      </div>
    </div>
    <!-- 右侧主内容区 -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import {mapActions,mapGetters } from "vuex";
import Head from './components/head.vue'
import Side from './components/side.vue'
import HomeDetail from './components/homeDetail.vue'

import Vue from 'vue'
export default {
  name: 'App',
  data () {
    return {
    }
  },
    mounted () {
      $('#app').css({
        'height': $(window).height() + 'px',

      })
  },
  methods: {
  },
  //  computed:mapGetters([
  //   'current'
  // ]),

  components: {
    Head,Side,HomeDetail
  },

}
</script>

 <style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
body {
  width: 100%;
  height: 100%;
  min-width: 1052px;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: Microsoft YaHei;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.left-side {
  top: 8%;
  width: 100%;
  height: 92%;
  overflow: hidden;
  background:rgba(246,247,251,1);
}
.job {
  width: 100%;
  height: 100%;
  position: relative;
}


/* 工作首页详情 */
.home-detail .detail-head .home-head .ivu-tabs-tab {
  width: 120px;
  height: 35px;
  margin-right: 0;
  padding: 0;
  border-radius: 0;
  transition: none;
}
.home-detail .detail-head .home-head .ivu-tabs-bar {
  border: none;
  margin-bottom: 2px;
}
.home-detail .detail-head .home-head .ivu-tabs-tab-active {
  transform: none;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px !important;
  background: linear-gradient(to right, #b43232, #eb7373);
  font-family: Microsoft YaHei;
  font-weight: 400;
  border: none;
  color: rgba(255, 255, 255, 1);
}
.home-detail .detail-head .home-head .ivu-tabs-content {
  width: 100%;
  height: 92%;
}
.home-detail .detail-head .home-head .ivu-tabs-tabpane {
  width: 100%;
  height: 100%;
}
.ivu-menu-vertical .ivu-menu-submenu-title{
  padding:12px 0px;
  padding-left:5%;
  white-space: nowrap;
}
.ivu-menu-vertical .ivu-menu-submenu-title-icon {
      left: 80%!important;
      right:initial!important;
}

.ivu-menu-submenu-title>i {
  /* position: absolute;
  top:48%; */
    margin-right: 3%!important;
}

/* 工作首页详情第二部分 */



/*平台管理 */

/*  */
</style>
