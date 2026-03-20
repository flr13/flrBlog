import{_ as s,c as a,b as e,o as l}from"./app-Dq3hbFTu.js";const i={};function p(t,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="python-零基础入门核心教程-md-版" tabindex="-1"><a class="header-anchor" href="#python-零基础入门核心教程-md-版"><span>Python 零基础入门核心教程（MD 版）</span></a></h1><h2 id="教程说明" tabindex="-1"><a class="header-anchor" href="#教程说明"><span>教程说明</span></a></h2><p>本教程专为<strong>零基础小白</strong>设计，避开复杂概念，从环境搭建到基础语法、实战案例，层层递进，所有代码可直接运行，快速掌握 Python 核心基础，为后续数据分析、AI / 爬虫等方向打基础。</p><p><strong>学习原则</strong>：多敲代码＞死记硬背，每节代码至少手动运行 1 次，理解逻辑比记语法更重要。</p><h2 id="一、环境搭建-最简易版-新手首选" tabindex="-1"><a class="header-anchor" href="#一、环境搭建-最简易版-新手首选"><span>一、环境搭建（最简易版，新手首选）</span></a></h2><p>Python 是<strong>跨平台语言</strong>，支持 Windows/Mac/Linux，推荐用「Python 解释器 + VS Code」组合，轻量、易操作、适配所有场景。</p><h3 id="_1-安装-python-解释器" tabindex="-1"><a class="header-anchor" href="#_1-安装-python-解释器"><span>1. 安装 Python 解释器</span></a></h3><ol><li><p>官网下载：<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 官方下载</a>，选择<strong>3.9 + 版本</strong>（推荐 3.10/3.11，稳定无兼容问题）；</p></li><li><p>安装关键：<strong>勾选 Add Python to PATH</strong>（添加到系统环境变量，否则无法在命令行运行 Python），然后一路下一步；</p></li><li><p>验证安装：打开电脑「命令提示符（CMD）/ 终端」，输入<code>python --version</code>，显示版本号（如 Python 3.10.12）即安装成功。</p></li></ol><h3 id="_2-安装-vs-code-代码编辑器" tabindex="-1"><a class="header-anchor" href="#_2-安装-vs-code-代码编辑器"><span>2. 安装 VS Code（代码编辑器）</span></a></h3><ol><li><p>官网下载：<a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">VS Code 官方下载</a>，免费安装，一路下一步；</p></li><li><p>安装 Python 插件：打开 VS Code，左侧点击「扩展」，搜索<strong>Python</strong>，安装微软官方的 Python 插件（带蓝色对勾），自动适配语法高亮、代码提示、运行功能。</p></li></ol><h3 id="_3-第一个-python-程序-hello-world" tabindex="-1"><a class="header-anchor" href="#_3-第一个-python-程序-hello-world"><span>3. 第一个 Python 程序（Hello World）</span></a></h3><ol><li><p>VS Code 中新建文件夹，新建文件命名为<code>hello.py</code>（<strong>后缀必须是.py</strong>，代表 Python 文件）；</p></li><li><p>输入代码：</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 打印输出，Python中最基础的语句</span>
<span class="line"></span>
<span class="line">print(&quot;Hello Python! 你好，Python！&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>运行代码：右键点击文件 → 「在终端中运行 Python 文件」，终端显示<code>Hello Python! 你好，Python！</code>，即成功运行。</li></ol><h2 id="二、python-基础语法-核心必学-极简版" tabindex="-1"><a class="header-anchor" href="#二、python-基础语法-核心必学-极简版"><span>二、Python 基础语法（核心必学，极简版）</span></a></h2><p>Python 语法<strong>无分号、靠缩进</strong>（4 个空格 / 1 个 Tab），贴近自然语言，以下是零基础必掌握的核心知识点，每个知识点配可运行代码。</p><h3 id="_1-注释-代码说明-不执行" tabindex="-1"><a class="header-anchor" href="#_1-注释-代码说明-不执行"><span>1. 注释（代码说明，不执行）</span></a></h3><p>注释是给自己 / 别人看的代码说明，Python 不会执行注释内容，分两种：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 单行注释：以#开头，注释一行内容（最常用）</span>
<span class="line"></span>
<span class="line">print(&quot;这是执行的代码&quot;)  # 行尾也可以加单行注释</span>
<span class="line"></span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">多行注释：用三个双引号/单引号包裹，注释多行内容</span>
<span class="line"></span>
<span class="line">一般用于文件开头、函数/类的说明</span>
<span class="line"></span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">&#39;&#39;&#39;</span>
<span class="line"></span>
<span class="line">这也是多行注释，和双引号用法一致</span>
<span class="line"></span>
<span class="line">&#39;&#39;&#39;</span>
<span class="line"></span>
<span class="line">print(&quot;多行注释不影响代码执行&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-变量与数据类型-存储数据的容器" tabindex="-1"><a class="header-anchor" href="#_2-变量与数据类型-存储数据的容器"><span>2. 变量与数据类型（存储数据的容器）</span></a></h3><h4 id="_1-变量定义-直接赋值-无需声明类型-python-自动识别" tabindex="-1"><a class="header-anchor" href="#_1-变量定义-直接赋值-无需声明类型-python-自动识别"><span>（1）变量定义：<strong>直接赋值，无需声明类型</strong>（Python 自动识别）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">\\# 变量名 <span class="token operator">=</span> 变量值，等号<span class="token operator">=</span>是赋值符号</span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">&quot;小明&quot;</span>  <span class="token comment"># 字符串类型</span></span>
<span class="line"></span>
<span class="line">age <span class="token operator">=</span> <span class="token number">18</span>       <span class="token comment"># 整数类型</span></span>
<span class="line"></span>
<span class="line">height <span class="token operator">=</span> <span class="token number">175.5</span> <span class="token comment"># 浮点数类型（小数）</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">is</span>\\_student <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token comment"># 布尔类型（只有True/False两个值，代表真/假）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>变量名规则</strong>：字母 / 数字 / 下划线组成，不能以数字开头，区分大小写（如<code>Age</code>和<code>age</code>是两个变量），不用中文 / 特殊符号。</p><h4 id="_2-常用数据类型-4-种基础类型-必记" tabindex="-1"><a class="header-anchor" href="#_2-常用数据类型-4-种基础类型-必记"><span>（2）常用数据类型（4 种基础类型，必记）</span></a></h4><table><thead><tr><th>类型名称</th><th>英文</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>字符串</td><td>str</td><td>文本内容，用单 / 双引号包裹</td><td><code>name = &quot;Python&quot;</code>、<code>msg = &#39;学习Python&#39;</code></td></tr><tr><td>整数</td><td>int</td><td>正负数 / 0，无小数</td><td><code>num = 100</code>、<code>score = -60</code></td></tr><tr><td>浮点数</td><td>float</td><td>小数，包含正负数</td><td><code>price = 9.9</code>、<code>weight = -2.5</code></td></tr><tr><td>布尔值</td><td>bool</td><td>只有 True/False</td><td><code>is_ok = True</code>、<code>is_error = False</code></td></tr></tbody></table><h4 id="_3-类型查看与转换" tabindex="-1"><a class="header-anchor" href="#_3-类型查看与转换"><span>（3）类型查看与转换</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">\\# <span class="token builtin">type</span><span class="token punctuation">(</span>变量<span class="token punctuation">)</span>：查看变量的数据类型</span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出\\&lt;class &#39;int&#39;&gt;，说明a是整数类型</span></span>
<span class="line"></span>
<span class="line">b <span class="token operator">=</span> <span class="token string">&quot;18&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出\\&lt;class &#39;str&#39;&gt;，说明b是字符串类型</span></span>
<span class="line"></span>
<span class="line">\\# 类型转换：类型名<span class="token punctuation">(</span>变量<span class="token punctuation">)</span>，常用<span class="token builtin">int</span><span class="token operator">/</span><span class="token builtin">str</span><span class="token operator">/</span><span class="token builtin">float</span>互转</span>
<span class="line"></span>
<span class="line">c <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>      <span class="token comment"># 字符串转整数，b是&quot;18&quot;，转成18</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>c <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>    <span class="token comment"># 输出20，整数可以做加法</span></span>
<span class="line"></span>
<span class="line">d <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>      <span class="token comment"># 整数转字符串，a是18，转成&quot;18&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>d <span class="token operator">+</span> <span class="token string">&quot;岁&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 输出18岁，字符串可以拼接</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-输入与输出-和用户交互" tabindex="-1"><a class="header-anchor" href="#_3-输入与输出-和用户交互"><span>3. 输入与输出（和用户交互）</span></a></h3><h4 id="_1-输出-print-打印内容到终端-最常用" tabindex="-1"><a class="header-anchor" href="#_1-输出-print-打印内容到终端-最常用"><span>（1）输出：<code>print()</code>，打印内容到终端（最常用）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">\\# 直接输出单个内容</span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">\\# 输出多个内容，用逗号分隔，自动空格</span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;姓名：&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;年龄：&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">\\# 格式化输出（推荐，更美观）：f<span class="token operator">-</span>string，字符串前加f，变量用<span class="token punctuation">{</span><span class="token punctuation">}</span>包裹</span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">&quot;小红&quot;</span></span>
<span class="line"></span>
<span class="line">age <span class="token operator">=</span> <span class="token number">17</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;我的名字是</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">，今年</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">岁&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># 输出：我的名字是小红，今年17岁</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-输入-input-获取用户在终端输入的内容" tabindex="-1"><a class="header-anchor" href="#_2-输入-input-获取用户在终端输入的内容"><span>（2）输入：<code>input()</code>，获取用户在终端输入的内容</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">\\# <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;提示语&quot;</span><span class="token punctuation">)</span>，用户输入的内容\\<span class="token operator">*</span>\\<span class="token operator">*</span>默认是字符串类型\\<span class="token operator">*</span>\\<span class="token operator">*</span></span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的名字：&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">age <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的年龄：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输入年龄转成整数</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;你好</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">，明年你</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">岁&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行效果</strong>：终端显示「请输入你的名字：」，输入后按回车，再提示输入年龄，最后输出结果，实现和用户的简单交互。</p><h3 id="_4-运算符-做计算-判断-4-类核心" tabindex="-1"><a class="header-anchor" href="#_4-运算符-做计算-判断-4-类核心"><span>4. 运算符（做计算 / 判断，4 类核心）</span></a></h3><h4 id="_1-算术运算符-做数学计算-最常用" tabindex="-1"><a class="header-anchor" href="#_1-算术运算符-做数学计算-最常用"><span>（1）算术运算符（做数学计算，最常用）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"></span>
<span class="line">b <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>  <span class="token comment"># 加法，13</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>  <span class="token comment"># 减法，7</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a \\<span class="token operator">*</span> b<span class="token punctuation">)</span>  <span class="token comment"># 乘法，30</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">/</span> b<span class="token punctuation">)</span>  <span class="token comment"># 除法，3.3333333333333335</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">//</span> b<span class="token punctuation">)</span> <span class="token comment"># 整除，取商，3</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">%</span> b<span class="token punctuation">)</span>  <span class="token comment"># 取余，取余数，1</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a \\<span class="token operator">*</span>\\<span class="token operator">*</span> b<span class="token punctuation">)</span> <span class="token comment"># 幂运算，a的b次方，1000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-赋值运算符-给变量赋值-最常用" tabindex="-1"><a class="header-anchor" href="#_2-赋值运算符-给变量赋值-最常用"><span>（2）赋值运算符（给变量赋值，+=/-= 最常用）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">x <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">+=</span> <span class="token number">2</span>  <span class="token comment"># 等价于x = x + 2，x变成7</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">-=</span> <span class="token number">3</span>  <span class="token comment"># 等价于x = x - 3，x变成4</span></span>
<span class="line"></span>
<span class="line">x \\<span class="token operator">*=</span> <span class="token number">2</span>  <span class="token comment"># 等价于x = x \\* 2，x变成8</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-比较运算符-判断大小-返回布尔值-true-false" tabindex="-1"><a class="header-anchor" href="#_3-比较运算符-判断大小-返回布尔值-true-false"><span>（3）比较运算符（判断大小，返回布尔值 True/False）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"></span>
<span class="line">b <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span>   <span class="token comment"># 大于，True</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span>   <span class="token comment"># 小于，False</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>  <span class="token comment"># 等于，判断两个值是否相等，False（注意：是==，不是=）</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span>  <span class="token comment"># 不等于，True</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">&gt;=</span> b<span class="token punctuation">)</span>  <span class="token comment"># 大于等于，True</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span>  <span class="token comment"># 小于等于，False</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-逻辑运算符-多条件判断-and-or-not" tabindex="-1"><a class="header-anchor" href="#_4-逻辑运算符-多条件判断-and-or-not"><span>（4）逻辑运算符（多条件判断，and/or/not）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">\\# <span class="token keyword">and</span>：且，所有条件都为<span class="token boolean">True</span>，结果才是<span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">&gt;</span><span class="token number">5</span> <span class="token keyword">and</span> <span class="token number">8</span><span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># True</span></span>
<span class="line"></span>
<span class="line">\\# <span class="token keyword">or</span>：或，只要有一个条件为<span class="token boolean">True</span>，结果就是<span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">&lt;</span><span class="token number">5</span> <span class="token keyword">or</span> <span class="token number">8</span><span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># True</span></span>
<span class="line"></span>
<span class="line">\\# <span class="token keyword">not</span>：非，取反，<span class="token boolean">True</span>变<span class="token boolean">False</span>，<span class="token boolean">False</span>变<span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token number">10</span><span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># False</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-条件判断-根据条件执行不同代码-if-else" tabindex="-1"><a class="header-anchor" href="#_5-条件判断-根据条件执行不同代码-if-else"><span>5. 条件判断（根据条件执行不同代码，if-else）</span></a></h3><p>核心：<strong>满足条件执行 A，不满足执行 B</strong>，靠缩进区分代码块，格式固定，必记！</p><h4 id="_1-基础版-if" tabindex="-1"><a class="header-anchor" href="#_1-基础版-if"><span>（1）基础版：if</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">age <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&amp;</span><span class="token comment">#x20;   print(&quot;你是成年人&quot;)  # 条件满足（age&gt;=18），执行这行（注意缩进）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-常用版-if-else" tabindex="-1"><a class="header-anchor" href="#_2-常用版-if-else"><span>（2）常用版：if-else</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">age = int(input(&quot;请输入你的年龄：&quot;))</span>
<span class="line"></span>
<span class="line">if age &gt;= 18:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;你是成年人，可进入&quot;)</span>
<span class="line"></span>
<span class="line">else:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;你是未成年人，禁止进入&quot;) # 条件不满足，执行这行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-多条件版-if-elif-else" tabindex="-1"><a class="header-anchor" href="#_3-多条件版-if-elif-else"><span>（3）多条件版：if-elif-else</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">score = int(input(&quot;请输入你的分数：&quot;))</span>
<span class="line"></span>
<span class="line">if score &gt;= 90:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;成绩优秀&quot;)</span>
<span class="line"></span>
<span class="line">elif score &gt;= 80:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;成绩良好&quot;)</span>
<span class="line"></span>
<span class="line">elif score &gt;= 60:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;成绩及格&quot;)</span>
<span class="line"></span>
<span class="line">else:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;成绩不及格，需要补考&quot;)</span>
<span class="line"></span>
<span class="line">\\# 注意：elif可以有多个，else可选，条件满足后直接跳出，不会执行后续判断</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-循环-重复执行代码-for-while-必学-for-循环" tabindex="-1"><a class="header-anchor" href="#_6-循环-重复执行代码-for-while-必学-for-循环"><span>6. 循环（重复执行代码，for/while，必学 for 循环）</span></a></h3><h4 id="_1-for-循环-遍历序列-最常用-如遍历数字-字符串-列表" tabindex="-1"><a class="header-anchor" href="#_1-for-循环-遍历序列-最常用-如遍历数字-字符串-列表"><span>（1）for 循环（遍历序列，最常用，如遍历数字 / 字符串 / 列表）</span></a></h4><p><strong>经典用法：遍历数字范围</strong><code>range()</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# range(n)：生成0到n-1的整数序列</span>
<span class="line"></span>
<span class="line">for i in range(5):</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(i) # 输出0,1,2,3,4（换行）</span>
<span class="line"></span>
<span class="line">\\# range(a,b)：生成a到b-1的整数序列</span>
<span class="line"></span>
<span class="line">for i in range(1,6):</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(f&quot;第{i}次循环&quot;) # 输出第1到第5次循环</span>
<span class="line"></span>
<span class="line">\\# range(a,b,step)：步长step，每次加step</span>
<span class="line"></span>
<span class="line">for i in range(1,10,2):</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(i) # 输出1,3,5,7,9（步长2，隔一个数）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-while-循环-条件满足就循环-直到条件不满足" tabindex="-1"><a class="header-anchor" href="#_2-while-循环-条件满足就循环-直到条件不满足"><span>（2）while 循环（条件满足就循环，直到条件不满足）</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 格式：while 条件: 循环代码</span>
<span class="line"></span>
<span class="line">count = 1</span>
<span class="line"></span>
<span class="line">while count &lt;= 3:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(f&quot;第{count}次执行while循环&quot;)</span>
<span class="line"></span>
<span class="line">&amp;#x20;   count += 1 # 必须让条件最终不满足，否则死循环！</span>
<span class="line"></span>
<span class="line">\\# 输出：第1/2/3次执行while循环</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：while 循环必须加「变量自增 / 自减」，否则条件永远满足，进入<strong>死循环</strong>（按 Ctrl+C 终止）。</p><h4 id="_3-循环终止-break-continue-可选" tabindex="-1"><a class="header-anchor" href="#_3-循环终止-break-continue-可选"><span>（3）循环终止：break/continue（可选）</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# break：直接终止整个循环</span>
<span class="line"></span>
<span class="line">for i in range(1,6):</span>
<span class="line"></span>
<span class="line">&amp;#x20;   if i == 3:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       break</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(i) # 输出1,2（i=3时终止循环）</span>
<span class="line"></span>
<span class="line">\\# continue：跳过当前次循环，继续下一次</span>
<span class="line"></span>
<span class="line">for i in range(1,6):</span>
<span class="line"></span>
<span class="line">&amp;#x20;   if i == 3:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       continue</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(i) # 输出1,2,4,5（跳过i=3）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-列表-存储多个数据的容器-最常用" tabindex="-1"><a class="header-anchor" href="#_7-列表-存储多个数据的容器-最常用"><span>7. 列表（存储多个数据的容器，最常用）</span></a></h3><p>Python 中最基础的<strong>有序可变</strong>容器，可存储不同类型数据，用<code>[]</code>定义。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 定义列表：变量 = \\[元素1, 元素2, 元素3,...]</span>
<span class="line"></span>
<span class="line">student = \\[&quot;小明&quot;, 18, 175.5, True]</span>
<span class="line"></span>
<span class="line">\\# 访问列表元素：列表\\[索引]，索引从0开始！</span>
<span class="line"></span>
<span class="line">print(student\\[0]) # 输出第一个元素：小明</span>
<span class="line"></span>
<span class="line">print(student\\[1]) # 输出第二个元素：18</span>
<span class="line"></span>
<span class="line">\\# 常用操作：增/删/查/改</span>
<span class="line"></span>
<span class="line">student.append(&quot;男&quot;) # 增加：在列表末尾加元素</span>
<span class="line"></span>
<span class="line">student\\[0] = &quot;小红&quot;  # 修改：通过索引修改元素</span>
<span class="line"></span>
<span class="line">student.remove(18)   # 删除：删除指定元素</span>
<span class="line"></span>
<span class="line">print(student)       # 输出修改后的列表：\\[&#39;小红&#39;, 175.5, True, &#39;男&#39;]</span>
<span class="line"></span>
<span class="line">\\# 遍历列表（最常用，用for循环）</span>
<span class="line"></span>
<span class="line">fruits = \\[&quot;苹果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;]</span>
<span class="line"></span>
<span class="line">for fruit in fruits:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(f&quot;水果：{fruit}&quot;) # 依次输出每个水果</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、函数-封装重复代码-复用性高" tabindex="-1"><a class="header-anchor" href="#三、函数-封装重复代码-复用性高"><span>三、函数（封装重复代码，复用性高）</span></a></h2><p>函数是<strong>封装好的可重复执行的代码块</strong>，避免重复写相同代码，Python 内置了大量函数（如<code>print()</code>/<code>input()</code>），也可以自定义函数。</p><h3 id="_1-自定义函数-核心格式" tabindex="-1"><a class="header-anchor" href="#_1-自定义函数-核心格式"><span>1. 自定义函数（核心格式）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 定义函数：def 函数名(参数): 函数体 return 返回值</span>
<span class="line"></span>
<span class="line">def add(a, b):</span>
<span class="line"></span>
<span class="line">&amp;#x20;   &quot;&quot;&quot;求两个数的和&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">&amp;#x20;   result = a + b</span>
<span class="line"></span>
<span class="line">&amp;#x20;   return result # 返回计算结果，可选</span>
<span class="line"></span>
<span class="line">\\# 调用函数：函数名(参数)，获取返回值</span>
<span class="line"></span>
<span class="line">sum1 = add(3,5)</span>
<span class="line"></span>
<span class="line">sum2 = add(10,20)</span>
<span class="line"></span>
<span class="line">print(sum1, sum2) # 输出8 30</span>
<span class="line"></span>
<span class="line">\\# 无参数无返回值的函数（简单）</span>
<span class="line"></span>
<span class="line">def say\\_hello():</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;你好，Python函数！&quot;)</span>
<span class="line"></span>
<span class="line">say\\_hello() # 调用：直接输出内容</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>核心</strong>：定义时用<code>def</code>，调用时直接写函数名，参数可多可少，返回值<code>return</code>可选（无 return 则返回<code>None</code>）。</p><h3 id="_2-内置函数-python-自带-直接用-必记几个" tabindex="-1"><a class="header-anchor" href="#_2-内置函数-python-自带-直接用-必记几个"><span>2. 内置函数（Python 自带，直接用，必记几个）</span></a></h3><p>Python 无需定义，直接调用的函数，日常开发高频使用：</p><ul><li><p><code>print()</code>：输出</p></li><li><p><code>input()</code>：输入</p></li><li><p><code>type()</code>：查看数据类型</p></li><li><p><code>len()</code>：获取长度（列表 / 字符串等）</p></li><li><p><code>int()/str()/float()</code>：类型转换</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">s = &quot;Python&quot;</span>
<span class="line"></span>
<span class="line">print(len(s)) # 输出6，获取字符串长度</span>
<span class="line"></span>
<span class="line">lst = \\[1,2,3]</span>
<span class="line"></span>
<span class="line">print(len(lst)) # 输出3，获取列表长度</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、实战小案例-零基础可运行-巩固基础" tabindex="-1"><a class="header-anchor" href="#四、实战小案例-零基础可运行-巩固基础"><span>四、实战小案例（零基础可运行，巩固基础）</span></a></h2><h3 id="案例-1-简易计算器-实现两数的加减乘除" tabindex="-1"><a class="header-anchor" href="#案例-1-简易计算器-实现两数的加减乘除"><span>案例 1：简易计算器（实现两数的加减乘除）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 简易计算器</span>
<span class="line"></span>
<span class="line">a = float(input(&quot;请输入第一个数：&quot;))</span>
<span class="line"></span>
<span class="line">b = float(input(&quot;请输入第二个数：&quot;))</span>
<span class="line"></span>
<span class="line">op = input(&quot;请输入运算符（+/-/\\*/÷）：&quot;)</span>
<span class="line"></span>
<span class="line">if op == &quot;+&quot;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(f&quot;{a}{op}{b} = {a+b}&quot;)</span>
<span class="line"></span>
<span class="line">elif op == &quot;-&quot;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(f&quot;{a}{op}{b} = {a-b}&quot;)</span>
<span class="line"></span>
<span class="line">elif op == &quot;\\*&quot;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(f&quot;{a}{op}{b} = {a\\*b}&quot;)</span>
<span class="line"></span>
<span class="line">elif op == &quot;÷&quot;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   if b == 0:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       print(&quot;除数不能为0！&quot;)</span>
<span class="line"></span>
<span class="line">&amp;#x20;   else:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       print(f&quot;{a}{op}{b} = {a/b}&quot;)</span>
<span class="line"></span>
<span class="line">else:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   print(&quot;输入的运算符不合法！&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-2-猜数字游戏-循环-条件判断" tabindex="-1"><a class="header-anchor" href="#案例-2-猜数字游戏-循环-条件判断"><span>案例 2：猜数字游戏（循环 + 条件判断）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 猜数字游戏：预设数字，用户猜，提示大/小，直到猜对</span>
<span class="line"></span>
<span class="line">import random # 导入随机数模块</span>
<span class="line"></span>
<span class="line">target = random.randint(1,10) # 生成1-10的随机整数</span>
<span class="line"></span>
<span class="line">while True:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   guess = int(input(&quot;请猜1-10之间的整数：&quot;))</span>
<span class="line"></span>
<span class="line">&amp;#x20;   if guess &gt; target:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       print(&quot;猜大了，再试试！&quot;)</span>
<span class="line"></span>
<span class="line">&amp;#x20;   elif guess &lt; target:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       print(&quot;猜小了，再试试！&quot;)</span>
<span class="line"></span>
<span class="line">&amp;#x20;   else:</span>
<span class="line"></span>
<span class="line">&amp;#x20;       print(&quot;恭喜你，猜对了！&quot;)</span>
<span class="line"></span>
<span class="line">&amp;#x20;       break # 猜对后终止循环</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、后续学习方向-基础掌握后-按需选择" tabindex="-1"><a class="header-anchor" href="#五、后续学习方向-基础掌握后-按需选择"><span>五、后续学习方向（基础掌握后，按需选择）</span></a></h2><p>Python 基础语法掌握后，可根据自己的兴趣选择细分方向，<strong>所有方向都基于本次学的基础语法</strong>，无需重新学语言：</p><ol><li><p><strong>数据分析 / 可视化</strong>（最热门，就业友好）：学习 Pandas/NumPy/Matplotlib，处理 Excel/CSV 数据，做图表；</p></li><li><p><strong>网络爬虫</strong>（简单易上手）：学习 Requests/BeautifulSoup/Scrapy，爬取网页数据（如商品、新闻）；</p></li><li><p><strong>自动化办公</strong>（提升效率）：学习 OpenPyXL/PyPDF2/Selenium，实现 Excel/Word/PPT 自动化，网页自动操作；</p></li><li><p><strong>人工智能 / 机器学习</strong>（前沿方向）：先学 Python 基础，再学 PyTorch/TensorFlow/Transformers，入门 AI/GAI；</p></li><li><p><strong>Web 开发</strong>：学习 Flask/FastAPI/Django，开发网站 / 后端 API。</p></li></ol><h2 id="六、学习技巧-零基础避坑" tabindex="-1"><a class="header-anchor" href="#六、学习技巧-零基础避坑"><span>六、学习技巧（零基础避坑）</span></a></h2><ol><li><p><strong>多敲代码</strong>：看 10 遍不如敲 1 遍，代码报错是正常的，解决报错的过程就是进步；</p></li><li><p><strong>善用报错信息</strong>：终端报错时，看最后一行的错误提示，百度错误信息即可找到解决方案；</p></li><li><p><strong>找简单项目练手</strong>：基础掌握后，做小型实战项目（如批量重命名文件、爬取简单网页），不要只学语法；</p></li><li><p><strong>不用死记硬背</strong>：语法记不住可以查，核心是理解<strong>逻辑</strong>（条件判断 / 循环 / 函数的作用）；</p></li><li><p><strong>用官方文档</strong>：Python 官方文档（<a href="https://docs.python.org/zh-cn/3/" target="_blank" rel="noopener noreferrer">Python Docs</a>）是最权威的资料，不懂就查。</p></li></ol><h2 id="七、常见问题解决" tabindex="-1"><a class="header-anchor" href="#七、常见问题解决"><span>七、常见问题解决</span></a></h2><ol><li><p><strong>运行 Python 提示 “不是内部或外部命令”</strong>：安装 Python 时没勾选「Add Python to PATH」，重新安装并勾选，或手动配置环境变量；</p></li><li><p><strong>代码缩进报错</strong>：Python 缩进必须统一（要么全用 4 个空格，要么全用 Tab），不能混合使用；</p></li><li><p><strong>中文乱码</strong>：VS Code 中新建文件时，选择编码为<strong>UTF-8</strong>（默认就是，无需修改）；</p></li><li><p><strong>模块导入报错</strong>：如<code>import random</code>报错，一般是 Python 安装损坏，重新安装即可。</p></li></ol><hr><p><strong>入门总结</strong>：本教程覆盖了 Python 零基础必学的<strong>所有核心基础</strong>，只要能独立敲完所有代码并运行成功，就代表 Python 入门了！后续只需根据方向深入学习对应的库和框架即可，Python 的核心优势就是<strong>生态丰富</strong>，所有复杂功能都有现成的库，无需重复造轮子。</p><p>我可以帮你把这份教程整理成<strong>纯代码版的 MD 文件</strong>（只保留可运行代码，去除多余说明），方便你直接复制到 VS Code 中运行，需要吗？</p><blockquote><p>（注：文档部分内容可能由 AI 生成）</p></blockquote>`,87)])])}const d=s(i,[["render",p]]),o=JSON.parse('{"path":"/%E5%85%B6%E4%BB%96/Python%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E6%A0%B8%E5%BF%83%E6%95%99%E7%A8%8B%EF%BC%88MD%E7%89%88%EF%BC%89.html","title":"Python 零基础入门核心教程（MD 版）","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773973753000,"contributors":[{"name":"flr13","username":"flr13","email":"flr13@qq.com","commits":1,"url":"https://github.com/flr13"}],"changelog":[{"hash":"5d91746427359485a38d4f83f1d66d3fd84128af","time":1773973753000,"email":"flr13@qq.com","author":"flr13","message":"Update README.md"}]},"filePathRelative":"其他/Python零基础入门核心教程（MD版）.md"}');export{d as comp,o as data};
