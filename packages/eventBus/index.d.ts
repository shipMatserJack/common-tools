declare namespace EventBus {
  /**
   * 注册一个新事件.
   * 
   * @export
   * @template T 
   * @param {string} eventName 事件名称
   * @param {(value?: T) => any} callback 事件回调
   * @returns {number} 事件 UID，用于销毁事件.
   */
  export function $on<T = any> (eventName: string, callback: (value?: T) => any): number

  /**
   * 触发特定事件.
   * 
   * @export
   * @template T 
   * @param {string} eventName 事件名称. 
   * @param {T} [value] 传入数据.
   */
  export function $emit<T = any> (eventName: string, value?: T): void

  /**
   * 销毁特定事件.
   * 
   * @export
   * @param {number} uid 事件 UID，在使用 $on 注册事件时获得. 
   * @returns {boolean}
   */
  export function $destroy (uid: number): boolean
}

export = EventBus
