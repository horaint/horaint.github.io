<template>
  <div id="app">
    <!--1.0标题栏  -->
    <mt-header fixed title="因缺思婷">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--2.0路由区  -->
    <router-view/>
    <!--3.0导航栏  -->
    <mt-tabbar fixed>
      <mt-tab-item id="主页">
        <span class="mui-icon mui-icon-home"></span><br>主页
      </mt-tab-item>
      <mt-tab-item id="会话">
        <span class="mui-icon mui-icon-chatbubble"></span><br>会话
      </mt-tab-item>
      <mt-tab-item id="发现">
        <span class="mui-icon mui-icon-paperplane"></span><br>发现
      </mt-tab-item>
      <mt-tab-item id="设置">
        <span class="mui-icon mui-icon-gear"></span><br>设置
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
