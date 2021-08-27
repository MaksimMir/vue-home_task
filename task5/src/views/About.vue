<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="text-h3">This is an about page</p>
        <v-btn color="teal" dark @click="showModal()">Show</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
