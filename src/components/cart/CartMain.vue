<template>
		<main class="cart_box">
		    <div class="cart_content clearfix" v-for="(item,i) in cartDatas" :key="i">
		        <div class="cart_shop clearfix">
		            <div class="shop_info clearfix">
						<input type="checkbox"/>
		                <img src="../../assets/images/buy-logo.png" alt="" class="shop_icon">
		                <span class="shop_name">{{item.shop_name}}</span>
		            </div>
		            <div class="cart_free clearfix">
		                <span class="free_tip">优惠券></span>
		            </div>
		        </div>
		        <div class="cart_item">
		            <div class="cart_detial_box clearfix">
		                <a href="#" class="cart_product_link">
		                    <img v-lazy="item.product_img_url" alt="">
		                </a>
		                <div class="item_names">
		                    <a href="#">
		                        <span>{{item.product_name}}</span>
		                    </a>
		                </div>

		                <div class="cart_weight">
		                    <i class="my_weigth">重量:0.45kg</i>
		                    <span class="my_color">颜色:AT800/16</span>
		                </div>
		                <div class="cart_product_sell">
		                    <span class="product_money">￥<strong class="real_money">{{item.product_uprice}}</strong>.00</span>
		                    <div class="cart_add clearfix">
		                        <span class="my_add" @click="incrementData(item.product_id)">+</span>
		                        <input type="tel" class="my_count" v-model="item.goods_num">
		                        <span class="my_jian"  @click="decrementDate(item.product_id)" :disabled="item.goods_num == 1">-</span>
		                    </div>
		                </div>
		                <div class="cart_del clearfix" @click="delGoods(item.product_id)">
		                    <div class="del_top" >
		                    </div>
		                    <div class="del_bottom">
		                    </div>
		                </div>
		            </div>
		        </div>
		      
		    </div>

		    <div class="pop" v-show="popStatus">
		    <div class="pop_box">
		        <div class="del_info">
		            确定要删除该商品吗？ 
		        </div>
		        <div class="del_cancel" @click="delCancel()" >
		            取消
		        </div>
		        <div class="del_ok" @click="delOk()">
		            确定
		        </div>
		    </div>
		</div>

		</main>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default{
		data(){
			return{
				userInfo:window.sessionStorage.userInfo?false:true,
				popStatus: false, //弹层隐藏   true显示
				curId:''
			}
		},
	/*	mounted(){
            this.$store.dispatch('hideNav');
        },
        destroyed(){  //销毁完成状态
           this.$store.dispatch('showNav');
        },*/
		//计算属性
		computed:{
		  ...mapGetters(['cartDatas'])
    },
    // 方法
		methods:{
			...mapActions (['incrementData','decrementDate']),// 购物车中的+和-
			delGoods(product_id) {  //删除按钮
				this.popStatus = true;  //弹层显示
				this.curId = product_id; //将ID值赋予另一个变量curId
			},
			delCancel() {  //取消按钮
				this.popStatus = false; //弹层隐藏
			},
			delOk() {  //确定按钮
				this.popStatus = false; //弹层隐藏
				this.$store.dispatch('delCartDatas',this.curId);  //获取curId的值
			},
			checkChange() {
				this.$store.dispatch('checkChange');
			}
		}
	}
</script>
