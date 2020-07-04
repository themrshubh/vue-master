<template>
  <div id="app">
    <b-container class="mt-3">
      <b-row>
        <b-col class="text-center">
          <h3 class="text-muted">Demo ChartJS</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-card style="width: 100%">
          <chart></chart>
        </b-card>
      </b-row>
      <b-row>
        <b-card style="width: 100%" v-if="barSelected">
          <h4 class="text-muted text-center">You selected {{month}}</h4>
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
  data() {
    return {
      barSelected: false,
      month: 0
    }
  },
  created() {
    eventBus.$on('barClick', (month) => {
      this.month = month
      this.barSelected = true
    })
  }
}
</script>

<style>
</style>
