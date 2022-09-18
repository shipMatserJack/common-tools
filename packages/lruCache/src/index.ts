export default class LRUCache {
  capacity: number;
  cache: Map<number, number | null>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key: number): number {
    if (this.cache.has(key)) {
      let temp = this.cache.get(key) as number;
      this.cache.delete(key);
      this.cache.set(key, temp);
      return temp;
    }
    return -1;
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
      console.log(`refresh: key:${key} , value:${value}`);
    }
    this.cache.set(key, value);
  }

  /** 
   * @return {number}
   */
  size(): number {
    return this.cache.size
  }

  toString() {
    console.log("capacity", this.capacity);
    console.table(this.cache);
  }
}
