<!--
 * @Author: wxfeiang
 * @Description: 用户表
 * @Date: 2022-07-10 23:04:50
 * @LastEditTime: 2023-09-18 00:04:27
 * @FilePath: /blog-docs/docs/src/outher/users.md
-->
# 用户文件

## 账号表 account
| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id | 1/’‘| Id |
| account | xfuvhis| 账号 |
| passWord | 00w40 | 密码|
| userName | name | 姓名|

## 前端用户字段 user
| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id | 1/’‘| Id |  对应账号表
| userNickname| sdsd | 用户昵称 |
| role | [admin ,endit]| 拥有角色 |
| age|   age | 年龄 |
| sex | 0,1,2| 性别 |
| headPortrait| 头像地址   | 头像地址|
| education| 0，1,2,3,3, |  学历 |
| idCard| number| 身份证号 |
| dateOfBirth| 1993-11-26 | 出生年月 |
| email| email@qq.com | 邮箱地址 |
| tlePhone| 18309383838 | 电话号码 |
| creationTime| 2022-12-02-20 10:20:20 | 创建时间 |

## 用户组表  user_group



## 角色菜单 role
| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id| id| id |
| rId| admin | 角色Id|
| roleName| admin| 角色名称|
| roleId| admin| 角色标识|
| roleType | 内置/外置| 角色标识|
| menu| 菜单资源| 菜单资源|
| creationTime| 2022-12-02-20 10:20:20 | 创建时间 |
TODO: 确认是插入菜单ID 还是 菜单插入角色ID

## 权限表 permission
| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id| id| id |
| permission| dfhik | 权限|
| permissionSort |  number  | 排序 |
| creationTime| 2022-12-02-20 10:20:20 | 创建时间 |



## 数据字典管理
| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id | Id| Id |
| pId | pId | 上级ID |
| dictionaryName |  性别  | 字典名称 |
| dictionaryType |  type  | 字典类型 |
| dictionaryNumber | sex | 字典编号 |
| dictionaryStatus |  0,1  | 字典状态  |
| dictionaryDescription | 这里是描述 | 字典描述 |
| dictionaryValue |  1，男 2， 女  | 字典值 |
| dictionarySort |  number  | 字典排序 |
| creationTime| 2022-12-02-20 10:20:20 | 创建时间 |



    

