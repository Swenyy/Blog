---
title:  box-shadow总结
date: 2017-09-27
tags:
 - css
categories: 
 - css
---

## box-shadow属性

```css
//向div元素添加阴影
div
{
    box-shadow: 10px 10px 5px #888888;
}
```
## 浏览器兼容情况
IE兼容到9.0.0

紧跟在 -webkit-, -ms- 或 -moz- 前的数字为支持该前缀属性的第一个浏览器版本号

10.0 -webkit-谷歌

3.5 -moz-火狐


```css
/* -ms代表【ie】内核识别码

-moz代表火狐【firefox】内核识别码

-webkit代表谷歌【chrome】/苹果【safari】内核识别码

-o代表欧朋【opera】内核识别码 */
```


## 属性定义及使用说明

box-shadow属性可以设置**一个**或**多个**下拉阴影的框，**多个阴影间以逗号隔开，且效果重叠**，
 

默认值:	none

继承:	no

版本:	CSS3

JavaScript 语法:	object.style.boxShadow="10px 10px 5px #888888"

**box-shadow: h-shadow v-shadow blur spread color inset;**

**注意**：boxShadow属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值和一个可选的 inset 关键字来规定。省略长度的值是 0。

值 | 说明
---|---
h-shadow | 必需的。水平阴影的位置。允许负值（正值从左往右，负值从右边往左边）
v-shadow | 必需的。垂直阴影的位置。允许负值
blur | 可选的。模糊距离
spread | 可选。阴影的大小
color | 可选。阴影的颜色 如rgba(0, 0, 0, 0.3)
inset | 可选。默认是外层阴影，加上inset 则为内侧阴影

## 补充：

<offset-x> <offset-y>: 这是头两个 <length>值，用来设置阴影偏移量。<offset-x> 设置水平偏移量，如果是负值则阴影位于元素左边。 <offset-y> 设置垂直偏移量，如果是负值则阴影位于元素上面。可用单位请查看 <length>。如果两者都是0，那么阴影位于元素后面。这时如果设置了 <blur-radius> 或 <spread-radius> 则有模糊效果。

<blur-radius>: 这是第三个 <length> 值。值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。

<spread-radius> : 这是第四个 <length> 值。取正值时，阴影扩大；取负值时，阴影收缩。默认为0，此时阴影与元素同样大。

 默认阴影在边框外。使用 inset 后，阴影在边框内（即使是透明边框），**背景之上内容之下**。也有些人喜欢把这个值放在最后，浏览器也支持。
 
 参考：
 https://www.html.cn/archives/9360
 
 https://codersblock.com/blog/creating-glow-effects-with-css/

