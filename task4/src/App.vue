<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <button-modal @addNewPaiment="addData"></button-modal>
    </header>
    <div class="content">
      <payments-display :list="paymentList"></payments-display>
    </div>
    <p class="sum">{{ getSum() }}</p>
  </div>
</template>

<script>
import ButtonModal from './components/ButtonModal.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    ButtonModal,
    PaymentsDisplay
  },
  data() {
    return {
      paymentList: []
    }
  },
  methods: {
    addData(newPayment) {
      this.paymentList.push(newPayment);
    },
    getSum() {
      return this.paymentList.reduce((acc, id) => {
        return acc += +id.value;
      }, 0)
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100vh;
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

header {
  position: relative;
}

.sum {
  font-size: 20px;
  font-weight: 500;
  color: burlywood;
  text-align: center;
}
</style>
