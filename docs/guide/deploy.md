# 部署指南

## 1. 本地开发

```bash
npm install
npm run docs:dev
```

## 2. 生产构建

```bash
npm run docs:build
```

构建完成后，静态文件会输出到：

```bash
docs/.vuepress/dist
```

## 3. 部署到 GitHub Pages

如果你的仓库名是 `frontend-tech-blog`，需要修改配置：

```js
base: '/frontend-tech-blog/'
```

然后推送到 GitHub，工作流会自动部署。

## 4. 部署到 Vercel / Netlify

构建命令：

```bash
npm run docs:build
```

输出目录：

```bash
docs/.vuepress/dist
```
