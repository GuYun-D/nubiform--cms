<template>
  <div>
    <strong>{{ $store.state.name }}</strong>

    <router-link to="/login">登录</router-link>
    <router-link to="/main">狐妖</router-link>

    <router-view></router-view>

    <el-button type="primary" size="default">哈哈</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
