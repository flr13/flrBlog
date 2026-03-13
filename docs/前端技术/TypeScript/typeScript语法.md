# TypeScript 文档

## 1. 简介

TypeScript 是 JavaScript 的超集，遵循最新的 ES6、ES5 规范。TypeScript 扩展了 JavaScript 的语法，对类型进行了约束和限制。

**TypeScript 的优势**

1. 支持类型检查，编译时运行，减少 bug 和类型错误
2. 提供更好的语法提示
3. 方便代码重构

## 2. 下载安装

```
npm install -g typescript   # 全局安装
tsc -v                     # 查看版本
tsc xxx.ts                 # 生成 js 文件
node xxx.js                # 运行 js 文件
```

## 3. TypeScript 的类型

### 3.1 类型注解

**语法格式**：`let 变量名: 变量类型 = 初始化值;`

```
let num: number = 12
```

### 3.2 类型系统

#### 1. 原始类型

```
let num: number = 90
let str: string = '123'
let bool: boolean = true
let n: null = null
let unde: undefined = undefined
let symbol: symbol = Symbol()
```

#### 2. 数组类型

**两种写法：**

```
// 写法一：元素类型[]
let nums: number[] = [1, 2, 3]
let strs: string[] = ['1', '2', '3']

// 写法二：Array<元素类型>
let numbers: Array<number> = [1, 2, 3]
let strings: Array<string> = ['1', '2', '3']
```

#### 3. 元组类型

**特性：**

- 解构赋值
- `?`表示当前元素可选（可有可无）
- `...`表示剩余元素（最后一个元素任意长度）
- `readonly`表示只读元素

```
let tuple1: [number, string] = [1, '232']
let tuple2: [string, number?] = ['hello']  // 第二个元素可选
let tuple3: [string, ...number[]] = ['hello', 1, 2, 3]  // 剩余参数
let tuple4: readonly [number, string] = [1, 'test']  // 只读元组
```

#### 4. 枚举类型

**定义语法：**

```
enum 枚举名 {
  标识符[= 整型常数/字符串],
  标识符[= 整型常数/字符串],
  ...
}
```

**示例：**

```
enum Flag {
  success,
  error,
  overtime
}

let s: Flag = Flag.overtime
console.log(s)  // 输出: 2

// 字符串枚举
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

#### 5. any 类型

TypeScript 中的 any 类型表示任意数据类型。

```
let dynamicValue: any = 'Hello'
dynamicValue = 42           // ✅ 可以重新赋值为数字
dynamicValue = true         // ✅ 可以重新赋值为布尔值
dynamicValue = [1, 2, 3]    // ✅ 可以重新赋值为数组
```

#### 6. void 类型

void 类型表示没有任何类型，通常用于函数返回值。

```
function logMessage(): void {
  console.log('这是一个函数')
}

function a(): void {
  console.log('这是一个没有返回值的函数')
}
```

#### 7. never 类型

never 类型表示那些永远不存在的值的类型。

```
// 抛出异常的函数
function error(message: string): never {
  throw new Error(message)
}

// 无限循环的函数
function infiniteLoop(): never {
  while (true) {
    // 无限循环
  }
}
```

#### 8. 联合类型

使用 `|`运算符组合多个类型。

```
let value: number | undefined | string = 'hello'
value = 42        // ✅
value = undefined // ✅
value = 'world'   // ✅
```

#### 9. 类型别名（type）

使用 `type`关键字创建类型别名。

```
type StringOrNumber = string | number
type User = {
  id: number
  name: string
  email: string
}

let userId: StringOrNumber = 123
let user: User = {
  id: 1,
  name: '张三',
  email: 'zhangsan@example.com'
}
```

#### 10. 函数类型

函数的类型指的是函数参数和返回值的类型。

**普通函数：**

```
function add(a: number, b: number = 0): number {
  return a + b
}

function greet(name: string): void {
  console.log('Hello', name)
}
```

**箭头函数：**

```
const multiply = (a: number, b: number = 1): number => {
  return a * b
}

const sayHello = (name: string): void => {
  console.log('Hello', name)
}
```

**可选参数和默认参数：**

```
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName
}

function createUser(name: string, age: number = 18): void {
  console.log(`Name: ${name}, Age: ${age}`)
}
```

#### 11. 接口类型（interface）

使用 `interface`关键字来声明接口。

**基本用法：**

```
interface IPerson {
  name: string
  age: number
  email?: string  // 可选属性
  readonly id: number  // 只读属性
}

const user1: IPerson = {
  id: 1,
  name: '张三',
  age: 20
}

// 使用 type 的等价写法
type Person = {
  name: string
  age: number
  email?: string
  readonly id: number
}

const user2: Person = {
  id: 2,
  name: '李四',
  age: 25
}
```

**接口继承：**

使用 `extends`关键字实现接口继承。

```
interface Point2D {
  x: number
  y: number
}

