import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " wxfiang",
  description: "个人随笔文档记录",
  base: "/blog-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      {
        text: "资料整理",
        items: [
          { text: "git", link: "/src/git/index" },
          { text: "Linux", link: "/src/linux/index" },
          { text: "Nginx", link: "/item-3" },
          { text: "JavaScript", link: "/item-3" }
        ]
      }
    ],

    // 左侧标题配置
    sidebar: {
      "/src/git/": [
        {
          text: "git",
          collapsed: false,
          items: [
            { text: "起步", link: "/src/git/index" },
            { text: "常用", link: "/src/git/seting" }
          ]
        }
      ],
      "/src/linux/": [
        {
          text: "linux",
          collapsed: false,
          items: [{ text: "linux wenti ", link: "/src/linux/index" }]
        }
      ]
    },

    socialLinks: [{ icon: "github", link: "https://github.com/wxfeiang" }],

    // aside，设定为false将关闭右侧栏，文档内容会填充剩余空白部分
    aside: true,
    // outline设置为deep可以解析2-6层深度的标题嵌套
    outline: "deep",

    // 设置所有aside的标题
    outlineTitle: "当前页面导航",

    // 下面的三个参数直接赋值即可，都是官方基于的固定值
    algolia: {
      appId: "R2IYF7ETH7",
      apiKey: "599cec31baffa4868cae4e79f180729b",
      indexName: "index"
    },
    // 编辑链接，具体显示情况见下图
    editLink: {
      pattern: "https://github.com/wxfeiang/bloc-doc/:path",
      text: "于GitHub中编辑这一段内容"
    },

    // 定义文章底部按钮对应的文本标题
    docFooter: {
      prev: "上一篇文章",
      next: "下一篇文章"
    },

    footer: {
      message: "一起长大后的约定！",
      copyright: "Copyright © 2023-present wxfeiang"
    }
  }
})