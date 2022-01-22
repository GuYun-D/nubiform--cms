import { GYForm } from '@/base-ui/form'

export const searchFormConfig: GYForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称',
      type: 'input',
    },
    {
      label: 'id',
      placeholder: '请输入id',
      type: 'input',
      field: 'id',
    },
    {
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      type: 'input',
      field: 'intro',
    },
  ],

  labelWidth: '120px',
}
