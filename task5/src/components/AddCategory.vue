<template>
    <v-Form>
        <v-text-field v-model="category" labelr="Category" required></v-text-field>
        <v-btn color="teal" dark @click="addCategory()">Add category</v-btn>
    </v-Form>
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
