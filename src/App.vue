<template>
  <div id="app">
    <mheader :title="title" :showMore="showMore" :showBack="showBack" ></mheader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import { XHeader, Actionsheet } from 'vux'
import Mheader from 'components/Mheader.vue'
export default {
  name: 'app',
  components: {
    Mheader
  },
  data () {
    return {
      title: '问药',
      showBack: true,
      showMore: true,
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin:0px;
}

.header{
  background-color: #42b983 !important;
}

</style>
