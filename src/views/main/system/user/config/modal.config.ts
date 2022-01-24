import { GYForm } from '@/base-ui/form'

export const modalConfig: GYForm = {
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
      label: '密码',
      placeholder: '请输入密码',
      type: 'password',
      field: 'password',
      isHidden: true,
    },
    {
      label: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input',
      field: 'cellphone',
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: [],
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: [],
    },
  ],

  colLayout: {
    span: 24,
  },

  itemStyle: {},
}
