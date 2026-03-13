const fs = require('fs');
const path = require('path');

// 递归遍历目录，移除所有MD文件的Front Matter
function removeFrontMatter(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      removeFrontMatter(fullPath);
    } else if (item.isFile() && item.name.endsWith('.md')) {
      removeFrontMatterFromFile(fullPath);
    }
  });
}

// 移除单个文件的Front Matter
function removeFrontMatterFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 检查文件是否包含Front Matter
    if (content.startsWith('---')) {
      // 找到第二个---的位置
      const endIndex = content.indexOf('---', 3);
      
      if (endIndex !== -1) {
        // 移除Front Matter部分
        const newContent = content.substring(endIndex + 3).trimStart();
        fs.writeFileSync(filePath, newContent);
        console.log(`Removed Front Matter from: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
  }
}

// 开始处理
const docsDir = path.join(__dirname, 'docs');
console.log('Starting to remove Front Matter from MD files...');
removeFrontMatter(docsDir);
console.log('Done!');
