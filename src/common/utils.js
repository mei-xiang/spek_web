/**
 * 全局数据工具类
 *
 * @export
 * @class GlobalDataUtils
 */

export default class GlobalDataUtils {
  /**
   * 封装的防抖函数
   * @param {Function} func 要做防抖的函数
   * @param {Number} delay  限制时间
   */
  static debounce(func, delay) {
    let timer = null
    return function(...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  /**
   * 格式化时间
   * @param {String} fmt
   * @param {Object} date
   * let date = new Date()
   * dateFormat("yyyy-MM-dd hh:mm", date)
   */
  static dateFormat(fmt, date) {
    let ret
    const opt = {
      'y+': date.getFullYear().toString(), // 年
      'M+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'h+': date.getHours().toString(), // 时
      'm+': date.getMinutes().toString(), // 分
      's+': date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
        )
      }
    }
    return fmt
  }

  /**
   * [通过参数名获取url中的参数值]
   * 示例URL:http://www.baidu.com?uid=admin&rid=1&fid=2&name=小明
   * @param  {[string]} queryName [参数名]
   * @return {[string]}           [参数值]
   */
  static getQueryValue(queryName) {
    var reg = new RegExp('(^|&)' + queryName + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return decodeURI(r[2])
    } else {
      return null
    }
  }
}
