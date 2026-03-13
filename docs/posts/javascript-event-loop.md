# JavaScript 事件循环：从宏任务到微任务

## 为什么要理解事件循环

前端开发中经常会碰到这样的现象：明明代码写在前面，输出却出现在后面。背后真正决定执行顺序的，不是代码肉眼看到的位置，而是 JavaScript 的事件循环机制。

## 核心概念

JavaScript 是单线程语言，但浏览器和运行时并不是单线程系统。异步任务会被交给不同的宿主能力处理，等时机成熟后再把回调放入任务队列。

通常我们可以把任务分为两类：

- 宏任务：`setTimeout`、`setInterval`、UI 渲染等
- 微任务：`Promise.then`、`queueMicrotask`、`MutationObserver`

## 执行顺序

一次事件循环大致过程如下：

1. 执行当前调用栈中的同步代码
2. 清空当前产生的微任务队列
3. 执行一个宏任务
4. 再次清空微任务
5. 循环往复

## 示例

```js
console.log('start')

setTimeout(() => {
  console.log('timeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

console.log('end')
```

输出结果：

```js
start
end
promise
timeout
```

## 实战价值

理解事件循环后，你会更容易处理：

- loading 状态为什么没及时更新
- 为什么某些 DOM 更新要等待 nextTick
- 为什么多个 Promise 回调会比定时器更早执行

## 总结

事件循环不是背面试题，而是理解前端异步行为的基础。只要掌握“同步优先、微任务其次、宏任务随后”这条主线，很多问题都能快速定位。
