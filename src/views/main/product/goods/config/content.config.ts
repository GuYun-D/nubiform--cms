export const contentTableConfig = {
  showIndexClumn: true,
  showSelectColumn: false,
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '120',
    },
    {
      prop: 'oldPrice',
      label: '原价/元',
      minWidth: '60',
    },
    {
      prop: 'newPrice',
      label: '现价/圆',
      minWidth: '60',
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image',
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '100',
      slotName: 'status',
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt',
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler',
    },
  ],
}
