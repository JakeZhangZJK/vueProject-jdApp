<template>
	<div id="cate_left">
		 <div class="category_left">
	            <ul class="childbox">
	                <li :class="{active:num==i}" v-for="(item,i) in leftDatas" @click="num=i" >
	                	<router-link :to="'/catgory/'+item.category_id">
	                	{{item.category_name}}
	                	</router-link>
	                </li>
	               
	            </ul>
	        </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      leftDatas: [],
      num:''
    }
  },
  //生命周期
  mounted(){
      this.getData();
  },
  methods:{
      getData() {
        let self = this;
        self.$http.get('/category').then((res)=>{
            console.log(res);
            self.leftDatas = res.data;
        },(error)=>{
            console.log(error);
        })
      }
  }
}
</script>
<style scoped>
    .active {
        background: #999;
    }
</style>
