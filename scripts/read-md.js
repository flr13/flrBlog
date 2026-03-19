const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, 'raw-md');  // 原始 Markdown 文件夹
const targetDir = path.resolve(__dirname, 'docs');    // VuePress docs 文件夹

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`创建目标目录: ${targetDir}`);
}

// 递归处理目录
function processDirectory(dir) {
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    items.forEach(item => {
      const fullPath = path.join(dir, item.name);
      const relativePath = path.relative(sourceDir, fullPath);
      const targetPath = path.join(targetDir, relativePath);
      
      if (item.isDirectory()) {
        // 确保目标子目录存在
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true });
          console.log(`创建子目录: ${targetPath}`);
        }
        // 递归处理子目录
        processDirectory(fullPath);
      } else if (item.isFile() && item.name.endsWith('.md')) {
        // 处理 Markdown 文件
        processMarkdownFile(fullPath, targetPath);
      }
    });
  } catch (error) {
    console.error(`处理目录 ${dir} 时出错:`, error.message);
  }
}

// 处理单个 Markdown 文件
function processMarkdownFile(sourcePath, targetPath) {
  try {
    const content = fs.readFileSync(sourcePath, 'utf-8');
    
    // 如果没有 Front Matter，添加默认 Front Matter
    let newContent = content;
    if (!content.startsWith('---')) {
      const fileName = path.basename(sourcePath);
      const title = fileName.replace('.md', '');
      const date = new Date().toISOString().split('T')[0];
      
      newContent = `---\ntitle: "${title}"\ndate: ${date}\ntags: []\ncategories: []\nsidebar: auto\n---\n\n${content}`;
    }
    
    // 写入到目标路径
    fs.writeFileSync(targetPath, newContent, 'utf-8');
    console.log(`处理并复制文件: ${path.relative(sourceDir, sourcePath)}`);
  } catch (error) {
    console.error(`处理文件 ${sourcePath} 时出错:`, error.message);
  }
}

// 开始处理
console.log('开始处理 Markdown 文件...');
processDirectory(sourceDir);
console.log('处理完成！');

