/**
 * @index 155
 * @title 最小栈
 * @difficulty 简单
 * @tags stack,design
 * @draft false
 * @link https://leetcode-cn.com/problems/min-stack/
 * @frontendId 155
 */

export class MinStack {
  stack: any[]
  data: any[]
  constructor() {
    this.stack = []
    this.data = []
  }

  push(val: number): void {
    const currentMin =
      this.getMin() === undefined ? Number.MAX_SAFE_INTEGER : this.getMin()
    const min = Math.min(val, currentMin)
    this.data.push(val)
    this.stack.push(min)
  }

  pop(): void {
    if (this.data.length > 0) {
      this.data.pop()
    }
    if (this.stack.length > 0) {
      this.stack.pop()
    }
  }

  top(): number | undefined {
    return this.data[this.data.length - 1]
  }

  getMin(): number | undefined {
    return this.stack[this.stack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
