<template>
  <div>
    <GyTable :listData="userList" :="contentTableConfig">
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>

      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>

      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>

      <template #handler>
        <div class="handle-b">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>

      <template #headerHandler>
        <el-button type="primary" size="mini">新建用户</el-button>
        <el-button
          type="success"
          icon="el-icon-refresh"
          size="mini"
        ></el-button>
      </template>
    </GyTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import GyTable from '../../../base-ui/table'
import { useStore } from '../../../store'

export default defineComponent({
  components: {
    GyTable,
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore()

    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10,
      },
    })

    const userList = computed(() => {
      return store.state.system.userList
    })

    const userCount = computed(() => {
      return store.state.system.userCount
    })

    return {
      userList,
      userCount,
    }
  },
})
</script>

<style scoped></style>
