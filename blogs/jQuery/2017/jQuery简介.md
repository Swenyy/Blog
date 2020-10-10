---
title: jQuery简介
date: 2017-09-21
tags:
 - jquery
categories: 
 - jquery
---

## jQuery发展史

jQuery是一个JavaScript类库，它通过封装原生的JavaScript函数得到一整套定义好的方 法。它的作者是John Resig，于2006年创建的一个开源项目，随着越来越多开发者的加入， jQuery已经集成了JavaScript、CSS、DOM和Ajax于一体的强大功能。它可以用最少的代码， 完成更多复杂而困难的功能，从而得到了开发者的青睐。

jQuery是一个类库：

一句话总结类库, 就是JavaScript的工具库。 原始社会生火方式， 钻木取火。 但是有了火柴就不一样了。

- 第一种引用方式：
    将一个外部的jquery库引入，和引入外部script方法一致。

    建议：存放在libs文件夹中；
    
    确定是否成功引入jquery库的方法:打开浏览器，soucres资源选项里看， 是否jQuery成功引入。

第二种引入方式，使用百度CDN引入。

<script src="http://libs.baidu.com/jquery/2.0.0/jquery.js"></script>

百度CDN

在产品上线时推荐使用线上CDN，因为线上CDN可以从浏览器缓存中加载。加快页面加载速度。目前最好的并且通用的CDN就是百度CDN。 谷歌的CDN会被墙。

CDN是什么？

内容分发网络，是一种网络构架模式。

jQuery1.XX版本和2.XX版本的区别

1.XX版本兼容IE 6， 7 ， 8 而2.XX版本放弃了对IE6，7 ,  8 的兼容。

### 拓展：

jquery的发展历程：
jQuery 1.0
（2006年8月）：该库的第一个稳定版本，已经具有了对CSS选择符、事件处理和AJAX交互的稳健支持。

jQuery 1.1
（2007年1月）：这一版大幅简化了API。许多较少使用的方法被合并，减少了需要掌握和解释的方法数量。

jQuery 1.1.3
（2007年7月）：这次小版本变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。

jQuery 1.2
（2007年9月）：这一版去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够支持对效果的更灵活定制，而且借助新增的命名空间事件，也使插件开发变得更容易。
jQuery UI（2007年9月）：这个新的插件套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget），以及一组用于构建高级元素（例如可拖放的界面元素）的工具。

jQuery 1.2.6
（2008年5月）：这一版主要是将Brandon Aaron开发的流行的Dimensions插件的功能移植到了核心库中。

jQuery 1.3
（2009年1月）：这一版使用了全新的选择符引擎Sizzle，库的性能也因此有了极大提升。这一版正式支持事件委托特性。

jQuery 1.3.2
（2009年2月）：这次小版本升级进一步提升了库的性能，例如改进了：visible/:hidden选择符、.height()/.width()方法的底层处理机制。另外，也支持查询的元素按文档顺序返回。

jQuery 1.4
（2010年1月14号）：对代码库进行了内部重写组织，开始建立一些风格规范。老的core.js文件被分为attribute.js,css.js,data.js,manipulation.js,traversing.js和queue.js；CSS和attribute的逻辑分离

jQuery 1.5
（2011年1月31日）：该版本修复了83个bug，解决了460个问题。重大改进有：重写了Ajax模块；新增延缓对象（Deferred Objects）；jQuery替身——jQuery.sub()；增强了遍历相邻节点的性能；jQuery开发团队构建系统的改进。

jQuery 1.7
2011年09月29日jQuery 1.7 的第一个 beta 测试版本，该版本修复了超过 50 个的问题以及带来一些新特性。
2011年11月4日jQuery1.7正式版发布

jQuery 1.7.2
2012年03月24日jQuery 1.7.2正式版发布。
该版本在1.7.1的基础上修复了大量的bug，并改进了部分功能。而相比于1.7.2 RC1，只修复了一个bug。值得注意的是：如果你正在使用jQuery Mobile，请使用最新的jQuery 1.7.2和jQuery Mobile 1.1这两个版本，因为之前的jQuery Mobile版本还基于jQuery core 1.7.1或更早的版本。

jQuery 1.8.3
2012年11月14日 jQuery 1.8.3 发布，修复 bug 和性能衰退问题

jQuery 2.0
2013年3月 jQuery 2.0 Beta 2 发布
据jQuery官方博客3月消息，jQuery 2.0 Beta 2 发布。
根据用户对jQuery 2.0 Beta 1 版本的反馈，Beta 2 版做了一些修改。jQuery官方表示，非常需要用户来测试 Beta 2 版，最好同时也能向他们反馈提交建议。
他们相信，Beta 2 版已非常稳定，值得一试，不需要等 2.0 的最终版本。
jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。
jQuery 1.9.1汉化版2013年2月23日发布

jQuery2.1.0
2014年1月24日，jQuery2.1.0版发布[1] 

jQuery2.1.1
2014年5月1日，jQuery2.1.1版发布

**为什么jquery如此优秀？**

1.利用css优势查找页面元素的机制构建于css选择符上。

2.支持扩展（jquery将特殊情况下使用的工具归入插件当中，创建和使用插件的方法非常简单）

3.* 抽象浏览器不一致 （每种浏览器对颁布的标准都有自己的一套不太一致的实现方案，任何web 应用程序都包含有处理这些平台间特性差异的重要组成部分。jquery 用一个抽象层，来标准化日常任务，从而有效的减少了代码量，同时，也极大的简化了这些任务）

4.*将多重操作集于一行（为了必变过度使用临时变量或不必要的代码重复，jquery在其多数方法中使用了连缀的编程模式）(object.xxx.xxx.xxx……)

案例1：

搭建jquery环境。

jQuery核心

window.onload是原生方法，只会执行一次
 
jquery中的window.onload=function(){}方法是jQuery(document).ready(function(){})

jQuery中与window.onload有什么不同?
      window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。
    $(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。

实验证明， .ready()方法他的执行速度更快于window.onload 。内部原理忽略不计。

可以共存就意味着可以同时使用。但是并不意味着， 这两个方法同时存在是合理的。一个页面我们习惯只放一个.ready()方法。 这样不会让页面的逻辑混乱，会增加代码的可读性 。 

推荐用.ready()方法，可以排除jquery未引入错误。

习惯， 页面中只用一个.ready()方法（可以存在多个，但是并不科学。）

简写：
$(document).ready(function(){

})
或
$(function(){

});
jQuery中等所有图片全部加载完的方法是＄.（window）.load(functionName);
两种确定是否成功引入jquery库的方法。

1.打开浏览器，soucres资源选项里看， 是否jQuery成功引入。

2.在script代码里查看是否能够调用jquery方法。