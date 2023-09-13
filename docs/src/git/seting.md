---
title: git
---
# 常用操作

## 下载项目
```
git clone url
```
::: tip
下载地址后面可以追加文件夹名, 表示重新命名 ： git clone url dir

:::
1. 下载指定操作

```

git clone -b  [branch/tag] url
```

::: tip
barnch  分支名  
url    仓库地址  
tag    版本/标签    

:::

## 远程地址

**查看**
```
git  remote -v 
```
**修改**

1. 命令修改
```
git remote origin set-url [url]

```

2. 先删后加
```
git remote rm origin
git remote add origin [url]
```
::: tip
这种操作不会保持历史记录
:::

3. 直接修改config文件
::: tip
打开.git文件夹找到config文件，替换远程地址  
----- 多个KEY 时候
已经添加好了Key

:::

## 本地操作

### 初始化

```
git init   
```
::: tip
初始化本地仓库
:::

### add 
```
git add  . 
```
::: tip
.   默认添加所有文件到本地仓库   
dir 追加文件/文件夹 
:::

### commit 

**本次修改**

```
git commit -m  "本次提交的描述信息"

```

**修改commit**

::: tip
```
git commit --amend
```
修改刚commit，还没有push的commit信息，=====在打开的 vim 界面 编辑即可
```
git rebase -i HEAD~6 
```
修改某次 commit 信息
:::

### push 
push(提交到远程仓库)
```
git push

```
::: tip
```
git push -u origin [main]
```
【分支名】第一次提交使用,后面就可以继续使用git pull    
```
git push branch:branch
```
提交本地 分支到远程分支
:::

### pull
拉取/更新本地代码
```
git pull
```
::: tip
更新遇到本地文件冲突
```
git stash         // 先把本地文件暂存起来
git pull          // 在获取远程文件
git stash  pop    // 把本地文件还原并于最新文件合并 =====》有冲突需要手动解决
```
:::






