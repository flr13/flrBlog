import{_ as n,c as a,b as e,o as l}from"./app-Dq3hbFTu.js";const i={};function t(d,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="vue3语法与教程" tabindex="-1"><a class="header-anchor" href="#vue3语法与教程"><span><a href="https://blog.csdn.net/2302_76329106/article/details/139447910" target="_blank" rel="noopener noreferrer">vue3语法与教程</a></span></a></h1><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><ol><li><h5 id="性能" tabindex="-1"><a class="header-anchor" href="#性能"><span>性能</span></a></h5><ul><li>打包大小减少41%</li><li>初次渲染快51%，更新渲染快133%</li><li>内存占用减少54%</li></ul></li><li><h5 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h5><ul><li>使用Proxy 代替Object.defineProperty 实现双向数据绑定</li><li>重写虚拟DOM的实现和Tree-Shaking</li><li>vue3 更好的支持typescript</li></ul></li><li><h5 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性"><span>新特性</span></a></h5><p>(1) <strong>composition API（组合式api）</strong></p><ul><li>setup配置</li><li>ref和reactive</li><li>watch 和watchEffect</li><li>provide和inject</li></ul><p>(2) <strong>提供了新的内置组件</strong></p><ul><li>Fragment</li><li>Teleport</li><li>Suspense</li></ul><p>(3) <strong>其他改变</strong></p><ul><li>新的生命周期钩子</li><li>移除keyCode 作为v-on的修饰符</li></ul></li></ol><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token number">1</span>. 确保你的vue-cli 脚手架版本在4.5.0以上，这样才能创建</span>
<span class="line"><span class="token number">2</span>. 检查脚手架版本  vue <span class="token parameter variable">-V</span> 或 vue <span class="token parameter variable">--version</span></span>
<span class="line"><span class="token number">3</span>. 如果版本低话，重新安装vue-cli   <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli  </span>
<span class="line"><span class="token number">4</span>. vue create vue3-project</span>
<span class="line"><span class="token number">5</span>. <span class="token builtin class-name">cd</span> vue3-project</span>
<span class="line"><span class="token number">6</span>. <span class="token function">npm</span> run serve 启动项目</span>
<span class="line"> <span class="token function">npm</span> init vue@latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="_1-组合式-api-composition-api" tabindex="-1"><a class="header-anchor" href="#_1-组合式-api-composition-api"><span>1. <strong>组合式 API (Composition API)</strong></span></a></h3><h4 id="选项式-api-vs-组合式-api" tabindex="-1"><a class="header-anchor" href="#选项式-api-vs-组合式-api"><span>选项式 API vs 组合式 API</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!-- 选项式 API --&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  data() {</span>
<span class="line">    return { count: 0 }</span>
<span class="line">  },</span>
<span class="line">  methods: {</span>
<span class="line">    increment() {</span>
<span class="line">      this.count++</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 组合式 API --&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const count = ref(0)</span>
<span class="line">const increment = () =&gt; {</span>
<span class="line">  count.value++</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-响应式基础" tabindex="-1"><a class="header-anchor" href="#_2-响应式基础"><span>2. <strong>响应式基础</strong></span></a></h3><h4 id="ref-和-reactive" tabindex="-1"><a class="header-anchor" href="#ref-和-reactive"><span>ref 和 reactive</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { ref, reactive, computed, watch } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">// 基本类型使用 ref</span>
<span class="line">const count = ref(0)</span>
<span class="line">console.log(count.value) // 访问值</span>
<span class="line"></span>
<span class="line">// 对象使用 reactive</span>
<span class="line">const state = reactive({</span>
<span class="line">  name: &#39;Vue&#39;,</span>
<span class="line">  version: 3</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 计算属性</span>
<span class="line">const doubleCount = computed(() =&gt; count.value * 2)</span>
<span class="line"></span>
<span class="line">// 侦听器</span>
<span class="line">watch(count, (newVal, oldVal) =&gt; {</span>
<span class="line">  console.log(\`count changed: \${oldVal} -&gt; \${newVal}\`)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 立即执行 + 深度监听</span>
<span class="line">watch(</span>
<span class="line">  () =&gt; state.name,</span>
<span class="line">  (newVal) =&gt; {</span>
<span class="line">    console.log(\`Name changed: \${newVal}\`)</span>
<span class="line">  },</span>
<span class="line">  { immediate: true, deep: true }</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-组件通信" tabindex="-1"><a class="header-anchor" href="#_3-组件通信"><span>3. <strong>组件通信</strong></span></a></h3><h4 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!-- 子组件 --&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const props = defineProps({</span>
<span class="line">  title: String,</span>
<span class="line">  count: {</span>
<span class="line">    type: Number,</span>
<span class="line">    default: 0</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;h2&gt;{{ title }}&lt;/h2&gt;</span>
<span class="line">  &lt;p&gt;{{ count }}&lt;/p&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 父组件 --&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import ChildComponent from &#39;./ChildComponent.vue&#39;</span>
<span class="line"></span>
<span class="line">const count = ref(0)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;ChildComponent title=&quot;计数器&quot; :count=&quot;count&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件发射" tabindex="-1"><a class="header-anchor" href="#事件发射"><span>事件发射</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!-- 子组件 --&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const emit = defineEmits([&#39;update&#39;, &#39;submit&#39;])</span>
<span class="line"></span>
<span class="line">const handleClick = () =&gt; {</span>
<span class="line">  emit(&#39;update&#39;, 1)</span>
<span class="line">  emit(&#39;submit&#39;, { data: &#39;test&#39; })</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 父组件 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;ChildComponent @update=&quot;handleUpdate&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!-- 子组件 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;container&quot;&gt;</span>
<span class="line">    &lt;header&gt;</span>
<span class="line">      &lt;slot name=&quot;header&quot; :title=&quot;title&quot;&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/header&gt;</span>
<span class="line">    &lt;main&gt;</span>
<span class="line">      &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/main&gt;</span>
<span class="line">    &lt;footer&gt;</span>
<span class="line">      &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/footer&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 父组件 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;ChildComponent&gt;</span>
<span class="line">    &lt;template #header=&quot;{ title }&quot;&gt;</span>
<span class="line">      &lt;h1&gt;{{ title }}&lt;/h1&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;p&gt;默认插槽内容&lt;/p&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;template #footer&gt;</span>
<span class="line">      &lt;p&gt;页脚内容&lt;/p&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/ChildComponent&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_4-生命周期钩子"><span>4. <strong>生命周期钩子</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup&gt;</span>
<span class="line">import { onMounted, onUpdated, onUnmounted, onBeforeMount } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">onBeforeMount(() =&gt; {</span>
<span class="line">  console.log(&#39;组件挂载前&#39;)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  console.log(&#39;组件已挂载&#39;)</span>
<span class="line">  // 在这里执行 DOM 操作或获取数据</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">onUpdated(() =&gt; {</span>
<span class="line">  console.log(&#39;组件已更新&#39;)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">onUnmounted(() =&gt; {</span>
<span class="line">  console.log(&#39;组件已卸载&#39;)</span>
<span class="line">  // 清理工作</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 其他钩子：</span>
<span class="line">// onBeforeUpdate, onBeforeUnmount, onErrorCaptured</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-模板语法" tabindex="-1"><a class="header-anchor" href="#_5-模板语法"><span>5. <strong>模板语法</strong></span></a></h3><h4 id="基础绑定" tabindex="-1"><a class="header-anchor" href="#基础绑定"><span>基础绑定</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 文本插值 --&gt;</span>
<span class="line">  &lt;p&gt;{{ message }}&lt;/p&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- 原始 HTML --&gt;</span>
<span class="line">  &lt;div v-html=&quot;rawHtml&quot;&gt;&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- 属性绑定 --&gt;</span>
<span class="line">  &lt;div :id=&quot;dynamicId&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;button :disabled=&quot;isDisabled&quot;&gt;按钮&lt;/button&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- 类绑定 --&gt;</span>
<span class="line">  &lt;div :class=&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div :class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- 样式绑定 --&gt;</span>
<span class="line">  &lt;div :style=&quot;{ color: textColor, fontSize: size + &#39;px&#39; }&quot;&gt;&lt;/div&gt;</span>
<span class="line">  &lt;div :style=&quot;[baseStyles, overridingStyles]&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- v-if --&gt;</span>
<span class="line">  &lt;div v-if=&quot;type === &#39;A&#39;&quot;&gt;A&lt;/div&gt;</span>
<span class="line">  &lt;div v-else-if=&quot;type === &#39;B&#39;&quot;&gt;B&lt;/div&gt;</span>
<span class="line">  &lt;div v-else&gt;C&lt;/div&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- v-show --&gt;</span>
<span class="line">  &lt;div v-show=&quot;isVisible&quot;&gt;显示/隐藏&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染"><span>列表渲染</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 数组 --&gt;</span>
<span class="line">  &lt;ul&gt;</span>
<span class="line">    &lt;li v-for=&quot;(item, index) in items&quot; :key=&quot;item.id&quot;&gt;</span>
<span class="line">      {{ index }} - {{ item.name }}</span>
<span class="line">    &lt;/li&gt;</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- 对象 --&gt;</span>
<span class="line">  &lt;ul&gt;</span>
<span class="line">    &lt;li v-for=&quot;(value, key, index) in object&quot;&gt;</span>
<span class="line">      {{ index }}. {{ key }}: {{ value }}</span>
<span class="line">    &lt;/li&gt;</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-自定义指令" tabindex="-1"><a class="header-anchor" href="#_6-自定义指令"><span>6. <strong>自定义指令</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup&gt;</span>
<span class="line">// 局部指令</span>
<span class="line">const vFocus = {</span>
<span class="line">  mounted(el) {</span>
<span class="line">    el.focus()</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 带值的指令</span>
<span class="line">const vColor = {</span>
<span class="line">  mounted(el, binding) {</span>
<span class="line">    el.style.color = binding.value</span>
<span class="line">  },</span>
<span class="line">  updated(el, binding) {</span>
<span class="line">    el.style.color = binding.value</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;input v-focus /&gt;</span>
<span class="line">  &lt;p v-color=&quot;&#39;red&#39;&quot;&gt;红色文字&lt;/p&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-依赖注入" tabindex="-1"><a class="header-anchor" href="#_7-依赖注入"><span>7. <strong>依赖注入</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;!-- 祖先组件 --&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { provide, ref } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const message = ref(&#39;hello&#39;)</span>
<span class="line">provide(&#39;message&#39;, message)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 后代组件 --&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { inject } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const message = inject(&#39;message&#39;)</span>
<span class="line">const defaultValue = inject(&#39;key&#39;, &#39;default value&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-teleport-传送" tabindex="-1"><a class="header-anchor" href="#_8-teleport-传送"><span>8. <strong>Teleport 传送</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;button @click=&quot;modalOpen = true&quot;&gt;打开弹窗&lt;/button&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;Teleport to=&quot;body&quot;&gt;</span>
<span class="line">    &lt;div v-if=&quot;modalOpen&quot; class=&quot;modal&quot;&gt;</span>
<span class="line">      &lt;p&gt;模态框内容&lt;/p&gt;</span>
<span class="line">      &lt;button @click=&quot;modalOpen = false&quot;&gt;关闭&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/Teleport&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-suspense-异步组件" tabindex="-1"><a class="header-anchor" href="#_9-suspense-异步组件"><span>9. <strong>Suspense 异步组件</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;Suspense&gt;</span>
<span class="line">    &lt;template #default&gt;</span>
<span class="line">      &lt;AsyncComponent /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;template #fallback&gt;</span>
<span class="line">      &lt;div&gt;加载中...&lt;/div&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/Suspense&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { defineAsyncComponent } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const AsyncComponent = defineAsyncComponent(() =&gt;</span>
<span class="line">  import(&#39;./AsyncComponent.vue&#39;)</span>
<span class="line">)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-typescript-支持" tabindex="-1"><a class="header-anchor" href="#_10-typescript-支持"><span>10. <strong>TypeScript 支持</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">// 类型推断</span>
<span class="line">const count = ref&lt;number&gt;(0)</span>
<span class="line"></span>
<span class="line">// 带类型的 props</span>
<span class="line">interface Props {</span>
<span class="line">  title: string</span>
<span class="line">  count?: number</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const props = defineProps&lt;Props&gt;()</span>
<span class="line"></span>
<span class="line">// 带类型的事件</span>
<span class="line">const emit = defineEmits&lt;{</span>
<span class="line">  (e: &#39;update&#39;, id: number): void</span>
<span class="line">  (e: &#39;submit&#39;, payload: { data: string }): void</span>
<span class="line">}&gt;()</span>
<span class="line"></span>
<span class="line">// 带类型的 ref</span>
<span class="line">const input = ref&lt;HTMLInputElement | null&gt;(null)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-组合式函数" tabindex="-1"><a class="header-anchor" href="#_11-组合式函数"><span>11. <strong>组合式函数</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// useMouse.js</span>
<span class="line">import { ref, onMounted, onUnmounted } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">export function useMouse() {</span>
<span class="line">  const x = ref(0)</span>
<span class="line">  const y = ref(0)</span>
<span class="line">  </span>
<span class="line">  const update = (event) =&gt; {</span>
<span class="line">    x.value = event.pageX</span>
<span class="line">    y.value = event.pageY</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  onMounted(() =&gt; window.addEventListener(&#39;mousemove&#39;, update))</span>
<span class="line">  onUnmounted(() =&gt; window.removeEventListener(&#39;mousemove&#39;, update))</span>
<span class="line">  </span>
<span class="line">  return { x, y }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 在组件中使用</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { useMouse } from &#39;./useMouse&#39;</span>
<span class="line"></span>
<span class="line">const { x, y } = useMouse()</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-响应式工具函数" tabindex="-1"><a class="header-anchor" href="#_12-响应式工具函数"><span>12. <strong>响应式工具函数</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { isRef, unref, toRef, toRefs, isReactive, markRaw } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">// 判断是否是 ref</span>
<span class="line">isRef(count) // true</span>
<span class="line"></span>
<span class="line">// 获取值（如果是 ref 则返回 .value）</span>
<span class="line">const value = unref(maybeRef)</span>
<span class="line"></span>
<span class="line">// 将 reactive 对象的属性转为 ref</span>
<span class="line">const countRef = toRef(state, &#39;count&#39;)</span>
<span class="line"></span>
<span class="line">// 将 reactive 对象转为普通对象，属性为 ref</span>
<span class="line">const { count, name } = toRefs(state)</span>
<span class="line"></span>
<span class="line">// 标记对象永远不会转为响应式</span>
<span class="line">const staticObj = markRaw({ data: &#39;static&#39; })</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践建议" tabindex="-1"><a class="header-anchor" href="#最佳实践建议"><span>最佳实践建议</span></a></h2><ol><li><strong>组合式 API 优先</strong>：新项目推荐使用 <code>&lt;script setup&gt;</code></li><li><strong>TypeScript</strong>：建议配合 TypeScript 使用以获得更好的类型支持</li><li><strong>组件组织</strong>：按功能组织代码，使用组合式函数提取可复用逻辑</li><li><strong>性能优化</strong>： 合理使用 <code>v-if</code>和 <code>v-show</code> 为大列表使用虚拟滚动 使用 <code>computed</code>缓存计算 避免不必要的响应式</li></ol>`,44)])])}const c=n(i,[["render",t]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/Vue/Vue3.html","title":"vue3语法与教程","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773973753000,"contributors":[{"name":"flr13","username":"flr13","email":"flr13@qq.com","commits":1,"url":"https://github.com/flr13"}],"changelog":[{"hash":"5d91746427359485a38d4f83f1d66d3fd84128af","time":1773973753000,"email":"flr13@qq.com","author":"flr13","message":"Update README.md"}]},"filePathRelative":"前端技术/Vue/Vue3.md"}');export{c as comp,r as data};
