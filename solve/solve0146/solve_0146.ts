class LinkListNode {
  public next: LinkListNode | null
  public prev: LinkListNode | null
  public value: number
  public key: number
  constructor(key: number, value: number) {
    this.value = value
    this.next = null
    this.prev = null
    this.key = key
  }
}

/**
 * @index 146
 * @title LRU 缓存
 * @difficulty 中等
 * @tags design,hash-table,linked-list,doubly-linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/lru-cache/
 * @frontendId 146
*/

export class LRUCache {
  private capacity: number
  private cache: Map<number, LinkListNode>
  private head: LinkListNode | null
  private tail: LinkListNode | null
  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
    this.head = null
    this.tail = null
  }

  get(key: number): number {
    const result = this.cache.get(key)
    if (!result) return -1
    this.removeNode(result)
    this.addToHead(result)
    return result.value
  }
  put(key: number, value: number): void {
    const cache = this.cache
    if (cache.has(key)) {
      const node = cache.get(key)!
      node.value = value
      this.removeNode(node)
      this.addToHead(node)
    } else {
      const node = new LinkListNode(key, value)
      const size = cache.size
      if (size >= this.capacity) {
        cache.delete(this.tail!.key)
        this.removeNode(this.tail!)
      }
      this.addToHead(node)
      cache.set(key, node)
    }
  }
  removeNode(node: LinkListNode) {
    const prev = node.prev
    if (prev) {
      prev.next = node.next
    } else {
      this.head = node.next
    }
    const next = node.next
    if (next) {
      next.prev = node.prev
    } else {
      this.tail = node.prev
    }
  }
  addToHead(node: LinkListNode) {
    node.next = this.head
    node.prev = null
    const currentHead = this.head
    if (currentHead) {
      currentHead.prev = node
    }
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
