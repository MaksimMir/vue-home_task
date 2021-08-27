<template>
  <v-form>
    <v-text-field v-model="date" label="Payment Date" required></v-text-field>
    <v-select v-model="category" :items="options" label="Category" required></v-select>
    <v-text-field v-model.number="value" label="Payment Amount" required></v-text-field>
    <v-btn color="teal" dark @click="onSave">Add</v-btn>
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
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    ...mapActions([
      'fetchCategoriesList'
    ]),
    onSave() {
      const id = localStorage.length - 1
      const {category, value} = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
        id
      };

      if (data.category && data.value) {
        localStorage.setItem(id, JSON.stringify(data))
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
