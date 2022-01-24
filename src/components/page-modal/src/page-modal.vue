<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <GyForm :="modalConfig" v-model="formData"></GyForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import GyForm from '../../../base-ui/form'

export default defineComponent({
  components: {
    GyForm,
  },
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },

    defaultInfo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newInfo) => {
        console.log('执行了')

        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newInfo[`${item.field}`]
        }
      }
    )

    return { dialogVisible, formData }
  },
})
</script>

<style scoped lang="less">
.gy-form {
  padding-top: 0;
  margin-top: -10px;
  margin-bottom: -10px;
}
</style>
