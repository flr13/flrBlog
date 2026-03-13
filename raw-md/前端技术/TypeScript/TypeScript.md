---
title: "TypeScript"
sidebar: auto
---

# TypeScript

## 1. 简介

 TypeScript 是 Javascript 的超集，遵循最新的 ES6、ES5 规范，TypeScript 扩展了 JavaScript 的语法 ，对类型进行了约束，限制。

**ts 的优势**

1. 支持类型检查，编译时运行，减少bug,类型错误
2. 语法提示
3. 方便代码重构

三者之间的关系

 <img src="https://img-blog.csdnimg.cn/img_convert/bf82b4a61ef55a8ead788f64f74ec178.png" alt="img" style="zoom:50%;" /> 

## 2. 下载安装

```sh
npm install -g typescript  全局安装
tsc -v     查看版本
tsc xxx.ts   生成js文件
node xxx.js  运行js文件
```

##  3. typescript的类型

### 3.1 类型注解

**变量后面空格: 类型**     形如  let 变量名: 变量类型 = 初始化值; 

```ts
let num :number=12   
```

###  3.2  类型

1. 原始类型

   ```tsx
   let num: number = 90
   
   let str: string = '123'
   
   let bool: boolean = true
   
   let n: null = null
   
   let unde: undefined = undefined
   
   let sysbol: symbol = Symbol()
   ```

2. 数组类型

   两种写法:

   ```tsx
   let nums: number[] = [1, 2, 3]
   let strs: Array<string> = ['1', '2', '3']
   ```

3. 元组类型

   （1）解构赋值

   （2） ？当前元素类型可以不唯一   可有可无

   （3） ... 剩余元素 (最后一个元素任意length)

   （4） readonly  只读元素  

   ```tsx
   let a: [number, string] = [1, '232']
   ```

4.  枚举类型

    定义:

   **enum** 枚举名 {         
       标识符[= 整型常数/字符串],
       标识符[= 整型常数/字符串], 
       ...
       标识符[= 整型常数/字符串],
   };

   ```tsx
   enum Flag {
       success,
       error,
       overtime
   };
   
   let s: Flag = Flag.overtime;
   ```

5. #### any类型

   TypeScript 中的 any 类型表示任意数据类型。

   ```tsx
   let s:any=xxx
   ```

6.  void 类型

   ```tsx
   function a(): void {
     console.log('这是一个函数')
   }ts
   ```

7. never 类型

8. 组合类型

   ```tsx
   let as: number | undefined | string = 'll'
   ```


9. 类型别名 **type**

```tsx
type 别名 = 类型
```

10. 函数类型

     函数的类型实际上指的是：`函数参数`和`返回值`的类型 

    ```tsx
    // 普通函数
    function 函数名(形参1： 类型=默认值， 形参2：类型=默认值): 返回值类型 { }
    
    // 箭头函数
    const 函数名（形参1： 类型=默认值， 形参2：类型=默认值):返回值类型 => { }
    
    ```

     函数返回值类型为：`void` 

    ```tsx
    function greet(name: string): void {
      console.log('Hello', name)
    }
    ```

11. 接口类型 **interface（**接口） 

    1. 使用 `interface` 关键字来声明接口

    2. 接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 `I` 开头

    3. 声明接口后，直接使用接口名称作为变量的类型

       ```tsx
       / 接口的写法-------------
       interface IPerson {
       	name: string,
       	age: number
       }
       
       const user1：IPerson = {
       	name: 'a',
       	age: 20
       }
       
       // type的写法-------------
       type Person  = {
       	name: string,
       	age: number
       }
       const user2：Person = {
       	name: 'b',
       	age: 20
       }
       ```

       接口的继承 关键字 extends

       ```tsx
        interface 接口2 extends 接口1 {    属性1： 类型1， *// 接口2中特有的类型*    ...  } 
        interface Point2D { x: number; y: number }
       // 继承 Point2D
       interface Point3D extends Point2D {
         z: number
       }
       ```

12.  类型断言  关键字 as

13. 类 class

14. 泛型 
    
