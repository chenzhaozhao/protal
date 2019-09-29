
let mutations = {

    //     // 接收到actions发送来的当前商品的id
    homeClick: (state) => {

        // state.label0="工作首页"
        //     console.log(Vue.data)
    },
    homeName: (state, homeName) => {
        console.log(homeName, state.name0)
        if (homeName == state.name0) {
            state.tab0 = true
            state.name0 = "工作首页"
            state.value0 = "工作首页"
        }


        // state.label0="工作首页"
        //     console.log(Vue.data)
    },
    handleTabRemove: (state) => {
        state.tab0 = false
        state.tab1 = ""
        state.value0 = ""
        // state.label0=""
    },
    //     add:(state,id)=>{
    // //         // 当点击加入购物车，当前商品内的n个数m++
    // state.product[id].nm++
    //         // state.totalnum++
    //     }

}
export default mutations