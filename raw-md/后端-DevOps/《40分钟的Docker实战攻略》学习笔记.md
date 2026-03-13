# 《40 分钟的 Docker 实战攻略》学习笔记

## 一、Docker 核心概念（视频基础内容）



1. **镜像（Image）**：应用的 “模板包”，包含运行所需代码、依赖、配置，可理解为 “静态安装文件”，如`nginx:latest`、`python:3.10-slim`。

2. **容器（Container）**：镜像运行后的动态实例，独立隔离的运行环境，一个镜像可启动多个容器（类似 “安装包可多次安装生成不同程序实例”）。

3. **仓库（Registry）**：存放镜像的平台，默认使用 Docker Hub（官方公共仓库），国内需配置镜像站加速下载。

4. **Docker Compose**：多容器协作工具，通过配置文件定义多个服务，一键启动 / 停止关联容器（如 Flask+Redis 组合应用）。

## 二、多系统 Docker 安装实战

### 1. Linux 系统（以 CentOS/Ubuntu 为例）



| 步骤            | CentOS 操作命令                                                                                          | Ubuntu 操作命令                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 卸载旧版本         | `sudo yum remove docker docker-client docker-common`                                                 | `sudo apt-get remove docker docker-engine docker.io containerd runc`                                                        |
| 安装依赖包         | `sudo yum install -y yum-utils device-mapper-persistent-data lvm2`                                   | `sudo apt-get update && sudo apt-get install apt-transport-https ca-certificates curl software-properties-common`           |
| 添加 Docker 镜像源 | `sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo` | \`curl -fsSL [https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg](https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg) |
| 安装 Docker 引擎  | `sudo yum install -y docker-ce docker-ce-cli containerd.io`                                          | `sudo apt-get update && sudo apt-get install docker-ce containerd.io`                                                       |
| 启动并设开机自启      | `sudo systemctl start docker`  `sudo systemctl enable docker`                                        | `sudo systemctl start docker`  `sudo systemctl enable docker`                                                               |
| 验证安装          | `docker --version`  `docker run hello-world`（运行测试容器）                                                 | 同 CentOS                                                                                                                    |

### 2. Windows/Mac 系统



1. 下载：访问[Docke](https://www.docker.com/products/docker-desktop)[r 官网](https://www.docker.com/products/docker-desktop)，下载对应系统的`Docker Desktop`安装包（Windows 需开启 “Hyper-V” 和 “容器” 功能，Mac 需 macOS 11 + 版本）。

2. 安装：双击安装包，按提示下一步（Windows 若提示 “WSL 2 安装不完整”，需先安装[WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)[ 2 更新包](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)）。

3. 验证：打开终端（Windows 用 PowerShell，Mac 用终端），输入`docker --version`，显示版本即安装成功。

## 三、镜像操作实战（含国内加速配置）

### 1. 配置国内镜像站（解决下载慢问题）



* **Linux/Mac**：编辑 Docker 配置文件

1. 执行命令`sudo mkdir -p /etc/docker`（创建配置目录，若已存在可跳过）。

2. 编辑配置文件：`sudo nano /etc/docker/daemon.json`，粘贴以下内容（使用阿里云镜像，也可替换为网易云、华为云等）：



```
{

&#x20; "registry-mirrors": \["https://xxxx.mirror.aliyuncs.com"]  // 替换为自己的阿里云镜像地址（需登录阿里云“容器镜像服务”获取）

}
```



1. 重启 Docker 生效：`sudo systemctl daemon-reload && sudo systemctl restart docker`。

* **Windows**：打开 Docker Desktop → 点击右上角 “设置” → “Docker Engine” → 在 JSON 中添加`"registry-mirrors": ["``https://xxxx.mirror.aliyuncs.com``"]` → 点击 “Apply & Restart”。

### 2. 常用镜像命令（实战示例）



| 操作目标        | 命令示例                                       | 说明                                                        |
| ----------- | ------------------------------------------ | --------------------------------------------------------- |
| 拉取指定版本镜像    | `docker pull nginx:1.23`（拉取 Nginx 1.23 版本） | 不指定版本默认拉取`latest`（最新版），生产环境建议指定具体版本避免兼容问题                 |
| 查看本地所有镜像    | `docker images`或`docker image ls`          | 显示镜像 ID、标签、大小等信息                                          |
| 给镜像打标签（重命名） | `docker tag nginx:1.23 my-nginx:v1`        | 将官方 Nginx 镜像标记为自定义名称，方便管理                                 |
| 删除本地镜像      | `docker rmi 镜像ID`或`docker rmi my-nginx:v1` | 若镜像已启动为容器，需先停止并删除容器（`docker stop 容器ID && docker rm 容器ID`） |

## 四、容器操作实战（核心命令与场景）

### 1. 基础容器命令（含参数说明）



| 操作目标        | 命令示例                                                     | 关键参数说明                                                    |
| ----------- | -------------------------------------------------------- | --------------------------------------------------------- |
| 启动交互式容器（终端） | `docker run -it --name my-ubuntu ubuntu:20.04 /bin/bash` | `-it`：交互式终端；`--name`：指定容器名；`/bin/bash`：进入容器后的默认命令         |
| 启动后台服务容器    | `docker run -d -p 80:80 --name my-nginx nginx:1.23`      | `-d`：后台运行；`-p 宿主机端口:容器端口`：端口映射（外部通过宿主机 80 端口访问容器 Nginx）   |
| 查看运行中容器     | `docker ps`                                              | 仅显示 “Up” 状态的容器                                            |
| 查看所有容器（含停止） | `docker ps -a`                                           | 显示所有状态容器（包括 Exited 停止状态）                                  |
| 进入已运行容器终端   | `docker exec -it my-nginx /bin/bash`                     | 用于后台运行的容器，`-it`保持交互模式，避免容器退出                              |
| 查看容器日志      | `docker logs -f my-nginx`                                | `-f`：实时跟踪日志（类似`tail -f`），按`Ctrl+C`退出                      |
| 停止容器        | `docker stop my-nginx`或`docker stop 容器ID`                | 优雅停止（发送 SIGTERM 信号），强制停止用`docker kill 容器ID`               |
| 删除容器        | `docker rm my-nginx`或`docker rm 容器ID`                    | 批量删除停止的容器：`docker rm $(docker ps -a -q -f status=exited)` |

### 2. 实战场景：Nginx 容器配置持久化

需求：修改 Nginx 配置文件后，容器重启配置不丢失（避免每次进入容器修改）。

操作步骤：



1. 在宿主机创建 Nginx 配置目录：`mkdir -p /home/user/nginx/conf.d`。

2. 编写自定义配置文件（如`/home/user/nginx/conf.d/my-nginx.conf`），内容示例：



```
server {

&#x20;   listen 80;

&#x20;   server\_name localhost;

&#x20;   location / {

&#x20;       root /usr/share/nginx/html;

&#x20;       index my-index.html;  # 自定义首页

&#x20;   }

}
```



1. 编写自定义首页（`/home/user/nginx/html/my-index.html`），内容自定义（如`<h1>My Docker Nginx</h1>`）。

2. 启动容器并挂载宿主机目录：



```
docker run -d -p 80:80 --name my-nginx \\

