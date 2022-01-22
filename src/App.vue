<template>
  <div class="app">
    <ElConfigProvider :locale="locale">
      <router-view></router-view>
    </ElConfigProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 国际化
import { ElConfigProvider } from 'element-plus'
import zhCh from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider,
  },

  setup() {
    return { locale: zhCh }
  },
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
