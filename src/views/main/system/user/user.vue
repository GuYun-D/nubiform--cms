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
    ></PageContent>
    <PageModal :modalConfig="modalConfig"></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '../../../../components/page-content'
import PageSearch from '../../../../components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '../../../../hooks/usePageSearch'

import { modalConfig } from './config/modal.config'
import PageModal from '../../../../components/page-modal'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      modalConfig,
    }
  },
})
</script>

<style scoped lang="less"></style>
