import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  // 添加 header 特殊逻辑
  if (headers) {
    Object.keys(headers).forEach((name: string) => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete (headers as any)[name]
      } else {
        request.setRequestHeader(name, (headers as any)[name])
      }
    })
  }

  request.send(data)
}
