import gyRequest from '@/service'
import { HttpServerData } from '@/service/login/types'
import type { QueryInfo, PageListData } from './types'

/**
 * 获取列表数据
 * @param url
 * @param queryInfo
 */
export function getPageListData(url: string, queryInfo: QueryInfo) {
  return gyRequest.post<HttpServerData<PageListData>>({
    url: url,
    data: queryInfo,
  })
}
