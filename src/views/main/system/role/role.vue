<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig">
      <template #title>
        <h1 class="slot-header">角色搜索</h1>
      </template>
    </PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></PageContent>
    <PageModal
      :modalConfig="modalConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :otherInfo="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { useStore } from '../../../../store'
import { mapMenuLeafKeys } from '../../../../utils/map-menus'
import { ElTree } from 'element-plus'

import PageContent from '../../../../components/page-content'
import { contentTableConfig } from './config/content.config'

import PageSearch from '../../../../components/page-search'
import { searchFormConfig } from './config/search.config'

import PageModal from '../../../../components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '../../../../hooks/usePageModal'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal,
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCb = (item: any) => {
      const leafKeys = mapMenuLeafKeys(item.menuList)
      nextTick(() => {
        // 调用组件的方法来进行回显,要使用nexttick，因为elTreeRef的绑定要慢与editCb的回调
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCb)

    const store = useStore()
    const menus = computed(() => {
      return store.state.entireMenu
    })

    const otherInfo = ref({})

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      elTreeRef,
      handleCheckChange,
    }
  },
})
</script>

<style scoped>
.slot-header {
  color: rgb(31, 31, 31);
  font-size: 20px;
  letter-spacing: 1em;
}

.menu-tree {
  margin-left: 20px;
}
</style>
