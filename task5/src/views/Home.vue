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

        <payments-display :list="getPaymentList"></payments-display>

      </v-col>
      <v-col cols="4">
        <p class="text-h3">Chart</p>
        <chart-costs></chart-costs>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaymentsDisplay from '../components/PaymentDisplay.vue'
import ChartCosts from '../components/Chart.vue'


export default {
  components: { PaymentsDisplay, ChartCosts },
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
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
  },
  created() {
    this.fetchData();
  },
}
</script>


