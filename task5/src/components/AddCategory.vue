<template>
    <div>
        <input type="text" v-model="category" placeholder="Category">
        <button @click="addCategory()" class="btn">Add category</button>
    </div>
</template>

<script>

export default {
    name: 'AddCategory',
    data() {
        return {
            category: ''
        }
    },
    methods: {
        addCategory() {
            this.$store.commit('addCategoryToList', this.category);
        }
    },
}
</script>

<style lang="scss" scoped>
    input {
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 17px;
        border: 1px solid lighten(black, 70%);
        border-radius: 5px;
        outline: none;
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