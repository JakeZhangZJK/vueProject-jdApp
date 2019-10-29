<template>
  <div>
    <CatgoryHead />
    <CatgoryMain />
  </div>
</template>

<script>
import CatgoryHead from './CatgoryHead';
//import HomeSearch from '../home/HomeSearch';
import CatgoryMain from './CatgoryMain';
export default {
  components:{
    CatgoryHead,
    CatgoryMain
  }
}
</script>
<style> 
@import '../../assets/css/category.css';
</style>
