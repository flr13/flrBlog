# [vue3语法与教程](https://blog.csdn.net/2302_76329106/article/details/139447910)

## 特点

1. ##### 性能

   - 打包大小减少41%
   - 初次渲染快51%，更新渲染快133%
   - 内存占用减少54%

2. ##### 源码

   - 使用Proxy 代替Object.defineProperty 实现双向数据绑定
   - 重写虚拟DOM的实现和Tree-Shaking
   - vue3 更好的支持typescript

3. ##### 新特性

   (1)  **composition API（组合式api）**

   - setup配置
   - ref和reactive
   - watch 和watchEffect
   - provide和inject

   (2) **提供了新的内置组件**

   - Fragment
   - Teleport
   - Suspense

   (3) **其他改变**

   - 新的生命周期钩子
   - 移除keyCode 作为v-on的修饰符

## 创建项目

```shell
1. 确保你的vue-cli 脚手架版本在4.5.0以上，这样才能创建
2. 检查脚手架版本  vue -V 或 vue --version
3. 如果版本低话，重新安装vue-cli   npm install -g @vue/cli  
4. vue create vue3-project
5. cd vue3-project
6. npm run serve 启动项目
 npm init vue@latest
```

## 语法

### 1. **组合式 API (Composition API)**

#### 选项式 API vs 组合式 API

```
<!-- 选项式 API -->
<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<!-- 组合式 API -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
```

### 2. **响应式基础**

#### ref 和 reactive

```
import { ref, reactive, computed, watch } from 'vue'

// 基本类型使用 ref
const count = ref(0)
console.log(count.value) // 访问值

// 对象使用 reactive
const state = reactive({
  name: 'Vue',
  version: 3
})

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 侦听器
watch(count, (newVal, oldVal) => {
  console.log(`count changed: ${oldVal} -> ${newVal}`)
})

// 立即执行 + 深度监听
watch(
  () => state.name,
  (newVal) => {
    console.log(`Name changed: ${newVal}`)
  },
  { immediate: true, deep: true }
)
```

### 3. **组件通信**

#### Props

```
<!-- 子组件 -->
<script setup>
const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <h2>{{ title }}</h2>
  <p>{{ count }}</p>
</template>

<!-- 父组件 -->
<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(0)
</script>

<template>
  <ChildComponent title="计数器" :count="count" />
</template>
```

#### 事件发射

```
<!-- 子组件 -->
<script setup>
const emit = defineEmits(['update', 'submit'])

const handleClick = () => {
  emit('update', 1)
  emit('submit', { data: 'test' })
}
</script>

<!-- 父组件 -->
<template>
  <ChildComponent @update="handleUpdate" @submit="handleSubmit" />
</template>
```

#### 插槽

```
<!-- 子组件 -->
<template>
  <div class="container">
    <header>
      <slot name="header" :title="title"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<!-- 父组件 -->
<template>
  <ChildComponent>
    <template #header="{ title }">
      <h1>{{ title }}</h1>
    </template>
    
    <p>默认插槽内容</p>
    
    <template #footer>
      <p>页脚内容</p>
    </template>
  </ChildComponent>
</template>
```

### 4. **生命周期钩子**

```
<script setup>
import { onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log('组件挂载前')
})

onMounted(() => {
  console.log('组件已挂载')
  // 在这里执行 DOM 操作或获取数据
})

onUpdated(() => {
  console.log('组件已更新')
})

onUnmounted(() => {
  console.log('组件已卸载')
  // 清理工作
})

// 其他钩子：
// onBeforeUpdate, onBeforeUnmount, onErrorCaptured
</script>
```

### 5. **模板语法**

#### 基础绑定

```
<template>
  <!-- 文本插值 -->
  <p>{{ message }}</p>
  
  <!-- 原始 HTML -->
  <div v-html="rawHtml"></div>
  
  <!-- 属性绑定 -->
  <div :id="dynamicId"></div>
  <button :disabled="isDisabled">按钮</button>
  
  <!-- 类绑定 -->
  <div :class="{ active: isActive, 'text-danger': hasError }"></div>
  <div :class="[activeClass, errorClass]"></div>
  
  <!-- 样式绑定 -->
  <div :style="{ color: textColor, fontSize: size + 'px' }"></div>
  <div :style="[baseStyles, overridingStyles]"></div>
</template>
```

#### 条件渲染

```
<template>
  <!-- v-if -->
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else>C</div>
  
  <!-- v-show -->
  <div v-show="isVisible">显示/隐藏</div>
</template>
```

#### 列表渲染

```
<template>
  <!-- 数组 -->
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index }} - {{ item.name }}
    </li>
  </ul>
  
  <!-- 对象 -->
  <ul>
    <li v-for="(value, key, index) in object">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
</template>
```

### 6. **自定义指令**

```
<script setup>
// 局部指令
const vFocus = {
  mounted(el) {
    el.focus()
  }
}

// 带值的指令
const vColor = {
  mounted(el, binding) {
    el.style.color = binding.value
  },
  updated(el, binding) {
    el.style.color = binding.value
  }
}
</script>

<template>
  <input v-focus />
  <p v-color="'red'">红色文字</p>
</template>
```

### 7. **依赖注入**

```
<!-- 祖先组件 -->
<script setup>
import { provide, ref } from 'vue'

const message = ref('hello')
provide('message', message)
</script>

<!-- 后代组件 -->
<script setup>
import { inject } from 'vue'

const message = inject('message')
const defaultValue = inject('key', 'default value')
</script>
```

### 8. **Teleport 传送**

```
<template>
  <button @click="modalOpen = true">打开弹窗</button>
  
  <Teleport to="body">
    <div v-if="modalOpen" class="modal">
      <p>模态框内容</p>
      <button @click="modalOpen = false">关闭</button>
    </div>
  </Teleport>
</template>
```

### 9. **Suspense 异步组件**

```
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
)
</script>
```

### 10. **TypeScript 支持**

```
<script setup lang="ts">
import { ref } from 'vue'

// 类型推断
const count = ref<number>(0)

// 带类型的 props
interface Props {
  title: string
  count?: number
}

const props = defineProps<Props>()

// 带类型的事件
const emit = defineEmits<{
  (e: 'update', id: number): void
  (e: 'submit', payload: { data: string }): void
}>()

// 带类型的 ref
const input = ref<HTMLInputElement | null>(null)
</script>
```

### 11. **组合式函数**

```
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  
  const update = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }
  
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  
  return { x, y }
}

// 在组件中使用
<script setup>
import { useMouse } from './useMouse'

const { x, y } = useMouse()
</script>
```

### 12. **响应式工具函数**

```
import { isRef, unref, toRef, toRefs, isReactive, markRaw } from 'vue'

// 判断是否是 ref
isRef(count) // true

// 获取值（如果是 ref 则返回 .value）
const value = unref(maybeRef)

// 将 reactive 对象的属性转为 ref
const countRef = toRef(state, 'count')

// 将 reactive 对象转为普通对象，属性为 ref
const { count, name } = toRefs(state)

// 标记对象永远不会转为响应式
const staticObj = markRaw({ data: 'static' })
```

## 最佳实践建议

1. **组合式 API 优先**：新项目推荐使用 `<script setup>`
2. **TypeScript**：建议配合 TypeScript 使用以获得更好的类型支持
3. **组件组织**：按功能组织代码，使用组合式函数提取可复用逻辑
4. **性能优化**： 合理使用 `v-if`和 `v-show` 为大列表使用虚拟滚动 使用 `computed`缓存计算 避免不必要的响应式
