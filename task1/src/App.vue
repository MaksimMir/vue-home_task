<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Calculator></Calculator>
    <test-component></test-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calculator from './components/Calculator.vue';
import TestComponent from './test/TestComponent.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    Calculator,
    TestComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