// 继承 Point2D
interface Point3D extends Point2D {
  z: number
}

const point: Point3D = {
  x: 1,
  y: 2,
  z: 3
}

// 多继承
interface Animal {
  name: string
}

interface Mammal {
  hasFur: boolean
}

interface Dog extends Animal, Mammal {
  breed: string
}

const myDog: Dog = {
  name: 'Buddy',
  hasFur: true,
  breed: 'Golden Retriever'
}
```

#### 12. 类型断言

使用 `as`关键字进行类型断言。

```
// 方式一：as 语法
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length

// 方式二：尖括号语法（在 JSX 中不能使用）
let strLength2: number = (<string>someValue).length

// 非空断言
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed())  // 确定 x 不为 null/undefined
}
```

#### 13. 类（class）

TypeScript 增强了 JavaScript 的类语法，添加了类型注解和访问修饰符。

```
class Person {
  // 成员变量
  public name: string
  private age: number
  protected email: string
  readonly id: number
  
  // 静态属性
  static species: string = 'Homo sapiens'
  
  // 构造函数
  constructor(name: string, age: number, email: string) {
    this.name = name
    this.age = age
    this.email = email
    this.id = Date.now()
  }
  
  // 方法
  public greet(): string {
    return `Hello, my name is ${this.name}`
  }
  
  // 私有方法
  private getAge(): number {
    return this.age
  }
  
  // 静态方法
  static describe(): string {
    return `This is a ${this.species}`
  }
  
  // 存取器（getter/setter）
  get fullInfo(): string {
    return `${this.name} (${this.age}) - ${this.email}`
  }
  
  set updateEmail(newEmail: string) {
    this.email = newEmail
  }
}

// 继承
class Employee extends Person {
  private employeeId: number
  
  constructor(name: string, age: number, email: string, employeeId: number) {
    super(name, age, email)
    this.employeeId = employeeId
  }
  
  // 重写方法
  public greet(): string {
    return `Hello, I'm employee ${this.employeeId}, my name is ${this.name}`
  }
}
```

#### 14. 泛型

泛型用于创建可重用的组件，支持多种类型的数据。

**基本泛型函数：**

```
function identity<T>(value: T): T {
  return value
}

// 使用
let output1 = identity<string>('hello')
let output2 = identity<number>(42)
let output3 = identity('world')  // 类型推断

// 多个泛型参数
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}
```

**泛型约束：**

```
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person = { name: 'John', age: 30 }
getProperty(person, 'name')  // ✅
// getProperty(person, 'gender')  // ❌ 错误
```

**泛型接口：**

```
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity
```

**泛型类：**

```
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
  
  constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue
    this.add = add
  }
}

// 使用
let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y)
```

## 4. 实用技巧和最佳实践

### 类型推断

```
// TypeScript 可以自动推断类型
let message = 'Hello'  // 推断为 string 类型
let count = 42        // 推断为 number 类型

// 使用 const 断言
const config = {
  api: "https://api.example.com",
  timeout: 5000
} as const  // 所有属性变为 readonly

// 使用 satisfies 操作符（TypeScript 4.9+）
const theme = {
  primary: "#1890ff",
  secondary: "#52c41a"
} satisfies Record<string, string>
```

### 实用类型工具

```
// 内置实用类型
interface User {
  id: number
  name: string
  email: string
  age: number
}

// Partial - 所有属性变为可选
type PartialUser = Partial<User>

// Readonly - 所有属性变为只读
type ReadonlyUser = Readonly<User>

// Pick - 选择部分属性
type UserPreview = Pick<User, "id" | "name">

// Omit - 排除部分属性
type UserWithoutEmail = Omit<User, "email">

// Record - 创建对象类型
type UserMap = Record<string, User>
```

### 类型守卫

```
// typeof 类型守卫
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value
  }
  return padding + value
}

// instanceof 类型守卫
class Bird { fly() {} }
class Fish { swim() {} }
function move(pet: Bird | Fish) {
  if (pet instanceof Bird) {
    pet.fly()
  } else {
    pet.swim()
  }
}

// 自定义类型守卫
function isString(value: any): value is string {
  return typeof value === 'string'
}
```

## 5. 总结

TypeScript 通过强大的类型系统为 JavaScript 开发带来了以下优势：

1. **类型安全**：编译时类型检查，减少运行时错误
2. **更好的开发体验**：丰富的语法提示和自动补全
3. **代码可维护性**：清晰的类型定义使代码更易理解和重构
4. **渐进式采用**：可以逐步将 JavaScript 项目迁移到 TypeScript

掌握 TypeScript 的类型系统是有效使用 TypeScript 的关键，建议在实际项目中逐步应用这些概念，从简单的类型注解开始，逐步使用更高级的类型特性。