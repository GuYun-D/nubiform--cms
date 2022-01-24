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
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import GyForm from '../../../base-ui/form'
import { useStore } from 'vuex'

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

    pageName: {
      type: String,
      required: true,
    },
    otherInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newInfo) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newInfo[`${item.field}`]
        }
      }
    )

    // 确定
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      // 区分新建还是编辑
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        })
      } else {
        // 新建
        store.dispatch('system/craetePageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
        })
      }
    }

    return { dialogVisible, formData, handleConfirmClick }
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
