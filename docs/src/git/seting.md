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

## 总结
从一开始的配置好git,后面可以更好的使用。。。。。