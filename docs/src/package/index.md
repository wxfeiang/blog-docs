---
title: npm｜pnpm
---

# 包管理方式

## 安装方式


::: code-group

```init [windows]

  去github  nvm 找到 nvm-setup.zip 点击下载

```

``` [Mac]
  brew install nvm

```

```[Linux]
 yum -y install nvm

```
:::

[下载最新的](https://github.com/coreybutler/nvm-windows/releases)



## pnpm

* 离线安装

查看当前版本
执行以下命令查看已安装的 pnpm 版本：

pnpm -v
升级 pnpm
执行以下命令升级 pnpm：

pnpm i -g pnpm

其中 -g 表示全局安装。

如果你希望升级到指定版本，可以使用以下命令：

pnpm i -g pnpm@指定版本号
例如：

pnpm i -g pnpm@6.7.3

pnpm add -g pnpm to update
验证升级结果
执行以下命令验证 pnpm 是否升级成功：

pnpm -v


步骤一：生成离线安装包
首先，我们需要在有网络连接的机器上，使用 npm pack 命令来生成 pm2 和 pnpm 的离线安装包。npm pack 命令可以将一个 npm 包打包成一个 .tgz 文件，包含了该包的所有依赖和元数据。我们可以使用 --pack-destination 参数来指定输出文件夹，例如：

npm pack -g pm2 --pack-destination ~/Desktop
npm pack -g pnpm --pack-destination ~/Desktop
这样，我们就会在 offline 文件夹下得到两个 .tgz 文件，分别是 pm2-5.1.2.tgz 和 pnpm-6.23.6.tgz（版本号可能不同）。

步骤二：拷贝到服务器
接下来，我们需要将这两个 .tgz 文件拷贝到目标服务器上，可以使用 scp、ftp 或其他任何方式。假设我们将它们放在了 /home/user/offline 文件夹下。

步骤三：安装
最后，我们可以在服务器上使用 npm -g i 命令来安装这两个 .tgz 文件，例如：

npm -g i /home/user/offline/pm2-5.1.2.tgz
npm -g i /home/user/offline/pnpm-6.23.6.tgz
这样，我们就完成了 pm2 和 pnpm 的离线安装。我们可以使用 pm2 -v 和 pnpm -v 来验证安装是否成功。

