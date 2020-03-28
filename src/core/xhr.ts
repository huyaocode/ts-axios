import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/header'
import { createError } from '../helpers/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    // open 连接
    // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/open 第三个默认为true，表示要不要异步执行操作
    request.open(method.toUpperCase(), url!, true)

    // 监听 state change
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      // 1、If the state is UNSENT or OPENED, return 0.（如果状态是UNSENT或者OPENED，返回0）
      // 2、If the error flag is set, return 0.（如果错误标签被设置，返回0）
      if (request.status === 0) {
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
      handleResponse(response)
    }

    // 处理异常
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    // 处理超时
    request.ontimeout = function handelTimeout() {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNREFUSED', request))
    }

    // 发送请求
    if (headers) {
      // 添加 header 特殊逻辑~
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

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
