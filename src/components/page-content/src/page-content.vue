<template>
  <div style="widt: 100%" class="content">
    <GyTable
      :listData="dataList"
      :="contentTableConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
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
import { defineComponent, computed, ref, watch } from 'vue'
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

    pageName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()

    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10,
    })

    watch(
      () => pageInfo,
      () => getPageData()
    )

    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
      })
    }

    getPageData()

    const dataList = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })

    const dataCount = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData,
    }
  },
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
