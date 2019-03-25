<template>
  <div class="home">
    <div class="m_layout">
      <!--搜索区-->
      <HomeSearch />
      <!--轮播区-->
      <HomeBanner :imgDatas='imgDatas' />
      <!--导航区-->
      <HomeNav />
      <!--展示区-->
    </div>
  </div>
</template>

<script>
import HomeSearch from './HomeSearch'
import HomeBanner from './HomeBanner'
import HomeNav from './HomeNav'
  export default {
    name: 'Home',
    data(){
      return {
        imgDatas:[require('../../assets/images/l8.jpg'),
          require('../../assets/images/l1.jpg'),
          require('../../assets/images/l2.jpg'),
          require('../../assets/images/l3.jpg'),
          require('../../assets/images/l4.jpg')]
      }
    },
    components:{
      HomeSearch,
      HomeBanner,
      HomeNav
    }
  }
</script>

<style scoped>

</style>
