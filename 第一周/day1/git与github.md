# git与github
 
 >  + git 版本控制工具
 >  + github 远程仓库 一个网站

#### 集中式 vs 分布式
> + 集中式 ：必须联网，比较慢，使用一个中央服务器，有可能会造成数据丢失
> + 分布式：不用联网就能进行版本控制，速度快

#### 初始化版本控制
> 1. 找到需要控制的文件目录，鼠标右键，找到并点击 git bash here
> 2. 打开控制台，输入git init 出现隐藏文件 .git（控制版本是基于.git文件操作的，如果删除就无法进行控制）

#### 一些使用方法
> - git status  查看git状态
> - Tab键  自动补全文件
> - ls 查看当前目录下的文件
> - ll 查看当前目录下的文件更改细节与时间
> - add . 把所有文件放进暂存区
> - add 文件名 将这个文件放进暂存区
> - 通过上下键去切换刚才输入的命令
> - git commit -m "注释" 暂存区放到版本区
> - git commit -a -m "注释" 提交过的可以快速从工作区放到版本区
> - 设置用户姓名 git config --global user.name ""
> - 设置用户邮箱 git config --global user.email ""
> - git log 查看版本
> - git reflog 查看版本
> - git diff 查看工作区与暂存区的区别
> - git diff master 查看工作区与版本区的区别
> - git diff --cached 查看暂存区与版本区的区别
> - git reset --hard 版本ID 撤销回滚
>  
> 过滤指定文件
> - 创建一个 .gitignore的文件
> - touch .gitignore (创建文件)
> - 配置过滤项 文件名/
> - 如果说配置不起作用，先把之前的操作清除一下，再过滤操作 
> - 清除命令 git rm -r --cached
> 
 #### 代码上传到远程仓库的步骤
> ##### 第一种
> 1. 在github上创建一个项目
> 2. 绑定密钥 ssh-keygen -t -rsa  -C "邮箱名"
> 3. 确认版本库为最新
> 4. 查看远程仓库 git remote -v
> 5. 添加远程仓库 git remote add origin
> 6. git pull origin master 
> 7. git push origin master
> ##### 第二种
> 1. 在github创建一个仓库
> 2. 克隆仓库地址 git clone 地址
> 3. 将项目文件手动添加到仓库文件中 git add .
> 4. git commit -m ""
> 5. git push origin master
> - (先把需要的课件地址克隆下来 然后每天课件更新的文件用git pull就能扒下来)






