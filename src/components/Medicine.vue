<template>
  <div id="medicine">
    <div v-if="accurateFlag == 1">
      <divider>以下是根据<span class="symptoms">{{symptoms}}</span>精确搜索到的药方</divider>
      <div v-for="m in medicineSet">
        <card>
          <div slot="header">
            <p style="font-weight: bold;">症状：{{m.symptom}}</p>
          </div>
          <div slot="content" class="card-padding">
            <p class="prescription">{{m.prescription}}</p>
          </div>
        </card>
      </div>
    </div>
    <div v-else>
      <divider>以下是根据<span class="symptoms">{{symptoms}}</span>模糊搜索到的药方</divider>
      <div v-for="m in medicineSet">
        <card>
          <div slot="header">
            <p style="font-weight: bold;">症状：{{m.symptom}}</p>
          </div>
          <div slot="content" class="card-padding">
            <p class="prescription">{{m.prescription}}</p>
          </div>
        </card>
      </div>
    </div>

  </div>

</template>

<script>
  import { Divider, Card } from 'vux'
  export default {
    name: 'medicine',
    components: {
      Divider,
      Card
    },
    data () {
      return {
        symptoms: '',
        medicineSet: [],
        accurateFlag: 0
      }
    },
    mounted () {
      console.log(this.$route.query.symptoms)
      this.symptoms = this.$route.query.symptoms
      this.getMedicine()
    },
    methods: {
      getMedicine () {
        this.$http.get('https://igeektop.com/api/v1.0/medicine/diagnose?symptoms=' + this.symptoms)
          .then((response) => {
            console.log(response.body.response.data)
            this.medicineSet = response.body.response.data.medicine_set
            this.accurateFlag = response.body.response.data.accurate_flag
          })
          .catch((response) => {
            console.log(response)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .symptoms{
    color:red;
  }
p{
  text-align: left
}
.prescription{
  font-style: italic;font-size:16px
}
</style>
