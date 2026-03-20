import{_ as e,c as i,a as l,b as p,e as s,d as c,w as d,r,o as t}from"./app-Bm564foL.js";const u={};function v(o,n){const a=r("RouteLink");return t(),i("div",null,[n[2]||(n[2]=l(`<h1 id="qiankun-template" tabindex="-1"><a class="header-anchor" href="#qiankun-template"><span>QIANKUN-TEMPLATE</span></a></h1><p>本项目采用 vue + qiankun 实践微前端落地。 同时 qiankun 是一个开放式微前端架构，支持当前三大前端框架甚至 jq 等其他项目无缝接入。 此项目为了尽可能的简单易上手，以及方便文章讲解，大部分逻辑都在主应用和子应用的 main.js 来回施展</p><h2 id="微前端主功能" tabindex="-1"><a class="header-anchor" href="#微前端主功能"><span>微前端主功能</span></a></h2><hr><ul><li><p>微前端主应用与子应用构建</p></li><li><p>全局状态控制</p></li><li><p>主应用和子应用之间动态通信</p></li><li><p>主应用资源下发至子应用</p></li><li><p>各应用间路由基础管理</p></li><li><p>公共资源处理</p></li></ul><p>项目架构</p><hr><p>以上下天地布局为标准，粉红色是基座，只负责头部导航，绿色是挂载的整个子应用，点击头部导航可切换子应用</p><h2 id="什么是微前端" tabindex="-1"><a class="header-anchor" href="#什么是微前端"><span>什么是微前端</span></a></h2><hr><blockquote><p>Techniques, strategies and recipes for building a modern web app with multiple teams that can ship features independently. 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。</p></blockquote><p>微前端 是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立开发、独立部署。</p><p>微前端的核心价值：</p><ul><li>技术栈无关</li><li>独立开发</li><li>独立部署</li></ul><h2 id="qiankun" tabindex="-1"><a class="header-anchor" href="#qiankun"><span>QIANKUN</span></a></h2><hr><p>QIANKUN 是基于 Single-SPA ，提供了更加开箱即用的 API （ single-spa + sandbox + import-html-entry ）</p><h3 id="主应用" tabindex="-1"><a class="header-anchor" href="#主应用"><span>主应用</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ <span class="token function">yarn</span> <span class="token function">add</span> qiankun <span class="token comment"># 或者 npm i qiankun -S</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1、在主应用中注册微应用， 当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { registerMicroApps } from &#39;qiankun&#39;;</span>
<span class="line"></span>
<span class="line">export function registerApps(microApps) {</span>
<span class="line">	registerMicroApps(microApps, {</span>
<span class="line">		// eslint-disable-next-line no-unused-vars</span>
<span class="line">		beforeLoad: (app) =&gt; {},</span>
<span class="line">		// eslint-disable-next-line no-unused-vars</span>
<span class="line">		beforeMount: [(app) =&gt; {}],</span>
<span class="line">		// eslint-disable-next-line no-unused-vars</span>
<span class="line">		afterMount: [(app) =&gt; {}],</span>
<span class="line">		// eslint-disable-next-line no-unused-vars</span>
<span class="line">		afterUnmount: [(app) =&gt; {}]</span>
<span class="line">	});</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 子应用列表（开发环境使用/config/registrableApp.js,生产环境请求后端接口/apps，目前页面上没有入口添加应用，必须得后端操作）</span>
<span class="line">microApps:[</span>
<span class="line">	{</span>
<span class="line">     	name: string, // 主应用的名称，唯一 </span>
<span class="line">        entry: string, // 开发环境的项目路径</span>
<span class="line">        activeRule: string // 生产环境的项目路径</span>
<span class="line">     },</span>
<span class="line">     {}</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、菜单管理中配置菜单信息，菜单url为&quot;/对应子应用的activeRule/嵌入的子应用对应页面路由&quot;，例如当前嵌入子应用egcip-dcpp-alarm-ui中的告警任务运行监控页面。</p><h3 id="子应用" tabindex="-1"><a class="header-anchor" href="#子应用"><span>子应用</span></a></h3><p>1、子应用不需要额外安装任何其他依赖即可接入 qiankun 主应用。 子应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 <code>bootstrap</code>、<code>mount</code>、<code>unmount</code> 三个生命周期钩子，以供主应用在适当的时机调用。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function poweredRender(props = {}) {</span>
<span class="line">	const { activeRule, access_token, enumValue } = props;</span>
<span class="line">	router = new VueRouter({</span>
<span class="line">		mode: &#39;history&#39;,</span>
<span class="line">		base: window.__POWERED_BY_QIANKUN__ ? activeRule : &#39;/&#39;,</span>
<span class="line">		routes: window.__POWERED_BY_QIANKUN__ ? constantRouterMap : layoutMap</span>
<span class="line">	});</span>
<span class="line">	instance = new Vue({</span>
<span class="line">		router,</span>
<span class="line">		store,</span>
<span class="line">		render: (h) =&gt; h(App)</span>
<span class="line">	}).$mount(&#39;#app&#39;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 导出子应用生命周期 挂载前</span>
<span class="line">export async function bootstrap() {</span>
<span class="line">	console.log(&#39;[vue] vue app bootstraped&#39;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 导出子应用生命周期 挂载前 挂载后</span>
<span class="line">export async function mount(props) {</span>
<span class="line">	props.onGlobalStateChange((state) =&gt; {</span>
<span class="line">		store.dispatch(&#39;setRoles&#39;, state.roles);</span>
<span class="line">	}, true);</span>
<span class="line">	console.log(&#39;[vue] props from main framework&#39;, props);</span>
<span class="line">	poweredRender(props);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 导出子应用生命周期 挂载前 卸载后</span>
<span class="line">export async function unmount() {</span>
<span class="line">	instance.$destroy();</span>
<span class="line">	instance.$el.innerHTML = &#39;&#39;;</span>
<span class="line">	instance = null;</span>
<span class="line">	router = null;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 除了代码中暴露出相应的生命周期钩子之外，为了让主应用能正确识别微应用暴露出来的一些信息，微应用的打包工具需要增加如下配置：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const packageName = require(&#39;./package.json&#39;).name;</span>
<span class="line"></span>
<span class="line">module.exports = {</span>
<span class="line">  output: {</span>
<span class="line">    library: \`\${packageName}-[name]\`,</span>
<span class="line">    libraryTarget: &#39;umd&#39;,</span>
<span class="line">    jsonpFunction: \`webpackJsonp_\${packageName}\`,</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目运行" tabindex="-1"><a class="header-anchor" href="#项目运行"><span>项目运行</span></a></h2><p>node版本V16.4.2 <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">下载网址</a></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment">#安装依赖</span></span>
<span class="line"><span class="token function">npm</span> i 或者 <span class="token function">yarn</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#Compiles and hot-reloads for development</span></span>
<span class="line">$ <span class="token function">npm</span> run serve // 指令平台</span>
<span class="line">$ <span class="token function">npm</span> run serve:dcpp // 采集平台</span>
<span class="line"></span>
<span class="line"><span class="token comment">#Compiles and minifies for production</span></span>
<span class="line">$ <span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由-动态菜单" tabindex="-1"><a class="header-anchor" href="#动态路由-动态菜单"><span>动态路由（动态菜单）</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 后端接口菜单数据结构</span>
<span class="line">[</span>
<span class="line">    {</span>
<span class="line">     	authorities: string, // 菜单权限</span>
<span class="line">      	children: Array&lt;router&gt;// 嵌套路由</span>
<span class="line">     	depth: 1, // 顶部为1，2级 左侧菜单为3，4</span>
<span class="line">     	icon: string, // 菜单图标,</span>
<span class="line">     	id: string,</span>
<span class="line">     	path: string, </span>
<span class="line">     	resName: string, // 命名路由</span>
<span class="line">     	resType: string, // 菜单类型（按钮、菜单）</span>
<span class="line">     	sort: string, // 菜单顺序</span>
<span class="line">     	url: string, // 跳转地址</span>
<span class="line">	},</span>
<span class="line">	{}</span>
<span class="line">]</span>
<span class="line">// 前端使用的菜单数据结构</span>
<span class="line">[</span>
<span class="line">	{</span>
<span class="line">		children: Array&lt;router&gt;,// 嵌套路由</span>
<span class="line">        component:object,// 路由对应组件，</span>
<span class="line">        meta:{</span>
<span class="line">        	hasRouterChild:Boolean, //是否含有子路由</span>
<span class="line">        	icon:string, // 菜单图标,</span>
<span class="line">        	isLocalRouter:Boolean, //是否为本地路由（skeleton页面)</span>
<span class="line">        	depth: 1, // 顶部为1，2级 左侧菜单为3，4</span>
<span class="line">        	permission: string, // 菜单权限,</span>
<span class="line">        	title: string, // 菜单标题</span>
<span class="line">    	},</span>
<span class="line">    	name: string, // 命名路由</span>
<span class="line">    	path: string, // 菜单路径</span>
<span class="line">    	redirect: string, // 菜单重定向路径</span>
<span class="line">    	sort: string, // 菜单顺序</span>
<span class="line">	}</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地路由配置" tabindex="-1"><a class="header-anchor" href="#本地路由配置"><span>本地路由配置</span></a></h2><p>本地路由：存放于skeleton-ui页面的路由，即主应用中的页面，目前主要是在字典管理、系统管理下。</p><ul><li>在view文件夹中新建对应的组件页面，/utils/menu.js文件中配置 path 及 component</li></ul><ul><li>菜单管理新增菜单，新增的菜单路径即为/utils/menu.js文件中配置path</li></ul><h2 id="工具文档" tabindex="-1"><a class="header-anchor" href="#工具文档"><span>工具文档</span></a></h2>`,37)),p("p",null,[n[1]||(n[1]=s("webpack-bundle-analyzer ",-1)),c(a,{to:"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E5%B7%A5%E7%A8%8B%E5%8C%96/docs/webpack-bundle-analyzer.html"},{default:d(()=>[...n[0]||(n[0]=[s("操作文档",-1)])]),_:1})])])}const b=e(u,[["render",v]]),h=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E5%B7%A5%E7%A8%8B%E5%8C%96/qiankun.html","title":"QIANKUN-TEMPLATE","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773738492000,"contributors":[{"name":"wulr","username":"wulr","email":"wulr@eastcom-sw.com","commits":1,"url":"https://github.com/wulr"},{"name":"flr13","username":"flr13","email":"flr13@qq.com","commits":1,"url":"https://github.com/flr13"}],"changelog":[{"hash":"0433cb874af9445f984dde6dab029aab08911f73","time":1773738492000,"email":"flr13@qq.com","author":"flr13","message":"Add docs:deploy and fix build issues"},{"hash":"2e05be3a6e915f9542c6b5a3b229ee576fde38ba","time":1773394873000,"email":"wulr@eastcom-sw.com","author":"wulr","message":"Remove spaces from MD filenames and update references"}]},"filePathRelative":"前端技术/工程化/qiankun.md"}');export{b as comp,h as data};
