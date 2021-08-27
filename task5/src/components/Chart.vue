<template>
<v-container>
    <v-col>
        <canvas id="chart"></canvas>
    </v-col>
</v-container>

</template>

<script>
import { mapGetters } from 'vuex'
import Chart from 'chart.js'


export default {
  name: 'ChartCosts',
  data() {
    return {
      options: [],
      sum: []
    }
  },
  mounted() {
    this.createArr();
    const ctx = document.getElementById('chart');
    
    const chartData = {
    type: "pie",
    data: {
      labels: this.options,
      datasets: [
        {
          label: "Dataset",
          data: this.sum,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',          
          ]
  
        },
      ]
    },
    options: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 40,
          fontColor: 'black'
        }
      },
      responsive: true,
    }
  }

  new Chart(ctx, chartData);
  },
  computed: {
    ...mapGetters([
          'getFullPay'
    ])
  },
  methods: {
    createArr() {
      for (const key in this.getFullPay) {
        if (Object.hasOwnProperty.call(this.getFullPay, key)) {
          this.options.push(key);
          this.sum.push(this.getFullPay[key])
        }
      }
    }
  },
}
</script>