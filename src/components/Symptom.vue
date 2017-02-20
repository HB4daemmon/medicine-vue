<template>
  <div id="symptom">
    <div v-for="s in symptoms">
      <div class="scroll-view-item">{{s._id}}</div>
      <div class="scroll-view-item"><mt-switch v-model="aaa" class="switch" @change="change($event)" :data-category="s._id"></mt-switch ></div>
    </div>
    <div>
      <mt-button type="default" @click.native="go($event)" style="width: 100%;">诊断</mt-button>
    </div>
    <div>
      {{1}}
    </div>
  </div>

</template>

<script>
//  import { go } from '../global/utils'
  export default {
    name: 'symptom',
    data () {
      return {
        categoryName: '',
        symptoms: [],
        aaa: false
      }
    },
    mounted () {
      console.log(this.$route.query.category_name)
      this.categoryName = this.$route.query.category_name
      this.getSymptoms()
    },
    methods: {
      getSymptoms () {
        this.$http.get('https://igeektop.com/api/v1.0/medicine/category/symptoms?category_name=' + this.categoryName)
          .then((response) => {
            console.log(response.body.response.data)
            this.symptoms = response.body.response.data
          })
          .catch((response) => {
            console.log(response)
          })
      },
      go (event) {
        console.log(event)
        console.log(this.form)
//        go(event)
      },
      change (e) {
        console.log(e)
        console.log(e.preventDefault())
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }

  .scroll-view-item{
    height:50px;
    width:48%;
    display:block;
    float:left;
    vertical-align:middle;
    line-height: 50px;
    margin-top:3px;
    margin-bottom:3px;
    background-color: #eaeaea;
  }

  .switch{
    display: block;
    margin-top: 9px;
    /*background-color: #42b983 !important;*/
    /*border-color: #42b983 !important;*/
  }

  .mint-switch-input:checked + .mint-switch-core {
    border-color: #42b983 !important;
    background-color: #42b983 !important;
  }

</style>
