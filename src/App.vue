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
        <div class="home-detail"> 
                  <Tabs></Tabs>
                  <router-view></router-view>
         </div>
        <!-- <RightDetail></RightDetail>         -->
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions,mapGetters } from "vuex";
import Head from './components/head.vue';
import Side from './components/side.vue';
import Tabs from './components/Tabs.vue';
import RightDetail from './components/rightDetail.vue';



import Vue from 'vue'
export default {
  name: 'App',
  data () {
    return {
       screenWidth: document.documentElement.clientWidth,//屏幕宽度
        screenHeight: document.documentElement.clientHeight,//屏幕高度
        // tabs:[{title:"工作首页"}]
    }
  },
  mounted() {
            var _this = this;
            
            // localStorage.clear();
            this.$store.commit('mountedTabs')          
            $('.left-side').css({
                'height': $(window).height()-$(".header").height() + 'px',
                // "min-height":

            })
            $('#app').css({
                'height': $(window).height() + 'px',

            })
            window.onresize = function(){ // 定义窗口大小变更通知事件
                _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
                _this.screenHeight = document.documentElement.clientHeight; //窗口高度
                 $('.left-side').css({
                    'height': _this.screenHeight-$(".header").height() + 'px',

                  })
                  $('#app').css({
                   'height': $(window).height() + 'px',

                  })
            };
      
     
  },
   watch:{
            screenWidth:{ //监听屏幕宽度变化
               handler(newName, oldName) {
                  if(newName<1120){
                    // console.log("111")
                    $(".home-detail").css({
                      "overflow": "hidden",
                    })
                  }
                },

            },
            
            screenHeight:{ //监听屏幕高度变化
                 handler(newName, oldName) {
                  if(newName<775){
                    $("#app").css({
                      "overflow-y": "hidden",
                    })
                  }
                },
                
            }
        },

  methods: {
  },
  //  computed:mapGetters([
  //   'current'
  // ]),

  components: {
    Head,Side,Tabs,RightDetail
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
  min-height:775px;
  overflow: hidden;
  
}
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: Microsoft YaHei;
}
.ivu-tabs-tab{
  transition: none!important;
  /* background:rgba(223,227,236,1)!important; */
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
}
.left-side {
  top: 8%;
  width: 100%;
  height: 92%;
  min-height: 600px;
  overflow: hidden;
  background:rgba(246,247,251,1);
}
.job {
  width: 100%;
  height: 100%;
  position: relative;
}


/* 工作首页详情 */
.home-detail .detail-head .home-head .ivu-tabs-bar {
  border: none;
  margin-bottom: 2px;
}
.home-detail .detail-head .home-head .ivu-tabs-tab-active {
  width: 120px!important;
  height: 35px!important;
  margin-right: 4px!important;
  padding: 0!important;
  border-radius: 0!important;
  transform: none!important;
  line-height: 35px!important;
  text-align: center!important;
  font-size: 14px !important;
  background: linear-gradient(to right, #b43232, #eb7373)!important;
  font-family: Microsoft YaHeiv;
  font-weight: 400!important;
  border: none!important;
  color: rgba(255, 255, 255, 1)!important;
} 
.home-detail .detail-head .home-head .ivu-tabs-tab-focused {
  width: 120px!important;
  height: 35px!important;
  margin-right: 4px!important;
  padding: 0!important;
  border-radius: 0!important;
  transform: none!important;
  line-height: 35px!important;
  text-align: center!important;
  font-size: 14px !important;
  background: linear-gradient(to right, #b43232, #eb7373)!important;
  font-family: Microsoft YaHeiv;
  font-weight: 400!important;
  border: none!important;
  color: rgba(255, 255, 255, 1)!important;
} 


.ivu-menu-vertical .ivu-menu-submenu-title{
  padding:12px 20px ;
 
  white-space: nowrap;
}
.ivu-menu-vertical .ivu-menu-submenu-title-icon {
      left: 80%!important;
      right:initial!important;
}

.ivu-menu-submenu-title>i {
    margin-right: 3%!important;
}
.ivu-tabs-tab{
  transition: none!important;
  background:rgba(223,227,236,1)!important;
  color:rgba(102,102,102,1);
  font-family: Microsoft YaHei;
  font-weight: 400;
  border-radius: 0!important;
}
.ivu-tabs-tabpane{
  visibility: hidden!important;
}
.home-detail {
  width: 85%;
  /* min-width:1120px; */
  height: 100%;
  position: absolute;
  left: 13%;
  top: 0px;
  background: #f6f7fb;
  
}
.home-content{
     width: 87%;
    height: 100%;
    position: absolute;
    left:3%;
    margin-top: 16px;
    background: #f6f7fb;
}

/*  */
</style>
