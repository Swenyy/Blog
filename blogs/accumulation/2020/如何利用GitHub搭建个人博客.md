---
title: 如何利用GitHub搭建个人博客 
date: 2020-10-10
tags:
 - 踩坑
 - accumulate
categories: 
 - accumulation
---

<div style = 'margin-bottom: 50px;'>
    <h3>每日一句，今天给自己一句吗？</h3>
    <boxx changeTime="3000"/>
</div>

## 个人博客搭建踩坑之路

首先借鉴了前人经验：

[手把手教你使用vuepress搭建个人博客](https://segmentfault.com/a/1190000017207205)

[手把手-可复制](https://www.cnblogs.com/softidea/p/10084946.html)

可以先看一下

但是一定会出现各种各样的问题，总结了以下几点注意事项：

1. 首先使用vuepress，不推荐全局安装；
2. 其次vuepress不推荐npm安装，因为npm会生成错误的依赖树。故推荐使用Yarn安装vuepress；
3. 顺序有点混乱；

故根据自己的博客搭建历程，整理了以下步骤

### Git
```
git add.
git commit -m 'xxx'
git push
//npm run deploy
yarn deploy
```

**时间有限，主要步骤同上述博客，注意以下几点即可。**


## 注意事项

-  建立一个仓库用来存放blog项目，名字可以随意起，然后将仓库clone到本地，在本地仓库文件夹内放入项目文件夹，或者新建blog项目（新建项目可以参考vuepress教程，新建后根据
[vuepress-theme-reco主题教程](https://vuepress-theme-reco.recoluan.com/views/1.x/) 进行安装），之后就在这个项目来开发博客，以后仅需要更改这个项目就OK了。

- USERNAME.github.io仓库，用来存放打包之后生成的文件，不需要克隆到本地，（USERNAME 必须是你 Github的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！）

- 在本地的项目文件的根目录，创建deploy.sh文件，内容如下所示。根据本地blog项目中的deploy.sh文件将github上的两个创库进行关联。USERNAME.github.io仓库负责显示网站内容，我们不需要改动它，日常开发和新增内容，都在blog仓库中，并通过yarn deploy命令，将代码发布到
USERNAME.github.io仓库

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run build(不建议使用)
yarn build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.sunwenyue.top' > CNAME

git init
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"

# 如果你想要部署到 https://<USERNAME>.github.io

git push -f git@github.com:Swenyy/Swenyy.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:Swenyy/vuepress.git master:gh-pages

cd -
```

- 运行deploy.sh后，在io仓库有内容，且在io仓库的setting中找到GitHub pages，若里面有https://swenyy.github.io/，打开即可看到自己的主页。


- 若要发布到自己的域名，需要以下几步：

    1.  购买域名，万网、新网或者其他均可，我是在新网上买的top后缀域名；

    2.  购买域名审核通过之后，在域名管理中进行域名解析；
    
        1.  解析设置中“记录类型”一定要好好理解类型提示说明，A类记录指向IPv4地址；NS记录是域名解析服务器记录，如果将子域名指定某个服务器来解析，需要设置NS记录；CNAME记录，如果将域名指向一个域名，实现被指向域名的相同访问效果，需要增加CNAME记录，此外A类具有唯一性，CNAME类可以有多个；其他各类不在赘述。
        2.  解析设置中“主机记录”，即需要填写域名前缀，我使用的是最常见的www，填写完后主机记录值为www.sunwenyue.top;
        3.  解析设置中“记录值”，A类记录的记录值写的是你服务器的IP地址，且必须是IPv4地址；
        4. 由于我借用GitHub服务，所以我只需在域名解析中添加CNAME类型记录，记录值直接放入GitHub的域名，即swenyy.github.io，至此域名解析工作结束。
    3.  在GitHub的io仓库中的setting里找到GitHub Pages,在Custom domain中填写域名解析中的主机	www.sunwenyue.top 然后点击保存按钮即可。

## 美化博客参见：

[vuepress插件库](https://vuepress-theme-reco.recoluan.com/views/other/recommend.html)

[vuepress插件配置教程](https://www.wangt.cc/2020/07/vuepress%E5%8D%9A%E5%AE%A2%E7%BE%8E%E5%8C%96%E4%B9%8Breco%E4%B8%BB%E9%A2%98/)

[配置教程](https://www.cnblogs.com/glassysky/p/13387739.html)

## 使用hexo搭建个人博客视频教程

[hexo视频教程](https://www.youtube.com/watch?v=xvIRGmKWpFM)