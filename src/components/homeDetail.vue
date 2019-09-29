<template>
     <div class="home-detail">
        <div class="detail-head">
            <tabs class="home-head"
                  type="card"
                  :animated="false"
                  :value="value0"
                  closable 
                  @on-click="tta"
                  @on-tab-remove="handleTabRemove">
              <tab-pane :label="name0"                                          
                        v-if="tab0" 
                        :name="name0">
                <div class="qqq" style="width:100%;height:100%;">
                  <div class="line" :style="{background:this.$store.state.baseColor[0].headColor}"></div>
                  <div class="home-content">
                  <!--详情第一部分  -->
                  <div class="home-content-head">
                    <dl class="first-dl">
                      <dt><img class="main-a"
                             :src="this.$store.state.baseImg[3]" ></img></dt>
                      <dd>390</dd>
                      <dd>
                        <img class="main-e"
                             :src="this.$store.state.baseImg[4]"></img> 进货发票传报
                      </dd>
                    </dl>

                    <dl class="first-dl">
                      <dt><img class="main-a"
                             :src="this.$store.state.baseImg[5]"/></dt>
                      <dd>390</dd>
                      <dd>
                        <img class="main-e"
                             :src="this.$store.state.baseImg[4]" />
                        保销单处理
                      </dd>
                    </dl>

                    <dl class="first-dl">
                      <dt><img class="main-a"
                             :src="this.$store.state.baseImg[6]" /></dt>
                      <dd>390</dd>
                      <dd>
                        <img class="main-e"
                            :src="this.$store.state.baseImg[4]" /> 送货单管理
                      </dd>
                    </dl>

                    <dl class="first-dl last-dl">
                      <dt><img class="main-a"
                             :src="this.$store.state.baseImg[7]" /></dt>
                      <dd>390</dd>
                      <dd>
                        <img class="main-e"
                            :src="this.$store.state.baseImg[4]"/>任务单管理
                      </dd>
                    </dl>
                  </div>
                  <!--详情第二部分  -->
                  <div class="home-content-middle">
                    <div class="content-middle">
                      <div class="content-middle-top">
                        <div><img class="middle_a"
                               :src="this.$store.state.baseImg[8]" /></div>
                        <div class="middle_font">二票关联占比</div>
                        <div><img class="middle_c"
                               :src="this.$store.state.baseImg[9]" /></div>
                      </div>
                      <div class="content-middle-center">

                        <div id="main"
                             style="width: 110px;height:120px;"></div>
                      </div>
                      <div class="content-middle-bottom">
                        <div>
                          <img class="middle_d"
                              :src="this.$store.state.baseImg[10]" 
                               alt="">
                          进货发票传报
                        </div>
                        <div>
                          <img class="middle_d"
                              :src="this.$store.state.baseImg[11]" 
                               alt="">
                          发票关联传报
                        </div>
                      </div>
                    </div>
                    <div class="content-middle">
                      <div class="content-middle-top">
                        <div><img class="middle_a"
                              :src="this.$store.state.baseImg[8]" /></div>
                        <div class="middle_font">任务单占比</div>
                        <div><img class="middle_c"
                              :src="this.$store.state.baseImg[9]" /></div>
                      </div>
                      <div class="content-middle-center">
                        <div id="main2"
                             style="width: 110px;height:120px;"></div>
                      </div>
                      <div class="content-middle-bottom">
                        <div>
                          <img class="middle_d"
                              :src="this.$store.state.baseImg[10]" 
                               alt="">
                          进货单数量
                        </div>
                        <div>
                          <img class="middle_d"
                              :src="this.$store.state.baseImg[12]" 
                               alt="">
                          任务单数量
                        </div>
                      </div>
                    </div>

                    <div class="content-middle">
                      <div class="content-middle-top">
                        <div><img class="middle_a"
                              :src="this.$store.state.baseImg[8]" /></div>
                        <div class="middle_font">进货发票统计</div>
                        <div><img class="middle_c"
                              :src="this.$store.state.baseImg[9]"  /></div>
                      </div>
                      <div class="content-middle-center"
                           style="height:90%">
                        <div id="main3"
                             style="width:250px;height:160px;"></div>
                      </div>
                    </div>

                    <div class="content-middle last-content-middle"
                         style="margin-right:0px">

                      <div class="content-middle-top">
                        <div><img class="middle_a"
                              :src="this.$store.state.baseImg[8]" />
                        </div>
                        <div class="middle_font">送货单任务单对比</div>
                        <div><img class="middle_c"
                              :src="this.$store.state.baseImg[9]"  />
                        </div>
                      </div>

                      <div class="content-middle-center-last">
                        <div id="main4"
                             style="width: 250px;height:140px;"></div>
                      </div>

                      <div class="content-middle-bottom">
                        <div>
                          <img class="middle_d"
                              :src="this.$store.state.baseImg[11]" 
                               alt="" />
                          送货单数量
                        </div>
                        <div>
                          <img class="middle_d"
                              :src="this.$store.state.baseImg[12]" 
                               alt="" />
                          任务单数量
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--详情第三部分   -->
                  <div class="home-content-bottom">
                    <div class="content-bottom">
                      <div class="content-bottom-top">
                        <div><img class="middle_a"
                              :src="this.$store.state.baseImg[8]" ></img></div>
                        <div class="middle_font">工作量统计</div>
                      </div>
                      <div class="content-bootom-center">
                        <div id="main5"
                             style="width:90%;height:160px"></div>
                      </div>
                      <div class="content-bottom-foot">
                        <div>
                          <img class="bottom_a"
                              :src="this.$store.state.baseImg[13]" 
                               alt="">
                          处理报销单
                        </div>
                        <div>
                          <img class="bottom_b"
                              :src="this.$store.state.baseImg[14]" 
                               alt="">
                          进货发票单
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--                                             -->
                </div>
                        </div>
                
              </tab-pane>
            </tabs>
            <!-- <tag class="home-head" type="border" style="font-size:14px;font-weight:400;line-height:35px;text-align:center" color="rgba(255,255,255,1)">工作首页</tag> -->
        </div>

  </div>
