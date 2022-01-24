<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <GyForm :="modalConfig" v-model="formData"></GyForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
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
    modalConfig: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const dialogVisible = ref(true)
    const formData = ref({
      name: '',
      realname: '',
      cellphone: '',
    })
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
