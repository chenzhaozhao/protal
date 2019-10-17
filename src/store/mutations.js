
let mutations={
    
    //     // 接收到actions发送来的当前商品的id
            homeClick:(state)=>{
                
    
            },
            // 点击tab删除
            handleTabRemove:(state,removeName)=> {
                state['tab' + removeName] = false
                state['name' + removeName]=""  
                state.value0="工作首页"    
            },
            // 点击左边菜单栏下的子菜单
            push:(state,playload)=>{
                
                if(JSON.parse(localStorage.getItem('tabs'))){
                    state.tabs=JSON.parse(localStorage.getItem('tabs'));
                    console.log("存在")
                }else{
                    localStorage.setItem('tabs',JSON.stringify(state.tabs));
                    console.log("不存在")
    
                }
               
                if (state.tabs.every((item) => {
    
                  return item.title != playload.title
                })) {
                    state.tabs.push(playload)
                    localStorage.setItem('tabs',JSON.stringify(state.tabs));
                }
                console.log("点击左侧添加",state.tabs)
            },
            
            // 删除tabs时候获取tabs
            deleteTabs:(state)=>{
                state.tabs=JSON.parse(localStorage.getItem('tabs'))
    
            },
            // 加载tabs存获取tabs
            mountedTabs:(state)=>{
                
                 if(localStorage.getItem('tabs')){
                        state.tabs=JSON.parse(localStorage.getItem('tabs'));
                        console.log("存在")
                    }else{
                        localStorage.setItem('tabs',JSON.stringify(state.tabs) );
                        console.log("不存在")

                    }
            }
    
    }
    export default mutations