&#x20; -v /home/user/nginx/conf.d:/etc/nginx/conf.d \  # 挂载配置目录

&#x20; -v /home/user/nginx/html:/usr/share/nginx/html \  # 挂载静态文件目录

&#x20; nginx:1.23
```



1. 验证：访问宿主机 IP（如`http://192.168.1.100`），显示自定义首页；修改宿主机`my-index.html`，刷新页面立即生效。

## 五、自定义镜像实战（Dockerfile 编写）

### 1. 实战案例：构建 Python Flask 应用镜像

#### 步骤 1：准备应用文件



* 项目结构：



```
my-flask-app/

├── app.py       # Flask应用代码

├── requirements.txt  # 依赖列表

└── Dockerfile   # 镜像构建文件
```



* `app.py`内容：



```
from flask import Flask

app = Flask(\_\_name\_\_)

@app.route('/')

def hello():

&#x20;   return "Hello Docker! This is Flask App."

if \_\_name\_\_ == '\_\_main\_\_':

&#x20;   app.run(host='0.0.0.0', port=5000)  # 允许外部访问，端口5000
```



* `requirements.txt`内容（仅需 Flask）：



```
Flask==2.3.3
```

#### 步骤 2：编写 Dockerfile（关键注释）



```
\# 1. 选择基础镜像（slim版本体积小，适合生产环境）

FROM python:3.10-slim

\# 2. 设置工作目录（容器内的目录，后续命令在此目录执行）

WORKDIR /app

\# 3. 复制宿主机文件到容器（先复制依赖列表，利用Docker缓存机制）

COPY requirements.txt .

\# 4. 安装依赖（--no-cache-dir减少镜像体积）

RUN pip install --no-cache-dir -r requirements.txt

\# 5. 复制剩余应用代码（依赖安装后再复制，避免依赖未变时重复构建）

COPY app.py .

\# 6. 容器启动时执行的命令（固定格式，数组形式避免shell解析问题）

CMD \["python", "app.py"]
```

