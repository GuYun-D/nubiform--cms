<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">
          <h3>{{ title }}</h3>
        </div>

        <div class="hand">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
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
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
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

    title: {
      type: String,
      default: '',
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

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.footer {
  padding: 10px 0 5px 0;
}
</style>
