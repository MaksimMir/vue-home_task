<template>
  
    <v-app>
      <v-app-bar app color="teal" dark flat>
        <v-container>
          <v-btn plain :ripple="false" to="/home">Home</v-btn> 
          <v-btn plain :ripple="false" to="/about">About</v-btn>
        </v-container>     
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <router-view/>
          <v-dialog max-width="470px" v-model="show">
            <modal-window :showSettings="showSettings"></modal-window>
          </v-dialog>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>

export default {
  components: { 
    ModalWindow: () => import('./components/ModalWindow.vue')
  },
  name: 'App',
  data() {
    return {
      page: '',
      show: false,
      showSettings: {}
    }
  },
  methods: {
    setPage() {
      this.page = location.pathname.slice(1);
    },
    onShow(settings) {
      this.show = settings.name;
      this.showSettings = settings;
    },
    onHide() {
      this.show = '';
      this.showSettings = {};
    }
  },
  mounted() {
    this.$modal.EventBus.$on('shown', this.onShow);
    this.$modal.EventBus.$on('hide', this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('shown', this.onShow);
    this.$modal.EventBus.$off('hide', this.onHide);
  },
}
</script>

