<template>
  <div class="footer">
  	<footer class="fixBottomBox">
        <ul>
          <li v-for="(v,k) in navBottom">
            <router-link tag="li" :to="v.navName" class="tabItem">
            	<a href="javascript:;" class="tab-item-link ">
                    <i class="iconfont" :class="v.icon"></i><br/>
                    <label>{{v.name}}</label>
                </a>
            </router-link>
          </li>
        </ul>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'NavBottom',
    data() {
      return {
        navBottom:[
          {'icon':'icon-shouye','name':'首页','navName':'/home'},
          {'icon':'icon-icon6','name':'分类','navName':'/catgory'},
          {'icon':'icon-faxian','name':'发现','navName':'/find'},
          {'icon':'icon-gouwuche','name':'购物车','navName':'/cart'},
          {'icon':'icon-home_my','name':'我的','navName':'/mine'},

        ]
      }
    },

  }
</script>

<style scoped>
  .fixBottomBox ul {
    display: flex;
    justify-content: space-around;
    margin-top:5px;
    margin-left:40px;
  }
    .fixBottomBox ul li{
      display: inline-flex;
      width: 70px;
      height: 50px;
      text-align: center;

    }
  .fixBottomBox ul li a{
    width: 70px;
    height: 50px;
    text-align: center;

  }
    .fixBottomBox ul li a label{
      font-size:8px;
      margin-top:27px;
      margin-left:-22px;
      text-align: center;

    }
</style>
