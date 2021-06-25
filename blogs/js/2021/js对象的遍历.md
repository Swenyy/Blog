---
title: js对象的遍历
date: 2021-03-24
tags:
 - JavaScript
 - type
categories:
 -  js
---

## 什么是遍历
遍历就是在数据的集合中进行逐一获取或查看

## object遍历的几种方式

- 一：for...in

```js
const obj = {
        id:1,
        name:'zhangsan',
        age:18
}

 for(let key  in obj){
    console.log(key + '---' + obj[key])
 }
 
 
 <!--
 id- - - 1
 name - - - zhangsan
 age - - - 18
 -->
```

- 第二种： 1）、Object.key(obj); Object.values(obj)

参数：obj（对象名）要返回其枚举自身属性的对象
返回值：一个表示给定对象的所有可枚举属性的字符串数组。


```js
const obj = {
　　　　id:1,
　　　　name:'zhangsan',
　　　　age:18
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
```
输出结果： obj对象的key组成的数组

```
['id','name','age']
```
输出结果：obj对象的value组成的数组
['1','zhangsan','18']

- 第三种使用 Object.getOwnPropertyNames(obj)
   
返回一个数组，包含对象自身的所有属性（包含不可枚举属性），遍历可以获取key和value


```
const obj = {
        id:1,
        name:'zhangsan',
        age:18
}
Object.getOwnPropertyNames(obj)
//["id", "name", "age"]
```


```js
const obj = {
        id:1,
        name:'zhangsan',
        age:18
}
Object.getOwnPropertyNames(obj).forEach(function(key){
    console.log(key+ '---'+obj[key])
})

```

输出结果：

```
 id - - - 1
name - - - zhangsan
 age - - - 18
```

实际测试中：
首先要有对象存在，且对象中要有数据才能进行遍历，否则遍历就是画蛇添足。其次，对象的遍历多数用for…in方法进行，因为操作简单和for循环类似，所以很实用