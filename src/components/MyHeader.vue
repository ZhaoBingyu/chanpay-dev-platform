<template>
  <a-layout-header class="header">
    <img src="../assets/images/u9.png" alt="logo" class="logo">
    <div class="dev-platform">
      <span>
        <router-link to="/">| 开发平台</router-link></span>
    </div>
    <div class="self-platform">
      <span><a href="https://pay.chanpay.com/ucenter/login/p-enterprise.htm">自助平台</a></span>
    </div>
  </a-layout-header>

</template>

<script>
  export default {
    name: 'MyHeader'
  }
</script>

<style scoped lang="less">
  .header {
    background: rgb(51, 51, 51);
    ::after {
      content: '';
      clear: both;
    }
    .logo {
      float: left;
      margin-top: 12px;
    }
    .dev-platform {
      float: left;
      margin-left: 16px;
      cursor: pointer;
      a {
        color: rgb(153, 153, 153);
        text-decoration: none;
      }
    }
    .self-platform {
      float: right;
      line-height: initial;
      padding: 3px 8px;
      margin-top: 18px;
      border: 1px solid rgb(242, 111, 32);
      border-radius: 7px;
      cursor: pointer;
      a {
        color: rgb(153, 153, 153);
      }
      &:hover {
        background: rgb(242, 111, 32);
      }
    }

  }
</style>
