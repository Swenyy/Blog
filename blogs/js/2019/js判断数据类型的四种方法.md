---
title: JavaScript判断数据类型的四种方法
date: 2019-09-16
tags:
 - JavaScript
 - 数据类型
categories:
 - js
---

## 1.typeOf

### 描述

**首选用来判断基础数据类型 typeof valobj**

**typeof是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。**

**返回的结果用该类型的字符串(全小写字母)形式表示**，包括number,string,boolean,undefined,object,function,symbol等



### demo
```JavaScript
typeof "";  //string
typeof 1;   //number
typeof false; //boolean
typeof undefined; //undefined
typeof function(){}; //function
typeof {}; //object
typeof Symbol(); //symbol
typeof null; //object
typeof []; //object
typeof new Date(); //object
typeof new RegExp(); //object
```
**不能区分{},[],null,Date(),ReExp()**

## 2.instanceof



### 描述

**常用来检测引用数据类型A instanceof B**

**instanceof用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true，否则返回false。instanceof检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型。**

### demo
```JavaScript
var p={};
p instanceof Object;
//true
var q = [];
q instanceof Array;
//true
```
## 3.constructor 

### 描述
**valobj.constructor ==  Array,返回true/false。不能判断undefined和null，而且使用它是不安全的，因为constructor的指向是可以改变的**

当一个函数F被定义时，JS引擎会为F添加prototype原型，然后在prototype上添加一个constructor属性，并让其指向F的引用，F利用原型对象的constructor属性引用了自身，当F作为构造函数创建对象时，原型上的constructor属性被遗传到了新创建的对象上，从原型链角度讲，构造函数F就是新对象的类型。这样做的意义是，让对象诞生以后，就具有可追溯的数据类型。

### demo
```JavaScript
function myfactory(){

	var a1 = "John".constructor                 // 返回函数 String()  { [native code] }
	var a2 = (3.14).constructor                 // 返回函数 Number()  { [native code] }
	var a3 = false.constructor                  // 返回函数 Boolean() { [native code] }
	var a4 = [1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
	var a5 = {name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
	var a6 = new Date().constructor             // 返回函数 Date()    { [native code] }
	var a7 = function () {}.constructor         // 返回函数 Function(){ [native code] }
	document.write(a1+"<br>"+a2+"<br>"+a3+"<br>"+a4+"<br>"+a5+"<br>"+a6+"<br/>"+a7);
}

//利用constructor判断变量类型

function myArray(){
	var sa = 123;
	var res = sa.constructor.toString().indexOf("Array")>-1;
	alert(res);
}

//注意：

//NaN 的数据类型是 number
//数组(Array)的数据类型是 object
//日期(Date)的数据类型为 object
//null 的数据类型是 object
//未定义变量的数据类型为 undefined
```



## 4.Object.prototype.toString.call()


```JavaScript
Object.prototype.toString.call("");
//"[object String]"

Object.prototype.toString.call(1);
//"[object Number]"

Object.prototype.toString.call(true);
//"[object Boolean]"
```
