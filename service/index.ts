import { useFetch } from "nuxt/app"
import type { _AsyncData } from "nuxt/dist/app/composables/asyncData"

const BASE_URL = import.meta.env.VITE_BASE_URL

/**
 * 请求函数
 *
 * @param url 路径
 * @param options 配置
 * @param contentType 请求内容类型
 * @param uniqueKey 唯一标识
 */
const fetch = async <T = any>(
  url: string,
  options: { [key: string]: any },
  contentType: string | undefined = "application/json; charset=utf-8",
  uniqueKey: string = url
): Promise<Result<T>> => {
  let headers: { [key: string]: any } = {}
  if (contentType) {
    headers["content-type"] = contentType
  }

  return new Promise((resolve, reject) => {
    return useFetch(url, {
      ...options,
      key: uniqueKey,
      baseURL: BASE_URL,
      onRequest({ request, options }) {
        options.headers = { ...options.headers, ...headers }
      }
    })
      .then(({ data, error }: _AsyncData<any, any>) => {
        if (!data || error?.value) {
          return reject(error?.value)
        }

        // toRaw 是一个用于获取响应式对象原始值的函数
        const dataRes = toRaw(data?.value as Result<T>)

        if (!dataRes) {
          return reject(dataRes)
        }

        return resolve(dataRes)
      })
      .catch((err) => {
        console.log(`[error]:${err}`, `[url]:${url}`)
      })
  })
}

const get = <T>(url: string, param?: any): Promise<Result<T>> => {
  return fetch<T>(url, { method: "get", param })
}

const post = <T>(url: string, body?: any, contentType?: string, uniqueKey: string = url): Promise<Result<T>> => {
  return fetch<T>(url, { method: "post", body }, contentType, uniqueKey)
}

const put = <T>(url: string, body?: any, contentType?: string, uniqueKey: string = url): Promise<Result<T>> => {
  return fetch<T>(url, { method: "put", body }, contentType, uniqueKey)
}

const del = <T>(url: string, body?: any, contentType?: string, uniqueKey: string = url): Promise<Result<T>> => {
  return fetch<T>(url, { method: "delete", body }, contentType, uniqueKey)
}

const patch = <T>(url: string, body?: any, contentType?: string, uniqueKey: string = url): Promise<Result<T>> => {
  return fetch<T>(url, { method: "patch", body }, contentType, uniqueKey)
}

export { get, post, put, patch, del }
