<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <MyHeader></MyHeader>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <MyFooter></MyFooter>
    </a-layout>

  </div>
</template>

<script>

  // @ is an alias to /src
  import MyHeader from '@/components/MyHeader.vue'
  import MyFooter from '@/components/MyFooter.vue'

  export default {
    name: 'Layout',
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>

<style scoped lang="less">
  #components-layout-demo-basic {
    height: 100%;
    .ant-layout {
    }
  }
</style>