> 泛型是指附属于函数、类、接口、类型别名之上的类型，当某个函数的参数，返回值和内部使用时的类型无法确定的情况下，就可以使用泛型来进行约束 , **可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据**

```
function fn<T>(value:T):T{
  return value 
}
fn()
```

# TypeScript 语法全面解析

## 1. **基础类型**

### 原始类型

```
// 基本类型
let isDone: boolean = false
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
let color: string = "blue"
let fullName: string = `Bob ${decimal}`

// 特殊类型
let u: undefined = undefined
let n: null = null
let notSure: any = 4
let unusable: void = undefined
```

### 数组和元组

```
// 数组
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]  // 泛型语法
let list3: (number | string)[] = [1, '2', 3]  // 联合类型

// 元组 - 固定长度的数组
let tuple: [string, number] = ['hello', 10]
tuple[0] = 'world'  // ✅
tuple[1] = 20       // ✅
// tuple[2] = true  // ❌ 错误

// 可选元素的元组
let optionalTuple: [string, number?] = ['hello']
optionalTuple = ['hello', 42]  // ✅

// 带剩余参数的元组
let restTuple: [string, ...number[]] = ['hello', 1, 2, 3]
```

### 枚举

```
// 数字枚举
enum Direction {
  Up = 1,    // 从1开始
  Down,      // 2
  Left,      // 3
  Right      // 4
}

// 字符串枚举
enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// 计算的和常量成员
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write
}

// 常量枚举（编译时会被删除）
const enum ConstEnum {
  A = 1,
  B = A * 2
}
```

## 2. **对象类型**

### 接口

```
// 基本接口
interface Person {
  readonly id: number      // 只读属性
  name: string
  age?: number            // 可选属性
  [propName: string]: any // 索引签名
  greet(): void           // 方法
}

// 函数类型接口
interface SearchFunc {
  (source: string, subString: string): boolean
}

// 可索引接口
interface StringArray {
  [index: number]: string
}

// 接口继承
interface Employee extends Person {
  employeeId: number
  department: string
}

// 接口合并
interface Box {
  height: number
}
interface Box {
  width: number
}
// 合并为 { height: number; width: number }
```

### 类型别名

```
type Point = {
  x: number
  y: number
}

type ID = number | string
type Callback<T> = (data: T) => void
type Tree<T> = {
  value: T
  left?: Tree<T>
  right?: Tree<T>
}
```

### 接口 vs 类型别名

```
// 接口可以合并，类型别名不能
interface User { name: string }
interface User { age: number }  // ✅ 合并

type UserType = { name: string }
// type UserType = { age: number }  // ❌ 错误

// 类型别名可以定义联合类型，接口不能
type Status = 'success' | 'error' | 'loading'

// 类型别名可以定义元组
type Point3D = [number, number, number]

// 接口可以使用 extends，类型别名使用 &
interface A { a: number }
interface B { b: string }
interface C extends A, B {}  // ✅

type D = { d: number }
type E = { e: string }
type F = D & E  // ✅
```

## 3. **泛型**

```
// 泛型函数
function identity<T>(arg: T): T {
  return arg
}

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

// 泛型约束
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// 泛型默认类型
interface DefaultGeneric<T = string> {
  value: T
}
```

## 4. **高级类型**

### 联合类型和交叉类型

```
// 联合类型
type Status = 'success' | 'error' | 'loading'
type ID = number | string

// 交叉类型
type Named = { name: string }
type Aged = { age: number }
type Person = Named & Aged  // { name: string; age: number }
```

### 类型守卫和类型断言

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
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined
}

// 类型断言
let someValue: any = "this is a string"
let strLength1: number = (someValue as string).length
let strLength2: number = (<string>someValue).length  // JSX 中不能使用

// 非空断言
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed())  // 确定 x 不为 null/undefined
}
```

### 映射类型

```
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Record<K extends keyof any, T> = {
  [P in K]: T
}

