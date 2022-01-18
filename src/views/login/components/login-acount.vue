<template>
  <div class="login-acount">
    <el-form :rules="acoutRules" :model="acount" ref="acountFormRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="acount.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="acount.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { acoutRules } from '../config/acount-config'
import type { ElForm } from 'element-plus'
import localCache from '../../../utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const acountFormRef = ref<InstanceType<typeof ElForm>>()

    const acount = reactive({
      name: localCache.getCache('NAME') ?? '',
      password: localCache.getCache('PASSWORD') ?? '',
    })

    /**
     * 登录逻辑
     */
    const loginAction = (isKeepPassword?: boolean) => {
      acountFormRef.value?.validate((vali) => {
        if (vali) {
          if (isKeepPassword) {
            // 保存密码
            localCache.setCache('NAME', acount.name)
            localCache.setCache('PASSWORD', acount.password)
          } else {
            localCache.deleteCache('NAME')
            localCache.deleteCache('PASSWORD')
          }

          // 登录
          store.dispatch('login/acountLoginAction', { ...acount })
        }
      })
    }

    return { acount, acoutRules, acountFormRef, loginAction }
  },
})
</script>

<style scoped lang="less">
.login-acount {
  .el-form-item {
    margin: 30px 0;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
}
</style>
