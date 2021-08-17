<template>
    <div class="window">
        <p class="header">
            {{ showSettings.header }}
        </p>
        <div class="content">
            <component :is="showSettings.name"></component>
        </div>
        <div class="footer">
            <button @click="onClose()" class="btn">Close</button>
        </div>
    </div>   
</template>

<script>
import { mapMutations } from 'vuex';
import AddCategory from './AddCategory.vue';
import Auth from './Auth.vue';
import ModalForm from './Modal.vue'

export default {
  name: 'ModalWindow',
  components: { ModalForm, Auth, AddCategory },
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

<style lang="scss" scoped>
    .window {
        position: absolute;
        top: 200px;
        right: 50px;
        padding: 30px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(255, 252, 247);
    }

    .btn {
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
