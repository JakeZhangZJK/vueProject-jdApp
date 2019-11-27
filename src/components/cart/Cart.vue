<template>
  <div id="my_cart">
    <CartHeaderView></CartHeaderView>
    <CartMainView></CartMainView>
    <CartFooterView></CartFooterView>
  </div>
</template>
<script>
  import CartHeaderView from './CartHeader';
  import CartMainView from './CartMain';
  import CartFooterView from './CartFooter';

  export default{
    components:{
      CartHeaderView,
      CartMainView,
      CartFooterView
    }
  }
</script>
<style>
  @import '../../assets/css/cart.css';
</style>
