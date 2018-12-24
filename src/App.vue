<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>



<style lang="stylus">
@import './source/styles/index';
@import './styles/iconfont/iconfont.css'

#app {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
