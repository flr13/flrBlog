const fs = require('fs');
const path = require('path');

// 创建img目录
const imgDir = path.join(__dirname, 'docs', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
  console.log(`Created img directory: ${imgDir}`);
}

// 递归遍历目录，处理所有MD文件
function processMDFiles(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      processMDFiles(fullPath);
    } else if (item.isFile() && item.name.endsWith('.md')) {
      processMDFile(fullPath);
    }
  });
}

// 处理单个MD文件
function processMDFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 查找所有图片引用
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
    let match;
    let hasChanges = false;
    
    while ((match = imageRegex.exec(content)) !== null) {
      const altText = match[1];
      const imagePath = match[2];
      
      // 跳过网络图片
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        continue;
      }
      
      // 处理本地图片
      if (imagePath) {
        // 构建图片的完整路径
        let absoluteImagePath;
        if (path.isAbsolute(imagePath)) {
          absoluteImagePath = imagePath;
        } else {
          absoluteImagePath = path.join(path.dirname(filePath), imagePath);
        }
        
        // 检查图片是否存在
        if (fs.existsSync(absoluteImagePath)) {
          // 生成新的图片路径
          const imageName = path.basename(absoluteImagePath);
          const newImagePath = path.join('img', imageName);
          const newAbsoluteImagePath = path.join(imgDir, imageName);
          
          // 复制图片到img目录
          if (!fs.existsSync(newAbsoluteImagePath)) {
            fs.copyFileSync(absoluteImagePath, newAbsoluteImagePath);
            console.log(`Copied image: ${absoluteImagePath} -> ${newAbsoluteImagePath}`);
          }
          
          // 更新MD文件中的图片路径
          content = content.replace(match[0], `![${altText}](${newImagePath})`);
          hasChanges = true;
        }
      }
    }
    
    // 保存更新后的内容
    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated image paths in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
  }
}

// 开始处理
const docsDir = path.join(__dirname, 'docs');
console.log('Starting to process MD files and move images...');
processMDFiles(docsDir);
console.log('Done!');
