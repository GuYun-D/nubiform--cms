type FormType = 'input' | 'password' | 'select' | 'datepicker' | 'number'

export interface GYFormItem<T = any> {
  field: string
  type: FormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: SelectOption<T>[]
  otherOptions?: any
}

export interface SelectOption<T = any> {
  title: string
  value: T
}

export interface GYFormColLayput {
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
  span?: number
}

export interface GYForm {
  formItems: GYFormItem[]
  labelWidth?: string
  colLayout?: GYFormColLayput
  itemStyle?: any
}
