<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: #e8f4f8;
    background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  .hero-container {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0a192f, #172a45, #0a192f);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
  }
  
  .hero-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 25, 47, 0.8);
    z-index: 0;
  }
  
  @media (prefers-color-scheme: light) {
    .hero-container {
      background: linear-gradient(135deg, #e6f0f8, #c9d8e5, #e6f0f8);
    }
    
    .hero-container::before {
      background: rgba(230, 240, 248, 0.7);
    }
  }
  
  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.7;
  }
  
  .hero-content {
    text-align: center;
    color: white;
    z-index: 1;
    max-width: 800px;
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 0 0 20px rgba(100, 200, 255, 0.5);
    animation: glow 2s ease-in-out infinite alternate;
    opacity: 0.9;
    white-space: nowrap;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: 0 0 10px rgba(100, 200, 255, 0.3);
    opacity: 0.8;
  }
  
  @media (prefers-color-scheme: light) {
    .hero-content {
      color: #0a192f;
    }
    
    .hero-title {
      text-shadow: 0 0 20px rgba(100, 200, 255, 0.5);
    }
    
    .hero-subtitle {
      text-shadow: 0 0 10px rgba(100, 200, 255, 0.3);
    }
  }
  
  .hero-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #00f, #00ffea);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    transition: all 0.3s ease;
  }
  
  .hero-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    }
    to {
      text-shadow: 0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6);
    }
  }
  
  .content-section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }
</style>

<div id="content" class="content-section">
  <h2 class="section-title">📚 博客定位</h2>
  <ul>
    <li><strong>技术分享</strong>：前端工程师的技术笔记与实践经验</li>
    <li><strong>学习记录</strong>：Vue、React、TypeScript 等前端技术的学习心得</li>
    <li><strong>工程实践</strong>：前端工程化、性能优化、构建工具的实践案例</li>
    <li><strong>行业动态</strong>：前端技术发展趋势与最新技术的探索</li>
  </ul>

  <h2 class="section-title">🔥 最新文章</h2>
  <ul>
    <li><RouterLink to="/前端技术/Vue/Vue3.html">Vue3</RouterLink></li>
    <li><RouterLink to="/前端技术/TypeScript/TypeScript.html">TypeScript</RouterLink></li>
    <li><RouterLink to="/前端技术/CSS/CSSGrid网格布局.html">CSS Grid 网格布局</RouterLink></li>
    <li><RouterLink to="/前端技术/JavaScript/js注释使用说明.html">js注释使用说明</RouterLink></li>
    <li><RouterLink to="/AI-机器学习/Transformer模型核心知识（Markdown版）.html">Transformer模型核心知识</RouterLink></li>
  </ul>

  <h2 class="section-title">🎯 技术分类</h2>
  <ul>
    <li><strong>前端框架</strong>：Vue、React、Angular</li>
    <li><strong>编程语言</strong>：JavaScript、TypeScript</li>
    <li><strong>工程化</strong>：Webpack、Vite、Babel、ESLint</li>
    <li><strong>性能优化</strong>：加载优化、渲染优化、运行时优化</li>
    <li><strong>浏览器与网络</strong>：浏览器原理、网络协议、HTTP/2、HTTP/3</li>
    <li><strong>后端与DevOps</strong>：Node.js、Docker、K8s、Nginx</li>
    <li><strong>AI与机器学习</strong>：大语言模型、Agent、RAG技术</li>
  </ul>

  <h2 class="section-title">🛠 技术栈</h2>
  <ul>
    <li><strong>前端框架</strong>：Vue 3</li>
    <li><strong>静态站点生成</strong>：VuePress 2</li>
    <li><strong>构建工具</strong>：Vite</li>
    <li><strong>样式方案</strong>：CSS3、SCSS</li>
    <li><strong>代码质量</strong>：ESLint、Prettier</li>
    <li><strong>版本控制</strong>：Git</li>
  </ul>

  <h2 class="section-title">📞 联系我</h2>
  <ul>
    <li><strong>GitHub</strong>：<a href="https://github.com/flr13/flrBlog" target="_blank">flr13/flrBlog</a></li>
    <li><strong>邮箱</strong>：flr13@qq.com</li>
    <li><strong>微信</strong>：your-wechat-id</li>
  </ul>

  <h2 class="section-title">📄 版权信息</h2>
  <p>© 2026 FLR技术博客. All rights reserved.</p>
</div>

