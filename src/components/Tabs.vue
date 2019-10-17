<template>
        <div class="detail-head">
            <tabs class="home-head"
                  type="card"
                  :value="values"
                  :animated="false"                 
                  @on-click="clickTab"
                  @on-tab-remove="handleTabRemove" >

                  <div class="line" :style="{background:this.$store.state.baseColor[0].headColor}"></div> 
                  <tab-pane  v-for="(item,index) in tabs" :key="item.title+index" :label="item.title" :name="item.title" closable>                     
                  </tab-pane>             
            </tabs>
            
        </div>

</template>
<script>
import bus from "../assets/js/eventBus";
import buser from "../assets/js/eventBus";

import {mapActions,mapGetters,mapState } from "vuex";
 export default {
   data () {
    return {
      tabUrl:"",
      values:"工作首页",
    }
  },
    mounted () {
      this.getUrl()  
         setTimeout(() => {
              //  移除工作首页tab标签里的×
              $(".ivu-tabs-tab").eq(0).children().remove()
              $(".ivu-tabs-tab").eq(0).children().remove()
            }, 20);

            // 加载tab标签
             this.$store.commit('mountedTabs')

            //  获取上一次点击的tab名称
             this.values= JSON.parse(localStorage.getItem('valuesTab'));

              // 判断是否存在上次点击的tab名称
              if(localStorage.getItem('valuesTab')){//如果存在上一次点击的tab标签
              
                this.values= JSON.parse(localStorage.getItem('valuesTab'));//获取tab标签，高亮当前  
                
                console.log(this.values)            
               
              }else{
                // 如果不存在上一次点击的tab标签// 种植当前tab标签
                localStorage.setItem('valuesTab',JSON.stringify(this.values))
                console.log("不存在")
              } 
              // 接收左侧点击获取到当前的values值
              bus.$on("toValues",(data)=>{
                    
                    this.values=data
                    localStorage.setItem('valuesTab',JSON.stringify(this.values))
                })    
               
  },
  updated () {
  },
   computed:{
     ...mapGetters(["tabs"])
  },
  methods: {
    // 点击删除tab标签
   handleTabRemove(name){
  
     // 获取tabs对象数组
     console.log(this.values)
     var that=this
     this.tabs.forEach(function(item,index){
      //  如果点击删除的tab名和tabs存在相同的
        if(item.title.indexOf(name)!==-1){
            let tabs = JSON.parse(localStorage.getItem('tabs'));
            // 删除tabs相同的
            tabs.splice(index,1)
            localStorage.setItem('tabs',JSON.stringify(tabs))//种植删除后的tabs
             
            //  做一个点击删除tab标签后，跳转地址
             if(item.title==that.tabs[that.tabs.length-1].title){
               console.log("从最后一个开始删除",)
               that.filterTab(tabs[index-1].title)
             }else if(item.title==that.values &&tabs.length>1){
               that.filterTab(tabs[index].title)
               console.log("从当前高亮出开始删除",)
             }
             console.log("删除后的tab",that.tabs,index)  
      } 
                 
     })
      this.$store.commit("deleteTabs");
      console.log(this.values)
    },
         
    filterTab(data){
      console.log(data)
      switch (data) {
        case "工作首页":
          this.$router.push({ path: "/home/jobHome" });
          return;
        case "我的请求":
          this.$router.push({ path: "/expense/request" });
          return;
        case "待办事宜":
        this.$router.push({ path: "/expense/business" });
        return;
        case "已办事宜":
          this.$router.push({ path: "/expense/businessed" });
          return;
        case "流程设置":
        this.$router.push({ path: "/expense/set" });
        return;
        case "活跃用户":
          this.$router.push({ path: "/expense/activeUsers" });
          return;
        case "新增用户":
        this.$router.push({ path: "/expense/newUsers" });
        return;
      }
    },
    // 当地址栏输入的地址，tab中不存在
    JudgeTab(name){
       
      //  let a=""
       var tabs= JSON.parse(localStorage.getItem('tabs'));
       console.log(tabs)
       if (tabs.every((item) => {
        return item.title !== name
      })) {
        tabs.push({title:name})
        localStorage.setItem('tabs',JSON.stringify(tabs))
          this.$store.commit('deleteTabs')
      }
    //    console.log(tabs)
    //    tabs.forEach(function(item,index){
    // //   //  如果点击删除的tab名和tabs存在相同的
    // //   console.log()
    //     if(item.title!==name){
    //       console.log(name)
    //       return a=name
    //       }else{
    //         return null
    //       } 
    //  })
          // console.log(a)
          // tabs.push({title:a})
          console.log(tabs)
          
          
          
    },

    // 点击tab
    clickTab (value) {
      this.values=value
       // 种植当前tab标签
      localStorage.setItem('valuesTab',JSON.stringify( this.values));
      this.filterTab(value)
      this.getUrl()
    },
    getUrl(){
      // 获取浏览器地址，并且分割"/"后的内容 
      this.tabUrl=this.$route.path
    },
 },
    
  components: {
  },
  watch: {
    tabUrl:{
      handler(newUrl,oldUrl){
        console.log(newUrl)
             switch (newUrl) {
                case "/home/jobHome":
                  this.values="工作首页"
                  return;
                case "/expense/request": 
                  this.values="我的请求" 
                  this.JudgeTab(this.values)
                  return;
                case "/expense/businessed":
                  this.values="已办事宜"
                  this.JudgeTab(this.values)
                return;
                case "/expense/business":
                  this.values="待办事宜"
                  this.JudgeTab(this.values)
                  return;
                case "/expense/set":
                  this.values="流程设置"
                  this.JudgeTab(this.values)
                return;
                case "/expense/activeUsers":
                   this.values="活跃用户"
                   this.JudgeTab(this.values)
                  return;
                case "/expense/newUsers":
                   this.values="新增用户"
                   this.JudgeTab(this.values)
                return;
              }
      },
      deep: true,
      immediate: true
    },
    values:{
      handler(newValue,oldValue){
            console.log(newValue)
      },
      deep: true,
      immediate: true
    },
  },
   
 }   
</script>
<style scoped>

/* 工作首页详情 */


.home-detail .detail-head {
  width: 94%;
  height: 40px;
  padding-top: 5px;
  padding-left: 3%;
  box-sizing: border-box;

}
.home-detail .detail-head .home-head {
  height: 100%;
  width: 100%;
  
}
.detail-head .line {
  width: 100%;
  height: 1px;
  opacity: 1;
}

</style>