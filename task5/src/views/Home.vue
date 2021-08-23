<template>
  <div class="home">
    <header>
      <h1>My personal costs</h1>
      <input class="btn" @click="showWindow()" type="button" value="Add New Cost   +">
      <input class="btn" @click="showWindowCategory()" type="button" value="Add New Category   +">
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


export default {
  components: { PaymentsDisplay, Pagination },
  name: 'Home',
  data() {
    return {
      page: 1,
      number: 5,
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
    onChange(p) {
      this.page = p;
    },
    showWindow() {
      this.$modal.show('modalForm', {header: 'Add Payment Form'});
    },
    showWindowCategory() {
      this.$modal.show('addCategory', {header: 'Add New Category'});
    },
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
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
    .btn {
      margin-right: 10px;
      background-color: #20B799;
      font-size: 17px;
      font-weight: 700;
      text-transform: uppercase;
      border: 1px solid #20B799;
      border-radius: 3px;
      outline: none;
      padding: 10px 30px;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: darken(#20B799, 10%);
      }
    }
</style>