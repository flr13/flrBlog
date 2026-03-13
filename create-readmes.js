const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, 'raw-md');

// 定义分类目录和对应的标题
const categories = [
  {
    path: '前端技术',
    title: '前端技术',
    description: '前端技术相关文章集合'
  },
  {
    path: '前端技术/CSS',
    title: 'CSS',
    description: 'CSS相关技术文章'
  },
  {
    path: '前端技术/JavaScript',
    title: 'JavaScript',
    description: 'JavaScript相关技术文章'
  },
  {
    path: '前端技术/TypeScript',
    title: 'TypeScript',
    description: 'TypeScript相关技术文章'
  },
  {
    path: '前端技术/Vue',
    title: 'Vue',
    description: 'Vue相关技术文章'
  },
  {
    path: '前端技术/工程化',
    title: '工程化',
    description: '前端工程化相关技术文章'
  },
  {
    path: '前端技术/其他',
    title: '其他前端技术',
    description: '其他前端技术相关文章'
  },
  {
    path: '后端-DevOps',
    title: '后端-DevOps',
    description: '后端和DevOps相关技术文章'
  },
  {
    path: 'AI-机器学习',
    title: 'AI-机器学习',
    description: '人工智能和机器学习相关技术文章'
  },
  {
    path: '其他',
    title: '其他',
    description: '其他类型的文章'
  }
];

// 为每个分类目录创建README.md文件
categories.forEach(category => {
  const dirPath = path.join(baseDir, category.path);
  const readmePath = path.join(dirPath, 'README.md');
  
  if (!fs.existsSync(readmePath)) {
    const content = `---
title: "${category.title}"
date: ${new Date().toISOString().split('T')[0]}
tags: []
categories: []
sidebar: auto
---

# ${category.title}

${category.description}

## 文章列表
`;
    
    try {
      fs.writeFileSync(readmePath, content, 'utf-8');
      console.log(`创建README.md文件: ${readmePath}`);
    } catch (error) {
      console.error(`创建README.md文件 ${readmePath} 时出错:`, error.message);
    }
  } else {
    console.log(`README.md文件已存在: ${readmePath}`);
  }
});

console.log('README.md文件创建完成！');