// 使用示例
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, "title" | "completed">
type ReadonlyTodo = Readonly<Todo>
type PartialTodo = Partial<Todo>
```

### 条件类型

```
type TypeName<T> = T extends string ? "string"
  : T extends number ? "number"
  : T extends boolean ? "boolean"
  : T extends undefined ? "undefined"
  : T extends Function ? "function"
  : "object"

// 推断类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
type Parameters<T> = T extends (...args: infer P) => any ? P : never
type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never

// 分配条件类型
type ToArray<T> = T extends any ? T[] : never
type StrOrNumArray = ToArray<string | number>  // string[] | number[]
```

## 5. **实用类型工具**

```
// 内置实用类型
interface User {
  id: number
  name: string
  email: string
  age: number
}

// 部分属性可选
type PartialUser = Partial<User>
// 所有属性只读
type ReadonlyUser = Readonly<User>
// 选取部分属性
type UserPreview = Pick<User, "id" | "name">
// 排除部分属性
type UserWithoutEmail = Omit<User, "email">
// 获取函数返回类型
type ReturnType<T> = T extends (...args: any) => infer R ? R : any
// 获取函数参数类型
type Params = Parameters<(x: number, y: string) => void>  // [number, string]
// 构造器参数类型
type CtorParams = ConstructorParameters<new (x: number) => any>  // [number]

// 模板字符串类型
type EmailLocaleIDs = "welcome_email" | "email_heading"
type FooterLocaleIDs = "footer_title" | "footer_sendoff"
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`  // 联合所有可能
type Lang = "en" | "zh" | "ja"
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`

// 内置字符串操作类型
type Uppercase<S extends string>  // 转大写
type Lowercase<S extends string>  // 转小写
type Capitalize<S extends string>  // 首字母大写
type Uncapitalize<S extends string>  // 首字母小写
```

## 6. **类和面向对象**

```
// 基本类
class Animal {
  // 属性
  public name: string
  private age: number
  protected color: string
  readonly species: string
  
  // 静态属性
  static classification = "Animal"
  
  // 构造函数
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.color = "brown"
    this.species = "unknown"
  }
  
  // 方法
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
  
  // 静态方法
  static isAnimal(obj: any): boolean {
    return obj instanceof Animal
  }
  
  // 存取器
  private _fullName: string = ""
  get fullName(): string {
    return this._fullName
  }
  set fullName(name: string) {
    this._fullName = name
  }
}

// 继承
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!")
    // this.age  // ❌ 错误，private
    console.log(this.color)  // ✅ protected
  }
  
  // 重写方法
  move(distance = 5) {
    console.log("Running...")
    super.move(distance)
  }
}

// 抽象类
abstract class Department {
  constructor(public name: string) {}
  
  abstract printMeeting(): void  // 必须在派生类中实现
  
  printName(): void {
    console.log(`Department name: ${this.name}`)
  }
}

// 接口实现
interface ClockInterface {
  currentTime: Date
  setTime(d: Date): void
}

class Clock implements ClockInterface {
  currentTime: Date = new Date()
  setTime(d: Date) {
    this.currentTime = d
  }
}

// 类表达式
const MyClass = class<T> {
  content: T
  constructor(value: T) {
    this.content = value
  }
}
```

## 7. **模块和命名空间**

```
// 模块导出
// math.ts
export const pi = 3.14
export function add(x: number, y: number): number {
  return x + y
}
export class Calculator {
  multiply(x: number, y: number): number {
    return x * y
  }
}
export default function() {
  console.log("default export")
}

// 导入
import { pi, add } from './math'
import calc from './math'
import * as MathUtils from './math'

// 重新导出
export { pi as π } from './math'
export * from './math'

// 命名空间
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }
  
  const lettersRegexp = /^[A-Za-z]+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }
}

// 使用命名空间
let validator = new Validation.LettersOnlyValidator()
```

## 8. **装饰器**

```
// 类装饰器
function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

// 方法装饰器
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

// 访问器装饰器
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value
  }
}

// 属性装饰器
function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    // ...
  }
}

// 参数装饰器
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  // ...
}

// 装饰器使用
@sealed
class Greeter {
  @format("Hello, %s")
  greeting: string
  
