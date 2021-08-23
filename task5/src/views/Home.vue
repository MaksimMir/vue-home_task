<template>
  <v-container>
    <v-row>
      <v-col cols="8">
          <header>
            <h1 class="text-h3">My personal costs</h1>
            <v-btn color="teal" dark class="mt-5 mr-5" @click="showWindow()">
              Add New Cost
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn color="teal" dark class="mt-5" @click="showWindowCategory()">
              Add New Category
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </header>


          <payments-display :list="currentPages"></payments-display>
          <v-pagination 
            v-model="page" 
            :length="getPaymentList.length / number"
            color="teal"
            class="mt-10"
          >
          </v-pagination>

      </v-col>
      <v-col cols="4">
        <chart></chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Chart from '../components/Chart.vue';
import PaymentsDisplay from '../components/PaymentDisplay.vue'




export default {
  components: { PaymentsDisplay, Chart},
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
}
</script>

