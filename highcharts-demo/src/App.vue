<template>
  <div id="app">
    <b-container class="mt-4">
      <b-row>
        <b-col class="text-center">
          <h2>Demo Highcharts</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-card style="width: 100%">
          <chart></chart>
        </b-card>
      </b-row>
      <b-row class="mt-2">
        <b-card style="width: 100%" v-if="barselect">
          <div class="text-center">You selected {{ month }}</div>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'
import { eventBus } from './main'

export default {
  name: 'App',
  components: {
    Chart
  },
  data () {
    return {
      barselect: false,
      month: ''
    }
  },
  created(){
    eventBus.$on('barclick', (point) => {
      console.log(point)
      this.barselect = true,
      this.month = point.category
    }),
    eventBus.$on('backToYear', () => {
      this.barselect = false
    })
  }
}
</script>

<style>
</style>
