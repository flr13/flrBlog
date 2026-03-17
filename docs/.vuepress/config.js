
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'FLR技术博客',
  description: '热爱编程分享的前端开发',
  // GitHub Pages (project site) needs repo name as base
  base: '/flrBlog/',
  // 自定义404页面
  notFound: '/404.html',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: '前端,VuePress,Vue,React,TypeScript,性能优化,工程化' }],
    ['meta', { name: 'author', content: 'Jessica Ortiz' }]
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=FLR%20technology%20blog%20logo%20green%20modern%20clean%20design%20tech%20theme&image_size=square',
    repo: 'https://github.com/flr13/flrBlog',
    docsDir: 'docs',
    contributors: false,
    editLink: false,
    lastUpdated: true,
    navbar: [
      // { text: '首页', link: '/index.md' },
      { text: '首页', link: '/home.md' },
      {
        text: '前端技术',
        children: [
          { text: 'CSS', link: '/前端技术/CSS/' },
          { text: 'JavaScript', link: '/前端技术/JavaScript/' },
          { text: 'TypeScript', link: '/前端技术/TypeScript/' },
          { text: 'Vue', link: '/前端技术/Vue/' },
          { text: '工程化', link: '/前端技术/工程化/' },
          { text: '其他', link: '/前端技术/其他/' }
        ]
      },
      { text: '后端-DevOps', link: '/后端-DevOps/' },
      { text: 'AI-机器学习', link: '/AI-机器学习/' },
      { text: '其他', link: '/其他/' },
      { text: '指南', link: '/guide/' },
      { text: '关于', link: '/about.md' }
    ],
    // 手动配置侧边栏，根据目录结构
    sidebar: {
      // 首页
      '/': false,
      // 前端技术
      '/前端技术/': [
        {
          text: '前端技术',
          children: [
            '/前端技术/',
            '/前端技术/CSS/',
            '/前端技术/JavaScript/',
            '/前端技术/TypeScript/',
            '/前端技术/Vue/',
            '/前端技术/工程化/',
            '/前端技术/其他/'
          ]
        }
      ],
      // CSS
      '/前端技术/CSS/': [
        {
          text: 'CSS',
          children: [
            '/前端技术/CSS/',
            { text: 'CSS Grid 网格布局', link: '/前端技术/CSS/CSSGrid网格布局.md' },
            { text: 'CSS常见布局和样式', link: '/前端技术/CSS/CSS常见布局和样式.md' },
            { text: 'Flex布局', link: '/前端技术/CSS/Flex布局.md' },
            { text: 'Sass教程', link: '/前端技术/CSS/Sass教程.md' }
          ]
        }
      ],
      // JavaScript
      '/前端技术/JavaScript/': [
        {
          text: 'JavaScript',
          children: [
            '/前端技术/JavaScript/',
            { text: 'asyn  await', link: '/前端技术/JavaScript/asynawait.md' },
            { text: 'fatch', link: '/前端技术/JavaScript/fatch.md' },
            { text: 'js注释使用说明', link: '/前端技术/JavaScript/js注释使用说明.md' },
            { text: 'js运算符及其优先级', link: '/前端技术/JavaScript/js运算符及其优先级.md' },
            { text: 'map 和 set的深度解析', link: '/前端技术/JavaScript/map和set的深度解析.md' },
            { text: 'webSorket', link: '/前端技术/JavaScript/webSorket.md' }
          ]
        }
      ],
      // TypeScript
      '/前端技术/TypeScript/': [
        {
          text: 'TypeScript',
          children: [
            '/前端技术/TypeScript/',
            { text: 'TypeScript', link: '/前端技术/TypeScript/TypeScript.md' },
            { text: 'typeScript语法', link: '/前端技术/TypeScript/typeScript语法.md' }
          ]
        }
      ],
      // Vue
      '/前端技术/Vue/': [
        {
          text: 'Vue',
          children: [
            '/前端技术/Vue/',
            { text: 'Vue3', link: '/前端技术/Vue/Vue3.html' },
            { text: 'cascader属性', link: '/前端技术/Vue/cascader属性.md' },
            { text: 'dialog', link: '/前端技术/Vue/dialog.md' },
            { text: 'el-cascader组件使用说明', link: '/前端技术/Vue/el-cascader组件使用说明.md' },
            { text: 'mixins', link: '/前端技术/Vue/mixins.md' },
            { text: 'solt插槽', link: '/前端技术/Vue/solt插槽.md' },
            { text: 'vue_form_add', link: '/前端技术/Vue/vue_form_add.md' },
            { text: 'vuex 状态管理', link: '/前端技术/Vue/vuex状态管理.md' },
            { text: 'vue有关的notes', link: '/前端技术/Vue/vue有关的notes.md' },
            { text: 'vue父子组件通信', link: '/前端技术/Vue/vue父子组件通信.md' },
            { text: 'vue的Prop用法', link: '/前端技术/Vue/vue的Prop用法.md' },
            { text: 'vue通信方式', link: '/前端技术/Vue/vue通信方式.md' },
            { text: '组件类型', link: '/前端技术/Vue/组件类型.md' }
          ]
        }
      ],
      // 工程化
      '/前端技术/工程化/': [
        {
          text: '工程化',
          children: [
            '/前端技术/工程化/',
            { text: 'babel配置', link: '/前端技术/工程化/babel配置.md' },
            { text: 'npm问题', link: '/前端技术/工程化/npm问题.md' },
            { text: 'nvm安装配置', link: '/前端技术/工程化/nvm安装配置.md' },
            { text: 'qiankun', link: '/前端技术/工程化/qiankun.md' },
            { text: 'yarn link', link: '/前端技术/工程化/yarnlink.md' },
            { text: 'yarn link copy', link: '/前端技术/工程化/yarnlinkcopy.md' }
          ]
        }
      ],
      // 其他前端技术
      '/前端技术/其他/': [
        {
          text: '其他前端技术',
          children: [
            '/前端技术/其他/',
            { text: 'HTML转MD-Tool', link: '/前端技术/其他/HTML转MD-Tool.md' },
            { text: 'iFrame基本知识及其跨域问题', link: '/前端技术/其他/iFrame基本知识及其跨域问题.md' },
            { text: 'iframe跨域解决方案', link: '/前端技术/其他/iframe跨域解决方案.md' },
            { text: 'ui自动化测试示例', link: '/前端技术/其他/ui自动化测试示例.md' }
          ]
        }
      ],
      // 后端-DevOps
      '/后端-DevOps/': [
        {
          text: '后端与DevOps',
          children: [
            '/后端-DevOps/',
            { text: 'Docker', link: '/后端-DevOps/Docker.md' },
            { text: 'K8S', link: '/后端-DevOps/K8S.md' },
            { text: 'Microfront-end', link: '/后端-DevOps/Microfront-end.md' },
            { text: 'Nginx', link: '/后端-DevOps/Nginx.md' },
            { text: '《40分钟的Docker实战攻略》学习笔记', link: '/后端-DevOps/《40分钟的Docker实战攻略》学习笔记.md' }
          ]
        }
      ],
      // AI-机器学习
      '/AI-机器学习/': [
        {
          text: 'AI与机器学习',
          children: [
            '/AI-机器学习/',
            { text: 'Agents 核心笔记（可编辑版）', link: '/AI-机器学习/Agents核心笔记（可编辑版）.md' },
            { text: 'Agent决策流程', link: '/AI-机器学习/Agent决策流程.md' },
            { text: 'Coze', link: '/AI-机器学习/Coze.md' },
            { text: 'RAG 技术选型与搭建指南', link: '/AI-机器学习/RAG技术选型与搭建指南.md' },
            { text: 'Transformer模型核心知识（Markdown版）', link: '/AI-机器学习/Transformer模型核心知识（Markdown版）.md' }
          ]
        }
      ],
      // 其他
      '/其他/': [
        {
          text: '其他内容',
          children: [
            '/其他/',
            { text: 'PytPython零基础入门核心教程（MD 版）', link: '/其他/PytPython零基础入门核心教程（MD版）.md' },
            { text: 'Python零基础入门核心教程（MD 版）', link: '/其他/Python零基础入门核心教程（MD版）.md' },
            { text: 'SEE协议', link: '/其他/SEE协议.md' },
            { text: 'XQS', link: '/其他/XQS.md' },
            { text: 'q&a0212', link: '/其他/q&a0212.md' },
            { text: 'review', link: '/其他/review.md' },
            { text: '🚗 自动挡科目二完整操作流程与点位笔记（C2） copy', link: '/其他/🚗自动挡科目二完整操作流程与点位笔记（C2）copy.md' }
          ]
        }
      ],
      // 指南
      '/guide/': [
        {
          text: '博客指南',
          children: [
            '/guide/',
            { text: 'deploy', link: '/guide/deploy.md' },
            { text: 'writing', link: '/guide/writing.md' }
          ]
        }
      ]
    },
    // 启用侧边栏深度
    sidebarDepth: 3
  })
})