</template>
<script>
import {mapActions,mapGetters } from "vuex";
 export default {
   data () {
    return {
    //   tab0: true, //标签页默认显示
      option: {},
      option2: {},
      option3: {},
      option4: {},
      option5: {},
      value:40,  //饼图的值
      value2:60,//饼图的值

    }
  },
    mounted () {
        // this.$emit("sendTabs",this.tab0)
      // 对饼图，折线图，树状图，一些配置     
      this.move()
  },
  updated () {
        // this.$emit("sendTabs",this.tab0)
      // 对饼图，折线图，树状图，一些配置     
      this.move()
  },
   computed:mapGetters([
    'tab0','label0',"name0","value0"
  ]),
  methods: {
      ...mapActions(["handleTabRemove"]),
    // handleTabRemove (name) {
    //     console.log(name,this.tab0)
    //   this['tab' + name] = false
    // },
    tta () {

    },
    // 对饼图，折线图，树状图，一些配置
    move () {
      var myChart = this.$echarts.init(document.getElementById('main'))
      var myChart2 = this.$echarts.init(document.getElementById('main2'))
      var myChart3 = this.$echarts.init(document.getElementById('main3'))
      var myChart4 = this.$echarts.init(document.getElementById('main4'))
      var myChart5 = this.$echarts.init(document.getElementById('main5'))
      //    定图表的配置项和数据
      this.option = {
        // color:["#E6EAF3","#FF92B0"],
        tooltip: {
          trigger: 'item',
          formatter: function(params){//悬浮框内容自定义
                  var result ="";
                    result += `<div style="display:flex;width:130px;justify-content: center;align-items: center;">
                                  <span style="display:inline-block;margin-right:5px;border-radius:50%;width:8px;height:8px;background-color:${params.color.colorStops[0].color}"></span> 
                                  <div style="">${params.data.name}</div>
                                  <div style="margin-left:5px;color:${params.color.colorStops[0].color}">${params.data.value+"%"}</div>
                               </div>`;
                  return result;
        }
          // formatter: "{b}:  {d}%"
          
        },
        
        series: [ 
          {
            type: 'pie', /// /设为饼图
            radius: ['80%', '60%'], // 设置内半径和外半径
            // avoidLabelOverlap: false,
            hoverAnimation: false, // 移动放大
            clockwise: false, // 逆时针
            labelLine: {       //背景线
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            // itemStyle : labelFromatter,
            data: [{
              value: this.value, // 环形的比例值
              name: '进货发票传报',
              itemStyle: {      //环形颜色设置
                normal: {
                  
                 color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    offset: 0,
                    color: this.$store.state.baseColor[1].pieColorLeft[0]
                  }, {
                    offset: 1,
                    color: this.$store.state.baseColor[1].pieColorLeft[0]
                  }])
                }
              }
            },
            {
              value: this.value2, // 环形的比例值
              name: '发票关联传报',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    offset: 0,
                    color: this.$store.state.baseColor[1].pieColorLeft[1]
                  }, {
                    offset: 1,
                    color: this.$store.state.baseColor[1].pieColorLeft[2]     
                  }])// 环形的颜色
                }
              }
            }

            ]
          }
        ]
      }
      this.option2 = {
        tooltip: {
          trigger: 'item',
          formatter: function(params){
                  var result ="";
                    result += `<div style="display:flex;width:130px;justify-content: center;align-items: center;">
                                  <span style="display:inline-block;margin-right:5px;border-radius:50%;width:8px;height:8px;background-color:${params.color.colorStops[0].color}"></span> 
                                  <div style="">${params.data.name}</div>
                                  <div style="margin-left:5px;color:${params.color.colorStops[0].color}">${params.data.value+"%"}</div>
                               </div>`;
                  return result;
          }
        },
        // color: ['#E6EAF3'], // 环形的颜色
        series: [
          {
            //          name:'xx状况',
            type: 'pie', /// /设为饼图
            radius: ['80%', '60%'], // 设置内半径和外半径
            avoidLabelOverlap: false,
            hoverAnimation: false, // 移动放大
            clockwise: false, // 逆时针
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            // itemStyle : labelFromatter,
            data: [{
              value: 40, // 环形的比例值
              name: '进货单数量',
             itemStyle: {
                normal: {
                  
                 color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    offset: 0,
                    color: this.$store.state.baseColor[2].pieColorRight[0]
                  }, {
                    offset: 1,
                    color: this.$store.state.baseColor[2].pieColorRight[0]
                  }])
                }
             }
            },
            {
              value: 60, // 环形的比例值
              name: '任务单数量',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    offset: 0,
                    color: this.$store.state.baseColor[2].pieColorRight[1]
                  }, {
                    offset: 1,
                    color: this.$store.state.baseColor[2].pieColorRight[2]
                  }])// 环形的颜色
                }
              }
            }

            ]
          }
        ]
      }
      this.option3 = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['处理报销单', '进货发票单']
        },
        barWidth: 240,
        barHeight: 50,
        grid: {
          x: '1%',
          y: '8%',
          x2: '6%',
          y2: '10%',
          borderWidth: 0,
          containLabel: true
        },
       
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['', '07', '08', '09', '10', '11'],
          // 背景色设置
          splitArea: {
            show: false,
          },
          // 背景线设置
          splitLine: {
            show: true,
            lineStyle:{
              color:'#EEEEEE',
              width:1
            }
          },
          // 坐标刻度设置
          axisLabel: {
            textStyle: {
                color: '#999999',
                fontSize: 10
            },
            interval: 0,
          },
          //坐标线设置
          axisLine:{
              lineStyle:{
                  color:'#EEEEEE',
                  width:1
              }
          },
        },
        yAxis: {
          type: 'value',

          min: 0,
          max: 1000,
          // 背景区域
          splitArea: {
            show: false
          },
          // 背景线
          splitLine: {
            show: false
          },
          // 坐标刻度
          axisLabel: {
            textStyle: {
                color: '#999999',
                fontSize: 10
            },
            interval: 0,
          },
          // 坐标线
          axisLine:{
              lineStyle:{
                  color:'#EEEEEE',
                  width:1
              }
          },
        },
        series: [
          //  symbol: 'none',
          {
            name: '',
            type: 'line',
            stack: '总量',
            data: [420, 302, 501, 734, 790, 630, 810],           
            itemStyle : {
                  normal : {
                      // color:'#FE6B6C',
                      lineStyle:{
                          color:this.$store.state.baseColor[3].lineColor[0]
                      }
                  }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: this.$store.state.baseColor[3].lineColor[2] // 0% 处的颜色
                }, {
                  offset: 1,
                  color:this.$store.state.baseColor[3].lineColor[1]   // 100% 处的颜色
                }], false) // 改变区域颜色
              }
            }
          }
        ]
      }

      this.option4 = {
        grid: {
          x: '1%',
          y: '14%',
          x2: '6%',
          y2: '8%',
          borderWidth: 0,
          containLabel: true
        },
        barWidth: 10, // 柱宽
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: false,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['07', '08', '09', '10', '11'],

            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                  color: '#999999',
                  fontSize: 10
              },
              interval: 0,
            },
            axisLine:{
              lineStyle:{
                  color:'#EEEEEE',
                  width:1
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 1000,
            splitArea: {
              show: false
            },

            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                  color: '#999999',
                  fontSize: 10
              },
              interval: 0,
            },
            axisLine:{
              lineStyle:{
                  color:'#EEEEEE',
                  width:1
              }
            },

          }
        ],
        series: [
          {
            name: '任务单',
            type: 'bar',
            data: [800, 400, 200, 100, 600],

            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: this.$store.state.baseColor[4].barColor[0]// 0% 处的颜色
                }, {
                  offset: 1,
                  color:this.$store.state.baseColor[4].barColor[1] // 100% 处的颜色
                }], false)
              }
            }
          },
          {
            name: '送货单',
            type: 'bar',
            data: [800, 400, 200, 100, 60],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: this.$store.state.baseColor[4].barColor[2] // 0% 处的颜色
                }, {
                  offset: 1,
                  color: this.$store.state.baseColor[4].barColor[3] // 100% 处的颜色
                }], false)
              }
            }

          }
        ]
      }

      this.option5 = {
        tooltip: {
          trigger: 'axis'
        },

        grid: {
          x: '0%',
          y: '5%',
          x2: '5%',
          y2: '11%',
          borderWidth: 0,
          containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
                color: '#999999',
                fontSize: 10
            },
            interval: 0,
          },
          axisLine:{
              lineStyle:{
                  color:'#EEEEEE',
                  width:1
              }
            },
          boundaryGap: false,
          data: ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        },
        yAxis: {
          type: 'value',
          // 设置背景线
          splitLine: {
            show: false
          },
          // 设置坐标轴刻度
          axisLabel: {
            textStyle: {
                color: '#999999',
                fontSize: 10
            },
            interval: 0,
          },
          // 设置坐标轴线
           axisLine:{
              lineStyle:{
                  color:'#EEEEEE',
                  width:1
              }
            },
          // 做大和最小数
          min: 0,
          max: 1000
        },
        series: [
          {
            name: '进货发票单',
            type: 'line',
            // stack: '数据堆叠',
            data: [120, 132, 101, 134, 700, 230, 210, 520, 132, 601, 334, 450, 230, 210],
            smooth: true,
            itemStyle: {
              normal: {
                color: this.$store.state.baseColor[5].curvedLineColor[0] 
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: this.$store.state.baseColor[5].curvedLineColor[1]  // 0% 处的颜色
                }, {
                  offset: 1,
                  color: this.$store.state.baseColor[5].curvedLineColor[2]  // 100% 处的颜色
                }], false) // 改变区域颜色
              }
            }
          },
          {
            name: '处理报销单',
            type: 'line',
            // stack: '数据堆叠',
            data: [220, 182, 191, 734, 290, 330, 910, 120, 532, 101, 634, 390, 230, 210],
            smooth: true,
            itemStyle: {
              normal: {
                color:this.$store.state.baseColor[5].curvedLineColor[3] 
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: this.$store.state.baseColor[5].curvedLineColor[4]  // 0% 处的颜色
                }, {
                  offset: 1,
                  color: this.$store.state.baseColor[5].curvedLineColor[5]  // 100% 处的颜色
                }], false) // 改变区域颜色
              }
            }
          }

        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option)
      myChart2.setOption(this.option2)
      myChart3.setOption(this.option3)
      myChart4.setOption(this.option4)
      myChart5.setOption(this.option5)
      // 图标自适应
      window.addEventListener('resize', function () {
        myChart.resize()
        myChart2.resize()
        myChart3.resize()
        myChart4.resize()
        myChart5.resize()
      })
    }
  },
   
 }   
