<template>
  <div class="btn">
    <input @click="show = !show" type="button" value="Add New Cost   +">
    <div class="modal" v-show="show">
      <form>
        <input type="text" v-model="date" placeholder="Payment Date">
        <input type="text" v-model="category" placeholder="Payment Description">
        <input type="text" v-model="value" placeholder="Payment Amount">
        <input @click="onSave" type="button" value="Add  +">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      show: false,
      date: '',
      category: '',
      value: ''
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      let day, month, year;
      
      if (today.getDate() < 10) {
        day = '0' + today.getDate();
      }

      if (today.getMonth() + 1 < 10) {
        month = '0' + (today.getMonth() + 1);
      }

      year = today.getFullYear();

      return `${day}.${month}.${year}`;
    }
  },
  methods: {
    onSave() {
      const {category, value} = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value
      };

      this.$emit('addNewPaiment', data);
      this.value = '';
      this.category = '';
      this.date = '';
    }
  },
}
</script>

<style lang="sass">
  .btn
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

  .modal 
    width: 400px
    position: absolute
    padding: 30px
    border: 1px solid black
    border-radius: 5px
    top: 160px
    right: 40px 
    & form
      display: flex
      flex-direction: column
      & input 
        padding: 10px 20px
        margin-bottom: 20px
        font-size: 17px
        border: 1px solid lighten(black, 70%)
        border-radius: 5px
        outline: none
</style>
