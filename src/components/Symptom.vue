<template>
  <div id="symptom">
    <div v-for="s in symptoms">
      {{s._id}}
    </div>
  </div>

</template>

<script>
  import { go } from '../global/utils'
  export default {
    name: 'symptom',
    data () {
      return {
        categoryName: '',
        symptoms: []
      }
    },
    mounted () {
      this.$set('categoryName', this.$route.query.category_name)
      this.getSymptoms()
    },
    methods: {
      getSymptoms () {
        this.$http.get('https://igeektop.com/api/v1.0/medicine/category/symptoms?category_name=')
          .then((response) => {
            console.log(response.body.response.data)
            this.categories = response.body.response.data
          })
          .catch((response) => {
            console.log(response)
          })
      },
      go (url) {
        go(url)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }
</style>
