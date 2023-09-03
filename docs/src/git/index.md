---
title: git
---
# 初始化入门

## git安装

::: code-group

```init [windows]
  https://git-scm.com/download
```

``` [Mac]
  brew install git
```

```[Linux]
 yum -y install git
```
:::


## 本地配置



1. 配置邮箱、用户名
```
git config --global user.name "姓名"
git config --global user.email "邮箱"

```
::: tip
配置了全局的 用户名 和 邮箱 ， 在当前项目配置重新执行命令 ，去掉 --global
:::



2. 配置ssh

```
ssh-keygen -t rsa -C '你的邮箱'

```
::: tip
 配置本地ssh-key ,可以与远程仓库免密操作  

 查看生成的公钥：   Mac/linux  cat ~/.git/id_rsa.pub ｜  windows  用户文件/.ssh/文件夹下

:::

3. 远端仓库配置
>>>
::: info 远程配置
 把生成的 .rsa.pub 文件的内容全部复制 ,在git仓库 setting中 配置 即可。

 <code>测试是否链接成功</code>
```
ssh -T git@github.com

```

:::
