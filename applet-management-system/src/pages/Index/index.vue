<template>
  <div class="index">
    <el-container style="height: 100%;">
      <el-header>小程序管理系统</el-header>
      <el-container>
        <!-- 左边导航条 -->
        <el-aside width="15%">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>首页</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">标题</el-menu-item>
                  <el-menu-item index="1-2">图片</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="/index/">
                <i class="el-icon-document"></i>
                <span slot="title">账号</span>
              </el-menu-item>
              <el-menu-item index="/index/set">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    // 展开指定的 sub-menu index: 需要打开的 sub-menu 的 index
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 收起指定的 sub-menu	index: 需要收起的 sub-menu 的 index
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>