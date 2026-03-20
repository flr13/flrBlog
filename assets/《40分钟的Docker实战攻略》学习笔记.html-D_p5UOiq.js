import{_ as e,c as n,a,o as i}from"./app-Bm564foL.js";const l={};function d(c,s){return i(),n("div",null,[...s[0]||(s[0]=[a(`<h1 id="《40-分钟的-docker-实战攻略》学习笔记" tabindex="-1"><a class="header-anchor" href="#《40-分钟的-docker-实战攻略》学习笔记"><span>《40 分钟的 Docker 实战攻略》学习笔记</span></a></h1><h2 id="一、docker-核心概念-视频基础内容" tabindex="-1"><a class="header-anchor" href="#一、docker-核心概念-视频基础内容"><span>一、Docker 核心概念（视频基础内容）</span></a></h2><ol><li><p><strong>镜像（Image）</strong>：应用的 “模板包”，包含运行所需代码、依赖、配置，可理解为 “静态安装文件”，如<code>nginx:latest</code>、<code>python:3.10-slim</code>。</p></li><li><p><strong>容器（Container）</strong>：镜像运行后的动态实例，独立隔离的运行环境，一个镜像可启动多个容器（类似 “安装包可多次安装生成不同程序实例”）。</p></li><li><p><strong>仓库（Registry）</strong>：存放镜像的平台，默认使用 Docker Hub（官方公共仓库），国内需配置镜像站加速下载。</p></li><li><p><strong>Docker Compose</strong>：多容器协作工具，通过配置文件定义多个服务，一键启动 / 停止关联容器（如 Flask+Redis 组合应用）。</p></li></ol><h2 id="二、多系统-docker-安装实战" tabindex="-1"><a class="header-anchor" href="#二、多系统-docker-安装实战"><span>二、多系统 Docker 安装实战</span></a></h2><h3 id="_1-linux-系统-以-centos-ubuntu-为例" tabindex="-1"><a class="header-anchor" href="#_1-linux-系统-以-centos-ubuntu-为例"><span>1. Linux 系统（以 CentOS/Ubuntu 为例）</span></a></h3><table><thead><tr><th>步骤</th><th>CentOS 操作命令</th><th>Ubuntu 操作命令</th></tr></thead><tbody><tr><td>卸载旧版本</td><td><code>sudo yum remove docker docker-client docker-common</code></td><td><code>sudo apt-get remove docker docker-engine docker.io containerd runc</code></td></tr><tr><td>安装依赖包</td><td><code>sudo yum install -y yum-utils device-mapper-persistent-data lvm2</code></td><td><code>sudo apt-get update &amp;&amp; sudo apt-get install apt-transport-https ca-certificates curl software-properties-common</code></td></tr><tr><td>添加 Docker 镜像源</td><td><code>sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</code></td><td>\`curl -fsSL <a href="https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg</a></td></tr><tr><td>安装 Docker 引擎</td><td><code>sudo yum install -y docker-ce docker-ce-cli containerd.io</code></td><td><code>sudo apt-get update &amp;&amp; sudo apt-get install docker-ce containerd.io</code></td></tr><tr><td>启动并设开机自启</td><td><code>sudo systemctl start docker</code> <code>sudo systemctl enable docker</code></td><td><code>sudo systemctl start docker</code> <code>sudo systemctl enable docker</code></td></tr><tr><td>验证安装</td><td><code>docker --version</code> <code>docker run hello-world</code>（运行测试容器）</td><td>同 CentOS</td></tr></tbody></table><h3 id="_2-windows-mac-系统" tabindex="-1"><a class="header-anchor" href="#_2-windows-mac-系统"><span>2. Windows/Mac 系统</span></a></h3><ol><li><p>下载：访问<a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer">Docke</a><a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer">r 官网</a>，下载对应系统的<code>Docker Desktop</code>安装包（Windows 需开启 “Hyper-V” 和 “容器” 功能，Mac 需 macOS 11 + 版本）。</p></li><li><p>安装：双击安装包，按提示下一步（Windows 若提示 “WSL 2 安装不完整”，需先安装<a href="https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package" target="_blank" rel="noopener noreferrer">WSL</a><a href="https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package" target="_blank" rel="noopener noreferrer"> 2 更新包</a>）。</p></li><li><p>验证：打开终端（Windows 用 PowerShell，Mac 用终端），输入<code>docker --version</code>，显示版本即安装成功。</p></li></ol><h2 id="三、镜像操作实战-含国内加速配置" tabindex="-1"><a class="header-anchor" href="#三、镜像操作实战-含国内加速配置"><span>三、镜像操作实战（含国内加速配置）</span></a></h2><h3 id="_1-配置国内镜像站-解决下载慢问题" tabindex="-1"><a class="header-anchor" href="#_1-配置国内镜像站-解决下载慢问题"><span>1. 配置国内镜像站（解决下载慢问题）</span></a></h3><ul><li><strong>Linux/Mac</strong>：编辑 Docker 配置文件</li></ul><ol><li><p>执行命令<code>sudo mkdir -p /etc/docker</code>（创建配置目录，若已存在可跳过）。</p></li><li><p>编辑配置文件：<code>sudo nano /etc/docker/daemon.json</code>，粘贴以下内容（使用阿里云镜像，也可替换为网易云、华为云等）：</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line"></span>
<span class="line">&amp;#x20; &quot;registry-mirrors&quot;: \\[&quot;https://xxxx.mirror.aliyuncs.com&quot;]  // 替换为自己的阿里云镜像地址（需登录阿里云“容器镜像服务”获取）</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>重启 Docker 生效：<code>sudo systemctl daemon-reload &amp;&amp; sudo systemctl restart docker</code>。</li></ol><ul><li><strong>Windows</strong>：打开 Docker Desktop → 点击右上角 “设置” → “Docker Engine” → 在 JSON 中添加<code>&quot;registry-mirrors&quot;: [&quot;\`\`https://xxxx.mirror.aliyuncs.com\`\`&quot;]</code> → 点击 “Apply &amp; Restart”。</li></ul><h3 id="_2-常用镜像命令-实战示例" tabindex="-1"><a class="header-anchor" href="#_2-常用镜像命令-实战示例"><span>2. 常用镜像命令（实战示例）</span></a></h3><table><thead><tr><th>操作目标</th><th>命令示例</th><th>说明</th></tr></thead><tbody><tr><td>拉取指定版本镜像</td><td><code>docker pull nginx:1.23</code>（拉取 Nginx 1.23 版本）</td><td>不指定版本默认拉取<code>latest</code>（最新版），生产环境建议指定具体版本避免兼容问题</td></tr><tr><td>查看本地所有镜像</td><td><code>docker images</code>或<code>docker image ls</code></td><td>显示镜像 ID、标签、大小等信息</td></tr><tr><td>给镜像打标签（重命名）</td><td><code>docker tag nginx:1.23 my-nginx:v1</code></td><td>将官方 Nginx 镜像标记为自定义名称，方便管理</td></tr><tr><td>删除本地镜像</td><td><code>docker rmi 镜像ID</code>或<code>docker rmi my-nginx:v1</code></td><td>若镜像已启动为容器，需先停止并删除容器（<code>docker stop 容器ID &amp;&amp; docker rm 容器ID</code>）</td></tr></tbody></table><h2 id="四、容器操作实战-核心命令与场景" tabindex="-1"><a class="header-anchor" href="#四、容器操作实战-核心命令与场景"><span>四、容器操作实战（核心命令与场景）</span></a></h2><h3 id="_1-基础容器命令-含参数说明" tabindex="-1"><a class="header-anchor" href="#_1-基础容器命令-含参数说明"><span>1. 基础容器命令（含参数说明）</span></a></h3><table><thead><tr><th>操作目标</th><th>命令示例</th><th>关键参数说明</th></tr></thead><tbody><tr><td>启动交互式容器（终端）</td><td><code>docker run -it --name my-ubuntu ubuntu:20.04 /bin/bash</code></td><td><code>-it</code>：交互式终端；<code>--name</code>：指定容器名；<code>/bin/bash</code>：进入容器后的默认命令</td></tr><tr><td>启动后台服务容器</td><td><code>docker run -d -p 80:80 --name my-nginx nginx:1.23</code></td><td><code>-d</code>：后台运行；<code>-p 宿主机端口:容器端口</code>：端口映射（外部通过宿主机 80 端口访问容器 Nginx）</td></tr><tr><td>查看运行中容器</td><td><code>docker ps</code></td><td>仅显示 “Up” 状态的容器</td></tr><tr><td>查看所有容器（含停止）</td><td><code>docker ps -a</code></td><td>显示所有状态容器（包括 Exited 停止状态）</td></tr><tr><td>进入已运行容器终端</td><td><code>docker exec -it my-nginx /bin/bash</code></td><td>用于后台运行的容器，<code>-it</code>保持交互模式，避免容器退出</td></tr><tr><td>查看容器日志</td><td><code>docker logs -f my-nginx</code></td><td><code>-f</code>：实时跟踪日志（类似<code>tail -f</code>），按<code>Ctrl+C</code>退出</td></tr><tr><td>停止容器</td><td><code>docker stop my-nginx</code>或<code>docker stop 容器ID</code></td><td>优雅停止（发送 SIGTERM 信号），强制停止用<code>docker kill 容器ID</code></td></tr><tr><td>删除容器</td><td><code>docker rm my-nginx</code>或<code>docker rm 容器ID</code></td><td>批量删除停止的容器：<code>docker rm $(docker ps -a -q -f status=exited)</code></td></tr></tbody></table><h3 id="_2-实战场景-nginx-容器配置持久化" tabindex="-1"><a class="header-anchor" href="#_2-实战场景-nginx-容器配置持久化"><span>2. 实战场景：Nginx 容器配置持久化</span></a></h3><p>需求：修改 Nginx 配置文件后，容器重启配置不丢失（避免每次进入容器修改）。</p><p>操作步骤：</p><ol><li><p>在宿主机创建 Nginx 配置目录：<code>mkdir -p /home/user/nginx/conf.d</code>。</p></li><li><p>编写自定义配置文件（如<code>/home/user/nginx/conf.d/my-nginx.conf</code>），内容示例：</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">server {</span>
<span class="line"></span>
<span class="line">&amp;#x20;   listen 80;</span>
<span class="line"></span>
<span class="line">&amp;#x20;   server\\_name localhost;</span>
<span class="line"></span>
<span class="line">&amp;#x20;   location / {</span>
<span class="line"></span>
<span class="line">&amp;#x20;       root /usr/share/nginx/html;</span>
<span class="line"></span>
<span class="line">&amp;#x20;       index my-index.html;  # 自定义首页</span>
<span class="line"></span>
<span class="line">&amp;#x20;   }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>编写自定义首页（<code>/home/user/nginx/html/my-index.html</code>），内容自定义（如<code>&lt;h1&gt;My Docker Nginx&lt;/h1&gt;</code>）。</p></li><li><p>启动容器并挂载宿主机目录：</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">docker run -d -p 80:80 --name my-nginx \\\\</span>
<span class="line"></span>
<span class="line">&amp;#x20; -v /home/user/nginx/conf.d:/etc/nginx/conf.d \\  # 挂载配置目录</span>
<span class="line"></span>
<span class="line">&amp;#x20; -v /home/user/nginx/html:/usr/share/nginx/html \\  # 挂载静态文件目录</span>
<span class="line"></span>
<span class="line">&amp;#x20; nginx:1.23</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>验证：访问宿主机 IP（如<code>http://192.168.1.100</code>），显示自定义首页；修改宿主机<code>my-index.html</code>，刷新页面立即生效。</li></ol><h2 id="五、自定义镜像实战-dockerfile-编写" tabindex="-1"><a class="header-anchor" href="#五、自定义镜像实战-dockerfile-编写"><span>五、自定义镜像实战（Dockerfile 编写）</span></a></h2><h3 id="_1-实战案例-构建-python-flask-应用镜像" tabindex="-1"><a class="header-anchor" href="#_1-实战案例-构建-python-flask-应用镜像"><span>1. 实战案例：构建 Python Flask 应用镜像</span></a></h3><h4 id="步骤-1-准备应用文件" tabindex="-1"><a class="header-anchor" href="#步骤-1-准备应用文件"><span>步骤 1：准备应用文件</span></a></h4><ul><li>项目结构：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">my-flask-app/</span>
<span class="line"></span>
<span class="line">├── app.py       # Flask应用代码</span>
<span class="line"></span>
<span class="line">├── requirements.txt  # 依赖列表</span>
<span class="line"></span>
<span class="line">└── Dockerfile   # 镜像构建文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>app.py</code>内容：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">from flask import Flask</span>
<span class="line"></span>
<span class="line">app = Flask(\\_\\_name\\_\\_)</span>
<span class="line"></span>
<span class="line">@app.route(&#39;/&#39;)</span>
<span class="line"></span>
<span class="line">def hello():</span>
<span class="line"></span>
<span class="line">&amp;#x20;   return &quot;Hello Docker! This is Flask App.&quot;</span>
<span class="line"></span>
<span class="line">if \\_\\_name\\_\\_ == &#39;\\_\\_main\\_\\_&#39;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   app.run(host=&#39;0.0.0.0&#39;, port=5000)  # 允许外部访问，端口5000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>requirements.txt</code>内容（仅需 Flask）：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Flask==2.3.3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="步骤-2-编写-dockerfile-关键注释" tabindex="-1"><a class="header-anchor" href="#步骤-2-编写-dockerfile-关键注释"><span>步骤 2：编写 Dockerfile（关键注释）</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# 1. 选择基础镜像（slim版本体积小，适合生产环境）</span>
<span class="line"></span>
<span class="line">FROM python:3.10-slim</span>
<span class="line"></span>
<span class="line">\\# 2. 设置工作目录（容器内的目录，后续命令在此目录执行）</span>
<span class="line"></span>
<span class="line">WORKDIR /app</span>
<span class="line"></span>
<span class="line">\\# 3. 复制宿主机文件到容器（先复制依赖列表，利用Docker缓存机制）</span>
<span class="line"></span>
<span class="line">COPY requirements.txt .</span>
<span class="line"></span>
<span class="line">\\# 4. 安装依赖（--no-cache-dir减少镜像体积）</span>
<span class="line"></span>
<span class="line">RUN pip install --no-cache-dir -r requirements.txt</span>
<span class="line"></span>
<span class="line">\\# 5. 复制剩余应用代码（依赖安装后再复制，避免依赖未变时重复构建）</span>
<span class="line"></span>
<span class="line">COPY app.py .</span>
<span class="line"></span>
<span class="line">\\# 6. 容器启动时执行的命令（固定格式，数组形式避免shell解析问题）</span>
<span class="line"></span>
<span class="line">CMD \\[&quot;python&quot;, &quot;app.py&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤-3-构建并运行镜像" tabindex="-1"><a class="header-anchor" href="#步骤-3-构建并运行镜像"><span>步骤 3：构建并运行镜像</span></a></h4><ol><li><p>进入项目目录：<code>cd my-flask-app</code>。</p></li><li><p>构建镜像：<code>docker build -t my-flask:v1 .</code>（<code>-t</code>指定标签，<code>.</code>表示当前目录为构建上下文）。</p></li><li><p>运行容器：<code>docker run -d -p 5000:5000 --name my-flask-app my-flask:v1</code>。</p></li><li><p>验证：访问<code>http://宿主机IP:5000</code>，显示 “Hello Docker! This is Flask App.” 即成功。</p></li></ol><h2 id="六、数据持久化实战-数据卷与绑定挂载" tabindex="-1"><a class="header-anchor" href="#六、数据持久化实战-数据卷与绑定挂载"><span>六、数据持久化实战（数据卷与绑定挂载）</span></a></h2><h3 id="_1-两种持久化方式对比" tabindex="-1"><a class="header-anchor" href="#_1-两种持久化方式对比"><span>1. 两种持久化方式对比</span></a></h3><table><thead><tr><th>特性</th><th>数据卷（Volume）</th><th>绑定挂载（Bind Mount）</th></tr></thead><tbody><tr><td>存储位置</td><td>Docker 管理的目录（Linux：<code>/var/lib/docker/volumes/</code>）</td><td>宿主机任意目录（如<code>/home/user/data</code>）</td></tr><tr><td>管理方式</td><td>Docker 命令管理（<code>docker volume xxx</code>）</td><td>手动管理宿主机目录</td></tr><tr><td>适用场景</td><td>容器间共享数据、长期存储（如数据库数据）</td><td>开发环境（需频繁修改宿主机文件）、固定目录映射</td></tr></tbody></table><h3 id="_2-实战操作示例" tabindex="-1"><a class="header-anchor" href="#_2-实战操作示例"><span>2. 实战操作示例</span></a></h3><h4 id="_1-数据卷实战-以-redis-数据持久化为例" tabindex="-1"><a class="header-anchor" href="#_1-数据卷实战-以-redis-数据持久化为例"><span>（1）数据卷实战（以 Redis 数据持久化为例）</span></a></h4><ol><li><p>创建数据卷：<code>docker volume create redis-data</code>。</p></li><li><p>查看数据卷详情（含存储路径）：<code>docker volume inspect redis-data</code>。</p></li><li><p>启动 Redis 容器并挂载数据卷：</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">docker run -d -p 6379:6379 --name my-redis \\\\</span>
<span class="line"></span>
<span class="line">&amp;#x20; -v redis-data:/data \\  # 挂载数据卷到容器的/data目录（Redis默认数据存储目录）</span>
<span class="line"></span>
<span class="line">&amp;#x20; redis:alpine --appendonly yes  # 开启Redis持久化（appendonly模式）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>验证：进入容器添加数据（<code>docker exec -it my-redis redis-cli</code>，执行<code>set name docker</code>），停止并删除容器（<code>docker stop my-redis &amp;&amp; docker rm my-redis</code>），重新启动新容器并挂载同一数据卷，执行<code>get name</code>仍能获取 “docker”，说明数据持久化成功。</li></ol><h4 id="_2-绑定挂载实战-以-flask-日志存储为例" tabindex="-1"><a class="header-anchor" href="#_2-绑定挂载实战-以-flask-日志存储为例"><span>（2）绑定挂载实战（以 Flask 日志存储为例）</span></a></h4><ol><li><p>宿主机创建日志目录：<code>mkdir -p /home/user/flask-logs</code>。</p></li><li><p>修改 Flask 应用（<code>app.py</code>），添加日志输出到<code>/app/logs/app.log</code>：</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import logging</span>
<span class="line"></span>
<span class="line">from flask import Flask</span>
<span class="line"></span>
<span class="line">app = Flask(\\_\\_name\\_\\_)</span>
<span class="line"></span>
<span class="line">\\# 配置日志（输出到/app/logs目录）</span>
<span class="line"></span>
<span class="line">logging.basicConfig(</span>
<span class="line"></span>
<span class="line">&amp;#x20;   filename=&#39;/app/logs/app.log&#39;,</span>
<span class="line"></span>
<span class="line">&amp;#x20;   level=logging.INFO,</span>
<span class="line"></span>
<span class="line">&amp;#x20;   format=&#39;%(asctime)s - %(message)s&#39;</span>
<span class="line"></span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">@app.route(&#39;/&#39;)</span>
<span class="line"></span>
<span class="line">def hello():</span>
<span class="line"></span>
<span class="line">&amp;#x20;   app.logger.info(&#39;User accessed index page&#39;)  # 记录访问日志</span>
<span class="line"></span>
<span class="line">&amp;#x20;   return &quot;Hello Docker! This is Flask App.&quot;</span>
<span class="line"></span>
<span class="line">if \\_\\_name\\_\\_ == &#39;\\_\\_main\\_\\_&#39;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   app.run(host=&#39;0.0.0.0&#39;, port=5000)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>重新构建镜像（<code>docker build -t my-flask:v2 .</code>），启动容器并绑定挂载日志目录：</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">docker run -d -p 5000:5000 --name my-flask-v2 \\\\</span>
<span class="line"></span>
<span class="line">&amp;#x20; -v /home/user/flask-logs:/app/logs \\  # 宿主机日志目录映射到容器/logs目录</span>
<span class="line"></span>
<span class="line">&amp;#x20; my-flask:v2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>验证：访问<code>http://宿主机IP:5000</code>，查看宿主机<code>/home/user/flask-logs/app.log</code>，可看到新增的访问日志。</li></ol><h2 id="七、多容器协作实战-docker-compose" tabindex="-1"><a class="header-anchor" href="#七、多容器协作实战-docker-compose"><span>七、多容器协作实战（Docker Compose）</span></a></h2><h3 id="_1-实战案例-flask-redis-多服务应用" tabindex="-1"><a class="header-anchor" href="#_1-实战案例-flask-redis-多服务应用"><span>1. 实战案例：Flask+Redis 多服务应用</span></a></h3><p>需求：Flask 应用作为 Web 服务，Redis 作为缓存服务，实现 “访问计数” 功能（每次访问页面，计数 + 1 并显示）。</p><h4 id="步骤-1-准备项目文件" tabindex="-1"><a class="header-anchor" href="#步骤-1-准备项目文件"><span>步骤 1：准备项目文件</span></a></h4><ul><li>项目结构：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">flask-redis-app/</span>
<span class="line"></span>
<span class="line">├── app.py           # Flask应用（连接Redis）</span>
<span class="line"></span>
<span class="line">├── requirements.txt # 依赖（Flask、redis-py）</span>
<span class="line"></span>
<span class="line">├── Dockerfile       # Flask镜像构建文件</span>
<span class="line"></span>
<span class="line">└── docker-compose.yml # Compose配置文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>app.py</code>内容（连接 Redis 实现计数）：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">from flask import Flask</span>
<span class="line"></span>
<span class="line">import redis</span>
<span class="line"></span>
<span class="line">app = Flask(\\_\\_name\\_\\_)</span>
<span class="line"></span>
<span class="line">\\# 连接Redis（Redis服务名即Compose配置中的service名“redis”）</span>
<span class="line"></span>
<span class="line">r = redis.Redis(host=&#39;redis&#39;, port=6379, db=0, decode\\_responses=True)</span>
<span class="line"></span>
<span class="line">@app.route(&#39;/&#39;)</span>
<span class="line"></span>
<span class="line">def count\\_visits():</span>
<span class="line"></span>
<span class="line">&amp;#x20;   # 从Redis获取计数，不存在则设为0，每次访问+1</span>
<span class="line"></span>
<span class="line">&amp;#x20;   visit\\_count = r.incr(&#39;visit\\_count&#39;, 1)</span>
<span class="line"></span>
<span class="line">&amp;#x20;   return f&quot;Hello Docker! Total Visits: {visit\\_count}&quot;</span>
<span class="line"></span>
<span class="line">if \\_\\_name\\_\\_ == &#39;\\_\\_main\\_\\_&#39;:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   app.run(host=&#39;0.0.0.0&#39;, port=5000)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>requirements.txt</code>内容：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Flask==2.3.3</span>
<span class="line"></span>
<span class="line">redis==4.6.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Dockerfile</code>内容（同第五部分的 Flask 镜像 Dockerfile，无需修改）。</li></ul><h4 id="步骤-2-编写-docker-compose-yml-核心配置" tabindex="-1"><a class="header-anchor" href="#步骤-2-编写-docker-compose-yml-核心配置"><span>步骤 2：编写 docker-compose.yml（核心配置）</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">\\# Compose配置文件版本（需与Docker版本兼容，3.x为主流）</span>
<span class="line"></span>
<span class="line">version: &#39;3.8&#39;</span>
<span class="line"></span>
<span class="line">\\# 定义所有服务（容器）</span>
<span class="line"></span>
<span class="line">services:</span>
<span class="line"></span>
<span class="line">&amp;#x20; # 1. Flask Web服务</span>
<span class="line"></span>
<span class="line">&amp;#x20; flask-web:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   build: .  # 从当前目录的Dockerfile构建镜像</span>
<span class="line"></span>
<span class="line">&amp;#x20;   ports:</span>
<span class="line"></span>
<span class="line">&amp;#x20;     - &quot;5000:5000&quot;  # 宿主机5000端口映射到容器5000端口</span>
<span class="line"></span>
<span class="line">&amp;#x20;   depends\\_on:</span>
<span class="line"></span>
<span class="line">&amp;#x20;     - redis  # 依赖redis服务，确保redis先启动（但不等待其“就绪”，生产需加健康检查）</span>
<span class="line"></span>
<span class="line">&amp;#x20;   environment:</span>
<span class="line"></span>
<span class="line">&amp;#x20;     - FLASK\\_ENV=production  # 设置环境变量（Flask生产模式）</span>
<span class="line"></span>
<span class="line">&amp;#x20; # 2. Redis缓存服务</span>
<span class="line"></span>
<span class="line">&amp;#x20; redis:</span>
<span class="line"></span>
<span class="line">&amp;#x20;   image: redis:alpine  # 直接使用官方镜像，无需自己构建</span>
<span class="line"></span>
<span class="line">&amp;#x20;   volumes:</span>
<span class="line"></span>
<span class="line">&amp;#x20;     - redis-data:/data  # 挂载数据卷，持久化Redis数据</span>
<span class="line"></span>
<span class="line">&amp;#x20;   command: redis-server --appendonly yes  # 开启持久化</span>
<span class="line"></span>
<span class="line">\\# 声明数据卷（供上面的redis服务使用）</span>
<span class="line"></span>
<span class="line">volumes:</span>
<span class="line"></span>
<span class="line">&amp;#x20; redis-data:  # 无需提前创建，Compose启动时自动创建</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤-3-使用-compose-命令管理服务" tabindex="-1"><a class="header-anchor" href="#步骤-3-使用-compose-命令管理服务"><span>步骤 3：使用 Compose 命令管理服务</span></a></h4><table><thead><tr><th>操作目标</th><th>命令示例</th><th>说明</th></tr></thead><tbody><tr><td>构建并启动所有服务（后台）</td><td><code>docker compose up -d</code></td><td><code>-d</code>：后台运行，首次执行会构建 Flask 镜像，后续复用</td></tr><tr><td>查看服务状态</td><td><code>docker compose ps</code></td><td>显示所有服务的容器 ID、状态、端口映射等</td></tr><tr><td>查看服务日志（实时）</td><td><code>docker compose logs -f flask-web</code></td><td><code>-f</code>：实时跟踪，可指定服务名（如<code>flask-web</code>），不指定则显示所有服务日志</td></tr><tr><td>进入指定服务容器</td><td><code>docker compose exec flask-web /bin/bash</code></td><td>进入 flask-web 服务的容器终端</td></tr><tr><td>停止并删除服务（含容器）</td><td><code>docker compose down</code></td><td>仅停止服务用<code>docker compose stop</code>，删除数据卷需加<code>-v</code>（<code>docker compose down -v</code>）</td></tr><tr><td>重启服务</td><td><code>docker compose restart</code></td><td>重启所有服务，修改配置文件后需重启生效</td></tr></tbody></table><h4 id="步骤-4-验证多服务协作" tabindex="-1"><a class="header-anchor" href="#步骤-4-验证多服务协作"><span>步骤 4：验证多服务协作</span></a></h4><ol><li><p>执行<code>docker compose up -d</code>启动服务。</p></li><li><p>访问<code>http://宿主机IP:5000</code>，显示 “Total Visits: 1”。</p></li><li><p>刷新页面，计数递增（如 “2、3...”），说明 Flask 成功连接 Redis 并实现数据共享。</p></li><li><p>执行<code>docker compose down</code>停止服务，再次执行<code>docker compose up -d</code>，计数从之前的数值继续递增（数据卷持久化生效）。</p></li></ol><h2 id="八、视频相关补充-用户可能关注的细节" tabindex="-1"><a class="header-anchor" href="#八、视频相关补充-用户可能关注的细节"><span>八、视频相关补充（用户可能关注的细节）</span></a></h2><ol><li><p><strong>视频核心优势</strong>：40 分钟聚焦 “实战”，无冗余理论，每个知识点配套命令操作，适合零基础快速上手。</p></li><li><p><strong>常见问题解决（视频可能覆盖）</strong>：</p></li></ol><ul><li><p>Windows 安装 Docker 提示 “Hyper-V 未开启”：需在 “控制面板→程序→启用或关闭 Windows 功能” 中勾选 “Hyper-V” 和 “容器”，重启电脑。</p></li><li><p>容器启动后无法访问：检查端口映射是否正确（<code>-p 宿主机端口:容器端口</code>）、宿主机防火墙是否开放对应端口（Linux 用<code>firewall-cmd --add-port=5000/tcp --permanent</code>开放端口）。</p></li><li><p>镜像构建失败：检查 Dockerfile 语法（如指令大小写、路径是否正确）、构建上下文是否包含所需文件（避免<code>COPY</code>指令路径错误）。</p></li></ul><h2 id="九、编辑备注-可按需修改" tabindex="-1"><a class="header-anchor" href="#九、编辑备注-可按需修改"><span>九、编辑备注（可按需修改）</span></a></h2><ol><li><p>若视频中涉及特定实战案例（如 SpringBoot 项目部署、MySQL 容器配置），可在对应章节补充命令与步骤。</p></li><li><p>国内镜像站地址可替换为个人已获取的专属地址（如阿里云、腾讯云镜像加速地址）。</p></li><li><p>命令示例中的路径（如<code>/home/user/nginx</code>）可根据实际操作系统的文件目录结构调整。</p></li></ol><blockquote><p>（注：文档部分内容可能由 AI 生成）</p></blockquote>`,78)])])}const p=e(l,[["render",d]]),t=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF-DevOps/%E3%80%8A40%E5%88%86%E9%92%9F%E7%9A%84Docker%E5%AE%9E%E6%88%98%E6%94%BB%E7%95%A5%E3%80%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"《40 分钟的 Docker 实战攻略》学习笔记","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773394873000,"contributors":[{"name":"wulr","username":"wulr","email":"wulr@eastcom-sw.com","commits":1,"url":"https://github.com/wulr"}],"changelog":[{"hash":"2e05be3a6e915f9542c6b5a3b229ee576fde38ba","time":1773394873000,"email":"wulr@eastcom-sw.com","author":"wulr","message":"Remove spaces from MD filenames and update references"}]},"filePathRelative":"后端-DevOps/《40分钟的Docker实战攻略》学习笔记.md"}');export{p as comp,t as data};