</script>
<style scoped>

/* 工作首页详情 */

.job .home-detail {
  width: 87%;
  height: 100%;
  position: absolute;
  left: 13%;
  top: 0px;
  background: #f6f7fb;
}
.home-detail .detail-head {
  width: 94%;
  height: 100%;
  padding-top: 5px;
  padding-left: 3%;
  box-sizing: border-box;
}
.home-detail .detail-head .home-head {
  height: 100%;
  width: 100%;
}
.home-detail .detail-head .home-head .ivu-tabs-tab {
  width: 120px!important;
  height: 35px!important;
  margin-right: 0;
  padding: 0;
  border-radius: 0!important;
  transition: none;
}
.home-detail .detail-head .home-head .ivu-tabs-bar {
  border: none!important;
  margin-bottom: 2px!important;
}
.home-detail .detail-head .home-head .ivu-tabs-tab-active {
  transform: none;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px !important;
  background: linear-gradient(to right, #b43232, #eb7373)!important;
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
.home-detail .detail-head .home-head .line {
  width: 100%;
  height: 1px;
  opacity: 1;
}
.home-detail .detail-head .home-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 工作首页详情第一部分 */
.home-detail .detail-head .home-head .home-content-head {
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-top: 16px;
  height: 15%;
}
.home-detail .detail-head .home-content-head .first-dl {
  float: left;
  width: 24%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px rgba(3, 35, 84, 0.06);
  padding-top: 1px;
  padding-left: 20px;
  margin-right: 20px;
}
.home-detail .detail-head .home-content-head .last-dl {
  margin-right: 0 !important;
}
.home-detail .home-content-head .first-dl dt {
  float: left;
  width: 40%;
  height: 100%;
  border-right: 1px solid #f6f7fb;
  position: relative;
}
.home-detail .detail-head .home-content-head .main-a {
  display: block;
  width: 38px;
  height: 40px;
  top: 30%;
  margin-left: 20%;
  box-sizing: border-box;
  position: absolute;
}
.home-detail .home-content-head .first-dl dd:first-of-type {
  height: 20%;
  font-size: 24px;
  font-family: Arial;
  font-weight: bold;
  line-height: 30%;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
  margin-left: 55%;
  margin-top: 10%;
}
.home-detail .home-content-head .first-dl dd:last-of-type {
  height: 20%;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 38px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
  margin-left: 50%;
}
.home-detail .detail-head .home-content-head .main-e {
  width: 10px;
  height: 10px;
}
/* 工作首页详情第二部分 */
.home-detail .detail-head .home-head .home-content-middle {
  display: flex;
  width: 100%;
  height: 35%;
  margin-top: 20px;
  overflow: hidden;
}
.home-detail .detail-head .home-head .content-middle {
  float: left;
  width: 24%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px rgba(3, 35, 84, 0.06);
  opacity: 1;
  margin-right: 20px;
}
.home-detail .detail-head .content-middle .last-content-middle {
  margin-right: 0 !important;
}

.home-detail .detail-head .content-middle .content-middle-top {
  width: 100%;
  height: 10%;
  display: flex;
  margin-top: 16px;
}
.home-detail .detail-head .content-middle .middle_a {
  width: 3px;
  height: 18px;
  margin-left: 5px;
}
.home-detail .detail-head .content-middle .middle_font {
  width: 90%;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
  margin-left: 10px;
}
.home-detail .detail-head .content-middle .middle_c {
  width: 3px;
  height: 18px;
}
.home-detail .detail-head .content-middle .content-middle-bottom {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
}
.content-middle-bottom div:first-of-type {
  margin-right: 4%;
}
.content-middle-bottom div:last-of-type {
  margin-left: 5%;
}
.home-detail .detail-head .content-middle .middle_d {
  width: 10px;
  height: 10px;
}
.home-detail .detail-head .content-middle .content-middle-center {
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-middle-center-last {
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/*  工作首页详情第三部分 */
.home-detail .detail-head .home-head .home-content-bottom {
  overflow: hidden;
  width: 100%;
  height: 45%;
  padding-top: 20px !important;
  box-sizing: border-box;
}
.home-detail .detail-head .home-content-bottom .content-bottom {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px rgba(3, 35, 84, 0.06);
  opacity: 1;
  position: relative;
}
.home-detail .detail-head .home-content-bottom .content-bottom-top {
  width: 100%;
  height: 6%;
  display: flex;
  margin-top: 10px;
}
.home-detail .detail-head .content-bottom .middle_a {
  width: 3px;
  height: 18px;
  margin-left: 14px;
}
.home-detail .detail-head .content-bottom .middle_font {
  width: 120px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
  margin-left: 10px;
}
.home-detail .detail-head .content-bottom .content-bottom-foot {
  width: 100%;
  height: 5%;
  display: flex;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 24px;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
}
.home-detail .detail-head .content-bottom-foot .bottom_a {
  width: 15px;
  height: 9px;
}
.home-detail .detail-head .content-bottom-foot .bottom_b {
  width: 15px;
  height: 9px;
  margin-left: 25px;
}
.content-bootom-center {
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
  background: linear-gradient(to right, #b43232, #eb7373);
}
</style>