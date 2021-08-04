<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <Button></Button>
    </header>
    <div class="content">
      <payments-display :list="paymentList"></payments-display>
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    Button,
    PaymentsDisplay
  },
  data() {
    return {
      paymentList: []
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    }
  },
  created() {
    this.paymentList = this.fetchData();
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: left;
  font-size: 50px;
  font-weight: 300;
}
</style>
