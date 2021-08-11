<template>
  <div class="home">
    <header>
      <h1>My personal costs</h1>
      <modal @addNewPaiment="addData"></modal>
    </header>

    <div class="content">
      <payments-display :list="currentPages"></payments-display>
      <pagination @changePage="onChange" :length="getPaymentList.length" :current="page" :number="number">
      </pagination>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import PaymentsDisplay from '../components/PaymentDisplay.vue'
import Pagination from '../components/Pagination.vue'
import Modal from '../components/Modal.vue'

export default {
  components: { PaymentsDisplay, Modal, Pagination },
  name: 'Home',
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
    currentPages() {
      const { page, number } = this;
      return this.getPaymentList.slice(number * (page - 1), number * (page - 1) + number);
    }
  },
  async created() {
    await this.fetchData();
  },
}
</script>
