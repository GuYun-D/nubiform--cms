<template>
  <div class="page-search">
    <gy-form :="searchFormConfig" v-model="formData">
      <template #header>
        <slot name="title">
          <h1 class="slot-header">用户搜索</h1>
        </slot>
      </template>

      <template #footer>
        <div class="slot-footer">
          <el-button
            size="mini"
            type="info"
            icon="el-icon-magic-stick"
            @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // //  必须使用ref，reactive做vmodel存在一定问题
    // const formData = ref({
    //   name: '',
    //   password: '',
    //   sport: '',
    //   createAt: '',
    // })

    /**
     * 表单双向绑定的字段应根据searchFormConfig来进行收集
     */
    const formItem = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItem) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    /**
     * 表单对象的重置，直接通过formData对象对其内部的属性进行赋值修改
     */
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }

      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return { formData, handleResetClick, handleQueryClick }
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
