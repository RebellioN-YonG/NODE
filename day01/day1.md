### 1. 安装, VSCODE 配置...

### 2. FILE IO

- import { readFile, writeFile, appendFile } from "node:fs/promises": 导入异步 filesystem 库, 新写法, import 导入 ES Module, 优先使用
- const fs = require("node:fs/promises") : 导入异步 filesystem 库, 旧写法, require 导入 CommonJS Module
- readFile, writeFile, appendFile: 异步读写文件
- writeFile 直接覆写文件, appendFile 追加内容到文件末尾
