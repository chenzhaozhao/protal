<template>
         <div class="home-detail"> 
                  <Tabs></Tabs>
                  <router-view></router-view>
         </div>
</template>
<script>
import Side from './side.vue';
import Tabs from './Tabs.vue';
import {mapActions,mapGetters } from "vuex";
 export default {
   data () {
    return {

    }
  },
  computed:{...mapGetters([])},
  components:{
      Side,Tabs
  }
 }
    
</script>
<style scoped>
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
</style>
