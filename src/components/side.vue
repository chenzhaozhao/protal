<template>
            <div class="job-home">
                <div class="home">
                    <Row >
                      <Col span="8">
                          <Menu :theme="theme2"  @on-open-change="homeClick()">
                              <Submenu class="sub" v-for="(item,index) in leftSide[count]" :name="item.name" :key="index" >
                                  <template slot="title" >
                                      <i :class="item.icon"></i>
                                      <span @click="homeName(item.mainTitle)" style="position:absolute;left:18%" >
                                          {{  item.mainTitle}}
                                      </span>
                                     
                                  </template>
                                  <MenuItem class="cen" v-for="(items,indexs) in item.sideContent" :name="items.name">{{items.title}}</MenuItem>
                              </Submenu>
                          </Menu>
                      </Col>
                      
                  </Row>
                  <br>
              </div>
            </div>
</template>
<script>
import {mapActions,mapGetters } from "vuex";
import bus from '../assets/js/eventBus.js'
    export default {
        data () {
            return {
                theme2: 'dark',
                count:0,
                leftSide:[
                                    [  {
                                        icon:"iconfont icon-iconfontzhizuobiaozhun023101",
                                        name:"1",
                                        mainTitle:"工作首页",  
                                        sideContent:[]                       
                                        }, 
                                    ]  ,
                                    [],
                                    [],
                                [  {
                                    icon:"iconfont icon-cengji",
                                    name:"1",
                                    mainTitle:"费用报销管理",
                                    sideContent:[
                                            {title:"我的请求",name:"1-1"},
                                            {title:"待办事宜",name:"1-2"},
                                            {title:"已办事宜",name:"1-3"},
                                            {title:"流程设置",name:"1-4"},
                                    ] 

                                    },
                                    { name:"2",
                                    icon:"iconfont icon-jiance",
                                    mainTitle:"报表查看",
                                    sideContent:[
                                                {title:"新增用户",name:"2-1"},
                                                {title:"活跃用户",name:"2-2"},
                                                ] 
                                    },
                                    
                                ],
                                
                ],
            }
        },
        mounted () {
           
             //左侧侧边栏箭头的隐藏和显示
            if($(".sub").find(".cen").length==0){
                    $(".ivu-menu-submenu-title-icon").css({
                    "display":"none"
                })
            }else{
                $(".ivu-menu-submenu-title-icon").css({
                    "display":"block"
                }) 
            }
            // 接受导航栏点击当前的index
            bus.$on("tocurrent",(data)=>{
                this.count=data
            })
            
        },
        methods: {
            ...mapActions(["homeClick","homeName"]),
            
        },
        watch:{
           //左侧侧边栏箭头的隐藏和显示
          count:{
            handler(data,old){
                    if($(".sub").find(".cen").length!=0){
                         $(".ivu-menu-submenu-title-icon").css({
                            "display":"none"
                        })
                    }else{
                       $(".ivu-menu-submenu-title-icon").css({
                            "display":"block"
                        }) 
                    }
                
              
            },
          deep: true,
          immediate: true
          }
    
        }
        // computed:mapGetters([
        //     'current'
        // ]),
    }
</script>
<style scoped>
.job-home {
  width: 13%;
  height: 100%;
  background: rgba(73, 79, 83, 1);
  position: relative;
  /* min-width: 205px; */
  
}
.left-side .home {
  position: absolute;
  display: table;
  width: 100%;
  height: 100%;
  overflow: hidden;
} 
.home .ivu-row{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}
.home .ivu-col-span-8{
  position: absolute;
  width: 100%!important;
  height: 100%;
}
.home .ivu-menu-dark{
  position: absolute;
  background:none;
  width: 100%!important;
  height: 100%;

}
.ivu-menu-vertical .ivu-menu-submenu-title-icon {
      right: 5%
}
.ivu-menu-submenu .ivu-icon{
  width: 10%;
  height: 30%;
}
.left-side .home .icon-cengji-copy {
  width: 10%;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  padding-right: 6%;
  padding-left: 5%;
  box-sizing: border-box;
}
/* .sub{ 

 } */

</style>