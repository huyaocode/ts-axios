const objToString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return objToString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

/**
 * 对于 FormData、ArrayBuffer 这些类型，isObject 判断也为 true
 * 只有我们定义的普通JSON式对象才能满足。
 * @param val
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
