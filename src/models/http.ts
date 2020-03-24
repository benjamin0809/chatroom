export interface IResponseResult<T> {
  errorCode: number
  message: string
  data: T
}
