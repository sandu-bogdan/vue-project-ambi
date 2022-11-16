<template>
<div class="app">
    {{ message }}
    {{ data }}
  <line-chart :chart-data="data"></line-chart>
</div>
</template>

<script>
Vue.component('TestChart', {
  props: ['chartData'],
  mounted () {
    this.render()
  },
  watch: {
    'chartData' (to, from) {
      this.render()
    }
  },
  methods: {
    render () {
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: this.chartData //[40, 39, 10, 40, 39, 80, 40]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  }
})

var vm = new Vue({
  el: '.app',
  data: {
    message: 'Hello World',
    data: [40, 39, 10, 40, 39, 80, 40,50,1000]
  },
  created() {
    console.clear()
    setTimeout(() => {
      console.log('timeout')
      this.data = [40, 39, 80, 40, 39, 80, 40]
    }, 3000)
  }
})
</script>