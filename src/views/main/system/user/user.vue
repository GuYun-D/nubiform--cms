<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>
    <PageModal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../../../../store'

import PageContent from '../../../../components/page-content'
import PageSearch from '../../../../components/page-search'
import PageModal from '../../../../components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '../../../../hooks/usePageSearch'
import { usePageModal } from '../../../../hooks/usePageModal'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item: any) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }

    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item: any) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    /**
     * 动态添加部门和角色列表
     */
    const store = useStore()
    const departmentItem = modalConfig.formItems.find(
      (item) => item.field === 'departmentId'
    )

    departmentItem!.options = store.state.entireDepartment.map((item) => {
      return {
        title: item.name,
        value: item.id,
      }
    })

    const roleItem = modalConfig.formItems.find(
      (item) => item.field === 'roleId'
    )

    roleItem!.options = store.state.entireRole.map((item) => {
      return {
        title: item.name,
        value: item.id,
      }
    })

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallBack, editCallBack)

    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
    }
  },
})
</script>

<style scoped lang="less"></style>
