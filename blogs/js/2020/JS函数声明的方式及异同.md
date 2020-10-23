---
title: JavaScript函数声明的方式及异同
date: 2020-09-29
tags:
 - JavaScript
categories:
 -  js
---

## 函数声明方式分类：
在JavaScript中函数的声明方式可以细分为三种，总分为两种。
即：函数声明、函数表达式、Function构造函数（不推荐）
### 函数声明方式
 
```js
function 函数名(参数1，参数2，...){  
    //要执行的语句  
}  
```
例子：


```js
function sum(num1,num2){  
    return num1+num2;  
}  
//调用sum(2,4);
```
**在编译阶段把声明和函数体整体都提前到执行环境顶部，所以我们可以在函数声明之前调用这个函数，即函数可以在声明函数的作用域内任一地方调用。因为这种方式，是在函数解析阶段赋值给标识符 sum**

### 函数表达式方式

```js
var 函数名 = function(参数1，参数2，...){  
     //要执行的语句  
};  

```
例子:

```js
var sum = function(num1,num2){  
    return num1+num2;  
};  
//调用sum(2,4);
```
**其实就是变量声明的一种，声明操作会被提升到执行环境顶部，并赋值undefined。赋值操作被留在原地等到执行。这种定义方式得到的函数也叫匿名函数（拉姆达函数），因为function关键字后面没有函数名字，只是把这个函数体赋值给一个变量。这种方式定义函数也没有必要使用函数名---通过变量名就可以引用函数。定义了一个变量并将其初始化为一个函数，function关键字后面没有函数名，这是因为在使用函数表达式定义函数时，没有必要使用函数名——通过变量sum即可引用函数**。

**另外就像声明其他变量一样，使用函数表达式定义函数时，函数体外有分号。** 


### 使用Function构造函数

**Function构造函数可以接收任意数量的参数，最后一个参数为函数体，其他的参数则枚举出新函数的参数**，其语法为： 
```js
var sum = new Function("num1","num2","return num1+num2");  
```


但是使用Function构造函数定义的函数的方式是**一个函数表达式**。


## 函数表达式与函数声明的区别

### 1、调用条件不同

- 表达式声明的函数只能在声明之后调用。因为这种方式声明的函数，是在函数运行的阶段才赋值给变量 sum的；
- 直接声明的函数可以在声明函数的作用域内任一地方调用。因为这种方式，是在函数解析阶段赋值给标识符 sum .
- 在函数表达式中可省略函数声明，从而创建匿名函数 

### 2、执行顺序不同
- “当同时使用这两种方式声明同一个函数名，最终执行的**是函数表达式**声明的函数”。

**这个观点表述有点问题，分析如下：**

```js
var f1 = function() {
      console.log(1);  
}
var f1 = new Function("return 3");
// 直接声明
function f1 (){
     console.log(2);
}
f1();
//3 表象是表达式的优先级别更高
```


```js
var f = function() {
      console.log(1);  
}

// 直接声明
function f (){
     console.log(2);
}

var f = new Function("return 3");

f();
//3 表象是表达式的优先级别更高，且表达式以最后一次赋值为最终赋值，即存在覆盖现象
```


```js
var f2 = new Function("return 3");
var f2 = function() {
      console.log(1);  
}

// 直接声明
function f2 (){
     console.log(2);
}



f2();
//1 表象是表达式的优先级别更高，且表达式以最后一次赋值为最终赋值，即存在覆盖现象
```

**但是根据下面的例子**


```js
//func(); // 1
var func1=function() {
  console.log(2);
};
function func1() {
  console.log(1);
}

func1();
//结果： 2，表象是表达式的优先级别更高


```

```js
func2(); 
var func2=function() {
  console.log(2);
};
function func2() {
  console.log(1);
}

//结果：1 undefined
```

**undefined是因为函数没有返回值！！！！！！！！**
参考：https://blog.csdn.net/qq_40938301/article/details/87489046

即：**Console控制台的实质就是调用了eval（）函数，js中一个顶层函数（全局函数）eval（），或可以理解为js自带的系统函数eval（string）其作用是将接收的string字符串作为参数，对其进行JavaScript 表达式或语句计算，返回得到的值**；

