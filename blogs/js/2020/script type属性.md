---
title: script type属性
date: 2020-11-03
tags:
 - JavaScript
 - type
categories:
 -  js
---

## type简介：

**type**：可选。代替language，表示代码块中脚本语言的内容类型（也称MIME类型）。按照惯例，这个值始终都是“text/javascript”，尽管“text/javascript”和“text/ecmascript”都已经废弃了。JavaScript文件的MIME类型通常是“application/x-javascript”,不过给type属性这个值有可能导致脚本被忽略。在非IE浏览器中有效的其他值还有“application/javascript”和“application/ecmascript”。如果这个值是module，则代码会被当成ES6模块，而且只有这个时候代码中才能出现import和export关键字。



> *The type attribute gives the language of the script or format of the data. If the attribute is present, its value must be a valid MIME type. The charset parameter must not be specified. The default, which is used if the attribute is absent, is "text/javascript".*

## type常用属性值

![](https://gitee.com/Sweny/images/raw/master/img/20201102141903.png)


## type = 'babel'


> <script></script>标签，若里面包的是vue代码，如果写成<script type="text/javascript"></script>ie显示有问题，不识别vue代码；若写成<script type="text/babel"></script>，ie显示没有问题