  constructor(message: string) {
    this.greeting = message
  }
  
  @enumerable(false)
  greet(@required name: string) {
    return `${this.greeting} ${name}`
  }
}
```

## 9. **配置文件 (tsconfig.json)**

```
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "ES2020",           // 目标ECMAScript版本
    "module": "ESNext",           // 模块系统
    "lib": ["ES2020", "DOM"],     // 要包含的库文件
    "outDir": "./dist",          // 输出目录
    "rootDir": "./src",          // 输入文件目录
    
    /* 严格类型检查选项 */
    "strict": true,              // 启用所有严格类型检查选项
    "noImplicitAny": true,       // 禁止隐式的 any 类型
    "strictNullChecks": true,    // 严格的 null 检查
    "strictFunctionTypes": true, // 严格的函数类型检查
    "strictBindCallApply": true, // 严格的 bind/call/apply 检查
    "strictPropertyInitialization": true, // 严格的属性初始化检查
    
    /* 附加检查 */
    "noUnusedLocals": true,      // 报告未使用的局部变量
    "noUnusedParameters": true,  // 报告未使用的参数
    "noImplicitReturns": true,   // 函数必须有返回值
    "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿
    
    /* 模块解析选项 */
    "moduleResolution": "node",  // 模块解析策略
    "baseUrl": "./",            // 解析非相对模块的基础目录
    "paths": {                  // 模块名到基于 baseUrl 的路径映射
      "@/*": ["src/*"]
    },
    "esModuleInterop": true,    // 启用兼容性
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块中默认导入
    
    /* 源映射选项 */
    "sourceMap": true,          // 生成对应的 .map 文件
    "declaration": true,        // 生成声明文件 .d.ts
    "declarationMap": true,     // 为声明文件生成sourcemap
    
    /* 实验性选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true,   // 为装饰器生成元数据
    
    /* 高级选项 */
    "skipLibCheck": true,       // 跳过声明文件的类型检查
    "forceConsistentCasingInFileNames": true, // 强制文件名大小写一致
    "resolveJsonModule": true   // 允许导入 JSON 文件
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts"
  ]
}
```

## 10. **最佳实践**

### 类型推断

```
// 让 TypeScript 推断类型
const user = {  // 类型: { name: string; age: number }
  name: "Alice",
  age: 30
}

// 使用 const 断言
const config = {
  api: "https://api.example.com",
  timeout: 5000
} as const  // 所有属性变为 readonly，值变为字面量类型

// 使用 satisfies
const theme = {
  primary: "#1890ff",
  secondary: "#52c41a"
} satisfies Record<string, string>  // 验证但不改变类型
```

### 泛型约束

```
// 使用 extends 约束泛型
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// 使用条件类型
type NonNullable<T> = T extends null | undefined ? never : T

// 使用 infer 推断
type PromiseReturnType<T> = T extends Promise<infer R> ? R : T
```

### 实用类型模式

```
// 从现有类型创建新类型
type UserKeys = keyof User
type UserType = User[keyof User]

// 映射类型修改
type Optional<T> = {
  [P in keyof T]?: T[P]
}

type ReadonlyPartial<T> = {
  readonly [P in keyof T]?: T[P]
}

// 递归类型
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
```

## 11. **常见问题解决**

```
// 处理第三方库类型
declare module 'some-untyped-module' {
  export const someFunction: () => void
}

// 全局类型声明
declare global {
  interface Window {
    myCustomProperty: string
  }
}

// 类型断言
const element = document.getElementById('root') as HTMLElement
// 或
const element = <HTMLElement>document.getElementById('root')

// 非空断言
const value = mightBeNull!.toString()

// 类型守卫
function isString(value: any): value is string {
  return typeof value === 'string'
}

if (isString(value)) {
  // 这里 value 是 string 类型
}
```

TypeScript 的强大之处在于它的类型系统可以帮助你在编译时捕获错误，提供更好的开发体验。掌握这些语法和模式，可以让你写出更安全、更可维护的代码。
