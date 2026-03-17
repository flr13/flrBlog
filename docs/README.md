

<style>
/* 全局重置，确保全屏无空白 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 全局背景色和背景图片 */
body {
    background-color: #e8f4f8;
    background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
}

/* 页面容器：100% 视口宽高 */
.welcome-page {
    width: 100vw;
    height: 100vh;
    background: #e8f4f8; /* 浅蓝背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    overflow: hidden; /* 隐藏滚动条 */
    position: relative;
}

/* 背景图片遮罩层 */
.welcome-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(232, 244, 248, 0.7);
    z-index: 0;
}

/* 内容居中容器 */
.welcome-content {
    text-align: center;
    padding: 0 20px;
    z-index: 1;
    position: relative;
}

/* 主标题：带发光效果 */
.welcome-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: #1e3a5f;
    text-shadow: 0 0 12px rgba(100, 210, 255, 0.6);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    white-space: nowrap;
}

/* 副标题 */
.welcome-subtitle {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: #4a5568;
    margin-bottom: 2.5rem;
}

/* 进入按钮：渐变+发光 */
.enter-btn {
    padding: 1rem 2.8rem;
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: #fff;
    background: linear-gradient(90deg, #0066ff, #00e5ff);
    border: none;
    border-radius: 50px;
    box-shadow: 0 0 15px rgba(0, 153, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
}

.enter-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 22px rgba(0, 153, 255, 0.8);
}

/* 隐藏VuePress默认的导航和侧边栏 */
.theme-default-content {
    max-width: 100%;
    padding: 0;
    margin: 0;
}

/* 确保整个页面居中 */
.page {
    padding: 0 !important;
    margin: 0 !important;
}

/* 隐藏VuePress默认的导航和侧边栏 */
.navbar,
.sidebar {
    display: none !important;
}

/* 确保body和html完全居中 */
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* 确保欢迎页面容器铺满屏幕 */
.welcome-page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
}

/* 覆盖VuePress默认的容器样式 */
.container {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
}

/* 确保没有任何默认的边距或内边距 */
* {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
}
</style>

<div class="welcome-page">
    <div class="welcome-content">
        <h1 class="welcome-title">欢迎来到 FLR技术博客</h1>
        <p class="welcome-subtitle">热爱编程分享的前端开发技术平台</p>
        <button class="enter-btn" @click="enterBlog">点击进入</button>
    </div>
</div>

<script setup>
import { withBase } from '@vuepress/client'

const enterBlog = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 0.5s ease'

  setTimeout(() => {
    window.location.href = withBase('/home.html')
  }, 100)
}
</script>