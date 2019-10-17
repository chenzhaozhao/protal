import headLeft from '../assets/imgs/p4.png'
import headRight from"../assets/imgs/p2.png" 
import headTou from"../assets/imgs/tou.png" 
import mainA from"../assets/imgs/main_a.png"
import mainE from"../assets/imgs/main_e.png"
import mainB from "../assets/imgs/main_b.png" 
import mainC from "../assets/imgs/main_c.png"
import mainD from"../assets/imgs/main_d.png"
import middleA from"../assets/imgs/middle_a.png" 
import middleC from"../assets/imgs/middle_c.png" 
import middleD from"../assets/imgs/middle_d.png"
import middleE from"../assets/imgs/middle_e.png"
import middleF from"../assets/imgs/middle_f.png"
import bottomA from"../assets/imgs/bottom_a.png"
import bottomB from"../assets/imgs/bottom_b.png"


let state={
    tabs:[
        {title:'工作首页'},
        // {title:"运输管理"},
        // {title:"平台管理"},
    ],
    values:"工作首页",
    baseColor: [
        {headColor:'linear-gradient(to right, #b43232, #eb7373)'},
        // {pieColor:'#E6EAF3'},
        {pieColorLeft:['#E6EAF3','#FF92B0', '#FE6B6B']},
        {pieColorRight:['#E6EAF3','#ECD151', '#FF9441']},
        {lineColor:['#FE6B6C',"rgba(254,107,108,0.2)", "rgba(254,107,108,0.4)" ]},
        {barColor:['#FF92B0','#FE6B6B', '#ECD151','#FF9441']},
        {curvedLineColor:['#FF9441','rgba(255,151,66,0.3)', 'rgba(255,151,66,0) ' ,'#FE6B6B','rgba(254,107,108,0)','rgba(254,107,108,0.3)']},
    ],
    baseImg:[
        headLeft,headRight,headTou,mainA,mainE,mainB,mainC,mainD,middleA,middleC,middleD,middleE,middleF,bottomA,bottomB
    ]

}
export default state