<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/" target="_blank">
        <Icon type="github" />
        <span>GitHub</span>
      </a>
    </li>
    <li>
      <a href="https://mail.qq.com/cgi-bin/frame_html?sid=1optMjpJ7L7KEHkb&r=131755f805491291c12907ea75864273" target="_blank">
        <Icon type="mail" />
        <span>邮箱地址</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=738657347&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45" target="_blank">
        <Icon type="qq" />
        <span>QQ账号</span>
      </a>
      <div class="pop">
        <img
            :src="url"
            alt=""
        />
      </div>
    </li>
    <li>
      <a href="" target="_blank">
        <Icon type="weixin" />
        <span>微信账号</span>
      </a>
      <div class="pop">
        <img
            :src="url"
            alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";  
@import "~@/styles/mixin.less";
.contact-container {
    padding: 0 20px;
    text-align: left;
    color: #FFF;

    @itemHeight: 30px;

    li {
        position: relative;
        padding: 15px 0;

        .icon-container {
            font-size: 1.8rem;
            vertical-align: middle;
            margin-right: 10px;
        }

        &:hover {
            .pop {
                transform: scaleY(1);
            }
        }
         //图片样式
        .pop {
            position: absolute;
            left: 0;
            bottom:  @itemHeight + 20px;

            padding: 10px 15px;
            background-color: #FFF;
            border-radius: 4px;

            transform: scaleY(0);
            transition: all .3s;
            transform-origin: center bottom;
            // 下三角
            &::after {
                content: "";
                position: absolute;
                left: 50%;
                bottom: -16px;
                transform: translateX(-50%);

                height: 0;
                width: 0;

                border: 8px solid transparent;
                border-top-color: #FFF;
            }
            // 图片大小
            img {
                width: 150px;
                height: 150px;
                object-fit: cover;
            }
        }
    }
}     
</style>