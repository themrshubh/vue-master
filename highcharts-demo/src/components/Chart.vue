<template>
  <div class="text-center">
    <highcharts class="hc" :options="chartOptionsComputed"></highcharts>
    <b-button v-if="zoom" variant="light" @click="renderYear">Back</b-button>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import { eventBus } from '../main'

exportingInit(Highcharts)

export default {
  data(){
    return {
      zoom : false,
      august: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        series: [
          {
            data:  [136, 180, 137, 123, 43, 129, 174, 178, 177, 175, 45, 141, 111, 83, 179, 157, 129, 81, 174, 122, 129, 117, 142, 113, 198, 136, 175, 141, 101, 148, 90],
            type:'column',
            name:'Monthly Usage'
          }
        ] 
      },
      year: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "column",
            name: 'Alerts 1'
          },
          {
            data: [40.5, 61.5, 76.4, 129.2, 155.0, 17.0, 135.6, 180, 212.4, 154.1, 195.6, 54.4],
            type: "column",
            name: 'Alerts 2'
          },
          {
            data: [0, 10, 25, 45, 70, 100, 135, 175, 220],
            type: "line",
            name: 'Units'
          }
        ]
      },
      chartCategories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      chartSeries:[
          {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "column",
            name: 'Alerts 1'
          },
          {
            data: [40.5, 61.5, 76.4, 129.2, 155.0, 17.0, 135.6, 180, 212.4, 154.1, 195.6, 54.4],
            type: "column",
            name: 'Alerts 2'
          },
          {
            data: [0, 10, 25, 45, 70, 100, 135, 175, 220],
            type: "line",
            name: 'Units'
          }
        ]
    }
  },
  computed: {
    chartOptionsComputed(){
      let chartOptions = {
        title: {
          text: "Year Summary"
        },
        xAxis: {
          categories: this.chartCategories
        },
        plotOptions: {
          series: {
            events: {
              click: (e) => {
                this.clicked(e)
              }
            }
          }
        },
        series: this.chartSeries
      }
      return chartOptions
    }
  },
  methods: {
    clicked(event){
      eventBus.$emit('barclick', event.point);
      this.zoom = true
      this.chartCategories = this.august.categories
      this.chartSeries = this.august.series

    },
    renderYear(){
      eventBus.$emit('backToYear')
      this.chartCategories = this.year.categories
      this.chartSeries = this.year.series
      this.zoom = false
    }
  }
}
</script>

<style scoped>
</style>