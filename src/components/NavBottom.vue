<template>
  <div class="footer">
  	<footer class="fixBottomBox">
        <ul>
            <router-link tag="li" to="/home" class="tabItem">
            	<a href="javascript:;" class="tab-item-link">
                    <img src="../assets/images/a-home.png" alt="" class="tab-item-icon nav">
                    <i class="iconfont icon-shenghuo"></i>
                   <!-- <label>首页</label>-->
                </a>
            </router-link>
            <router-link tag="li" to="/catgory" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img src="../assets/images/n-catergry.png" alt="" class="tab-item-icon nav">
                    <i class="iconfont icon-jiaoyu"></i>
                    <!--<label>分类</label>-->
                </a>
            </router-link>
            <router-link tag="li" to="/find" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img src="../assets/images/n-find.png" alt="" class="tab-item-icon nav">
                </a>
            </router-link>
            <router-link tag="li" to="/cart" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img src="../assets/images/n-cart.png" alt="" class="tab-item-icon nav">
                </a>
            </router-link>
            <router-link tag="li" to="/mine" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img src="../assets/images/n-me.png" alt="" class="tab-item-icon nav">
                </a>
            </router-link>
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
          {'icon':'icon-shouye','name':'首页'},
          {'icon':'icon-icon6','name':'分类'},
          {'icon':'icon-faxian','name':'发现'},
          {'icon':'icon-gouwuche','name':'购物车'},
          {'icon':'icon-home_my','name':'我的'},

        ]
      }
    },

  }
</script>

<style>
    .active nav{
        background-color: #f60;
    }
</style>
