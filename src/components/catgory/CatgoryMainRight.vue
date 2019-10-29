<template>
	<div id="cate_right">
		 <div class="category_right">
	            <div class="category_banner">
	                <a href="#">
	                    <img src="../../assets/images/banner_1.png" alt="">
	                </a>
	            </div>
	            <div class="category_detail">
	                <h3 class="category_n">Hot Category Goods</h3>
	                <ul>
	                    <li class="category_detail_item" v-for="item in rightDatas" :key="item.product_id">
	                        <router-link :to="'/detail/'+item.product_id"class="category_detail_item_link">
	                            <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
	                            <p class="category_detail_item_name">{{item.product_name}}</p>
	                        </router-link>
	                    </li>
	                
	                </ul>
	            </div>
	        </div> 
	</div>
</template>

<script>
export default {
  data () {
    return {
      rightDatas: [],
    }
  },
  //生命周期
  mounted(){
      if(this.$route.params.id) {
          console.log('id');
        this.getRightData(this.$route.params.id);
      }
  },
  watch:{
      //$router为vueRouter实例 $router.push()
      //$route 对象this.$route.params     query    name   
      $route(to,from){
          console.log('to'+to);
          if(to.params.id){
              this.getRightData(to.params.id);
          }
      } 
  },
  methods:{
      getRightData(id) {
        let self = this;
        self.$http.get('/categorygoods',{params:{mId:id}}).then((res)=>{
            console.log(res);
            self.rightDatas = res.data;
        },(error)=>{
            console.log(error);
        })
      }
  }
}
</script>
<style scoped>
    .active {
        background: #666;
    }
</style>
