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
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

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
