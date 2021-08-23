<template> 
  <v-form>
      <v-text-field v-model="date" label="Payment Date" required></v-text-field>
      <v-select :items="options" required></v-select>
      <v-text-field v-model.number="value" label="Payment Amount" required></v-text-field>
      <v-btn color="teal" dark block @click="onSave">Add +</v-btn>
  </v-form>

</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'ButtonModal',
  data() {
    return {
      date: '',
      category: '',
      value: '',
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      let day, month, year;
      
      if (today.getDate() < 10) {
        day = '0' + today.getDate();
      } else {
        day = today.getDate()
      }

      if (today.getMonth() + 1 < 10) {
        month = '0' + (today.getMonth() + 1);
      } else {
        month = (today.getMonth() + 1);
      }

      year = today.getFullYear();

      return `${day}.${month}.${year}`;
    },
    options() {
      return this.$store.getters.getCategories
    }
  },
  methods: {
    ...mapActions([
      'fetchCategoriesList'
    ]),
    onSave() {
      const {category, value} = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value
      };

      if (data.category && data.value) {

        this.$store.commit('addDataToPaymentsList', data);
      }

      
      this.value = '';
      this.date = '';
    },
  },
  async created() {
    await this.fetchCategoriesList();

    if (this.$route?.params.page) {
      this.category = this.$route.params.page;
      this.value = this.$route.query.value;
    }
  },
}
</script>

<style lang="sass">

  .modal
    & input[type=button]
      background-color: #20B799
      font-size: 17px
      font-weight: 700
      text-transform: uppercase
      border: 1px solid #20B799
      border-radius: 3px
      outline: none
      padding: 10px 30px
      color: white
      cursor: pointer
      &:hover
        background-color: darken(#20B799, 10%) 

  .modal-form 
    width: 400px
    & form
      display: flex
      flex-direction: column
      & input, & select 
        padding: 10px 20px
        margin-bottom: 20px
        font-size: 17px
        border: 1px solid lighten(black, 70%)
        border-radius: 5px
        outline: none

</style>