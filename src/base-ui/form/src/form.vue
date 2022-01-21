<template>
  <div class="gy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :="colLayput">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              class="form-item"
              :style="itemStyle"
            >
              <template
                v-if="
                  item.type === 'input' ||
                  item.type === 'password' ||
                  item.type === 'number'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.label"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, watch } from 'vue'
import type { GYFormItem } from './types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<GYFormItem[]>,
      default: () => [],
    },

    labelWidth: {
      type: String,
      default: '100px',
    },

    itemStyle: {
      type: Object,
      default: () => ({
        padding: '10px 30px',
      }),
    },

    colLayput: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },

    modelValue: {
      type: Object,
      required: true,
    },
  },

  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 拷贝出一个新的对象，不然又是违反了单向数据流
    const formData = ref({ ...props.modelValue })

    // 监听formData对象的改变
    watch(
      formData,
      (newFormDate) => {
        emit('update:modelValue', newFormDate)
      },
      {
        deep: true,
      }
    )

    return { formData }
  },
})
</script>

<style scoped lang="less">
.gy-form {
  padding-top: 22px;
}
</style>
