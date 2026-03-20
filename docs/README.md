---
sidebar: false
---

<style>
.welcome-page {
    width: 100vw;
    height: 100vh;
    background-color: #e8f4f8;
    background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

/* 确保没有默认的边距和内边距 */
body {
    margin: 0;
    padding: 0;
}

/* 隐藏VuePress默认的头部和侧边栏 */
 body[class*="index"] .vp-navbar,
.vp-sidebar {
    display: none !important;
}

/* 确保内容区域占满整个屏幕 */
.vp-page {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    overflow: hidden !important;
    width: 100% !important;
}

/* 确保所有可能的容器都没有边距和内边距 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 防止水平滚动 */
html, body {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    position: relative;
}

/* 确保VuePress的根容器也没有边距 */
#app {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
}

/* 确保内容容器没有边距 */
.vp-content {
    margin: 0 !important;
    padding: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
}

/* 确保欢迎页面容器没有任何偏移 */
.welcome-page {
    margin-left: 0 !important;
    padding-left: 0 !important;
    transform: none !important;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
}

/* 确保没有其他容器干扰 */
.vp-layout,
.vp-main {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
}

/* 确保没有滚动条 */
::-webkit-scrollbar {
    display: none;
}

/* 确保移动端也没有空白 */
@media (max-width: 768px) {
    .welcome-page {
        width: 100vw !important;
        height: 100vh !important;
    }
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