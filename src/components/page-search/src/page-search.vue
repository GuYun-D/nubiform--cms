<template>
  <div class="page-search">
    <gy-form :="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="slot-header">用户搜索</h1>
      </template>

      <template #footer>
        <div class="slot-footer">
          <el-button type="info" icon="el-icon-magic-stick">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </gy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GyForm from '../../../base-ui/form'

export default defineComponent({
  components: {
    GyForm,
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  setup() {
    //  必须使用ref，reactive做vmodel存在一定问题
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createAt: '',
    })
    return { formData }
  },
})
</script>

<style scoped>
.slot-footer {
  padding: 20px;
  text-align: right;
}

.slot-header {
  color: rgb(31, 31, 31);
  font-size: 20px;
  letter-spacing: 1em;
}
</style>
