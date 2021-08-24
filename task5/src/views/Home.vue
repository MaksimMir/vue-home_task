<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <p class="text-h3 mb-5">My personal costs</p>

            <v-btn class="mr-5" color="teal" dark @click="showWindow()">
              Add New Cost
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn color="teal" dark @click="showWindowCategory()">
              Add New Category 
              <v-icon>mdi-plus</v-icon>
            </v-btn>      

        <payments-display :list="currentPages"></payments-display>

        <v-pagination
        v-model="page"
        :length="getPaymentList.length / number"
        color="teal"
        ></v-pagination>
      </v-col>
      <v-col cols="4">
        <p class="text-h3">Chart</p>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import PaymentsDisplay from '../components/PaymentDisplay.vue'
// import Pagination from '../components/Pagination.vue'


export default {
  components: { PaymentsDisplay },
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


