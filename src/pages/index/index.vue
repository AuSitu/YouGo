<template>
  <div class="index">
    <!-- 顶部的 -->
    <div class="nav">
      <i class="iconfont icon-sousuo"></i>
      <input
        type="text"
        placeholder="搜索"
      >
    </div>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      class="swiper"
      indicator-active-color="#ffffff"
      indicator-color="#557fbb"
    >

      <swiper-item
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <image
          mode="aspectFill"
          :src="item.image_src"
        ></image>
      </swiper-item>
      </block>
    </swiper>

  </div>
</template>

<script>
// 导入 自己的抽取的hxios
import hxios from "../../utils/index.js";

export default {
  data: function() {
    return {
      // 轮播图数组
      swiperList: []
    };
  },
  //获取数据
  created() {
    hxios.get("api/public/v1/home/swiperdata").then(res => {
      // console.log(res);
      this.swiperList = res.data.message;
    });
  }
};
</script>



<style lang="scss" >
$uRed: #fe2c4b;
.index{
    padding-top:100rpx ;
}
//顶部
.nav {
  padding: 20rpx 16rpx;
  background-color: $uRed;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  input {
    background-color: #fff;
    height: 60rpx;
    text-align: center;
    color: #bbb;
    font-size: 24rpx;
  }
  i.icon-sousuo {
    position: absolute;
    color: #bbb;
    top: 50%;
    left: 50%;
    transform: translate(-220%, -50%);
  }
}
// 轮播图
.swiper{
    image{
        width: 100%;
    }
}
</style>

