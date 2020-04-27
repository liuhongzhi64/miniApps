<template>
  <div class="indexMap">
    <!-- 首页的地图显示 -->
    <div class="map">
      <div class="seek">搜索</div>
      <div class="maps">
        <div id="allmap" ref="allmap"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    map() {
      let map = new window.BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(
        new window.BMap.MapTypeControl({
          // 添加地图类型控件
          mapTypes: [window.BMAP_NORMAL_MAP, window.BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    }
  },
  mounted() {
    this.map();
  }
};
</script>

<style lang="less" scoped>
.indexMap {
  width: 100%;
  height: 100%;

  .map {
    width: 90%;
    height: 90%;
    background-color: #fff;
    margin: 0 auto;
    padding-top:2%;
    .maps{
        width: 100%;
        height: 100%;
    }
    #allmap {
      margin: 0 auto;
      width: 95%;
      height: 95%;
      overflow: hidden;
    }
  }
}
</style>