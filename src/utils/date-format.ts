import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

const DATE_TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss'
dayjs.extend(utc)

/**
 * 将utc时间转换
 * @param utcString
 * @param format
 */
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
