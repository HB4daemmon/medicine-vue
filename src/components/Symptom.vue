<template>
  <div id="symptom">
    <group title="症状">
      <div v-for="s in symptoms">
        <x-switch :title="s._id" @on-change="change($event,s._id)"></x-switch>
      </div>
    </group>

    <div>
      <x-button plain type="primary" @click.native="go($event)" data-url="/#medicine" :data-symptoms="symptom">诊断</x-button>
    </div>
  </div>

</template>

<script>
  import { XSwitch, Group, XButton } from 'vux'
  import { go } from '../global/utils'
  export default {
    name: 'symptom',
    components: {
      XSwitch,
      Group,
      XButton
    },
    data () {
      return {
        categoryName: '',
        symptoms: [],
        selectedSymptoms: []
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
        const url = event.target.dataset.url + '?symptoms=' + event.target.dataset.symptoms
        go(url)
      },
      change (e, f) {
        if (e) {
          this.selectedSymptoms.push(f)
        } else {
          this.selectedSymptoms = this.selectedSymptoms.filter(t => t !== f)
        }
      }
    },
    computed: {
      symptom: function () {
        return JSON.stringify(this.selectedSymptoms)
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
