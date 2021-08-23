<template>
  <div class="pagination">
      <button @click="onClick(current - 1)">&#129044;</button>
      <button @click="onClick(page)" v-for="page in amaunt" :key="page">
          {{ page }}
      </button>
      <button @click="onClick(current + 1)">&#129046;</button>

  </div>
</template>

<script>

export default {
  name: 'Pagination',
  data() {
    return {
        
    }
  }, 
  props: {
      length: Number,
      number: {
          type: Number,
          default: 5
      },
      current: Number
  },
  computed: {
      amaunt() {
          return Math.ceil(this.length / this.number);
      },
  },
  methods: {
      onClick(page) {
          if (page < 1 || page >= this.amount) return;

          this.$emit('changePage', page);
      }
  },
}
</script>

<style lang="scss">
.pagination {
    margin: 20px 0;
    padding: 10px 0;
    & button {
        margin-right: 5px;
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
    }
}

</style>