#### 步骤 3：构建并运行镜像



1. 进入项目目录：`cd my-flask-app`。

2. 构建镜像：`docker build -t my-flask:v1 .`（`-t`指定标签，`.`表示当前目录为构建上下文）。

3. 运行容器：`docker run -d -p 5000:5000 --name my-flask-app my-flask:v1`。

4. 验证：访问`http://宿主机IP:5000`，显示 “Hello Docker! This is Flask App.” 即成功。

## 六、数据持久化实战（数据卷与绑定挂载）

### 1. 两种持久化方式对比



| 特性   | 数据卷（Volume）                                    | 绑定挂载（Bind Mount）            |
| ---- | ---------------------------------------------- | --------------------------- |
| 存储位置 | Docker 管理的目录（Linux：`/var/lib/docker/volumes/`） | 宿主机任意目录（如`/home/user/data`） |
| 管理方式 | Docker 命令管理（`docker volume xxx`）               | 手动管理宿主机目录                   |
| 适用场景 | 容器间共享数据、长期存储（如数据库数据）                           | 开发环境（需频繁修改宿主机文件）、固定目录映射     |

### 2. 实战操作示例

#### （1）数据卷实战（以 Redis 数据持久化为例）



1. 创建数据卷：`docker volume create redis-data`。

2. 查看数据卷详情（含存储路径）：`docker volume inspect redis-data`。

3. 启动 Redis 容器并挂载数据卷：



```
docker run -d -p 6379:6379 --name my-redis \\

&#x20; -v redis-data:/data \  # 挂载数据卷到容器的/data目录（Redis默认数据存储目录）

&#x20; redis:alpine --appendonly yes  # 开启Redis持久化（appendonly模式）
```



1. 验证：进入容器添加数据（`docker exec -it my-redis redis-cli`，执行`set name docker`），停止并删除容器（`docker stop my-redis && docker rm my-redis`），重新启动新容器并挂载同一数据卷，执行`get name`仍能获取 “docker”，说明数据持久化成功。

#### （2）绑定挂载实战（以 Flask 日志存储为例）



1. 宿主机创建日志目录：`mkdir -p /home/user/flask-logs`。

2. 修改 Flask 应用（`app.py`），添加日志输出到`/app/logs/app.log`：



```
import logging

from flask import Flask

app = Flask(\_\_name\_\_)

\# 配置日志（输出到/app/logs目录）

logging.basicConfig(

&#x20;   filename='/app/logs/app.log',

&#x20;   level=logging.INFO,

&#x20;   format='%(asctime)s - %(message)s'

)

@app.route('/')

def hello():

&#x20;   app.logger.info('User accessed index page')  # 记录访问日志

&#x20;   return "Hello Docker! This is Flask App."

if \_\_name\_\_ == '\_\_main\_\_':

&#x20;   app.run(host='0.0.0.0', port=5000)
```



1. 重新构建镜像（`docker build -t my-flask:v2 .`），启动容器并绑定挂载日志目录：



```
docker run -d -p 5000:5000 --name my-flask-v2 \\

&#x20; -v /home/user/flask-logs:/app/logs \  # 宿主机日志目录映射到容器/logs目录

&#x20; my-flask:v2
```



1. 验证：访问`http://宿主机IP:5000`，查看宿主机`/home/user/flask-logs/app.log`，可看到新增的访问日志。

## 七、多容器协作实战（Docker Compose）

### 1. 实战案例：Flask+Redis 多服务应用

需求：Flask 应用作为 Web 服务，Redis 作为缓存服务，实现 “访问计数” 功能（每次访问页面，计数 + 1 并显示）。

#### 步骤 1：准备项目文件



* 项目结构：



```
flask-redis-app/

├── app.py           # Flask应用（连接Redis）

├── requirements.txt # 依赖（Flask、redis-py）

├── Dockerfile       # Flask镜像构建文件

└── docker-compose.yml # Compose配置文件
```



* `app.py`内容（连接 Redis 实现计数）：



```
from flask import Flask

import redis

app = Flask(\_\_name\_\_)

\# 连接Redis（Redis服务名即Compose配置中的service名“redis”）

r = redis.Redis(host='redis', port=6379, db=0, decode\_responses=True)

@app.route('/')

def count\_visits():

&#x20;   # 从Redis获取计数，不存在则设为0，每次访问+1

&#x20;   visit\_count = r.incr('visit\_count', 1)

&#x20;   return f"Hello Docker! Total Visits: {visit\_count}"

if \_\_name\_\_ == '\_\_main\_\_':

&#x20;   app.run(host='0.0.0.0', port=5000)
```



