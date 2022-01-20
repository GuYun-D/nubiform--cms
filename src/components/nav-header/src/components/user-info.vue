<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <img src="../../../../assets/image/avatar.webp" alt="" />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-close" @click="handleLayout"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../../../../store'
import { useRouter } from 'vue-router'
import localCache from '../../../../utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    const name = computed(() => {
      return store.state.name ?? 'GuYun-D'
    })

    const handleLayout = () => {
      localCache.deleteCache('TOKEN')
      router.push('/login')
    }
    return { name, handleLayout }
  },
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    border-radius: 50%;
  }
}
</style>
