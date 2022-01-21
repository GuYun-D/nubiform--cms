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
      label: '密码',
      placeholder: '请输入密码',
      type: 'password',
      field: 'password',
    },
    {
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      type: 'select',
      options: [
        {
          title: '篮球',
          value: 'basketball',
        },
        {
          title: '足球',
          value: 'football',
        },
      ],
      field: 'sport',
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
