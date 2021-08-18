<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
      <button-modal @addNewPaiment="addData"></button-modal>
    </header>
    <div class="content">
      <payments-display :list="currentPages"></payments-display>
      <pagination @changePage="onChange" :length="getPaymentList.length" :current="page" :number="number">
      </pagination>
    </div>
    <p class="sum">{{ getSum }}</p>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import ButtonModal from './components/ButtonModal.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    ButtonModal,
    PaymentsDisplay,
    Pagination
  },
  data() {
    return {
      page: 1,
      number: 5
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentsList'
    ]),
    ...mapActions([
      'fetchData'
    ]),
    addData(newPayment) {
      this.addDataToPaymentsList(newPayment);
    },
    onChange(p) {
      this.page = p;
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentList'
    ]),
    getSum() {
      return this.$store.getters.getFullPay;
    },
    currentPages() {
      const { page, number } = this;
      return this.getPaymentList.slice(number * (page - 1), number * (page - 1) + number);
    }
  },
  created() {
    // this.$store.commit('setPaymentListData', this.fetchData)
    // this.setPaymentListData(this.fetchData());
    // this.$store.dispatch('fetchData');
    this.fetchData();
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
