---
title: 通过JavaScript方法获取URL中的参数
date: 2020-11-09
tags:
 - JavaScript
 - url
categories:
 -  js
---

## 通过JavaScript方法获取URL中的参数


```js
function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
   }
   return(false);
}
```

## 探索过程：

```js
window.location.href
//"https://www.baidu.com/s?ie=UTF-8&wd=fieldset"
window.location.href.split("?");
//(2) ["https://www.baidu.com/s", "ie=UTF-8&wd=fieldset"]
window.location.href.split("?")[1];
//"ie=UTF-8&wd=fieldset"
window.location.href.split("?")[1].split("&");
//(2) ["ie=UTF-8", "wd=fieldset"]
window.location.href.split("?")[1].split("&")[0].split("=");
//(2) ["ie", "UTF-8"]
```

使用window.location.href获取url，通过切割获取参数
![](https://gitee.com/Sweny/images/raw/master/img/20201109160404.png)

此处已经舍近求远了，使用window.location.search可以直接筛选书参数


```js
window.location.search
//"?ie=UTF-8&wd=fieldset"
window.location.search.substring(1);
//"ie=UTF-8&wd=fieldset"
```
![](https://gitee.com/Sweny/images/raw/master/img/20201109171555.png)

借此，需要再次学习一下window.location对象的内容


```js
window.location{
    origin: "https://www.baidu.com",
    protocol: "https:",
    host: "www.baidu.com",
    hostname: "www.baidu.com",
    port: "",
    pathname: "/s",
    search: "?ie=UTF-8&wd=fieldset",
    hash: "",
    href: "https://www.baidu.com/s?ie=UTF-8&wd=fieldset"
}
```
