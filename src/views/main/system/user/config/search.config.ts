import { GYForm } from '@/base-ui/form'

export const searchFormConfig: GYForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
    },
    {
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input',
      field: 'realname',
    },
    {
      label: 'cellphone',
      placeholder: '请输入电话号码',
      type: 'input',
      field: 'cellphone',
    },
    {
      label: '用户状态',
      placeholder: '请选择用户状态',
      type: 'select',
      field: 'enable',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 },
      ],
    },
    {
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
      },
      field: 'createAt',
    },
  ],

  labelWidth: '120px',
}
