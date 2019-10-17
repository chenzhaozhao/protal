<template>
  <div class="header">
    <div class="head" :style="{background:this.$store.state.baseColor[0].headColor}">

      <div class="head-l">
        <a href="javascript:void(0);"><img class="img-l"
              :src="this.$store.state.baseImg[0]"/></a>
        <a href="javascript:void(0);"><img class="img-r"
               :src="this.$store.state.baseImg[1]" /></a>
        <a href="javascript:void(0);"
           class="caidan" @click="clickCaidan"><i class="iconfont icon-caidangongneng"></i></a>
      </div>

      <div class="head-c">
        <ul>
          <li v-for="(item,index) in headList"
              @click="addClass(index)"
              :class="{ active:index==current}" >
             <a href="javascript:void(0);">{{item.title}}</a> 
          </li>
        </ul>
        <a href="#"
           class="icon"><i class="iconfont icon-leimupinleifenleileibie"></i></a>
      </div>

      <div class="head-r">
        <div class="head-r-c">
          <a href="#"><img class="img-tou"
                 :src="this.$store.state.baseImg[2]" /></a>
          <div>管理员，您好</div>
        </div>
        <div class="head-r-r">
          <ul>
            <li><a href="#"><i class="iconfont icon-shezhi"></i></a></li>
            <li><a href="#"><i class="iconfont icon-yifu"></i></a></li>
            <li><a href="#"><i class="iconfont icon-lingdang"></i></a></li>
            <li><a href="#"><i class="iconfont icon-guanji"></i></a></li>
          </ul>
        </div>
          
      </div>

    </div>
  </div>
</template>

<script>
// import {mapActions,mapGetters } from "vuex";
import bus from '../assets/js/eventBus.js'
export default {
  name: 'Head',
  data: function () {
    return {
      tabUrl:"",
      a:1,//头部菜单点击按钮开关,
      headList: [
        { id:0,  path:"/home", title: '工作首页' },
        { id:1,  path: "/data",title: '基础数据' },
        { id:2,  path: "/target", title: '平台管理' },
        { id:3,  path: "/expense", title: '费用报销' },
        { id:4,  path: "/report",title: '运输管理' }
      ],
      current: 0,//点击导航栏所得到的index，用于切换导航栏点击当前变色

    }
  },
  mounted () {
    this.getUrl()
    // 接收头部菜单栏点击的index
    if(localStorage.getItem('current')){
        this.current = localStorage.getItem('current'); 
    }else{
      localStorage.setItem('current',0);
    }
    
  },
  methods:{
  // ...mapActions(["addClass"]) ,
     //用于导航栏点击当前变色
    addClass: function (index,urls) {
      var a=index
      localStorage.setItem('current',a);
      this.current = localStorage.getItem('current');
      bus.$emit("tocurrent",this.current)
      // window.history.pushState({} ,'' ,urls)
    },
    // 用于点击菜单图标   左侧菜单栏显示和隐藏
    clickCaidan:function () {
      if(this.a==0){
        $(".job-home").animate({ "left":"0" },500)
        $(".home-detail").animate({"width":"88%", "left":"13%" }, 500)
        this.a=1
      }else{
        $(".home-detail").animate({ "width":"100%","left":"0" },500)
        $(".job-home").animate({ left: '-13%' , }, "500")
        this.a=0
      }
      
    },
    clickHead(value){
          
    },
    getUrl(){
      // 获取浏览器地址，并且分割"/"后的内容   
      this.tabUrl=location.href
      if(this.tabUrl!==null || this.tabUrl !==''){//使用split 进行分割，一定要进行字符串判空
        const str = this.tabUrl.split("http://");
        const index = str[1].indexOf("/")+1;
        this.tabUrl=str[1].substring(index)
      }
    },
    filterUrl(data){
          switch (data) {
                case "home":
                  localStorage.setItem('current',"0");
                  this.current = localStorage.getItem('current');
                  bus.$emit("tocurrent",this.current)
                  return;
                case "data":
                  localStorage.setItem('current',"1");
                  this.current = localStorage.getItem('current');
                  bus.$emit("tocurrent",this.current)
                  return;
                case "target":
                  localStorage.setItem('current',"2");
                  this.current = localStorage.getItem('current');
                  bus.$emit("tocurrent",this.current)
                  return;    
                case "expense":
                  localStorage.setItem('current',"3");
                  this.current = localStorage.getItem('current');
                  bus.$emit("tocurrent",this.current)
                  return;
                case "report":
                  localStorage.setItem('current',"4");
                  this.current = localStorage.getItem('current');
                  bus.$emit("tocurrent",this.current)
                  return;

          }
    }
  },
  watch: {
    tabUrl:{
      handler(newUrl,oldUrl){
            // console.log()
            this.filterUrl(newUrl)
             
      },
      deep: true,
      immediate: true
    },
    },
        
}
</script>
<style scoped>
li {
  list-style: none;
}
.header {
  width: 100%;
  overflow: hidden;
  height: 8%;
  max-height: 60px;
  min-height: 40px;
}
.head {
  height: 100%;
  width: 100%;
  display: flex;
}

.head-l {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center
}
.head .head-l .img-l {
  width: 100%;
  height: 45%;
  padding-left: 5%;
  box-sizing: border-box;
}
.head .img-r {
  width: 100%;
  height: 60%;
  padding-left: 8%;
  box-sizing: border-box;
}
.head .head-l .caidan {
  width: 10%;
  height: 100%;
  padding-left: 3%;
  box-sizing: border-box;
  display: flex;
  align-items: center


}

.head .head-c {
  width: 45%;
  height: 100%;
  margin-left: 1%;
  line-height: 100%;
  text-align: center;
  position: relative;
}
.head .head-c ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
}
.head .head-c li {
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head .head-c li a {
  color: #ffffff;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head .head-c .active {
  background: linear-gradient(to top, #c74949, #f79b9b);
}
.head .head-c .icon {
  width: 5%;
  height: 100%;
  position: absolute;
  top: 40%;
  right: 10%;
}
.head-c .icon-leimupinleifenleileibie {
  width: 5%;
  height: 100%;
  position: absolute;
  line-height: 100%;
}

.head .head-r {
  width: 25%;
  height: 100%;
  display: flex;
}
.head .head-r .head-r-c {
  width:50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;

}
.head .head-r .head-r-c .img-tou {
  width: 32px;
  height: 32px;

}
.head .head-r .head-r-c a {
  
   flex: 1;
  text-align: right;
  align-self: center;
}

.head .head-r .head-r-c div {
white-space:nowrap;  
   flex: 1;
  text-align: right;
  align-self: center;
  font-size: 12px;
  color: #ffffff; 
}
.head .head-r-r{
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head .head-r ul {
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.head .head-r li {
  width: 25%;
  box-sizing: border-box;
  padding-left: 15%;
  padding-right:15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head .head-r li a {
  color: #ffffff;
}
</style>
