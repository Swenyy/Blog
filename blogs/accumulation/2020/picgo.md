---
title: Gitee+PicGo+Typora图床教程
date: 2020-10-30
tags:
 - 踩坑
 - accumulate
categories: 
 - accumulation
---

## 什么叫图床？

**图床就是图片在线存储服务器**，很多网站为了节省自身的内存空间，提高图片的访问速度，会使用一些第三方的平台进行上传图片。这样的平台便叫作图床。

**图床是干什么的？**

图床就是一个便于在博文中插入在线图片连接的个人图片仓库。设置图床之后，在自己博客中插入的图片链接就可以随时随地在线预览了，并且不会因为任何意外原因无法查看，除非自己亲自删除。

## Gitee、PicGo、Typora各自作用

### Gitee

Gitee （码云）国内的Git托管服务，功能与GitHub相同，在国内速度远快于GitHub

如果没有账号可以移步注册
[Gitee](https://gitee.com/)

### PicGo

一个用于快速上传图片并获取图片 URL 链接的工具，PicGo 本体支持如下图床：

![](https://gitee.com/Sweny/images/raw/master/img/20201030164807.png)

下载移步：[PicGo](https://github.com/Molunerfinn/PicGo/releases)
可以选择一个最新的正式版本，本教程使用的是2.2.2版本，该版本下载：[2.2.2](https://github.com/Molunerfinn/PicGo/releases/tag/v2.2.2)

Windows选择.exe即可。

![](https://gitee.com/Sweny/images/raw/master/img/20201030170554.png)

### Typora
Typora 是一款支持实时预览的 Markdown 文本编辑器，如果你是第一次听说，可以移步[Typora完全使用详解](https://sspai.com/post/54912)

可移步[windows下载](https://typora.io/#windows)进行下载

~~**注意**：本次教程最终目的的图床，这里引入Typora也是完成关键配置的一环，可能你不需要Typoar作为Markdown编辑器，但不使用可以完成配置后再卸载，但是它是值得你拥有的！。~~

## Gitee+PicGo+Typora图床教程

### Gitee配置：

1. 注册账号并登陆
2. 点击右上角的+号，新建仓库，并记录仓库名称GiteeUserName/repoName

![](https://gitee.com/Sweny/images/raw/master/img/20201030184315.png)

![](https://gitee.com/Sweny/images/raw/master/img/20201030185252.png)


3. 获取私人令牌 token（**用于配置picGo,token是将picGo与Gitee联系起来关键**）token获取步骤如下：

![](https://gitee.com/Sweny/images/raw/master/img/20201030185929.png)

然后进入设置页找到**私人令牌**

![](https://gitee.com/Sweny/images/raw/master/img/20201030190107.png)

然后点击生成新令牌

![](https://gitee.com/Sweny/images/raw/master/img/20201030190620.png)


点击提交


![](https://gitee.com/Sweny/images/raw/master/img/20201030190716.png)

这里需要验证密码


![](https://gitee.com/Sweny/images/raw/master/img/20201030190932.png)

**验证密码之后会出来一串数字，这一串数字就是你的token，要先保存下来**

![](https://gitee.com/Sweny/images/raw/master/img/1604056620(1).png)

### PicGo配置
1. 在PicGo设置中选择Gitee图床

![](https://gitee.com/Sweny/images/raw/master/img/20201030193306.png)


2. 配置Gitee插件，直接搜索Gitee，添加如下插件

![](https://gitee.com/Sweny/images/raw/master/img/1604057434(1).png)

3. 关键的一步，设置server

![](https://gitee.com/Sweny/images/raw/master/img/20201030193611.png)


如下图所示：


![](https://gitee.com/Sweny/images/raw/master/img/20201030193756.png)


但是有时候默认的端口号可能会**出现“服务端错误”的报错**；这个时候就需要借助Typora，下载完Typora后（版本要求0.9.84以上），需要在导航栏的 **文件-偏好设置-图像**中进行设置，如下所示：

![](https://gitee.com/Sweny/images/raw/master/img/20201030194509.png)

**关键步骤：**


![](https://gitee.com/Sweny/images/raw/master/img/20201030194733.png)


一定注意验证图片上传选项中的端口号，**可将这个端口号填写在设置server中**


![](https://gitee.com/Sweny/images/raw/master/img/20201030195556.png)

4. 在图床设置中配置Gitee，填写repo需要填写为Gitee的用户名/仓库名的形式，上面介绍Gitee已经提到，填写好私人令牌token，已经主分支等等

![](https://gitee.com/Sweny/images/raw/master/img/20201030192239.png)

大功告成！！
