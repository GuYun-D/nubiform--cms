<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFold"
    ></i>

    <div class="content">
      <GyBreadcrumb :breadcrumbs="breadcrumbs"></GyBreadcrumb>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './components/user-info.vue'
import GyBreadcrumb from '../../../base-ui/breadcrumb'
import { pathMapBreadcrumbToMenu } from '../../../utils/map-menus'
import { useStore } from '../../../store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChage'],
  components: {
    UserInfo,
    GyBreadcrumb,
  },
  setup(_, { emit }) {
    const isFold = ref(false)
    const store = useStore()
    const route = useRoute()

    const breadcrumbs = computed(() => {
      return pathMapBreadcrumbToMenu(store.state.login.userMenus, route.path)
    })

    const handleFold = () => {
      isFold.value = !isFold.value
      emit('foldChage', isFold.value)
    }
    return { handleFold, isFold, breadcrumbs }
  },
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;

  .fold {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
    text-align: left;
    padding: 0 20px;
  }
}
</style>
