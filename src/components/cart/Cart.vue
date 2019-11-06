<template>
  <div>
  <h1>{{msg}}{{$store.state.count}}</h1>
 <!-- <h1>{{num}}</h1>-->

    <button @click="$store.commit('add',5)">添加</button>
    <h1>通过辅助函数：{{count}}</h1>
    <button @click="add">+</button>
    <button @click="dec">-</button>

  </div>
</template>


<script>
  import { mapGetters ,mapActions} from 'vuex'
  export default {
    name: 'Cart',
    data () {
      return {
        msg: '显示购物车'
      }
    },
    computed:{
   ...mapGetters(['count']),
      num(){
        return this.$store.state.count
      }
    },
    methods:{
      // add(){
      // this.$store.dispatch('add')
      // },
      // dec(){
      //   this.$store.dispatch('dec')
      // }
      ...mapActions(['add','dec']),


    }
  }
</script>

<style scoped>

</style>
