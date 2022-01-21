<template>
  <div class="gy-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <el-breadcrumb-item :to="{ path: breadcrumb.path }">{{
          breadcrumb.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { GYBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<GYBreadcrumb[]>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
