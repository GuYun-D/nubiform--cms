<template>
  <div class="login-panel">
    <h1 class="title">Nubiform 后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="acount">
        <template #label>
          <span> 账号登陆 </span>
        </template>
        <login-acount ref="acountRef"></login-acount>
      </el-tab-pane>

      <el-tab-pane disabled class="disabled-panel" name="phone">
        <template #label>
          <span> 手机登录 </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="acount-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAcount from './login-acount.vue'
import LoginPhone from './loagin-phone.vue'

export default defineComponent({
  components: {
    LoginAcount,
    LoginPhone,
  },
  setup() {
    const isKeepPassword = ref(true)
    const acountRef = ref<InstanceType<typeof LoginAcount>>()
    const currentTab = ref<string>('acount')

    const handleLoginClick = () => {
      // 判断是帐号登录还是手机登录
      if (currentTab.value === 'acount') {
        acountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // 手机登录
        return
      }
    }

    const handleEnterLogin = (e: KeyboardEvent) => {
      const currentURL = location.href
      if (e.key === 'Enter' && currentURL.includes('login')) {
        handleLoginClick()
        console.log(12345)
      }
    }
    document.addEventListener('keydown', handleEnterLogin)

    return { isKeepPassword, acountRef, currentTab, handleLoginClick }
  },
})
</script>

<style scoped lang="less">
@mainColor: #1a293b;

.login-panel {
  width: 500px;
  text-align: center;
  margin-top: -30px;
  .title {
    color: #fff;
  }
  .el-tabs {
    background-color: #1f3f6493;
    border-color: #1a293b;
    border-radius: 4px;
    overflow: hidden;
  }
  .acount-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
