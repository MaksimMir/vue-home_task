<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn" @click="showModal()">Show</button>
  </div>
</template>

<script>

export default {
  name: 'About',
  methods: {
    showModal() {
      this.$modal.show('auth', {header: 'Auth Form'});
    }
  },
}
</script>

<style lang="scss" scoped>
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
