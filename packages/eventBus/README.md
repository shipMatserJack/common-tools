# EventBus

事件传递系统, 用于解决组件之间的事件通讯.

## Quick Start.

```javascript
import EventBus from '@shipmaster/event-bus'

// 注册名为 Greeting 的事件并添加一个事件回调.
EventBus.$on('Greeting', name => {
  console.log(`Hello, ${name}!`)
})

// 触发 Greeting 事件并传值为 "John Smith".
EventBus.$emit('Greeting', 'John Smith')  // console.log('Hello, John Smith!')

// 在 Greeting 事件中注册一个新的回调函数,
// 并通过 "handshaking" 变量保存此事件的 UID.
const handshaking = EventBus.$on('Greeting', name => {
  console.log(`Handshake with ${name}.`)
})

// 触发 Greeting 事件并传值为 "LancerComet".
EventBus.$emit('Greeting', 'LancerComet')  // console.log('Hello, LancerComet!')
                                           // console.log('Handshake with LancerComet.')

// 将 handshaking 从 Greeting 事件中移除.
EventBus.$destroy(handshaking)

// 触发 Greeting 事件并传值为 "Doge".
EventBus.$emit('Greeting', 'Doge')  // console.log('Hello, Doge!')
                                    // Handshake 已被移除.
```

# API.

## EventBus.$on()

注册一个新的事件，并返回此事件的 UID.

```typescript
EventBus.$on(eventName: string, callback: Function): number
```

 - `eventName: string` 事件名称.
 - `callback: Function` 事件回调函数.

## EventBus.$emit()

触发特定事件.

```typescript
EventBus.$emit(eventName: string)
```

 - `eventName: string` 事件名称.

## EventBus.$destroy()

注销特定 UID 对应的事件.

```typescript
EventBusd.$destroy(uid: number)
```

## EventBus.$getEventsPool()

返回事件池对象，供开发模式下使用.
