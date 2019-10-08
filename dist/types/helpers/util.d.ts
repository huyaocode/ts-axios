export declare function isDate(val: any): val is Date;
/**
 * 对于 FormData、ArrayBuffer 这些类型，isObject 判断也为 true
 * 只有我们定义的普通JSON式对象才能满足。
 * @param val
 */
export declare function isPlainObject(val: any): val is Object;
