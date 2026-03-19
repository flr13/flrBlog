const fs = require('fs');
const path = require('path');

// 定义分类目录结构
const categories = [
  '前端技术/CSS',
  '前端技术/JavaScript',
  '前端技术/TypeScript',
  '前端技术/Vue',
  '前端技术/工程化',
  '前端技术/其他',
  '后端-DevOps',
  'AI-机器学习',
  '其他'
];

const baseDir = path.resolve(__dirname, 'raw-md');

// 创建所有分类目录
categories.forEach(category => {
  const categoryPath = path.join(baseDir, category);
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
    console.log(`创建目录: ${categoryPath}`);
  } else {
    console.log(`目录已存在: ${categoryPath}`);
  }
});

console.log('分类目录创建完成！');
