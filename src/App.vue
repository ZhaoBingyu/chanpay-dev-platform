<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Layout from '@/components/Layout.vue'

  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style lang="less">
  #app {
    min-width: 920px;
  }
</style>
