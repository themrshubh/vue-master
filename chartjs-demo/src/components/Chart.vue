<script>
import { Bar } from 'vue-chartjs';
import { eventBus } from '../main.js';

export default {
  mixins: [Bar],
  data() {
    return {
      chartdata: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#1d3557',
            data: [40, 20, 10, 50, 80, 10, 20, 70, 50, 91, 34, 100],
            barPercentage: 0.9,
            order: 3
          },
          {
            label: 'Data One',
            backgroundColor: '#a8dadc',
            data: [50, 40, 30, 70, 50, 80, 50, 60, 30, 21, 34, 140],
            barPercentage: 0.9,
            order: 2
          },
          {
            label: 'Line Dataset',
            data: [10, 12, 15, 20, 30, 40, 55, 70, 95, 110, 120, 140 ],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#e63946',
            type: 'line',
            order: 1
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: this.clicked  
        // scale: {
        //     ticks: {
        //         min : 0
        //     }
        // }
      } 
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  methods: {
    clicked (event, arr) {
      eventBus.$emit('barClick', this.chartdata.labels[arr[0]._index])
    }
  }
}
</script>

<style scoped>

</style>