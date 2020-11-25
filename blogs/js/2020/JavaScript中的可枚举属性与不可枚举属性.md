---
title: JavaScript中可枚举属性与不可枚举属性
date: 2020-10-21
tags:
 - JavaScript
 - Object
categories:
 -  js
sticky: 7
---



**JavaScript中，对象的属性分为可枚举和不可枚举之分，它们是由属性的enumerable值决定的。可枚举性决定了这个属性能否被for…in查找遍历到。**

## 如何判断属性是否可枚举

 js中基本包装类型的原型属性是不可枚举的，如Object,Array,Number等，如果你写出这样的代码遍历其中的属性：
 
```js
var num = new Number();
for(var pro in num) {
    console.log("num." + pro + " = " + num[pro]);
}
```
它的输出结果会是空。这是因为**Number中内置的属性是不可枚举**的，所以**不能被for…in访问到**。

Object对象的**propertyIsEnumerable()方法**可以判断此对象是否包含某个属性，并且这个属性是否可枚举。

需要注意的是：如果**判断的属性存在于Object对象的原型内**，不管它是否可枚举都会**返回false**。


## 枚举性的作用
属性的枚举性会**影响以下三个函数的结果**：
```js
for…in

Object.keys()

JSON.stringify()
```
## DEMO:
```js
function Person() {
    this.name = "SWY";
}
Person.prototype = {
    constructor: Person,
    job: "student",
};
 
var lzm = new Person();
Object.defineProperty(lzm, "sex", {
    value: "female",
    enumerable: false
});
//其中用defineProperty为对象定义了一个名为”sex”的不可枚举属性
for(var pro in lzm) {
    console.log("lzm." + pro + " = " + lzm[pro]);
}
```
### for ... in遍历结果如下：
```js

lzm.name = SWY

lzm.constructor = function Person() {
this.name = "SWY";
}
lzm.job = student 
//可以看到除了”sex“之外的属性都遍历到了


```
**hasOwnProperty属性遍历结果如下**：
```js
for(var pro in lzm) {
    if(lzm.hasOwnProperty(pro)){
        console.log("lzm." + pro + " = " + lzm[pro]);
    }
}
//输出：lzm.name = SWY
```

### Object.keys(lzm)返回值：
```js
console.log(Object.keys(lzm));

//输出：["name"]
```
只包含”name”属性，说明**Object.keys()**方法只能**返回对象本身具有的可枚举属性**。

### JSON.stringify(lzm)返回值：
```js
console.log(JSON.stringify(lzm));

//輸出：{"name":"SWY"}
```
**JSON.stringify()方法也只能读取对象本身的可枚举属性，并序列化为JSON对象**

参考：https://www.cnblogs.com/kongxy/p/4618173.html