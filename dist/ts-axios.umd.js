(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.index = factory());
}(this, (function () { 'use strict';

  function xhr(config) {
      var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b;
      var request = new XMLHttpRequest();
      request.open(method.toUpperCase(), url, true);
      request.send(data);
  }

  var objToString = Object.prototype.toString;
  function isDate(val) {
      return objToString.call(val) === '[object Date]';
  }
  // export function isObject(val: any): val is Object {
  //   return val !== null && typeof val === 'object'
  // }
  /**
   * 对于 FormData、ArrayBuffer 这些类型，isObject 判断也为 true
   * 只有我们定义的普通JSON式对象才能满足。
   * @param val
   */
  function isPlainObject(val) {
      return toString.call(val) === '[object Object]';
  }

  function encode(val) {
      return encodeURIComponent(val)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
  }
  function buildURL(url, params) {
      if (!params) {
          return url;
      }
      var parts = [];
      Object.keys(params).forEach(function (key) {
          var val = params[key];
          if (val === null || val === undefined) {
              return;
          }
          var values = [];
          if (Array.isArray(val)) {
              values = val;
              key += '[]';
          }
          else {
              values = [val];
          }
          values.forEach(function (val) {
              if (isDate(val)) {
                  val = val.toISOString();
              }
              else if (isPlainObject(val)) {
                  val = JSON.stringify(val);
              }
              parts.push(encode(key) + "=" + encode(val));
          });
      });
      var serializedParams = parts.join('&');
      if (serializedParams) {
          var hashIndex = url.indexOf('#');
          if (hashIndex !== -1) {
              url = url.slice(0, hashIndex);
          }
          url += (url.indexOf('?') !== -1 ? '&' : '?') + serializedParams;
      }
      return url;
  }

  function transformRequest(data) {
      if (isPlainObject(data)) {
          return JSON.stringify(data);
      }
      return data;
  }

  function axios(config) {
      processConfig(config);
      xhr(config);
  }
  /**
   * 将 param 拼接进 url
   * 将 data 序列化
   */
  function processConfig(config) {
      config.url = transformURL(config);
      config.data = transformRequestData(config);
  }
  function transformURL(config) {
      var url = config.url, params = config.params;
      return buildURL(url, params);
  }
  function transformRequestData(config) {
      return transformRequest(config.data);
  }

  return axios;

})));
//# sourceMappingURL=ts-axios.umd.js.map
