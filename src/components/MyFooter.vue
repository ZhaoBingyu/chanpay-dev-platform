<template>
  <a-layout-footer class="footer">
    <a-row>
      <a-col :sm="24" :md="12">
        <div class="footer-left">
          Copyright © 2018 用友数法金融服务（天津）有限公司版权所有

        </div>
      </a-col>

      <a-col :sm="24" :md="12">
        <div class="footer-right">
          <a-row>
            <a-col :span="4" :offset="10" class="item wechat-scan-item" @mouseenter="show2Code" @mouseleave="hide2Code">
              <transition name="fade">
                <div class="wechat-scan">
                  <img src="../assets/images/u22.png" alt="">
                  <div>微信扫描关注</div>
                </div>
              </transition>

              <a-icon type="wechat"/>
              <div>公众号</div>
            </a-col>
            <a-col :span="4" class="item">
              <a-icon type="phone"/>
              <div> 400-023-2636</div>
            </a-col>
            <a-col :span="4" class="item">
              <a-icon type="mail"/>
              <div>发送邮件</div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>

  </a-layout-footer>
</template>

<script>
  export default {
    name: 'MyFooter',
    data () {
      return {
        CodeFlag: false
      }
    },
    methods: {
      show2Code () {
        $(".wechat-scan").fadeIn()
      },
      hide2Code () {
        $('.wechat-scan').fadeOut()
      }
    }
  }
</script>

<style scoped lang="less">
  .footer {
    height: 150px;
    line-height: 102px;
    background: rgb(51, 51, 51);
    color: rgb(153, 153, 153);
    ::after {
      content: '';
      clear: both;
    }
    .footer-left {
      text-align: center;
    }
    .footer-right {
      text-align: right;
      .item {
        text-align: center;
        &:hover {
          color: rgb(204, 204, 204);
        }
        &.wechat-scan-item {
          position: relative;
          .wechat-scan {
            display: none;
            position: absolute;
            width: 110px;
            height: 110px;
            left: -100px;
            top: 30px;
            background: rgb(255, 255, 255);
            img {
              position: absolute;
              width: 90px;
              height: 90px;
              left: 10px;
            }
            div {
              position: absolute;
              left: 20px;
              bottom: 5px;
              font-size: 12px;
            }
          }
        }

        i {
          line-height: initial;
          font-size: 30px;
        }
        > div {
          line-height: initial;
          margin-top: -30px;
        }

      }

    }
  }
</style>
