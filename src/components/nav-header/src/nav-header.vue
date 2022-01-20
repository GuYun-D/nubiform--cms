<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFold"
    ></i>

    <div class="content">
      <div>面包屑</div>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './components/user-info.vue'

export default defineComponent({
  emits: ['foldChage'],
  components: {
    UserInfo,
  },
  setup(_, { emit }) {
    const isFold = ref(false)
    const handleFold = () => {
      isFold.value = !isFold.value

      emit('foldChage', isFold.value)
    }
    return { handleFold, isFold }
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
