<template>
  <div class="home_n">
    <nav class="m_nav">
      <ul>
        <li class="nav_item" v-for="(v,k) in nav">
          <a href="#" class="nav_item_link">
            <img :src="v.img" alt="">
            <span>{{v.title}}</span>
          </a>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'HomeNav',
    data(){
      return {
            nav:[
              {'img':require('../../assets/images/nav0.png'),'title':'京东超市'},
              {'img':require('../../assets/images/nav1.png'),'title':'全球购'},
              {'img':require('../../assets/images/nav2.png'),'title':'服装城'},
              {'img':require('../../assets/images/nav3.png'),'title':'京东生鲜'},
              {'img':require('../../assets/images/nav4.png'),'title':'京东到家'},
              {'img':require('../../assets/images/nav5.png'),'title':'充值中心'},
              {'img':require('../../assets/images/nav6.png'),'title':'惠赚钱'},
              {'img':require('../../assets/images/nav7.png'),'title':'领劵'},
              {'img':require('../../assets/images/nav8.png'),'title':'物流查询'},
              {'img':require('../../assets/images/nav9.png'),'title':'我的关注'},
            ]
      }
    }
  }
</script>

<style scoped>

</style>
