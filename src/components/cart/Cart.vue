<template>
  <div>
  <h1>{{msg}}</h1>

  </div>
</template>


<script>
  // import { mapGetters ,mapActions} from 'vuex'
  export default {
    name: 'Cart',
    data () {
      return {
        msg: '显示购物车'
      }
    },
    computed:{

    },
    methods:{
      // add(){
      // this.$store.dispatch('add')
      // },
      // dec(){
      //   this.$store.dispatch('dec')
      // }


    }
  }
</script>

<style scoped>

</style>
