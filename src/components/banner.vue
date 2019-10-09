<template>
  <div class="banner">
    <img v-for="(img,index) in imges" :src="img" v-show="index==num"/>
    <div class="banner-circle">
      <ul>
        <li v-for="(img,index) in imges" :class="{'selected':index==num}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
         /*//name: 'testB',*/
    data () {
      return {
        num:0,
        imges:[require('../assets/img/banner1.jpg'),
          require('../assets/img/banner2.jpg'),
          require('../assets/img/banner3.jpg'),
          require('../assets/img/banner4.jpg'),
          require('../assets/img/banner5.jpg')],
      }
    },
    mounted:function(){   //生命周期  挂载完成
      this.play();
    },
    methods: {   // 方法
      autoPlay: function () {
        this.num++;
        if (this.num === this.imges.length){
          this.num = 0;
        }
      },
      play: function(){
        setInterval(this.autoPlay, 2000);
      }

    }
  }
</script>
<style>

</style>
