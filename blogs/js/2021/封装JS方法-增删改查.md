---
title: 封装JS方法-增删改查
date: 2021-03-24
tags:
 - JavaScript
 - type
categories:
 -  js
---

## 第一步：js深拷贝和浅拷贝的概念和区别。

1.浅拷贝

拷贝就是把父对像的属性，全部拷贝给子对象。此时子对象拷贝的是父对象的地址，子父对象相互影响。

2.深拷贝

就是把父对象的属性中的值拷贝给子对象此时不论父对象如何改变都不会再影响到子对象。

## 第二步：测试浅拷贝。我们借助于谷歌浏览器控制台实现浅拷贝的测试，

首先声明对象：

```JS
var father={
    familyName:"张"
    
};
var son={};
```


拷贝son=father此时打印，son和father的familyName都是张

将father的familyName改为“李”，则son的familyName也变为了“李”。

这就是浅拷贝，拷贝的是存储变量的地址会互相影响。

![](https://exp-picture.cdn.bcebos.com/354e7a781423beb90781537630d6e1d06ce8b317.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)

## 第三步：浅拷贝的实现

第一种：借助于js的JSON对象的两个函数

JSON.stringify(father)将一个json对象转为json字符串

JSON.parse(str)将一个json字符串转为json对象

它的实现原理是现将对象转为一个基本数据类型，在执行拷贝，不过这个只是适用于json格式的数据对其它情况不一定都能满足。测试如下：


```js
var father={familyName:"张"};var son={};

son = JSON.parse(JSON.stringify(father));

father.familyName="李"

son.familyName
```
![](https://exp-picture.cdn.bcebos.com/b1454a1bd10ff226732543ba9c99e92abbb8a417.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)

#### 第四步：借助于for 循环实现数组的深拷贝

具体代码和实现：如下


```js
var father = [1,2,3,4,5]

var son = copyArr(father)

function copyArr(father) {

    let res = []

    for (let i = 0; i < arr.length; i++) {

     res.push(father[i])

    }

    return res

}

console.log(father)

console.log(son)

father[2] = 5

console.log(father)

console.log(son)
```
![](https://exp-picture.cdn.bcebos.com/5e615d715fdb36202e85bf3dabc5260f89358d17.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)


## 第五步：借助于slice 方法实现数组的深拷贝

具体代码如下所示：


```js
var father = [1,2,3,4,5]

var son = father.slice(0)

console.log(father)

console.log(son)

father[2] = 5

console.log(father)

console.log(son)
```
![](https://exp-picture.cdn.bcebos.com/589f5b078801387074fe48382d08a50f95fc8317.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)

## 第六步：借助于concat 方法实现数组的深拷贝

具体代码如下所示：


```js
var father = [1,2,3,4,5]

var son = father.concat()

console.log(father)

console.log(son)

father[2] = 5

console.log(father)

console.log(son)
```
![](https://exp-picture.cdn.bcebos.com/9a8fd9f88a775ddd23f397fea427e7ef2906f917.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)

## 第七步：使用ES6扩展运算符实现数组的深拷贝

具体代码如下所示：


```js
var father = ['张三','李四','刘德华','周润发']

var [ ...son ] = father

console.log(father)

console.log(son)

father[2] = 5

console.log(father)

console.log(son)
```

![](https://exp-picture.cdn.bcebos.com/3201a8f39187031c2f7fdd486a86242fa972ec17.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)
