<template>
  <div id="mheader">
    <x-header :right-options="right" @on-click-more="showMenus = true" :left-options="left">{{ title }}</x-header>
    <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
  </div>
</template>

<script>
  import { XHeader, Actionsheet } from 'vux'
  export default {
    name: 'mheader',
    components: {
      XHeader,
      Actionsheet
    },
    props: {
      'title': {
        type: String
      },
      'showMore': {
        type: Boolean
      },
      'showBack': {
        type: Boolean
      }
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    computed: {
      right: function () {
        return { showMore: this.showMore }
      },
      left: function () {
        return { showBack: this.showBack }
      }
    }
  }
</script>

<style>
#mheader{
  background-color: #42b983;
}
.vux-header{
  background-color: #42b983 !important;
}
</style>
