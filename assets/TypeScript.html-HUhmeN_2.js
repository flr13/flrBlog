import{_ as n,c as a,b as e,o as l}from"./app-Dq3hbFTu.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>TypeScript 是 Javascript 的超集，遵循最新的 ES6、ES5 规范，TypeScript 扩展了 JavaScript 的语法 ，对类型进行了约束，限制。</p><p><strong>ts 的优势</strong></p><ol><li>支持类型检查，编译时运行，减少bug,类型错误</li><li>语法提示</li><li>方便代码重构</li></ol><p>三者之间的关系</p><img src="https://img-blog.csdnimg.cn/img_convert/bf82b4a61ef55a8ead788f64f74ec178.png" alt="img" style="zoom:50%;"><h2 id="_2-下载安装" tabindex="-1"><a class="header-anchor" href="#_2-下载安装"><span>2. 下载安装</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript  全局安装</span>
<span class="line">tsc <span class="token parameter variable">-v</span>     查看版本</span>
<span class="line">tsc xxx.ts   生成js文件</span>
<span class="line"><span class="token function">node</span> xxx.js  运行js文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-typescript的类型" tabindex="-1"><a class="header-anchor" href="#_3-typescript的类型"><span>3. typescript的类型</span></a></h2><h3 id="_3-1-类型注解" tabindex="-1"><a class="header-anchor" href="#_3-1-类型注解"><span>3.1 类型注解</span></a></h3><p><strong>变量后面空格: 类型</strong> 形如 let 变量名: 变量类型 = 初始化值;</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"><span class="token keyword">let</span> num <span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">=</span><span class="token number">12</span>   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-2-类型" tabindex="-1"><a class="header-anchor" href="#_3-2-类型"><span>3.2 类型</span></a></h3><ol><li><p>原始类型</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">90</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> unde<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> sysbol<span class="token operator">:</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数组类型</p><p>两种写法:</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> strs<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>元组类型</p><p>（1）解构赋值</p><p>（2） ？当前元素类型可以不唯一 可有可无</p><p>（3） ... 剩余元素 (最后一个元素任意length)</p><p>（4） readonly 只读元素</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;232&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>枚举类型</p><p>定义:</p></li></ol><p><strong>enum</strong> 枚举名 {<br> 标识符[= 整型常数/字符串], 标识符[= 整型常数/字符串], ... 标识符[= 整型常数/字符串], };</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">enum</span> Flag <span class="token punctuation">{</span></span>
<span class="line">    success<span class="token punctuation">,</span></span>
<span class="line">    error<span class="token punctuation">,</span></span>
<span class="line">    overtime</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> s<span class="token operator">:</span> Flag <span class="token operator">=</span> Flag<span class="token punctuation">.</span>overtime<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><h4 id="any类型" tabindex="-1"><a class="header-anchor" href="#any类型"><span>any类型</span></a></h4><p>TypeScript 中的 any 类型表示任意数据类型。</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">let</span> s<span class="token operator">:</span><span class="token builtin">any</span><span class="token operator">=</span>xxx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>void 类型</p></li></ol><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个函数&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span>ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li><p>never 类型</p></li><li><p>组合类型</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">let</span> <span class="token keyword">as</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;ll&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>类型别名 <strong>type</strong></p></li></ol><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">type</span> <span class="token class-name">别名</span> <span class="token operator">=</span> 类型</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="10"><li><p>函数类型</p><p>函数的类型实际上指的是：<code>函数参数</code>和<code>返回值</code>的类型</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token comment">// 普通函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">函数名</span><span class="token punctuation">(</span>形参<span class="token number">1</span>： 类型<span class="token operator">=</span>默认值， 形参<span class="token number">2</span>：类型<span class="token operator">=</span>默认值<span class="token punctuation">)</span><span class="token operator">:</span> 返回值类型 <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 箭头函数</span></span>
<span class="line"><span class="token keyword">const</span> 函数名（形参<span class="token number">1</span>： 类型<span class="token operator">=</span>默认值， 形参<span class="token number">2</span>：类型<span class="token operator">=</span>默认值<span class="token punctuation">)</span><span class="token operator">:</span>返回值类型 <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数返回值类型为：<code>void</code></p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接口类型 **interface（**接口）</p><ol><li><p>使用 <code>interface</code> 关键字来声明接口</p></li><li><p>接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 <code>I</code> 开头</p></li><li><p>声明接口后，直接使用接口名称作为变量的类型</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"><span class="token operator">/</span> 接口的写法<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">	age<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> user1：IPerson <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span></span>
<span class="line">	age<span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// type的写法-------------</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Person</span>  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">	age<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> user2：Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	name<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span></span>
<span class="line">	age<span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口的继承 关键字 extends</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre><code class="language-tsx"><span class="line"> <span class="token keyword">interface</span> <span class="token class-name">接口<span class="token number">2</span></span> <span class="token keyword">extends</span> <span class="token class-name">接口<span class="token number">1</span></span> <span class="token punctuation">{</span>    属性<span class="token number">1</span>： 类型<span class="token number">1</span>， <span class="token operator">*</span><span class="token comment">// 接口2中特有的类型*    ...  } </span></span>
<span class="line"> <span class="token keyword">interface</span> <span class="token class-name">Point2D</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 继承 Point2D</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point3D</span> <span class="token keyword">extends</span> <span class="token class-name">Point2D</span> <span class="token punctuation">{</span></span>
<span class="line">  z<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>类型断言 关键字 as</p></li><li><p>类 class</p></li><li><p>泛型</p></li></ol><blockquote><p>泛型是指附属于函数、类、接口、类型别名之上的类型，当某个函数的参数，返回值和内部使用时的类型无法确定的情况下，就可以使用泛型来进行约束 , <strong>可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function fn&lt;T&gt;(value:T):T{</span>
<span class="line">  return value </span>
<span class="line">}</span>
<span class="line">fn()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="typescript-语法全面解析" tabindex="-1"><a class="header-anchor" href="#typescript-语法全面解析"><span>TypeScript 语法全面解析</span></a></h1><h2 id="_1-基础类型" tabindex="-1"><a class="header-anchor" href="#_1-基础类型"><span>1. <strong>基础类型</strong></span></a></h2><h3 id="原始类型" tabindex="-1"><a class="header-anchor" href="#原始类型"><span>原始类型</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 基本类型</span>
<span class="line">let isDone: boolean = false</span>
<span class="line">let decimal: number = 6</span>
<span class="line">let hex: number = 0xf00d</span>
<span class="line">let binary: number = 0b1010</span>
<span class="line">let octal: number = 0o744</span>
<span class="line">let color: string = &quot;blue&quot;</span>
<span class="line">let fullName: string = \`Bob \${decimal}\`</span>
<span class="line"></span>
<span class="line">// 特殊类型</span>
<span class="line">let u: undefined = undefined</span>
<span class="line">let n: null = null</span>
<span class="line">let notSure: any = 4</span>
<span class="line">let unusable: void = undefined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组和元组" tabindex="-1"><a class="header-anchor" href="#数组和元组"><span>数组和元组</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 数组</span>
<span class="line">let list: number[] = [1, 2, 3]</span>
<span class="line">let list2: Array&lt;number&gt; = [1, 2, 3]  // 泛型语法</span>
<span class="line">let list3: (number | string)[] = [1, &#39;2&#39;, 3]  // 联合类型</span>
<span class="line"></span>
<span class="line">// 元组 - 固定长度的数组</span>
<span class="line">let tuple: [string, number] = [&#39;hello&#39;, 10]</span>
<span class="line">tuple[0] = &#39;world&#39;  // ✅</span>
<span class="line">tuple[1] = 20       // ✅</span>
<span class="line">// tuple[2] = true  // ❌ 错误</span>
<span class="line"></span>
<span class="line">// 可选元素的元组</span>
<span class="line">let optionalTuple: [string, number?] = [&#39;hello&#39;]</span>
<span class="line">optionalTuple = [&#39;hello&#39;, 42]  // ✅</span>
<span class="line"></span>
<span class="line">// 带剩余参数的元组</span>
<span class="line">let restTuple: [string, ...number[]] = [&#39;hello&#39;, 1, 2, 3]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举"><span>枚举</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 数字枚举</span>
<span class="line">enum Direction {</span>
<span class="line">  Up = 1,    // 从1开始</span>
<span class="line">  Down,      // 2</span>
<span class="line">  Left,      // 3</span>
<span class="line">  Right      // 4</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 字符串枚举</span>
<span class="line">enum DirectionStr {</span>
<span class="line">  Up = &quot;UP&quot;,</span>
<span class="line">  Down = &quot;DOWN&quot;,</span>
<span class="line">  Left = &quot;LEFT&quot;,</span>
<span class="line">  Right = &quot;RIGHT&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 计算的和常量成员</span>
<span class="line">enum FileAccess {</span>
<span class="line">  None,</span>
<span class="line">  Read = 1 &lt;&lt; 1,</span>
<span class="line">  Write = 1 &lt;&lt; 2,</span>
<span class="line">  ReadWrite = Read | Write</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 常量枚举（编译时会被删除）</span>
<span class="line">const enum ConstEnum {</span>
<span class="line">  A = 1,</span>
<span class="line">  B = A * 2</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-对象类型" tabindex="-1"><a class="header-anchor" href="#_2-对象类型"><span>2. <strong>对象类型</strong></span></a></h2><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 基本接口</span>
<span class="line">interface Person {</span>
<span class="line">  readonly id: number      // 只读属性</span>
<span class="line">  name: string</span>
<span class="line">  age?: number            // 可选属性</span>
<span class="line">  [propName: string]: any // 索引签名</span>
<span class="line">  greet(): void           // 方法</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 函数类型接口</span>
<span class="line">interface SearchFunc {</span>
<span class="line">  (source: string, subString: string): boolean</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 可索引接口</span>
<span class="line">interface StringArray {</span>
<span class="line">  [index: number]: string</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 接口继承</span>
<span class="line">interface Employee extends Person {</span>
<span class="line">  employeeId: number</span>
<span class="line">  department: string</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 接口合并</span>
<span class="line">interface Box {</span>
<span class="line">  height: number</span>
<span class="line">}</span>
<span class="line">interface Box {</span>
<span class="line">  width: number</span>
<span class="line">}</span>
<span class="line">// 合并为 { height: number; width: number }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名"><span>类型别名</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">type Point = {</span>
<span class="line">  x: number</span>
<span class="line">  y: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">type ID = number | string</span>
<span class="line">type Callback&lt;T&gt; = (data: T) =&gt; void</span>
<span class="line">type Tree&lt;T&gt; = {</span>
<span class="line">  value: T</span>
<span class="line">  left?: Tree&lt;T&gt;</span>
<span class="line">  right?: Tree&lt;T&gt;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口-vs-类型别名" tabindex="-1"><a class="header-anchor" href="#接口-vs-类型别名"><span>接口 vs 类型别名</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 接口可以合并，类型别名不能</span>
<span class="line">interface User { name: string }</span>
<span class="line">interface User { age: number }  // ✅ 合并</span>
<span class="line"></span>
<span class="line">type UserType = { name: string }</span>
<span class="line">// type UserType = { age: number }  // ❌ 错误</span>
<span class="line"></span>
<span class="line">// 类型别名可以定义联合类型，接口不能</span>
<span class="line">type Status = &#39;success&#39; | &#39;error&#39; | &#39;loading&#39;</span>
<span class="line"></span>
<span class="line">// 类型别名可以定义元组</span>
<span class="line">type Point3D = [number, number, number]</span>
<span class="line"></span>
<span class="line">// 接口可以使用 extends，类型别名使用 &amp;</span>
<span class="line">interface A { a: number }</span>
<span class="line">interface B { b: string }</span>
<span class="line">interface C extends A, B {}  // ✅</span>
<span class="line"></span>
<span class="line">type D = { d: number }</span>
<span class="line">type E = { e: string }</span>
<span class="line">type F = D &amp; E  // ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-泛型" tabindex="-1"><a class="header-anchor" href="#_3-泛型"><span>3. <strong>泛型</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 泛型函数</span>
<span class="line">function identity&lt;T&gt;(arg: T): T {</span>
<span class="line">  return arg</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 泛型接口</span>
<span class="line">interface GenericIdentityFn&lt;T&gt; {</span>
<span class="line">  (arg: T): T</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 泛型类</span>
<span class="line">class GenericNumber&lt;T&gt; {</span>
<span class="line">  zeroValue: T</span>
<span class="line">  add: (x: T, y: T) =&gt; T</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 泛型约束</span>
<span class="line">interface Lengthwise {</span>
<span class="line">  length: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {</span>
<span class="line">  console.log(arg.length)</span>
<span class="line">  return arg</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 在泛型约束中使用类型参数</span>
<span class="line">function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K) {</span>
<span class="line">  return obj[key]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 泛型默认类型</span>
<span class="line">interface DefaultGeneric&lt;T = string&gt; {</span>
<span class="line">  value: T</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-高级类型" tabindex="-1"><a class="header-anchor" href="#_4-高级类型"><span>4. <strong>高级类型</strong></span></a></h2><h3 id="联合类型和交叉类型" tabindex="-1"><a class="header-anchor" href="#联合类型和交叉类型"><span>联合类型和交叉类型</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 联合类型</span>
<span class="line">type Status = &#39;success&#39; | &#39;error&#39; | &#39;loading&#39;</span>
<span class="line">type ID = number | string</span>
<span class="line"></span>
<span class="line">// 交叉类型</span>
<span class="line">type Named = { name: string }</span>
<span class="line">type Aged = { age: number }</span>
<span class="line">type Person = Named &amp; Aged  // { name: string; age: number }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型守卫和类型断言" tabindex="-1"><a class="header-anchor" href="#类型守卫和类型断言"><span>类型守卫和类型断言</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// typeof 类型守卫</span>
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
<span class="line">function isFish(pet: Bird | Fish): pet is Fish {</span>
<span class="line">  return (pet as Fish).swim !== undefined</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 类型断言</span>
<span class="line">let someValue: any = &quot;this is a string&quot;</span>
<span class="line">let strLength1: number = (someValue as string).length</span>
<span class="line">let strLength2: number = (&lt;string&gt;someValue).length  // JSX 中不能使用</span>
<span class="line"></span>
<span class="line">// 非空断言</span>
<span class="line">function liveDangerously(x?: number | null) {</span>
<span class="line">  console.log(x!.toFixed())  // 确定 x 不为 null/undefined</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型"><span>映射类型</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">type Readonly&lt;T&gt; = {</span>
<span class="line">  readonly [P in keyof T]: T[P]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">type Partial&lt;T&gt; = {</span>
<span class="line">  [P in keyof T]?: T[P]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">type Pick&lt;T, K extends keyof T&gt; = {</span>
<span class="line">  [P in K]: T[P]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">type Record&lt;K extends keyof any, T&gt; = {</span>
<span class="line">  [P in K]: T</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用示例</span>
<span class="line">interface Todo {</span>
<span class="line">  title: string</span>
<span class="line">  description: string</span>
<span class="line">  completed: boolean</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">type TodoPreview = Pick&lt;Todo, &quot;title&quot; | &quot;completed&quot;&gt;</span>
<span class="line">type ReadonlyTodo = Readonly&lt;Todo&gt;</span>
<span class="line">type PartialTodo = Partial&lt;Todo&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件类型" tabindex="-1"><a class="header-anchor" href="#条件类型"><span>条件类型</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">type TypeName&lt;T&gt; = T extends string ? &quot;string&quot;</span>
<span class="line">  : T extends number ? &quot;number&quot;</span>
<span class="line">  : T extends boolean ? &quot;boolean&quot;</span>
<span class="line">  : T extends undefined ? &quot;undefined&quot;</span>
<span class="line">  : T extends Function ? &quot;function&quot;</span>
<span class="line">  : &quot;object&quot;</span>
<span class="line"></span>
<span class="line">// 推断类型</span>
<span class="line">type ReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : any</span>
<span class="line">type Parameters&lt;T&gt; = T extends (...args: infer P) =&gt; any ? P : never</span>
<span class="line">type ConstructorParameters&lt;T&gt; = T extends new (...args: infer P) =&gt; any ? P : never</span>
<span class="line"></span>
<span class="line">// 分配条件类型</span>
<span class="line">type ToArray&lt;T&gt; = T extends any ? T[] : never</span>
<span class="line">type StrOrNumArray = ToArray&lt;string | number&gt;  // string[] | number[]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-实用类型工具" tabindex="-1"><a class="header-anchor" href="#_5-实用类型工具"><span>5. <strong>实用类型工具</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 内置实用类型</span>
<span class="line">interface User {</span>
<span class="line">  id: number</span>
<span class="line">  name: string</span>
<span class="line">  email: string</span>
<span class="line">  age: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 部分属性可选</span>
<span class="line">type PartialUser = Partial&lt;User&gt;</span>
<span class="line">// 所有属性只读</span>
<span class="line">type ReadonlyUser = Readonly&lt;User&gt;</span>
<span class="line">// 选取部分属性</span>
<span class="line">type UserPreview = Pick&lt;User, &quot;id&quot; | &quot;name&quot;&gt;</span>
<span class="line">// 排除部分属性</span>
<span class="line">type UserWithoutEmail = Omit&lt;User, &quot;email&quot;&gt;</span>
<span class="line">// 获取函数返回类型</span>
<span class="line">type ReturnType&lt;T&gt; = T extends (...args: any) =&gt; infer R ? R : any</span>
<span class="line">// 获取函数参数类型</span>
<span class="line">type Params = Parameters&lt;(x: number, y: string) =&gt; void&gt;  // [number, string]</span>
<span class="line">// 构造器参数类型</span>
<span class="line">type CtorParams = ConstructorParameters&lt;new (x: number) =&gt; any&gt;  // [number]</span>
<span class="line"></span>
<span class="line">// 模板字符串类型</span>
<span class="line">type EmailLocaleIDs = &quot;welcome_email&quot; | &quot;email_heading&quot;</span>
<span class="line">type FooterLocaleIDs = &quot;footer_title&quot; | &quot;footer_sendoff&quot;</span>
<span class="line">type AllLocaleIDs = \`\${EmailLocaleIDs | FooterLocaleIDs}_id\`  // 联合所有可能</span>
<span class="line">type Lang = &quot;en&quot; | &quot;zh&quot; | &quot;ja&quot;</span>
<span class="line">type LocaleMessageIDs = \`\${Lang}_\${AllLocaleIDs}\`</span>
<span class="line"></span>
<span class="line">// 内置字符串操作类型</span>
<span class="line">type Uppercase&lt;S extends string&gt;  // 转大写</span>
<span class="line">type Lowercase&lt;S extends string&gt;  // 转小写</span>
<span class="line">type Capitalize&lt;S extends string&gt;  // 首字母大写</span>
<span class="line">type Uncapitalize&lt;S extends string&gt;  // 首字母小写</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-类和面向对象" tabindex="-1"><a class="header-anchor" href="#_6-类和面向对象"><span>6. <strong>类和面向对象</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 基本类</span>
<span class="line">class Animal {</span>
<span class="line">  // 属性</span>
<span class="line">  public name: string</span>
<span class="line">  private age: number</span>
<span class="line">  protected color: string</span>
<span class="line">  readonly species: string</span>
<span class="line">  </span>
<span class="line">  // 静态属性</span>
<span class="line">  static classification = &quot;Animal&quot;</span>
<span class="line">  </span>
<span class="line">  // 构造函数</span>
<span class="line">  constructor(name: string, age: number) {</span>
<span class="line">    this.name = name</span>
<span class="line">    this.age = age</span>
<span class="line">    this.color = &quot;brown&quot;</span>
<span class="line">    this.species = &quot;unknown&quot;</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 方法</span>
<span class="line">  public move(distance: number = 0) {</span>
<span class="line">    console.log(\`\${this.name} moved \${distance}m.\`)</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 静态方法</span>
<span class="line">  static isAnimal(obj: any): boolean {</span>
<span class="line">    return obj instanceof Animal</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 存取器</span>
<span class="line">  private _fullName: string = &quot;&quot;</span>
<span class="line">  get fullName(): string {</span>
<span class="line">    return this._fullName</span>
<span class="line">  }</span>
<span class="line">  set fullName(name: string) {</span>
<span class="line">    this._fullName = name</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 继承</span>
<span class="line">class Dog extends Animal {</span>
<span class="line">  bark() {</span>
<span class="line">    console.log(&quot;Woof! Woof!&quot;)</span>
<span class="line">    // this.age  // ❌ 错误，private</span>
<span class="line">    console.log(this.color)  // ✅ protected</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  // 重写方法</span>
<span class="line">  move(distance = 5) {</span>
<span class="line">    console.log(&quot;Running...&quot;)</span>
<span class="line">    super.move(distance)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 抽象类</span>
<span class="line">abstract class Department {</span>
<span class="line">  constructor(public name: string) {}</span>
<span class="line">  </span>
<span class="line">  abstract printMeeting(): void  // 必须在派生类中实现</span>
<span class="line">  </span>
<span class="line">  printName(): void {</span>
<span class="line">    console.log(\`Department name: \${this.name}\`)</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 接口实现</span>
<span class="line">interface ClockInterface {</span>
<span class="line">  currentTime: Date</span>
<span class="line">  setTime(d: Date): void</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class Clock implements ClockInterface {</span>
<span class="line">  currentTime: Date = new Date()</span>
<span class="line">  setTime(d: Date) {</span>
<span class="line">    this.currentTime = d</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 类表达式</span>
<span class="line">const MyClass = class&lt;T&gt; {</span>
<span class="line">  content: T</span>
<span class="line">  constructor(value: T) {</span>
<span class="line">    this.content = value</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-模块和命名空间" tabindex="-1"><a class="header-anchor" href="#_7-模块和命名空间"><span>7. <strong>模块和命名空间</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 模块导出</span>
<span class="line">// math.ts</span>
<span class="line">export const pi = 3.14</span>
<span class="line">export function add(x: number, y: number): number {</span>
<span class="line">  return x + y</span>
<span class="line">}</span>
<span class="line">export class Calculator {</span>
<span class="line">  multiply(x: number, y: number): number {</span>
<span class="line">    return x * y</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">export default function() {</span>
<span class="line">  console.log(&quot;default export&quot;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 导入</span>
<span class="line">import { pi, add } from &#39;./math&#39;</span>
<span class="line">import calc from &#39;./math&#39;</span>
<span class="line">import * as MathUtils from &#39;./math&#39;</span>
<span class="line"></span>
<span class="line">// 重新导出</span>
<span class="line">export { pi as π } from &#39;./math&#39;</span>
<span class="line">export * from &#39;./math&#39;</span>
<span class="line"></span>
<span class="line">// 命名空间</span>
<span class="line">namespace Validation {</span>
<span class="line">  export interface StringValidator {</span>
<span class="line">    isAcceptable(s: string): boolean</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  const lettersRegexp = /^[A-Za-z]+$/</span>
<span class="line">  export class LettersOnlyValidator implements StringValidator {</span>
<span class="line">    isAcceptable(s: string) {</span>
<span class="line">      return lettersRegexp.test(s)</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用命名空间</span>
<span class="line">let validator = new Validation.LettersOnlyValidator()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-装饰器" tabindex="-1"><a class="header-anchor" href="#_8-装饰器"><span>8. <strong>装饰器</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 类装饰器</span>
<span class="line">function sealed(constructor: Function) {</span>
<span class="line">  Object.seal(constructor)</span>
<span class="line">  Object.seal(constructor.prototype)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 方法装饰器</span>
<span class="line">function enumerable(value: boolean) {</span>
<span class="line">  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {</span>
<span class="line">    descriptor.enumerable = value</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 访问器装饰器</span>
<span class="line">function configurable(value: boolean) {</span>
<span class="line">  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {</span>
<span class="line">    descriptor.configurable = value</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 属性装饰器</span>
<span class="line">function format(formatString: string) {</span>
<span class="line">  return function (target: any, propertyKey: string) {</span>
<span class="line">    // ...</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 参数装饰器</span>
<span class="line">function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {</span>
<span class="line">  // ...</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 装饰器使用</span>
<span class="line">@sealed</span>
<span class="line">class Greeter {</span>
<span class="line">  @format(&quot;Hello, %s&quot;)</span>
<span class="line">  greeting: string</span>
<span class="line">  </span>
<span class="line">  constructor(message: string) {</span>
<span class="line">    this.greeting = message</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  @enumerable(false)</span>
<span class="line">  greet(@required name: string) {</span>
<span class="line">    return \`\${this.greeting} \${name}\`</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-配置文件-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_9-配置文件-tsconfig-json"><span>9. <strong>配置文件 (tsconfig.json)</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    /* 基本选项 */</span>
<span class="line">    &quot;target&quot;: &quot;ES2020&quot;,           // 目标ECMAScript版本</span>
<span class="line">    &quot;module&quot;: &quot;ESNext&quot;,           // 模块系统</span>
<span class="line">    &quot;lib&quot;: [&quot;ES2020&quot;, &quot;DOM&quot;],     // 要包含的库文件</span>
<span class="line">    &quot;outDir&quot;: &quot;./dist&quot;,          // 输出目录</span>
<span class="line">    &quot;rootDir&quot;: &quot;./src&quot;,          // 输入文件目录</span>
<span class="line">    </span>
<span class="line">    /* 严格类型检查选项 */</span>
<span class="line">    &quot;strict&quot;: true,              // 启用所有严格类型检查选项</span>
<span class="line">    &quot;noImplicitAny&quot;: true,       // 禁止隐式的 any 类型</span>
<span class="line">    &quot;strictNullChecks&quot;: true,    // 严格的 null 检查</span>
<span class="line">    &quot;strictFunctionTypes&quot;: true, // 严格的函数类型检查</span>
<span class="line">    &quot;strictBindCallApply&quot;: true, // 严格的 bind/call/apply 检查</span>
<span class="line">    &quot;strictPropertyInitialization&quot;: true, // 严格的属性初始化检查</span>
<span class="line">    </span>
<span class="line">    /* 附加检查 */</span>
<span class="line">    &quot;noUnusedLocals&quot;: true,      // 报告未使用的局部变量</span>
<span class="line">    &quot;noUnusedParameters&quot;: true,  // 报告未使用的参数</span>
<span class="line">    &quot;noImplicitReturns&quot;: true,   // 函数必须有返回值</span>
<span class="line">    &quot;noFallthroughCasesInSwitch&quot;: true, // 防止switch语句贯穿</span>
<span class="line">    </span>
<span class="line">    /* 模块解析选项 */</span>
<span class="line">    &quot;moduleResolution&quot;: &quot;node&quot;,  // 模块解析策略</span>
<span class="line">    &quot;baseUrl&quot;: &quot;./&quot;,            // 解析非相对模块的基础目录</span>
<span class="line">    &quot;paths&quot;: {                  // 模块名到基于 baseUrl 的路径映射</span>
<span class="line">      &quot;@/*&quot;: [&quot;src/*&quot;]</span>
<span class="line">    },</span>
<span class="line">    &quot;esModuleInterop&quot;: true,    // 启用兼容性</span>
<span class="line">    &quot;allowSyntheticDefaultImports&quot;: true, // 允许从没有默认导出的模块中默认导入</span>
<span class="line">    </span>
<span class="line">    /* 源映射选项 */</span>
<span class="line">    &quot;sourceMap&quot;: true,          // 生成对应的 .map 文件</span>
<span class="line">    &quot;declaration&quot;: true,        // 生成声明文件 .d.ts</span>
<span class="line">    &quot;declarationMap&quot;: true,     // 为声明文件生成sourcemap</span>
<span class="line">    </span>
<span class="line">    /* 实验性选项 */</span>
<span class="line">    &quot;experimentalDecorators&quot;: true, // 启用装饰器</span>
<span class="line">    &quot;emitDecoratorMetadata&quot;: true,   // 为装饰器生成元数据</span>
<span class="line">    </span>
<span class="line">    /* 高级选项 */</span>
<span class="line">    &quot;skipLibCheck&quot;: true,       // 跳过声明文件的类型检查</span>
<span class="line">    &quot;forceConsistentCasingInFileNames&quot;: true, // 强制文件名大小写一致</span>
<span class="line">    &quot;resolveJsonModule&quot;: true   // 允许导入 JSON 文件</span>
<span class="line">  },</span>
<span class="line">  &quot;include&quot;: [</span>
<span class="line">    &quot;src/**/*&quot;</span>
<span class="line">  ],</span>
<span class="line">  &quot;exclude&quot;: [</span>
<span class="line">    &quot;node_modules&quot;,</span>
<span class="line">    &quot;dist&quot;,</span>
<span class="line">    &quot;**/*.test.ts&quot;</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-最佳实践" tabindex="-1"><a class="header-anchor" href="#_10-最佳实践"><span>10. <strong>最佳实践</strong></span></a></h2><h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断"><span>类型推断</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 让 TypeScript 推断类型</span>
<span class="line">const user = {  // 类型: { name: string; age: number }</span>
<span class="line">  name: &quot;Alice&quot;,</span>
<span class="line">  age: 30</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用 const 断言</span>
<span class="line">const config = {</span>
<span class="line">  api: &quot;https://api.example.com&quot;,</span>
<span class="line">  timeout: 5000</span>
<span class="line">} as const  // 所有属性变为 readonly，值变为字面量类型</span>
<span class="line"></span>
<span class="line">// 使用 satisfies</span>
<span class="line">const theme = {</span>
<span class="line">  primary: &quot;#1890ff&quot;,</span>
<span class="line">  secondary: &quot;#52c41a&quot;</span>
<span class="line">} satisfies Record&lt;string, string&gt;  // 验证但不改变类型</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束"><span>泛型约束</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 使用 extends 约束泛型</span>
<span class="line">function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {</span>
<span class="line">  return obj[key]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 使用条件类型</span>
<span class="line">type NonNullable&lt;T&gt; = T extends null | undefined ? never : T</span>
<span class="line"></span>
<span class="line">// 使用 infer 推断</span>
<span class="line">type PromiseReturnType&lt;T&gt; = T extends Promise&lt;infer R&gt; ? R : T</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实用类型模式" tabindex="-1"><a class="header-anchor" href="#实用类型模式"><span>实用类型模式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 从现有类型创建新类型</span>
<span class="line">type UserKeys = keyof User</span>
<span class="line">type UserType = User[keyof User]</span>
<span class="line"></span>
<span class="line">// 映射类型修改</span>
<span class="line">type Optional&lt;T&gt; = {</span>
<span class="line">  [P in keyof T]?: T[P]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">type ReadonlyPartial&lt;T&gt; = {</span>
<span class="line">  readonly [P in keyof T]?: T[P]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 递归类型</span>
<span class="line">type DeepPartial&lt;T&gt; = {</span>
<span class="line">  [P in keyof T]?: T[P] extends object ? DeepPartial&lt;T[P]&gt; : T[P]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-常见问题解决" tabindex="-1"><a class="header-anchor" href="#_11-常见问题解决"><span>11. <strong>常见问题解决</strong></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 处理第三方库类型</span>
<span class="line">declare module &#39;some-untyped-module&#39; {</span>
<span class="line">  export const someFunction: () =&gt; void</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 全局类型声明</span>
<span class="line">declare global {</span>
<span class="line">  interface Window {</span>
<span class="line">    myCustomProperty: string</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 类型断言</span>
<span class="line">const element = document.getElementById(&#39;root&#39;) as HTMLElement</span>
<span class="line">// 或</span>
<span class="line">const element = &lt;HTMLElement&gt;document.getElementById(&#39;root&#39;)</span>
<span class="line"></span>
<span class="line">// 非空断言</span>
<span class="line">const value = mightBeNull!.toString()</span>
<span class="line"></span>
<span class="line">// 类型守卫</span>
<span class="line">function isString(value: any): value is string {</span>
<span class="line">  return typeof value === &#39;string&#39;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">if (isString(value)) {</span>
<span class="line">  // 这里 value 是 string 类型</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 的强大之处在于它的类型系统可以帮助你在编译时捕获错误，提供更好的开发体验。掌握这些语法和模式，可以让你写出更安全、更可维护的代码。</p>`,70)])])}const t=n(i,[["render",p]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/TypeScript/TypeScript.html","title":"TypeScript","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773973753000,"contributors":[{"name":"flr13","username":"flr13","email":"flr13@qq.com","commits":1,"url":"https://github.com/flr13"}],"changelog":[{"hash":"5d91746427359485a38d4f83f1d66d3fd84128af","time":1773973753000,"email":"flr13@qq.com","author":"flr13","message":"Update README.md"}]},"filePathRelative":"前端技术/TypeScript/TypeScript.md"}');export{t as comp,r as data};