**如果是没有返回值的表达式或语句，则会返回 undefined** ；

如果没有合法的表达式和语句，则会抛出 SyntaxError 异常 。



### 3、解析原理不同
-    从技术角度上讲，使用Function构造函数定义函数的方式是一个函数表达式，但是不推荐使用这种方式定义函数，原因在于这种方式会导致解析两次代码，影响性能。第一次解析常规的JavaScript代码，第二次解析传入构造函数的字符串。不过，这种语法对于理解“函数是对象，函数名是指针”的概念是非常直观的。 
-  对于**函数声明**和**函数表达式**两种定义函数的方式而言，**解析器并不是一视同仁的**。解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；对于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行。


```js
alert(sum(10,10));
function sum(num1,num2){  
    return num1+num2;  
}  
```
**运行结果为20。为什么呢？因为在代码开始执行之前，解析器就已经通过一个名为==函数声明提升==（function declaration hoisting）的过程，读取并将函数声明添加到执行环境中。对于代码求值时，js引擎在第一遍会声明函数并将它们放到源代码树的顶部。所以，即使声明函数在调用它的代码后，js引擎也能把函数声明提升到顶部。**

如果把上面的函数声明改成等价的函数表达式，就会在执行期间导致错误。 


```js
alert(sum(10,10));
//执行结果：sum1 is not a function  
var sum = function(num1,num2){  
    return num1+num2;  
};


```


```js
console.log(sum3);  
// 结果：undefined 变量提升
var sum3 = function(num1,num2){  
    return num1+num2;  
};
```
因为函数位于一个初始化语句中，而不是一个函数声明。换句话说，在执行到函数所在的语句之前，变量sum中不会保存有对函数的引用；而且，第一行代码运行不通过，实际上也不会执行到下一行




## 小总结：

### 综上所述：
**同名函数没有所谓的优先级别的高低，只是解析的方式不同，函数声明可以函数提升并使其在执行任何代码之前可用，注意这一点之后，同名函数只需要注意函数的调用位置，遵从赋值覆盖，即最新的值为有效值。**

### hoisting：
**包括变量声明(var)和函数声明(functiona(){})在内的所有声明都会在代码被执行前的编译阶段首先被处理。这个过程就好像变量声明和函数声明从他们代码中出现的位置被添加到最近执行环境的顶部，这个过程就叫做提升（hoisting）。**

### 注意：
**只有声明操作会被提升，赋值和逻辑操作会被留在原地等待执行**


## 小知识

**编程语言分为动态（类型）语言和静态（类型）语言，动态类型语言是指在运行期间才会去做数据类型检查的语言，也就是说，在用动态类型的语言编程的时，永远也不用给任何变量指定数据类型，该语言会在第一次赋值给变量时，在内部将数据类型记录下来。静态类型语言与动态类型语言刚好相反，它的数据类型是在编译期间检查的，也就是说在写程序时要声明所有变量的数据类型。**

### 静态类型语言：
C/C++、C#、JAVA等

### 动态类型语言
Python、Ruby、JavaScript等

### 变量提升和函数提升
- 第一步. 找到所有的函数声明，初始化函数体，如有同名的函数则会进行覆盖
- 第二步. 查找变量声明，初始化为undefined，如果已经存在同名的变量，就什么也不做直接略过。

### 注意：
函数声明的优先级比变量声明的优先级高，如果是先声明并赋值了一个变量，后面的函数体内又声明了同名变量，此时的变量就被函数体内的变量覆盖了。

### 例子：
```js
var scope = "global";

function f(){

console.log(scope); //undefined

var scope = "local"; //变量在这里赋值，但是在整个函数体内都是有定义的

console.log(scope); //local

}
```
相当于：

```js
var scope = "global";

function f(){

var scope;//undefined，因为函数声明优先级更高，所以覆盖了第一行的赋值

console.log(scope);
//变量存在，但其值是初始值undefined

scope = "local";
//变量在这里赋值为local

console.log(scope);
//local

}


```






## 参考
https://www.cnblogs.com/sticktong/p/9713100.html

https://www.jianshu.com/p/cc598685e530

https://blog.csdn.net/qq_33505829/article/details/86158287

https://blog.csdn.net/ll641058431/article/details/52319737?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param