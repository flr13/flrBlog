# Vue 3 响应式系统设计思路

## Vue 3 为什么重写响应式

Vue 2 的响应式基于 `Object.defineProperty`，在属性新增、删除和数组索引场景上存在限制。Vue 3 切换到 `Proxy` 后，拦截能力更完整，设计也更统一。

## 核心流程

Vue 3 响应式系统的核心可以概括为三步：

- `track`：在读取数据时收集依赖
- `trigger`：在修改数据时触发依赖
- `effect`：把副作用函数与依赖关系建立连接

## 一个简化版本

```js
const bucket = new WeakMap()
let activeEffect = null

function effect(fn) {
  activeEffect = fn
  fn()
  activeEffect = null
}

function reactive(target) {
  return new Proxy(target, {
    get(obj, key) {
      track(obj, key)
      return obj[key]
    },
    set(obj, key, value) {
      obj[key] = value
      trigger(obj, key)
      return true
    }
  })
}
```

## 实际工程意义

理解响应式系统后，能帮助你更好地回答这些问题：

- 为什么解构响应式对象会失去响应性
- `computed` 为什么具备缓存能力
- `watch` 和 `watchEffect` 的区别是什么

## 总结

Vue 3 的响应式系统把“依赖收集”和“副作用触发”拆得更加清晰。理解这套机制后，排查状态更新问题会轻松很多。
