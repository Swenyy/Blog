---
title: JavaScript自身属性之Object.prototype.hasOwnProperty()和in
date: 2020-10-21
tags:
 - JavaScript
 - Object
categories:
 -  js
---

## hasOwnProperty()

hasOwnProperty()方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。


```js
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

```

### 语法


```js
obj.hasOwnProperty(prop)
```

#### **参数**

prop：要检测的属性的String字符串形式表示的名称，或者 Symbol。

#### **返回值**

用来判断某个对象是否含有指定的属性的布尔值 Boolean。

### 描述
所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in运算符不同，**该方法会忽略掉那些从原型链上继承到的属性**。

**备注**

即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true。

```js
o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne'); // 返回 true
o.propTwo = undefined;  
o.hasOwnProperty('propTwo'); // 返回 true
```


### **使用 hasOwnProperty 方法判断属性是否存在**

```js
o = new Object();
o.hasOwnProperty('prop'); // 返回 false
o.prop = 'exists';
o.hasOwnProperty('prop'); // 返回 true
delete o.prop;
o.hasOwnProperty('prop'); // 返回 false
```
### **自身属性与继承属性**

```js
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // 返回 true
o.hasOwnProperty('toString');         // 返回 false
o.hasOwnProperty('hasOwnProperty');   // 返回 false
```
**自身属性与继承属性DEMO:**
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
**for ... in遍历结果**：
```js

lzm.name = SWY

lzm.constructor = function Person() {
this.name = "SWY";
}
lzm.job = student 
//可以看到除了”sex“之外的属性都遍历到了


```
**hasOwnProperty属性遍历结果**：
```js
for(var pro in lzm) {
    if(lzm.hasOwnProperty(pro)){
        console.log("lzm." + pro + " = " + lzm[pro]);
    }
}
//输出：lzm.name = SWY
```

### **遍历一个对象的所有自身属性**
遍历一个对象的所有属性时忽略掉继承属性，注意这里 for...in  循环只会遍历可枚举属性，所以不应该基于这个循环中没有不可枚举的属性而得出 hasOwnProperty 是严格限制于可枚举项目的

```js
var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + 
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
```
### **使用 hasOwnProperty 作为属性名**
JavaScript 并没有保护 **hasOwnProperty** 这个属性名，因此，当某个对象可能自有一个占用该属性名的属性时，就需要使用外部的 hasOwnProperty 获得正确的结果：


```js
var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，
// 可以直接使用原型链上真正的 hasOwnProperty 方法
({}).hasOwnProperty.call(foo, 'bar'); // true

// 也可以使用 Object 原型上的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```
**只有在最后一种情况下即Object.prototype.hasOwnProperty.call()，才不会新建任何对象**。

## in
如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。

```js
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"

```

### 语法

```js
prop in object
```
#### 参数
prop一个字符串类型或者symbol类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。

objectName
检查它（或其原型链）是否包含具有指定名称的属性的对象。

### 描述

```js
// 数组
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // 返回true
3 in trees        // 返回true
6 in trees        // 返回false
"bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)

"length" in trees // 返回true (length是一个数组属性)

Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)


// 内置对象
"PI" in Math          // 返回true

// 自定义对象
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // 返回true
"model" in mycar // 返回true
```
in右操作数必须是一个**对象值**。例如，你可以指定使用String构造函数创建的字符串，但不能指定字符串文字。

```js
var color1 = new String("green");
"length" in color1 // 返回true
var color2 = "coral";
"length" in color2 // 报错(color2不是对象)
```
##### 对被删除或值为 undefined 的属性使用in

如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // 返回false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回false
```

如果你只是将一个属性的值赋值为undefined，而没有删除它，则 in 运算仍然会返回true。


```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // 返回true

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回true
```
### 继承属性
如果一个属性是从原型链上继承来的，in 运算符也会返回 true。

```js
"toString" in {}; // 返回true
```
