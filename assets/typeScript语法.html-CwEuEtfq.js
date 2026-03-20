import{_ as s,c as e,a,o as i}from"./app-Bm564foL.js";const l={};function d(c,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<h1 id="typescript-文档" tabindex="-1"><a class="header-anchor" href="#typescript-文档"><span>TypeScript 文档</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>TypeScript 是 JavaScript 的超集，遵循最新的 ES6、ES5 规范。TypeScript 扩展了 JavaScript 的语法，对类型进行了约束和限制。</p><p><strong>TypeScript 的优势</strong></p><ol><li>支持类型检查，编译时运行，减少 bug 和类型错误</li><li>提供更好的语法提示</li><li>方便代码重构</li></ol><h2 id="_2-下载安装" tabindex="-1"><a class="header-anchor" href="#_2-下载安装"><span>2. 下载安装</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install -g typescript   # 全局安装</span>
<span class="line">tsc -v                     # 查看版本</span>
<span class="line">tsc xxx.ts                 # 生成 js 文件</span>
<span class="line">node xxx.js                # 运行 js 文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-typescript-的类型" tabindex="-1"><a class="header-anchor" href="#_3-typescript-的类型"><span>3. TypeScript 的类型</span></a></h2><h3 id="_3-1-类型注解" tabindex="-1"><a class="header-anchor" href="#_3-1-类型注解"><span>3.1 类型注解</span></a></h3><p><strong>语法格式</strong>：<code>let 变量名: 变量类型 = 初始化值;</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let num: number = 12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-2-类型系统" tabindex="-1"><a class="header-anchor" href="#_3-2-类型系统"><span>3.2 类型系统</span></a></h3><h4 id="_1-原始类型" tabindex="-1"><a class="header-anchor" href="#_1-原始类型"><span>1. 原始类型</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let num: number = 90</span>
<span class="line">let str: string = &#39;123&#39;</span>
<span class="line">let bool: boolean = true</span>
<span class="line">let n: null = null</span>
<span class="line">let unde: undefined = undefined</span>
<span class="line">let symbol: symbol = Symbol()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-数组类型" tabindex="-1"><a class="header-anchor" href="#_2-数组类型"><span>2. 数组类型</span></a></h4><p><strong>两种写法：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 写法一：元素类型[]</span>
<span class="line">let nums: number[] = [1, 2, 3]</span>
<span class="line">let strs: string[] = [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]</span>
<span class="line"></span>
<span class="line">// 写法二：Array&lt;元素类型&gt;</span>
<span class="line">let numbers: Array&lt;number&gt; = [1, 2, 3]</span>
<span class="line">let strings: Array&lt;string&gt; = [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-元组类型" tabindex="-1"><a class="header-anchor" href="#_3-元组类型"><span>3. 元组类型</span></a></h4><p><strong>特性：</strong></p><ul><li>解构赋值</li><li><code>?</code>表示当前元素可选（可有可无）</li><li><code>...</code>表示剩余元素（最后一个元素任意长度）</li><li><code>readonly</code>表示只读元素</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let tuple1: [number, string] = [1, &#39;232&#39;]</span>
<span class="line">let tuple2: [string, number?] = [&#39;hello&#39;]  // 第二个元素可选</span>
<span class="line">let tuple3: [string, ...number[]] = [&#39;hello&#39;, 1, 2, 3]  // 剩余参数</span>
<span class="line">let tuple4: readonly [number, string] = [1, &#39;test&#39;]  // 只读元组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-枚举类型" tabindex="-1"><a class="header-anchor" href="#_4-枚举类型"><span>4. 枚举类型</span></a></h4><p><strong>定义语法：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">enum 枚举名 {</span>
<span class="line">  标识符[= 整型常数/字符串],</span>
<span class="line">  标识符[= 整型常数/字符串],</span>
<span class="line">  ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">enum Flag {</span>
<span class="line">  success,</span>
<span class="line">  error,</span>
<span class="line">  overtime</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let s: Flag = Flag.overtime</span>
<span class="line">console.log(s)  // 输出: 2</span>
<span class="line"></span>
<span class="line">// 字符串枚举</span>
<span class="line">enum Direction {</span>
<span class="line">  Up = &quot;UP&quot;,</span>
<span class="line">  Down = &quot;DOWN&quot;,</span>
<span class="line">  Left = &quot;LEFT&quot;,</span>
<span class="line">  Right = &quot;RIGHT&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-any-类型" tabindex="-1"><a class="header-anchor" href="#_5-any-类型"><span>5. any 类型</span></a></h4><p>TypeScript 中的 any 类型表示任意数据类型。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let dynamicValue: any = &#39;Hello&#39;</span>
<span class="line">dynamicValue = 42           // ✅ 可以重新赋值为数字</span>
<span class="line">dynamicValue = true         // ✅ 可以重新赋值为布尔值</span>
<span class="line">dynamicValue = [1, 2, 3]    // ✅ 可以重新赋值为数组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-void-类型" tabindex="-1"><a class="header-anchor" href="#_6-void-类型"><span>6. void 类型</span></a></h4><p>void 类型表示没有任何类型，通常用于函数返回值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function logMessage(): void {</span>
<span class="line">  console.log(&#39;这是一个函数&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function a(): void {</span>
<span class="line">  console.log(&#39;这是一个没有返回值的函数&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-never-类型" tabindex="-1"><a class="header-anchor" href="#_7-never-类型"><span>7. never 类型</span></a></h4><p>never 类型表示那些永远不存在的值的类型。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 抛出异常的函数</span>
<span class="line">function error(message: string): never {</span>
<span class="line">  throw new Error(message)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 无限循环的函数</span>
<span class="line">function infiniteLoop(): never {</span>
<span class="line">  while (true) {</span>
<span class="line">    // 无限循环</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-联合类型" tabindex="-1"><a class="header-anchor" href="#_8-联合类型"><span>8. 联合类型</span></a></h4><p>使用 <code>|</code>运算符组合多个类型。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">let value: number | undefined | string = &#39;hello&#39;</span>
<span class="line">value = 42        // ✅</span>
<span class="line">value = undefined // ✅</span>
<span class="line">value = &#39;world&#39;   // ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-类型别名-type" tabindex="-1"><a class="header-anchor" href="#_9-类型别名-type"><span>9. 类型别名（type）</span></a></h4><p>使用 <code>type</code>关键字创建类型别名。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">type StringOrNumber = string | number</span>
<span class="line">type User = {</span>
<span class="line">  id: number</span>
<span class="line">  name: string</span>
<span class="line">  email: string</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let userId: StringOrNumber = 123</span>
<span class="line">let user: User = {</span>
<span class="line">  id: 1,</span>
<span class="line">  name: &#39;张三&#39;,</span>
<span class="line">  email: &#39;zhangsan@example.com&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-函数类型" tabindex="-1"><a class="header-anchor" href="#_10-函数类型"><span>10. 函数类型</span></a></h4><p>函数的类型指的是函数参数和返回值的类型。</p><p><strong>普通函数：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function add(a: number, b: number = 0): number {</span>
<span class="line">  return a + b</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function greet(name: string): void {</span>
<span class="line">  console.log(&#39;Hello&#39;, name)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>箭头函数：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const multiply = (a: number, b: number = 1): number =&gt; {</span>
<span class="line">  return a * b</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const sayHello = (name: string): void =&gt; {</span>
<span class="line">  console.log(&#39;Hello&#39;, name)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可选参数和默认参数：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function buildName(firstName: string, lastName?: string): string {</span>
<span class="line">  return lastName ? \`\${firstName} \${lastName}\` : firstName</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function createUser(name: string, age: number = 18): void {</span>
<span class="line">  console.log(\`Name: \${name}, Age: \${age}\`)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-接口类型-interface" tabindex="-1"><a class="header-anchor" href="#_11-接口类型-interface"><span>11. 接口类型（interface）</span></a></h4><p>使用 <code>interface</code>关键字来声明接口。</p><p><strong>基本用法：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface IPerson {</span>
<span class="line">  name: string</span>
<span class="line">  age: number</span>
<span class="line">  email?: string  // 可选属性</span>
<span class="line">  readonly id: number  // 只读属性</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const user1: IPerson = {</span>
<span class="line">  id: 1,</span>
<span class="line">  name: &#39;张三&#39;,</span>
<span class="line">  age: 20</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用 type 的等价写法</span>
<span class="line">type Person = {</span>
<span class="line">  name: string</span>
<span class="line">  age: number</span>
<span class="line">  email?: string</span>
<span class="line">  readonly id: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const user2: Person = {</span>
<span class="line">  id: 2,</span>
<span class="line">  name: &#39;李四&#39;,</span>
<span class="line">  age: 25</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>接口继承：</strong></p><p>使用 <code>extends</code>关键字实现接口继承。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface Point2D {</span>
<span class="line">  x: number</span>
<span class="line">  y: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 继承 Point2D</span>
<span class="line">interface Point3D extends Point2D {</span>
<span class="line">  z: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const point: Point3D = {</span>
<span class="line">  x: 1,</span>
<span class="line">  y: 2,</span>
<span class="line">  z: 3</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 多继承</span>
<span class="line">interface Animal {</span>
<span class="line">  name: string</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">interface Mammal {</span>
<span class="line">  hasFur: boolean</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">interface Dog extends Animal, Mammal {</span>
<span class="line">  breed: string</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const myDog: Dog = {</span>
<span class="line">  name: &#39;Buddy&#39;,</span>
<span class="line">  hasFur: true,</span>
<span class="line">  breed: &#39;Golden Retriever&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-类型断言" tabindex="-1"><a class="header-anchor" href="#_12-类型断言"><span>12. 类型断言</span></a></h4><p>使用 <code>as</code>关键字进行类型断言。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 方式一：as 语法</span>
<span class="line">let someValue: any = &#39;this is a string&#39;</span>
<span class="line">let strLength: number = (someValue as string).length</span>
<span class="line"></span>
<span class="line">// 方式二：尖括号语法（在 JSX 中不能使用）</span>
<span class="line">let strLength2: number = (&lt;string&gt;someValue).length</span>
<span class="line"></span>
<span class="line">// 非空断言</span>
<span class="line">function liveDangerously(x?: number | null) {</span>
<span class="line">  console.log(x!.toFixed())  // 确定 x 不为 null/undefined</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-类-class" tabindex="-1"><a class="header-anchor" href="#_13-类-class"><span>13. 类（class）</span></a></h4><p>TypeScript 增强了 JavaScript 的类语法，添加了类型注解和访问修饰符。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Person {</span>
<span class="line">  // 成员变量</span>
<span class="line">  public name: string</span>
<span class="line">  private age: number</span>
<span class="line">  protected email: string</span>
<span class="line">  readonly id: number</span>
<span class="line">  </span>
<span class="line">  // 静态属性</span>
<span class="line">  static species: string = &#39;Homo sapiens&#39;</span>
<span class="line">  </span>
<span class="line">  // 构造函数</span>
<span class="line">  constructor(name: string, age: number, email: string) {</span>
<span class="line">    this.name = name</span>
<span class="line">    this.age = age</span>
<span class="line">    this.email = email</span>
<span class="line">    this.id = Date.now()</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 方法</span>
<span class="line">  public greet(): string {</span>
<span class="line">    return \`Hello, my name is \${this.name}\`</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 私有方法</span>
<span class="line">  private getAge(): number {</span>
<span class="line">    return this.age</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 静态方法</span>
<span class="line">  static describe(): string {</span>
<span class="line">    return \`This is a \${this.species}\`</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 存取器（getter/setter）</span>
<span class="line">  get fullInfo(): string {</span>
<span class="line">    return \`\${this.name} (\${this.age}) - \${this.email}\`</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  set updateEmail(newEmail: string) {</span>
<span class="line">    this.email = newEmail</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 继承</span>
<span class="line">class Employee extends Person {</span>
<span class="line">  private employeeId: number</span>
<span class="line">  </span>
<span class="line">  constructor(name: string, age: number, email: string, employeeId: number) {</span>
<span class="line">    super(name, age, email)</span>
<span class="line">    this.employeeId = employeeId</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 重写方法</span>
<span class="line">  public greet(): string {</span>
<span class="line">    return \`Hello, I&#39;m employee \${this.employeeId}, my name is \${this.name}\`</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-泛型" tabindex="-1"><a class="header-anchor" href="#_14-泛型"><span>14. 泛型</span></a></h4><p>泛型用于创建可重用的组件，支持多种类型的数据。</p><p><strong>基本泛型函数：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function identity&lt;T&gt;(value: T): T {</span>
<span class="line">  return value</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用</span>
<span class="line">let output1 = identity&lt;string&gt;(&#39;hello&#39;)</span>
<span class="line">let output2 = identity&lt;number&gt;(42)</span>
<span class="line">let output3 = identity(&#39;world&#39;)  // 类型推断</span>
<span class="line"></span>
<span class="line">// 多个泛型参数</span>
<span class="line">function pair&lt;T, U&gt;(first: T, second: U): [T, U] {</span>
<span class="line">  return [first, second]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型约束：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface Lengthwise {</span>
<span class="line">  length: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {</span>
<span class="line">  console.log(arg.length)</span>
<span class="line">  return arg</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 在泛型约束中使用类型参数</span>
<span class="line">function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {</span>
<span class="line">  return obj[key]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const person = { name: &#39;John&#39;, age: 30 }</span>
<span class="line">getProperty(person, &#39;name&#39;)  // ✅</span>
<span class="line">// getProperty(person, &#39;gender&#39;)  // ❌ 错误</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型接口：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">interface GenericIdentityFn&lt;T&gt; {</span>
<span class="line">  (arg: T): T</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function identity&lt;T&gt;(arg: T): T {</span>
<span class="line">  return arg</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let myIdentity: GenericIdentityFn&lt;number&gt; = identity</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>泛型类：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class GenericNumber&lt;T&gt; {</span>
<span class="line">  zeroValue: T</span>
<span class="line">  add: (x: T, y: T) =&gt; T</span>
<span class="line">  </span>
<span class="line">  constructor(zeroValue: T, add: (x: T, y: T) =&gt; T) {</span>
<span class="line">    this.zeroValue = zeroValue</span>
<span class="line">    this.add = add</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用</span>
<span class="line">let myGenericNumber = new GenericNumber&lt;number&gt;(0, (x, y) =&gt; x + y)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-实用技巧和最佳实践" tabindex="-1"><a class="header-anchor" href="#_4-实用技巧和最佳实践"><span>4. 实用技巧和最佳实践</span></a></h2><h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断"><span>类型推断</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// TypeScript 可以自动推断类型</span>
<span class="line">let message = &#39;Hello&#39;  // 推断为 string 类型</span>
<span class="line">let count = 42        // 推断为 number 类型</span>
<span class="line"></span>
<span class="line">// 使用 const 断言</span>
<span class="line">const config = {</span>
<span class="line">  api: &quot;https://api.example.com&quot;,</span>
<span class="line">  timeout: 5000</span>
<span class="line">} as const  // 所有属性变为 readonly</span>
<span class="line"></span>
<span class="line">// 使用 satisfies 操作符（TypeScript 4.9+）</span>
<span class="line">const theme = {</span>
<span class="line">  primary: &quot;#1890ff&quot;,</span>
<span class="line">  secondary: &quot;#52c41a&quot;</span>
<span class="line">} satisfies Record&lt;string, string&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实用类型工具" tabindex="-1"><a class="header-anchor" href="#实用类型工具"><span>实用类型工具</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 内置实用类型</span>
<span class="line">interface User {</span>
<span class="line">  id: number</span>
<span class="line">  name: string</span>
<span class="line">  email: string</span>
<span class="line">  age: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Partial - 所有属性变为可选</span>
<span class="line">type PartialUser = Partial&lt;User&gt;</span>
<span class="line"></span>
<span class="line">// Readonly - 所有属性变为只读</span>
<span class="line">type ReadonlyUser = Readonly&lt;User&gt;</span>
<span class="line"></span>
<span class="line">// Pick - 选择部分属性</span>
<span class="line">type UserPreview = Pick&lt;User, &quot;id&quot; | &quot;name&quot;&gt;</span>
<span class="line"></span>
<span class="line">// Omit - 排除部分属性</span>
<span class="line">type UserWithoutEmail = Omit&lt;User, &quot;email&quot;&gt;</span>
<span class="line"></span>
<span class="line">// Record - 创建对象类型</span>
<span class="line">type UserMap = Record&lt;string, User&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型守卫" tabindex="-1"><a class="header-anchor" href="#类型守卫"><span>类型守卫</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// typeof 类型守卫</span>
<span class="line">function padLeft(value: string, padding: string | number) {</span>
<span class="line">  if (typeof padding === &quot;number&quot;) {</span>
<span class="line">    return Array(padding + 1).join(&quot; &quot;) + value</span>
<span class="line">  }</span>
<span class="line">  return padding + value</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// instanceof 类型守卫</span>
<span class="line">class Bird { fly() {} }</span>
<span class="line">class Fish { swim() {} }</span>
<span class="line">function move(pet: Bird | Fish) {</span>
<span class="line">  if (pet instanceof Bird) {</span>
<span class="line">    pet.fly()</span>
<span class="line">  } else {</span>
<span class="line">    pet.swim()</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 自定义类型守卫</span>
<span class="line">function isString(value: any): value is string {</span>
<span class="line">  return typeof value === &#39;string&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结"><span>5. 总结</span></a></h2><p>TypeScript 通过强大的类型系统为 JavaScript 开发带来了以下优势：</p><ol><li><strong>类型安全</strong>：编译时类型检查，减少运行时错误</li><li><strong>更好的开发体验</strong>：丰富的语法提示和自动补全</li><li><strong>代码可维护性</strong>：清晰的类型定义使代码更易理解和重构</li><li><strong>渐进式采用</strong>：可以逐步将 JavaScript 项目迁移到 TypeScript</li></ol><p>掌握 TypeScript 的类型系统是有效使用 TypeScript 的关键，建议在实际项目中逐步应用这些概念，从简单的类型注解开始，逐步使用更高级的类型特性。</p>`,83)])])}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/TypeScript/typeScript%E8%AF%AD%E6%B3%95.html","title":"TypeScript 文档","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773394873000,"contributors":[{"name":"wulr","username":"wulr","email":"wulr@eastcom-sw.com","commits":1,"url":"https://github.com/wulr"}],"changelog":[{"hash":"2e05be3a6e915f9542c6b5a3b229ee576fde38ba","time":1773394873000,"email":"wulr@eastcom-sw.com","author":"wulr","message":"Remove spaces from MD filenames and update references"}]},"filePathRelative":"前端技术/TypeScript/typeScript语法.md"}');export{p as comp,t as data};