* `requirements.txt`内容：



```
Flask==2.3.3

redis==4.6.0
```



* `Dockerfile`内容（同第五部分的 Flask 镜像 Dockerfile，无需修改）。

#### 步骤 2：编写 docker-compose.yml（核心配置）



```
\# Compose配置文件版本（需与Docker版本兼容，3.x为主流）

version: '3.8'

\# 定义所有服务（容器）

services:

&#x20; # 1. Flask Web服务

&#x20; flask-web:

&#x20;   build: .  # 从当前目录的Dockerfile构建镜像

&#x20;   ports:

&#x20;     - "5000:5000"  # 宿主机5000端口映射到容器5000端口

&#x20;   depends\_on:

&#x20;     - redis  # 依赖redis服务，确保redis先启动（但不等待其“就绪”，生产需加健康检查）

&#x20;   environment:

&#x20;     - FLASK\_ENV=production  # 设置环境变量（Flask生产模式）

&#x20; # 2. Redis缓存服务

&#x20; redis:

&#x20;   image: redis:alpine  # 直接使用官方镜像，无需自己构建

&#x20;   volumes:

&#x20;     - redis-data:/data  # 挂载数据卷，持久化Redis数据

&#x20;   command: redis-server --appendonly yes  # 开启持久化

\# 声明数据卷（供上面的redis服务使用）

volumes:

&#x20; redis-data:  # 无需提前创建，Compose启动时自动创建
```

#### 步骤 3：使用 Compose 命令管理服务



| 操作目标          | 命令示例                                      | 说明                                                                |
| ------------- | ----------------------------------------- | ----------------------------------------------------------------- |
| 构建并启动所有服务（后台） | `docker compose up -d`                    | `-d`：后台运行，首次执行会构建 Flask 镜像，后续复用                                   |
| 查看服务状态        | `docker compose ps`                       | 显示所有服务的容器 ID、状态、端口映射等                                             |
| 查看服务日志（实时）    | `docker compose logs -f flask-web`        | `-f`：实时跟踪，可指定服务名（如`flask-web`），不指定则显示所有服务日志                       |
| 进入指定服务容器      | `docker compose exec flask-web /bin/bash` | 进入 flask-web 服务的容器终端                                              |
| 停止并删除服务（含容器）  | `docker compose down`                     | 仅停止服务用`docker compose stop`，删除数据卷需加`-v`（`docker compose down -v`） |
| 重启服务          | `docker compose restart`                  | 重启所有服务，修改配置文件后需重启生效                                               |

#### 步骤 4：验证多服务协作



1. 执行`docker compose up -d`启动服务。

2. 访问`http://宿主机IP:5000`，显示 “Total Visits: 1”。

3. 刷新页面，计数递增（如 “2、3...”），说明 Flask 成功连接 Redis 并实现数据共享。

4. 执行`docker compose down`停止服务，再次执行`docker compose up -d`，计数从之前的数值继续递增（数据卷持久化生效）。

## 八、视频相关补充（用户可能关注的细节）



1. **视频核心优势**：40 分钟聚焦 “实战”，无冗余理论，每个知识点配套命令操作，适合零基础快速上手。

2. **常见问题解决（视频可能覆盖）**：

* Windows 安装 Docker 提示 “Hyper-V 未开启”：需在 “控制面板→程序→启用或关闭 Windows 功能” 中勾选 “Hyper-V” 和 “容器”，重启电脑。

* 容器启动后无法访问：检查端口映射是否正确（`-p 宿主机端口:容器端口`）、宿主机防火墙是否开放对应端口（Linux 用`firewall-cmd --add-port=5000/tcp --permanent`开放端口）。

* 镜像构建失败：检查 Dockerfile 语法（如指令大小写、路径是否正确）、构建上下文是否包含所需文件（避免`COPY`指令路径错误）。

## 九、编辑备注（可按需修改）



1. 若视频中涉及特定实战案例（如 SpringBoot 项目部署、MySQL 容器配置），可在对应章节补充命令与步骤。

2. 国内镜像站地址可替换为个人已获取的专属地址（如阿里云、腾讯云镜像加速地址）。

3. 命令示例中的路径（如`/home/user/nginx`）可根据实际操作系统的文件目录结构调整。

> （注：文档部分内容可能由 AI 生成）