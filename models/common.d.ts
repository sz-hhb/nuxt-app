/** 通用结果类型 */
type Result<T> = {
  code: number
  data: T
  message: string
}
