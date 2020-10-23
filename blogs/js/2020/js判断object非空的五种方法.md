---
title: JavaScript判断Object非空的五种方法
date: 2020-10-23
tags:
 - JavaScript
 - Object
categories:
 -  js
---

## 缘起

在将object数据模板输出为vue文档的过程中涉及遍历对象，并找到model对此的key、value值，如下
```js
model= {
    key:"el-form-1600833040673",
    value: {}
}
```
而我想得到的是
```js
"el-form-1600833040673":{}
```
但是直接通过model.value获取并打印，结果如下：

```js
var model= {
    key:"el-form-1600833040673",
    value: {}
}
var str = model.key+model.value;
console.log(str);
//输出结果如下
el-form-1600833040673[object Object]

//若value = []或者value = ''
var model= {
    key: "el-form-1600833040673",
    value: []//''
}
var str = model.key + model.value;
console.log(str);
//输出结果都如下
el-form-1600833040673
```
为了达到目的，我想到的是将model.value的值转为字符串，并保留{}、[]、“”，想到了JSON.stringify(model.value)，果然问题完美解决。

## 拓展：js判断object非空的方法
### 方法一：将json对象转化为json字符串，再判断该字符串是否为"{}"

```js
var obj = {};
var b = (JSON.stringify(obj) == "{}");
console.log(b);//true
```
### 方法二：for in 循环判断

```js
var obj = {};

var fun = function() {
    for(var key in obj) {
        return false;
    }
    return true;
}
console.log(fun());//true
```

### 方法三：jquery的isEmptyObject方法

```js
var obj = {};

var b = $.isEmptyObject(obj);

console.log(b);//true
```
### 方法四：Object.getOwnPropertyNames()方法


```js
var model= {
    key:
        "el-form-1600833040673",
    value: {},
}
console.log(Object.getOwnPropertyNames(model));
//输出：["key", "value"]

var model= {
    key:
        "el-form-1600833040673",
    value: {},
}
console.log(Object.getOwnPropertyNames(model.value));
//输出： []
//
Object.getOwnPropertyNames(model.value).length == 0//true

```
此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的自身属性的属性名（**包括不可枚举属性**），存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空

#### 浏览器兼容情况
![An image](/support.png)

### 方法五：使用ES6的Object.keys()方法

Object.keys() 方法会返回一个由一个给定对象的自身**可枚举**属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。Object.keys(obj)返回一个表示给定对象的所有可枚举属性的字符串数组。

```js
var model= {
   key:"el-form-1600833040673",
   value: {},
 }
console.log(Object.keys(model));//["key", "value"]
console.log(Object.keys(model.value));//[]
console.log(Object.keys(model.value).length == 0);//true

```
浏览器的兼容情况与**方法四**一样
