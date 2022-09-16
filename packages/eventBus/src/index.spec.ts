import EventBus from './index'

describe('EventBus 测试.', function () {
  var greeting2, faxking2

  var greeting = EventBus.$on('Greeting', param => {
    console.log('Hello, ' + param.name + '!')
    param.callback && param.callback()
  })

  var faxking = EventBus.$on('F@xking', (callback) => {
    console.log('Ah ♂')
    callback && callback()
  })

  var greeting3 = EventBus.$on('Greeting3', (a, b, callback) => {
    console.log('params, ' + a + ',' + b)
    callback && callback()
  })

  it('应该创建两个事件并返回预期 UID.', function () {
    expect(greeting).toEqual(1)
    expect(faxking).toEqual(2)
  })

  it('两个事件应该注册成功.', () => {
    expect(typeof EventBus.$getEventsPool()['Greeting']).toEqual('object')
    expect(typeof EventBus.$getEventsPool()['F@xking']).toEqual('object')
  })

  it('应该正确销毁 Greeting 事件.', () => {
    expect(EventBus.$destroy(greeting)).toEqual(true)
    expect(Object.keys(EventBus.$getEventsPool()['Greeting']).length).toEqual(0)
  })

  it('应该可以再注册一个 F@xking 事件.', () => {
    faxking2 = EventBus.$on('F@xking', () => {
      console.log('You got me mad now.')
    })
    expect(Object.keys(EventBus.$getEventsPool()['F@xking']).length).toEqual(2)
  })

  it('应该可以再注册一个 Greeting 事件.', () => {
    greeting2 = EventBus.$on('Greeting', param => {
      console.log('Hello again, ' + param.name + '!')
      param.callback && param.callback()
    })
    expect(Object.keys(EventBus.$getEventsPool()['Greeting']).length).toEqual(1)
  })

  it('触发事件 Greeting.', done => {
    EventBus.$emit('Greeting', { name: 'LancerComet',
      callback: function () {
        done()
      }})
  })

  it('触发事件 F@xking.', done => {
    EventBus.$emit('F@xking', () => {
      done()
    })
  })

  it('触发事件 Greeting3.', done => {
    EventBus.$emit('Greeting3', 'value1', 'value2', () => {
      done()
    })
  })

  it('销毁所有事件.', () => {
    EventBus.$destroy(greeting2)
    EventBus.$destroy(faxking)
    EventBus.$destroy(faxking2)
    EventBus.$destroy(greeting3)
    expect(Object.keys(EventBus.$getEventsPool()['Greeting']).length).toEqual(0)
    expect(Object.keys(EventBus.$getEventsPool()['F@xking']).length).toEqual(0)
    EventBus.$emit('Greeting', { name: 'LancerComet' })
    EventBus.$emit('F@xking')
  })
})
