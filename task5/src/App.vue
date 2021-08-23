<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/404">404</router-link>
    </div>
    <router-view/>
    <transition name="fade">
      <modal-window v-if="show" :showSettings="showSettings"></modal-window>
    </transition>
  </div>
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

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: left;
  font-size: 50px;
  font-weight: 300;
}

header {
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
