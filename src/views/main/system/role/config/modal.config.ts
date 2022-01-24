import { GYForm } from '@/base-ui/form'

export const modalConfig: GYForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      placeholder: '请输入角色名',
      type: 'input',
    },
    {
      label: '角色介绍',
      placeholder: '请输入角色介绍',
      type: 'input',
      field: 'intro',
    },
  ],

  colLayout: {
    span: 24,
  },

  itemStyle: {},
}
