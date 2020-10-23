---
title: JavaScript一元运算符delete
date: 2020-10-20
tags:
 - JavaScript
 - Object
categories:
 -  js
---

## delete 操作符用于删除对象的某个属性

如果没有指向这个属性的引用，那它最终会被释放

```js
const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined

```

## 语法

```js
delete expression
```
 expression 的计算结果应该是某个属性的引用,如：
 
```js
delete object.property 
delete object['property']
```
### 参数

object

对象的名称，或计算结果为对象的表达式。

property

要删除的属性。
### 返回值

对于所有情况都是true，除非属性是一个++自身的（Object.prototype.hasOwnProperty()）++ 、**不可配置的property "x" is non-configurable and can't be deleted**属性，在这种情况下，非严格模式返回 false。

### 异常
在严格模式下，如果是属性是一个自己不可配置的属性，会抛出TypeError。


```js
'use strict';
```
### 描述

**与通常的看法不同，delete操作符与直接释放内存无关。delete 操作符会从某个对象上移除指定属性。成功删除的时候会返回 true，否则返回 false。**

**重点考虑**：

- 如果你试图删除的属性不存在，那么delete将不会起任何作用，但仍会返回true
- 如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性（也就是说，delete操作只会在自身的属性上起作用）
- 任何使用 var 声明的属性不能从全局作用域或函数的作用域中删除。
    - 这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
    - 除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。
- 任何用let或const声明的属性不能够从它被声明的作用域中删除。
- 不可设置的(Non-configurable)属性不能被移除。这意味着像Math, Array, Object内置对象的属性以及使用**Object.defineProperty()方法设置为不可设置的属性**不能被删除。


```js
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// 当试着删除一个不存在的属性时
// 同样会返回true
console.log(delete Employee.salary); // returns true
```
### **不可配置属性**

当一个属性**被设置（通过Object.defineProperty()）方法为不可设置**，delete操作将不会有任何效果，并且会返回false。在严格模式下会抛出语法错误（SyntaxError）。


```js
var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});

console.log(delete Employee.name);  // returns false
```
var, let以及const创建的不可设置的属性不能被delete操作删除。

```js
var nameOther = 'XYZ';

// 通过以下方法获取全局属性:
Object.getOwnPropertyDescriptor(window, 'nameOther');  

// 输出: Object {value: "XYZ", 
//                  writable: true, 
//                  enumerable: true,
//                  configurable: false}

// 因为“nameOther”使用var关键词添加，
// 它被设置为不可设置（non-configurable）
delete nameOther;   // return false
```
非严格模式返回false ，在严格模式下，这样的操作会抛出异常。


## delete示例


```js
// 在全局作用域创建 adminName 属性
adminName = 'xyz';            

// 在全局作用域创建 empCount 属性
// 因为我们使用了 var，它会标记为不可配置。同样 let 或 const 也是不可配置的。
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName 是全局作用域的一个属性。
// 因为它不是用 var 创建的，所在可以删除。
// 因此，它是可配置的。
delete adminName;       // 返回 true

// 相反，empCount 是不可配置的， 
// 因为创建它时使用了 var。
delete empCount;       // 返回 false 

// delete 可用于删除对象的属性
delete EmployeeDetails.name; // 返回 true 

// 甚至属性不存在，它也会返回 "true"
delete EmployeeDetails.salary; // 返回 true 

// delete 对内建静态属性不起作用
delete Math.PI; // 返回 false 

// EmployeeDetails 是全局作用域的一个属性。
// 因为定义它的时候没有使用 "var"，它被标记为可配置。
delete EmployeeDetails;   // 返回 true

function f() {
  var z = 44;

  // delete 对局部变量名不起作用
  delete z;     // 返回 false
}
```
### delete 和原型链
下面的示例中，我们删除一个对象的自己的属性，而原型链上具有相同名称的属性可用：
```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// 返回 true，因为删除的是 foo 对象的自身属性
delete foo.bar;           

// foo.bar 仍然可用，因为它在原型链上可用。
console.log(foo.bar);   //42

// 从原型上删除属性
delete Foo.prototype.bar; //true

// 由于已删除“ bar”属性，因此不能再从Foo继承它。
console.log(foo.bar);    //undefined
```
### 删除数组元素

当你删除一个数组元素时，**数组的长度不受影响**。即便你删除了数组的最后一个元素也是如此。

当用 delete 操作符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 delete 删除了 trees[3]。

```js
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
   // 这里不会执行
}
for(var i in trees){
    console.log(i);
     onsole.log(trees[i]);
}
console.log(trees);
//输出：
/*
0
redwood
1
bay
2
cedar
4
maple
["redwood", "bay", "cedar", empty, "maple"]
*/
```
如果你想让**一个数组元素继续存在但是其值是 undefined**，那么可以使用将 undefined 赋值给这个元素而不是使用 delete。下面的例子中，trees[3] 被赋值为 undefined，但该元素仍然存在。

```js
var trees = ["redwood","bay","cedar","oak","maple"];
trees[3] = undefined;
if (3 in trees) {
   // 这里会被执行
}
```
如果你想**通过改变数组的内容来移除一个数组元素**，请使用**splice() 方法**。在下面的例子中，通过使用splice()，将trees[3]从数组中移除。


```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```
