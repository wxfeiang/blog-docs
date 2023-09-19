<!--
 * @Author: wxfeiang
 * @Description: 动态路由说明
 * @Date: 2022-07-07 23:04:50
 * @LastEditTime: 2023-09-18 00:03:26
 * @FilePath: /blog-docs/docs/src/outher/router.md
-->
## 前端路由划分

| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id | 1/’‘| Id |
| pid |  上级ID | 上级ID |
| menuType |  一级菜单 | 菜单类型 |
| path | '/user '| 访问地址 |
|name | 'manger' | luyou 名称|
|component| layout,  |  前端根组件 
|redirect|'/user/manage',   | 重定向
|title| '用户管理',   | 名称
|icon| 'icon-yonghu1'  , | 图标
|show| true , | 是否显示 |
|status| true , | 状态 0,1 
|siderShow| true , | 是否侧边显示|
|role| ['admin', "manger"]  | 角色组|
|sort| 0  | Number  |
|cache|true  | 是否缓存|
|routeMenu| true | 是否路由菜单|
|breadcrumb|false|如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)|
|affix|true| 如果设置为true，它则会固定在tags-view中(默认 false)|
|openingMode|  link /center  | 外部 内部|

::: tip
时间字段数据库会自动更新生成

:::



## 前端路由结构
```js
 {
    path: '/user',
    component: layout, // 根组件
    redirect: '/user/manage',
    meta: {
      title: '用户管理',
      icon: 'icon-yonghu1'
    },
    children: [
      {
        path: '/user/manage',
        name: 'manger',
        component: () => import('@/views/user-manage/index'),
        meta: {
          title: 'userManger',
          icon: 'el-icon-user'
        }
      },
    ]
  }

  ......
```

