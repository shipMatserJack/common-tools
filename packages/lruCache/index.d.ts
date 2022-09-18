declare namespace LRUCache {
  /**
   * 获取缓存值
   * 
   * @export
   * @param {number} key key
   * @returns {number} value
   */
  export function get (key: number): number

  /**
   * 设置缓存值
   * 
   * @export
   * @param {number} key key
   * @param {number} [value] value
   */
  export function put (key: string, value: number): void

  /**
   * 获取缓存大小
   * 
   * @export
   * @param {number} [value] 缓存大小
   */
   export function size (): number
}

export = LRUCache
