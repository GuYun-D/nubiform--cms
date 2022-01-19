<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFold"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChage'],
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
  .fold {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
