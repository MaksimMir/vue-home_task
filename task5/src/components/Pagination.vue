<template>
  <div>
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


</style>