<template>
		<div id="carttp">
			<header class="top_bar">
			 <a  @click="goBack($event)" class="icon_back"></a>
		    <h3 class="cartname">购物车</h3>
		    <a href="#" class="icon_menu" @click="goHome($event)"></a>
		</header>
		</div>

</template>
<script> 
export default{
        methods:{
            goHome(event){
                this.$router.push('/home');
            },
			goBack(){
				this.$router.go(-1);
			}
        }
    }
</script>