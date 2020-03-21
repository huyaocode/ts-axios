import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/header'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/open 第三个默认为true，表示要不要异步执行操作
    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType === 'text' ? request.responseText : request.response
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }

    // 添加 header 特殊逻辑
    if (headers) {
      Object.keys(headers).forEach((name: string) => {
        // 没有 content 时不需要设置 type
        if (data === null && name.toLowerCase() === 'content-type') {
          delete (headers as any)[name]
        } else {
          request.setRequestHeader(name, (headers as any)[name])
        }
      })
    }

    request.send(data)
  })
}
