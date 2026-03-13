# TypeScript 常用工具类型实战

## 为什么工具类型重要

工具类型的价值不在于“炫技”，而在于让类型表达更贴近业务约束。

## Partial

把一个类型中的所有属性变为可选：

```ts
interface User {
  id: number
  name: string
  email: string
}

type UserDraft = Partial<User>
```

## Pick

从已有类型中挑选部分字段：

```ts
type UserPreview = Pick<User, 'id' | 'name'>
```

## Omit

排除某些字段：

```ts
type CreateUserPayload = Omit<User, 'id'>
```

## Record

适合表示“键值映射”：

```ts
type StatusMap = Record<'idle' | 'loading' | 'success', string>
```

## 实战建议

在接口设计里，优先考虑复用已有类型，再通过工具类型裁剪。这样能减少重复声明，也更利于维护。
