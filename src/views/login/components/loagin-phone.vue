<template>
  <div class="login-acount">
    <el-form :model="phone" :rule="acoutRules">
      <el-form-item label="手机号">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>

      <el-form-item label="验证码">
        <div class="get-code">
          <el-input v-model="phone.verifyCode"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { acoutRules } from '../config/acount-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      verifyCode: '',
    })

    return { phone, acoutRules }
  },
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  justify-content: center;
  align-items: center;

  .el-button {
    margin-left: 20px;
  }
}
</style>
