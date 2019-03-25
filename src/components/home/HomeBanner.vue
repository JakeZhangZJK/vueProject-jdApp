<template>
  <div class="home_ban">
    <div class="m_banner clearfix" id="my_banner">
      <ul class="banner_box">
        <li v-for="(v,i) in imgDatas" v-show="i==num" :key="i"><img :src="v" alt="" /></li>
      </ul>
      <ul class="point_box">
        <li v-for="v in imgDatas"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner',
    data() {
      return {
        num:0,
      }
    },
    props:['imgDatas'],
    mounted:function(){   //生命周期  挂载完成
      this.play();
    },
    methods:{   //方法
      autoPlay:function(){
        this.num++;
        if(this.num == this.imgDatas.length){
          this.num = 0;
        }
      },
      play:function(){
        setInterval(this.autoPlay,2000);
      }
    }
  }
</script>

<style scoped>

</style>
