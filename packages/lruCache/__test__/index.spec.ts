import LRUCache from '../src/index'

describe('LRUCache 测试.', function () {
  const list1 = new LRUCache(4)
  const list2 = new LRUCache(4)
  const list3 = new LRUCache(4)
  const list4 = new LRUCache(4)
  const list5 = new LRUCache(4)
  
  list1.put(1, 1)
  list1.toString()
  it('存入 1，剩余容量3', function () {
    expect(list1.capacity - list1.cache.size).toEqual(3)
  })
  
  list2.put(1, 1)
  list2.put(2, 2)
  list2.toString()
  it('存入 1、2，剩余容量2', function () {
    expect(list2.capacity - list2.cache.size).toEqual(2)
  })

  list3.put(1, 1)
  list3.put(2, 2)
  list3.put(3, 3)
  list3.put(4, 4)
  list3.toString()
  it('存入 1、2、3、4，剩余容量0', function () {
    expect(list3.capacity - list3.cache.size).toEqual(0)
  })

  list3.put(1, 1)
  list3.toString()
  it('存入 1已存在，置队尾', function () {
    expect(list3.cache.keys().next().value).toEqual(2)
  })

  list4.put(1, 1)
  list4.put(2, 2)
  list4.put(3, 3)
  list4.put(4, 4)
  list4.put(5, 5)
  list4.toString()
  it('存入 5不存在，删除队首 插入5', function () {
    expect(list4.cache.keys().next().value).toEqual(2)
  })

  list5.put(1, 1)
  list5.put(2, 2)
  list5.put(3, 3)
  list5.put(4, 4)
  list5.get(1)
  list5.toString()
  it('获取1， 更新1置队尾', function () {
    expect(list4.cache.keys().next().value).toEqual(2)
  })
})
