import gyRequest from '@/service'
import { HttpServerData } from '@/service/login/types'
import type { QueryInfo, PageListData } from './types'

/**
 * 获取列表数据
 * @param url
 * @param queryInfo
 */
export function getPageListData(url: string, queryInfo: QueryInfo) {
  console.log(url)
  return gyRequest.post<HttpServerData<PageListData>>({
    url: url,
    data: queryInfo,
    showLoading: false,
  })
}

/**
 * 删除操作
 */
export function deletePageData(url: string) {
  return gyRequest.delete<HttpServerData>({
    url: url,
  })
}

/**
 * 创建
 */
export function createPageData(url: string, newData: any) {
  // console.log(url, newData)

  return gyRequest.post<HttpServerData>({
    url: url,
    data: newData,
  })
}

/**
 * 编辑
 */
export function editPageData(url: string, editData: any) {
  return gyRequest.patch<HttpServerData>({
    url: url,
    data: editData,
  })
}
