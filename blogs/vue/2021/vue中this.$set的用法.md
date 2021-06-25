---
title: vue中this.$set的用法
date: 2021-04-15
tags:
 - vue
categories: 
 - vue
---

## 1.this.$set实现什么功能，为什么要用它？

当你发现你给对象加了一个属性，在控制台能打印出来，但是却没有更新到视图上时，也许这个时候就需要用到this.$set（）这个方法了，简单来说this.$set的功能就是解决这个问题的啦。官方解释：向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如this.myObject.newProperty = 'hi')，你会发现vue官网是vue.set，vue.set的用法，给你们插入连接，怕你们找不到😁，我们现在讲的这个this.$set()和它有什么关系呢？咱先说this.$set()，因为他们俩的区别就涉及原理问题啦。


## 2.怎么用它？
vue 中写在<template></template>标签的代码

![](https://gitee.com/Sweny/images/raw/master/img/20210427210053.png)

2.export default{}中data数据

![](https://gitee.com/Sweny/images/raw/master/img/20210427210145.png)

3点击按钮触发changeValue方法，

🌹调用方法：this.$set( target, key, value )

🌹 target：要更改的数据源(可以是对象或者数组)

🌹 key：要更改的具体数据

🌹 value ：重新赋的值

![](https://gitee.com/Sweny/images/raw/master/img/20210427210236.png)

4.在没有点击按钮的时候，界面是这样的，虽然界面没有显示出来，但是控制台已经打印出来了

![](https://upload-images.jianshu.io/upload_images/17600821-c27e6a5087dc3df9.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

![](https://upload-images.jianshu.io/upload_images/17600821-9c3152d34499caf9.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

5.当点击按钮的时候，调用this.$set方法，成功显示第三个属性,这就是整个过程啦😁

![](https://upload-images.jianshu.io/upload_images/17600821-5c35c8fafe065de8.png?imageMogr2/auto-orient/strip|imageView2/2/w/179/format/webp)

## 3.应用场景 
当你需要为对象添加一个新属性时，或者你遇到我上边所说的问题的时候可以试试这个方法，具体vue.set和this.$set()的原理和区别，可以参考这个vue.set和this.$set()的区别，仔细看看如果暂时不懂也没关系，先解决问题，会用这个方法。


原文链接：https://www.jianshu.com/p/6f28f5abee08
