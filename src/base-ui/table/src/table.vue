<template>
  <div>
    <el-table :data="listData" border style="width: 100%">
      <el-table-column
        v-for="propItem in propList"
        :key="propItem.id"
        :prop="propItem.prop"
        :label="propItem.label"
        :width="propItem.minWidth"
        align="center"
      />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true,
    },

    propList: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
