---
title: js匿名函数
date: 2020-09-25
tags:
 - JavaScript
categories:
 -  js
---

## 什么是匿名函数？
匿名函数：没有实际名字的函数。

函数的声明方式有两种，即函数声明和函数表达式

```
function functionName(parameters) {
  // body
}
```
函数声明后不会立即执行，会在我们需要的时候调用到。

函数表达式：


```
var x = function (parameters) {
  // body
};
```
js 函数可以通过一个表达式定义.  函数表达式可以存储在变量x中

在函数表达式中可省略函数声明，从而创建匿名函数 

# 匿名函数的执行

---
执行匿名函数，在匿名函数后面加上一个括号即可立即执行！


```
(function (){

    console.log("aaa");

})()
```
若需要传值，直接将参数写到括号内即可：

(function (str){

    console.log("aaa"+str);

})("hhh")


# 匿名函数的应用场景

---
- 1、通过获取dom元素的事件


```
<script>

    //获得按钮元素

    var sub=document.querySelector("#sub");

    //给按钮增加点击事件。

    sub.onclick=function(){

        alert("当点击按钮时会执行到我哦！");

    }

</script>
```
- 2、对象中的方法

```
var obj={

    name:"aaa",

    age:18,

    fn:function(){

        return "我叫"+this.name+"今年"+this.age+"岁了！";

    }

};

console.log(obj.fn());//我叫aaa今年18岁了！
```

- 3、函数表达式


```
//将匿名函数赋值给变量fn。

var fn=function(){

    return "我"

}

//调用方式与调用普通函数一样

console.log(fn());//我
```
- 4、回调函数


```
setInterval(function(){

    console.log("我其实是一个回调函数，每次1秒钟会被执行一次");

},1000);

```
- 5、返回值

//将匿名函数作为返回值

function fn(){

    //返回匿名函数

    return function(){
        return "aaa";

    }

}

//调用匿名函数

console.log(fn()());//aaa

# 匿名函数的作用

---

- 通过匿名函数可以实现闭包，闭包是可以访问在函数作用域内定义的变量的函数。若要创建一个闭包，往往都需要用到匿名函数。
- 模拟块级作用域，减少全局变量。执行完匿名函数，存储在内存中相对应的变量会被销毁，从而节省内存。再者，在大型多人开发的项目中，使用块级作用域，会大大降低命名冲突的问题，从而避免产生灾难性的后果。自此开发者再也不必担心搞乱全局作用域了。