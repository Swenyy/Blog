---
title: 常用Git总结
date: 2020-11-10
tags:
 - 踩坑
 - accumulate
 - git
categories: 
 - accumulation
---




## 下载代码:


```bash
git clone url
```


## 更新代码：
```bash
git pull
```

### 添加更新：
```bash
git add -A
```

### 暂存及注释：
```bash
git commit -m"【提交类型】：bug【是否自测通过】：通过【修改内容】：1、"
```

### 提交代码：
```bash
git push
```

### 查看代码修改状态：
```bash
git status
```

### fetch代码：
```bash
git fetch origin <分支名称>:<分支名称>
```
**远程分支拉取代码**

::: tip
fetch常结合merge一起用，git fetch + git merge == git pull
:::

一般要用git fetch+git merge，因为git pull会将代码直接合并，造成冲突等无法知道，fetch代码下来要git diff orgin/xx来看一下差异然后再合并。


## 分支：

### 查看分支：

```bash
git branch
```


### 查看远程分支：

```bash
git branch -r
```

### 查看所有分支：

```bash
git branch -a
```

### 创建分支：

```bash
git branch <分支名称>
```

### 切换分支：

```bash
git checkout <分支名称>
```

### 创建并切换分支：

```bash
git checkout -b <分支名称>
```

### 推送本地分支到远程：

```bash
git push origin <分支名称>
```

### 指定本地分支到远程：

```bash
git branch --set-upstream-to=origin/<分支名称> <分支名称>
```

### 合并分支：

```bash
git merge <分支名称>
```

### 删除本地分支：

```bash
git branch -d <分支名称>
```

### 删除远程分支：

```bash
git push origin --delete <分支名称>
```

## 查看
### 查看日志


```bash
git log
```

### 查看用户名
```bash
git config user.name
```

### 查看邮箱	
```bash
git config user.email
```


