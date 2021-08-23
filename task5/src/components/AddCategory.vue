<template>
    <v-col>
        <v-text-field v-model="category" label="Category"></v-text-field>
        <v-btn color="teal" dark @click="addCategory()">Add category</v-btn>
    </v-col>
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
