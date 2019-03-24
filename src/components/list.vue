<template>
  <div class="index-category">
    <div class="category" v-for="list in lists"><i class="iconfont" v-bind:class="list.icon"></i><label>{{list.title}}</label></div>
  </div>
</template>

<script>
  export default {
    //name: 'testB',
    data () {
      return {
        lists:[{title:'在线咨询',icon:'icon-shenghuo'},
          {title:'在线咨询',icon:'icon-jiaoyu'},
          {title:'在线咨询',icon:'icon-11'},
          {title:'在线咨询',icon:'icon-jiazheng'},
          {title:'在线咨询',icon:'icon-shenghuo'},
          {title:'在线咨询',icon:'icon-shenghuo'}]
      }
    }
  }
</script>
<style>

</style>
