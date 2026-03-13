const fs = require('fs');
const path = require('path');

// 遍历目录，找出所有md文件
function findAllMdFiles(dir) {
  const mdFiles = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      mdFiles.push(...findAllMdFiles(filePath));
    } else if (file.endsWith('.md')) {
      mdFiles.push(filePath);
    }
  }
  
  return mdFiles;
}

// 重命名文件，去掉文件名中的空格
function renameFilesWithSpaces(mdFiles) {
  const renamedFiles = [];
  
  for (const filePath of mdFiles) {
    const dir = path.dirname(filePath);
    const fileName = path.basename(filePath);
    
    if (fileName.includes(' ')) {
      const newFileName = fileName.replace(/\s+/g, '');
      const newFilePath = path.join(dir, newFileName);
      
      fs.renameSync(filePath, newFilePath);
      renamedFiles.push({ oldPath: filePath, newPath: newFilePath, oldName: fileName, newName: newFileName });
      console.log(`Renamed: ${fileName} -> ${newFileName}`);
    }
  }
  
  return renamedFiles;
}

// 转义正则表达式中的特殊字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 更新md文件中的链接
function updateMdLinks(mdFiles, renamedFiles) {
  for (const mdFile of mdFiles) {
    let content = fs.readFileSync(mdFile, 'utf8');
    let updated = false;
    
    for (const renamed of renamedFiles) {
      const oldName = renamed.oldName;
      const newName = renamed.newName;
      
      // 匹配Markdown链接格式：[text](file.md)
      const linkRegex = new RegExp(`\[([^\]]+)\]\(${escapeRegExp(oldName)}\)`, 'g');
      if (linkRegex.test(content)) {
        content = content.replace(linkRegex, `[$1](${newName})`);
        updated = true;
      }
    }
    
    if (updated) {
      fs.writeFileSync(mdFile, content, 'utf8');
      console.log(`Updated links in: ${mdFile}`);
    }
  }
}

// 更新config.js文件中的侧边栏配置
function updateConfigJs(renamedFiles) {
  const configPath = path.join(__dirname, 'docs', '.vuepress', 'config.js');
  if (!fs.existsSync(configPath)) {
    console.log('config.js not found');
    return;
  }
  
  let content = fs.readFileSync(configPath, 'utf8');
  let updated = false;
  
  for (const renamed of renamedFiles) {
    const oldName = renamed.oldName;
    const newName = renamed.newName;
    
    // 简单替换所有出现的旧文件名
    if (content.includes(oldName)) {
      content = content.replace(new RegExp(escapeRegExp(oldName), 'g'), newName);
      updated = true;
    }
  }
  
  if (updated) {
    fs.writeFileSync(configPath, content, 'utf8');
    console.log('Updated config.js');
  }
}

// 主函数
function main() {
  const rootDir = __dirname;
  const mdFiles = findAllMdFiles(rootDir);
  const renamedFiles = renameFilesWithSpaces(mdFiles);
  updateMdLinks(mdFiles, renamedFiles);
  updateConfigJs(renamedFiles);
  console.log('Done!');
}

// 执行主函数
main();