// import Vue from "vue"
let actions = {
    // homeClick(){
    //     console.log("000",this.tabs)

    //      this.tabs=false  
    // }
    homeClick: ({ commit }) => {
        commit("homeClick")
    },
    homeName: ({ commit }, homeName) => {
        commit("homeName", homeName)
    },
    handleTabRemove: ({ commit }) => {
        commit("handleTabRemove")
    },
    // add:({commit,state},id)=>{
    //     // actions将货品的id发送给add
    //     Vue.prototype.$http(
    //         "/static/data/product.json"
    //       ).then((res)=>{
    //       // console.log(state.product)
    //       //    将数据库中所有的商品数据给state仓库
    //       state.product=res.data

    //       state.product[id].nm++
    //       console.log(state.product[id].nm)
    //       })
    //     commit("add",id)
    // }
}
export default actions