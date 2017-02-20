<template>
  <div class="index">
    <div v-for="c in categories" >
      <div class="scroll-view-item" v-on:click="go($event)" data-url="/#symptom" :data-category="c.category_name">
        {{c.category_name}}
      </div>

    </div>
  </div>
</template>

<script>
import { go } from '../global/utils'
export default {
  name: 'index',
  data () {
    return {
      'categories': []
    }
  },
  mounted () {
    this.getCategoires()
  },
  methods: {
    getCategoires () {
      this.$http.get('https://igeektop.com/api/v1.0/medicine/category')
        .then((response) => {
          console.log(response.body.response.data)
          this.categories = response.body.response.data
//          this.$set('categories', response.body.response.data)
        })
        .catch((response) => {
          console.log(response)
        })
    },
    go (event) {
      const url = event.target.dataset.url + '?category_name=' + event.target.dataset.category
      go(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.scroll-view-item{
  height:100px;
  width:48%;
  display:block;
  float:left;
  vertical-align:middle;
  line-height: 100px;
  margin:3px;
  background-color: #42b983;
  text-align:center;
  color:white;
}
</style>
