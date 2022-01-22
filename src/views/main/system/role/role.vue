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
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '../../../../components/page-content'
import { contentTableConfig } from './config/content.config'

import PageSearch from '../../../../components/page-search'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
  },
  setup() {
    return { contentTableConfig, searchFormConfig }
  },
})
</script>

<style scoped>
.slot-header {
  color: rgb(31, 31, 31);
  font-size: 20px;
  letter-spacing: 1em;
}
</style>
