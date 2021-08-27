<template>
    <v-card>
        <v-card-title class="text-h5">
            {{ showSettings.header }}
        </v-card-title>
        <v-card-text>
            <component :is="showSettings.name"></component>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn color="teal" dark @click="onClose()">Close</v-btn>
        </v-card-actions>
    </v-card>  

</template>

<script>
import { mapMutations } from 'vuex';
import AddCategory from './AddCategory.vue';
import Auth from './Auth.vue';
import ModalForm from './Modal.vue'

export default {
  name: 'ModalWindow',
  components: { ModalForm, Auth, AddCategory },
  data() {
    return {
      show: false
    }
  },
  props: {
    showSettings: Object
  },
  methods: {
    ...mapMutations([
      'addDataToPaymentsList'
    ]),
    onClose() {
        this.$modal.hide();
    },
    addData(newPayment) {
      this.addDataToPaymentsList(newPayment);
    },
  },
}

</script>

