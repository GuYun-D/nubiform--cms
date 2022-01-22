<template>
  <div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-if="showIndexClumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-for="propItem in propList"
        :key="propItem.id"
        :prop="propItem.prop"
        :label="propItem.label"
        :width="propItem.minWidth"
        align="center"
      >
        <template #default="scope">
          <slot :name="propItem.slotName" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
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

    showIndexClumn: {
      type: Boolean,
      default: false,
    },

    showSelectColumn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    return { handleSelectionChange }
  },
})
</script>

<style scoped></style>
