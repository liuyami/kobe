<template>
  <div id="app">
    <Loading />
  </div>
</template>

<script>
  import Loading from './components/Loading.vue';


  export default {
    name: 'App',


    components: {
      Loading
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0
  }

  html, body {
    background: #100819;
    overflow: hidden;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
</style>
