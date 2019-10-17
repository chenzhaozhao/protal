<template>
            <div class="job-home">
                <div class="home">
                    <Row >
                      <Col span="8">
                          <Menu :theme="theme2"  @on-open-change="homeClick()">
                                <Submenu class="sub" v-for="(item,index) in leftSide[count]" :name="item.name" :key="index" :to="{ path: item.path }">
                                    <template slot="title" >
                                        <i :class="item.icon"></i>
                                        <!-- <span @click="homeName(item.title)" style="position:absolute;left:18%" > -->
                                            <!-- <router-link :to="{ path: item.path }" >{{  item.title}}</router-link> -->
                                            {{  item.title}}
                                            
                                        <!-- </span> -->
                                        
                                    </template>
                                    
                                    <MenuItem class="cen" v-for="(items,indexs) in item.sideContent" :name="items.name" :to="{ path: items.path }" @click.native="menuItemClick(items.title)">
                                        {{  items.title}}
                                    </MenuItem>
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
                                        path:"/home",
                                        icon:"iconfont icon-iconfontzhizuobiaozhun023101",
                                        name:"1",
                                        title:"工作首页",  
                                        sideContent:[]                       
                                        }, 
                                    ]  ,
                                    [{
                                        path: "/data",
                                        title:"数据", 
                                        name:"1",

                                    }],
                                    [{
                                        path: "/target",
                                        title:"平台管理", 
                                        name:"1",

                                    }],
                                [  {
                                    path: "/expense",
                                    icon:"iconfont icon-cengji",
                                    name:"1",
                                    title:"费用报销管理",
                                    sideContent:[
                                            {path:"/expense/request",title:"我的请求",name:"1-1"},
                                            {path:"/expense/business",title:"待办事宜",name:"1-2"},
                                            {path:"/expense/businessed",title:"已办事宜",name:"1-3"},
                                            {path:"/expense/set",title:"流程设置",name:"1-4"},
                                    ] 

                                    },
                                    { 
                                    path: "/report",
                                    name:"2",
                                    icon:"iconfont icon-jiance",
                                    title:"报表查看",
                                    sideContent:[
                                                {path:"/expense/newUsers",   title:"新增用户",name:"2-1"},
                                                {path:"/expense/activeUsers",title:"活跃用户",name:"2-2"},
                                                ] 
                                    },
                                    
                                ],
                                [{
                                    path: "/transport",
                                    title:"运输",
                                    name:"1",
                                }]
                                
                ],
            }
        },
        mounted () {
           
             //左侧侧边栏箭头的隐藏和显示
            this.sideShowHide()
            // 接受导航栏点击当前的index
            if(localStorage.getItem('current')){
                 this.count = localStorage.getItem('current');
            }else{
                localStorage.setItem('current',"0");
            }
            bus.$emit("toValues","data")
           
            bus.$on("tocurrent",(data)=>{
                
                this.count=parseInt(data)

            })
            
        },
        updated () {
            //左侧侧边栏箭头的隐藏和显示
            this.sideShowHide()
            // $(".ivu-menu-item").click(function(e){
            //     console.log(e.target.innerHTML)
            // })
        },
        methods: {
            ...mapActions([]),
            // 点击子菜单
            menuItemClick(data){
              this.$store.commit("push",{title:data});
             bus.$emit("toValues",data)
               


            },
           homeClick(){

           },
            sideShowHide(){
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
            }
            
        },
        watch:{
           //左侧侧边栏箭头的隐藏和显示
        //   count:{
        //     handler(data,old){
        //             if($(".sub").find(".cen").length!=0){
        //                  $(".ivu-menu-submenu-title-icon").css({
        //                     "display":"none"
        //                 })
        //             }else{
        //                $(".ivu-menu-submenu-title-icon").css({
        //                     "display":"block"
        //                 }) 
        //             }
                
              
        //     },
        //   deep: true,
        //   immediate: true
        //   }
    
        }
    }
</script>
<style scoped>
*{margin:0;padding:0;text-decoration:none}
a{color: #fff;}
.job-home {
  width: 13%;
  max-width:220px;
  height: 100%;
  background: rgba(73, 79, 83, 1);
  position: relative;
  /* min-width: 182px; */
  
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