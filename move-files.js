const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, 'raw-md');

// 定义文件分类规则
const fileCategories = {
  // CSS 相关
  'CSS Grid 网格布局.md': '前端技术/CSS',
  'CSS常见布局和样式.md': '前端技术/CSS',
  'Flex布局.md': '前端技术/CSS',
  'Sass教程.md': '前端技术/CSS',
  
  // JavaScript 相关
  'asyn  await.md': '前端技术/JavaScript',
  'fatch.md': '前端技术/JavaScript',
  'js注释使用说明.md': '前端技术/JavaScript',
  'js运算符及其优先级.md': '前端技术/JavaScript',
  'map 和 set的深度解析.md': '前端技术/JavaScript',
  'webSorket.md': '前端技术/JavaScript',
  
  // TypeScript 相关
  'TypeScript.md': '前端技术/TypeScript',
  'typeScript语法.md': '前端技术/TypeScript',
  
  // Vue 相关
  'Vue3.md': '前端技术/Vue',
  'cascader属性.md': '前端技术/Vue',
  'dialog.md': '前端技术/Vue',
  'el-cascader组件使用说明.md': '前端技术/Vue',
  'mixins.md': '前端技术/Vue',
  'solt插槽.md': '前端技术/Vue',
  'vue_form_add.md': '前端技术/Vue',
  'vuex 状态管理.md': '前端技术/Vue',
  'vue有关的notes.md': '前端技术/Vue',
  'vue父子组件通信.md': '前端技术/Vue',
  'vue的Prop用法.md': '前端技术/Vue',
  'vue通信方式.md': '前端技术/Vue',
  '组件类型.md': '前端技术/Vue',
  
  // 工程化相关
  'babel配置.md': '前端技术/工程化',
  'npm问题.md': '前端技术/工程化',
  'nvm安装配置.md': '前端技术/工程化',
  'qiankun.md': '前端技术/工程化',
  'yarn link.md': '前端技术/工程化',
  'yarn link copy.md': '前端技术/工程化',
  
  // 其他前端技术
  'HTML转MD-Tool.md': '前端技术/其他',
  'iFrame基本知识及其跨域问题.md': '前端技术/其他',
  'iframe跨域解决方案.md': '前端技术/其他',
  'ui自动化测试示例.md': '前端技术/其他',
  
  // 后端和DevOps
  'Docker.md': '后端-DevOps',
  'K8S.md': '后端-DevOps',
  'Microfront-end.md': '后端-DevOps',
  'Nginx.md': '后端-DevOps',
  '《40分钟的Docker实战攻略》学习笔记.md': '后端-DevOps',
  
  // AI和机器学习
  'Agents 核心笔记（可编辑版）.md': 'AI-机器学习',
  'Agent决策流程.md': 'AI-机器学习',
  'Coze.md': 'AI-机器学习',
  'RAG 技术选型与搭建指南.md': 'AI-机器学习',
  'Transformer模型核心知识（Markdown版）.md': 'AI-机器学习',
  
  // 其他
  'XQS.md': '其他',
  'about.md': '其他',
  'Foa测试项目前端开发难点.md': '其他',
  'SEE协议.md': '其他',
  'q&a0212.md': '其他',
  'review.md': '其他',
  'food.md': '其他',
  '🚗 自动挡科目二完整操作流程与点位笔记（C2） copy.md': '其他',
  'Python零基础入门核心教程（MD 版）.md': '其他',
  'PytPython零基础入门核心教程（MD 版）.md': '其他'
};

// 移动文件到对应分类目录
Object.entries(fileCategories).forEach(([fileName, category]) => {
  const sourcePath = path.join(baseDir, fileName);
  const targetPath = path.join(baseDir, category, fileName);
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, targetPath);
      console.log(`移动文件: ${fileName} -> ${category}`);
    } catch (error) {
      console.error(`移动文件 ${fileName} 时出错:`, error.message);
    }
  } else {
    console.log(`文件不存在: ${fileName}`);
  }
});

console.log('文件移动完成！');
