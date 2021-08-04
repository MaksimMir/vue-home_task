<template>
  <div class="btn">
    <input type="button" value="Add New Cost   +">
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      show: true
    }
  }
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
</style>
