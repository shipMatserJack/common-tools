/**
 * 事件 UID, 自增.
 */
 let uid = 0

 /**
  * UID Maps, 存储 uid 与事件对应关系.
  *
  * @example
  * uidMaps = {
  *   1: 'eventA',
  *   2: 'eventB',
  *   3: 'eventA',
  *   ...
  * }
  */
 const uidMaps = {}
 
 /**
  * 事件池.
  *
  * @type {Object}
  * @example
  * eventsPool = {
  *   eventA: {...},
  *   eventB: {...}
  * }
  */
 const eventsPool = Object.create(null)
 
 const EventBus = {
   /**
    * 触发事件.
    *
    * @param { string } eventName
    * @param { any } value
    */
   $emit: function (eventName, ...value) {
     if (typeof eventsPool[eventName] === 'undefined') {
       return
     }
 
     for (let funcUID in eventsPool[eventName]) {
       eventsPool[eventName][funcUID](...value)
     }
   },
 
   /**
    * 注册事件.
    * 返回事件的 UID 供之后销毁使用.
    *
    * @param { string } eventName 事件名称.
    * @param { Function } callback 事件函数.
    * @return { number } 事件 UID.
    */
   $on: function (eventName, callback) {
     if (!eventsPool[eventName]) {
       createNewEventPool(eventName)
     }
 
     // 检查是否已经出则此事件, 如果注册则退出并返回 UID.
     for (let funcUID in eventsPool[eventName]) {
       const eventFunc = eventsPool[eventName][funcUID]
       if (eventFunc === callback) {
         return funcUID
       }
     }
 
     // 注册事件.
     uid++
     eventsPool[eventName][uid] = callback  // eventsPool.eventA[1] = callback
     uidMaps[uid] = eventName
     return uid
   },
 
   /**
    * 销毁事件.
    * 返回 boolean 表示销毁是否成功.
    *
    * @param {any} uid 事件 UID.
    * @returns {boolean}
    */
   $destroy (uid) {
     const eventName = uidMaps[uid]
 
     if (typeof eventName === 'undefined') {
       return false
     }
 
     if (typeof eventsPool[eventName][uid] === 'function') {
       delete eventsPool[eventName][uid]
       delete uidMaps[uid]
       return true
     } else {
       return false
     }
   },
 
   /**
    * 返回事件池对象.
    *
    * @return { Object }
    */
   $getEventsPool: function () {
     return eventsPool
   }
 }
 
 /**
  * 创建新的事件池.
  *
  * @param {string} eventName
  * @returns
  */
 function createNewEventPool (eventName) {
   if (typeof eventsPool[eventName] === 'undefined') {
     eventsPool[eventName] = Object.create(null)
   }
   return true
 }
 
 export default EventBus
 