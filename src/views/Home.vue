<template>
  <div class="home" v-fixheight>
    <div class="banner">
      <img src="../assets/images/u0.jpg" alt="">
    </div>
    <div class="notice">
      <div class="notice-left">
        <a-icon type="info-circle"/>
        <span class="info-date">2018-12-20</span>
        <span class="info-title">
         <router-link to="/">好收银产品上线</router-link>
        </span>
      </div>
      <div class="notice-right">
        <router-link to="/">更多通知</router-link>
      </div>
    </div>

    <div class="item-box item-box-1">
      <div class="item-box-title">
        <span>指南</span>
      </div>
      <div class="tiem-box-content">
        <div class="item-box-content-model">
          <img src="../assets/images/u34.png" alt="">
          <span class="info-text">开发资源</span>
          <div class="info-desc">
            <router-link to="/">开发资源描述信息</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="item-box item-box-2">
      <div class="item-box-title">
        <span>产品接入</span>
      </div>
      <div class="tiem-box-content">
        <div class="item-box-content-model">
          <img src="../assets/images/u34.png" alt="">
          <div class="info-desc">
            <router-link to="/">描述信息</router-link>
          </div>
        </div>
        <div class="item-box-content-model">
          <img src="../assets/images/u38.jpg" alt="">
          <div class="info-desc">
            <router-link to="/">描述信息</router-link>
          </div>
        </div>
        <div class="item-box-content-model">
          <img src="../assets/images/u42.png" alt="">
          <div class="info-desc">
            <router-link to="/">描述信息</router-link>
          </div>
        </div>
        <div class="item-box-content-model">
          <img src="../assets/images/u46.png" alt="">
          <div class="info-desc">
            <router-link to="/">描述信息</router-link>
          </div>
        </div>
        <div class="item-box-content-model">
          <img src="../assets/images/u34.png" alt="">
          <div class="info-desc">好收银描述信息
            <router-link to="/">好收银描述信息</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="item-box item-box-3">
      <div class="item-box-title">
        <span>其他</span>
      </div>
      <div class="tiem-box-content">
        <div class="item-box-content-model">
          <img src="../assets/images/u34.png" alt="">
          <div class="info-desc">
            <router-link to="/">FAQ描述</router-link>
          </div>
        </div>
        <div class="item-box-content-model">
          <img src="../assets/images/u34.png" alt="">
          <div class="info-desc">
            <router-link to="/">资源描述信息</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {},
    mounted () {
      $('.item-box-content-model').hover(function () {
        $(this).find('.info-desc').stop().animate({ 'bottom': '0px' }, 300)
      }, function () {
        $(this).find('.info-desc').stop().animate({ 'bottom': '-70px' }, 300)
      })
    }
  }
</script>

<style scoped lang="less">
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
    .notice {
      height: 48px;
      line-height: 48px;
      margin-top: 30px;
      padding-left: 10px;
      padding-right: 60px;
      background: rgb(255, 255, 255);
      border: 1px solid rgb(0, 0, 0);
      ::after {
        content: '';
        clear: both;
      }
      .notice-left {
        box-sizing: border-box;
        float: left;
        width: 90%;
        i {
          font-size: 28px;
          line-height: 28px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .info-date {
          margin-right: 20px;
          color: rgb(207, 204, 207);
        }
        .info-title {
          a {
            color: rgba(0, 0, 0, 0.65);
            &:hover {
              color: rgb(242, 111, 32);
            }
          }
        }
      }
      .notice-right {
        box-sizing: border-box;
        float: right;
        width: 10%;
        a {
          color: rgba(0, 0, 0, 0.65);
          &:hover {
            color: rgb(242, 111, 32);
          }
        }
      }
    }
    .item-box {
      margin-top: 30px;
      .item-box-title {
        height: 66px;
        padding: 20px;
        background: rgb(255, 255, 255);
        span {
          padding-left: 8px;
          font-size: 20px;
          font-weight: bolder;
          border-left: 6px solid rgb(242, 111, 32);
        }
      }
      .tiem-box-content {
        margin-top: 30px;
        margin-bottom: 30px;
        .item-box-content-model {
          /*position: relative;*/
          box-sizing: border-box;
          display: inline-block;
          position: relative;
          overflow: hidden;
          height: 320px;
          width: 18%;
          margin-left: 1%;
          margin-right: 1%;
          background: rgb(255, 255, 255);
          text-align: center;
          border: 1px solid rgb(204, 204, 204);
          img {
            margin: 20px;
          }
          .info-text {
            position: absolute;
            top: 29%;
            left: 50%;
            font-size: 30px;
            transform: translateX(-50%);
            width: 100%;
            color: rgb(102, 102, 102);
          }
          .info-desc {
            cursor: pointer;
            position: relative;
            bottom: -70px;
            height: 70px;
            line-height: 70px;
            margin-top: 10px;
            background: rgb(242, 111, 32);
            border: 1px solid rgb(204, 204, 204);
            a {
              color: rgb(102, 102, 102);
              text-decoration: none;
            }
          }

        }
      }

    }
  }
</style>
