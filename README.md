
# VuePress Frontend Tech Blog

一个可直接发布的前端技术博客项目，基于 VuePress 2 + Vite。

## 本地启动

```bash
npm install
npm run docs:dev
```

## 生产构建

```bash
npm run docs:build
```

构建产物位于：`docs/.vuepress/dist`

## GitHub Pages 部署

1. 新建 GitHub 仓库，例如：`frontend-tech-blog`
2. 将 `docs/.vuepress/config.js` 中的 `base` 改为：`/frontend-tech-blog/`
3. 推送代码到 `main` 分支
4. 在 GitHub Actions 中自动构建并发布 `gh-pages`

项目已内置 `.github/workflows/deploy.yml`。
