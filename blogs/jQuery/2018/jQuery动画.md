---
title: jQuery动画
date: 2018-09-21
tags:
 - jquery
categories: 
 - jquery
---

# jQuery动画

在前一个时代里，网页中几乎所有的特效都由flash实现，但是当JavaScript的兴起，很多特效被替代，因为flash需要用到插件支持，而JavaScript则不需要。注意，这里说的取代并不是完全的，取代flash的有：图片轮播，渐进显示....但是无法被取代的是：MV，视频等.....

jQuery的动画其实就是将之前提到过的各种特效进行封装，并对其性能进行优化。

jQuery动画分为三个部分，非自定义动画，自定义动以动画，和全局动画设置。

### 一、非自定义动画

**1.显示、隐藏：show( ) 、hide( )、toggle()** 

show()、hide()、toggle()方法有两种用法，一种是不传参数，代表直接显示隐藏。另一种是向方法中传递一个参数，这个参数为number类型，代表动画的执行时间。会有显示隐藏的动画效果。

示例:

show(100)、hide(100)、toggle(100)

不仅如此，jQuery还为动画方法提供了三种字符串形式的参数，分别是：fast、slow、和空字符串''

show('fast')、hide('slow')、toggle('')

三种参数的执行时间，分别为 ，'fast' ：200毫秒   ''(默认值):400毫秒   'slow'：600毫秒

**2.滑动：**

slideUp()：向上滑动（隐藏）

slideDown():向下滑动（显示）

slideToggle()：滑动（自动）

**3.淡入淡出：**

fadeOut():淡出（隐藏）

fadeIn():淡入（显示）

fadeToggle():显示隐藏（）自动

该方法是将元素的透明度从1变成0之后将元素的display属性设置为none;

但是如果我们想要将透明度设置到一个固定值，这些方法并不能实现，jQuery为我们提供了一个方法fadeTo()，该方法接受两个参数。
第一个参数是动画执行的时间，第二个参数是期望达到的透明度。


### 二、自定义动以动画

**animate()方法**

animate()方法有三个参数。分别是动画目标(target),动画执行时间，回调函数。只有第一个参数是必填参数。

animate()方法的使用：

1.将元素属性变换为自定义动画中的目标属性，所有参数中的属性一起改变。
```js
animate({
     'width':'200px'，
     'height':'200px'
})
```


2.设置的属性，支持运算。
```js
animate({
     'width':'+=200px'
})
```


**第二个参数为动画执行的时间**
```js
$('div').animate({width:'500px',height:'500px'},5000);
```
第三个参数为回调函数，当动画都执行完了以后再执行回调函数

3.动画的执行顺序：

如果想要动画按照顺序执行（执行完第一个动画之后，再执行下一个动画）有三种方法：

1）借助动画的回调函数-------又重新获取一次div
```js
 $('input').click(function(){
    $('div').animate({
            'width':'400px',
            'height':'400px',
        },function(){
            $('div').animate({
                'width':'200px',
                'height':'200px'
        })
     })
})
```
2）将动画效果分开写。
```js
$('input').click(function(){
    $('div').animate({
        'width':'400px',
        'height':'400px',
    })

    $('div').animate({
        'width':'200px',
        'height':'200px'
    })
})
```
3）连缀（此动画animate执行往后返回当前对象元素）
```js
$('input').click(function(){
    $('div').animate({
        'width':'400px',
        'height':'400px',
    }).animate({
        'width':'200px',
        'height':'200px'
    })
})
```
这几种方法在什么情况下使用那？

在操作同一元素的时候，推荐使用连缀。在操作不同元素的时候，推荐使用回调函数。

连缀：jquery的动画方法，每次调用都会返回当前选择的元素，从而可以让jQuery可以实现连缀。当操作对象不同是用回调。

### 三、全局动画设置

当我想要执行一个其他方法的时候，比如给当前元素加一个背景颜色。
```js
$('input').click(function(){
    $('div').animate({
        'width':'400px',
        'height':'400px',
    }).animate({
        'width':'200px',
        'height':'200px'
    }).css('background','yellow')
})
```
问题出现了：定时器是异步的，在运行动画的时候我们后面的方法会继续执行

解决：

1）可以用回调函数解决：
```js
$('input').click(function(){
    $('div').animate({
        'width':'400px',
        'height':'400px',
    }).animate({
        'width':'200px',
        'height':'200px'
    },function(){
        $(this).css('background','yellow')
    })
})
```
2）jquery给我们提供了一个类似于回调函数的方法queue()：
```js
$('input').click(function(){
    $('div').animate({
        'width':'400px',
        'height':'400px',
    }).animate({
        'width':'200px',
        'height':'200px'
    }).queue(function(){
          $(this).css('background','yellow')
    })
})
```
queue()方法的问题:

当我想要在这个列队函数中再加一个动画的时候，发现在queue()方法后的函数无法执行。
```js
$('input').click(function(){
    $('div').animate({
        'width':'400px',
        'height':'400px',
    }).animate({
        'width':'200px',
        'height':'200px'
    }).queue(function(next){  //①形参处给个next（可以使其他的任何字符，调用时一致即可）
        $(this).css('background','yellow');
        next();    //②调用形参的方法
    }).hide('400')
})
```
原理：连缀的原理是因为每个jquery动画方法都会提供一个返回值，这个返回值就是所选择的元素，queue()方法并不会提供一个返回值。为了让连缀继续，我们这时候应该让queue()方法有一个返回值。jquery为queue提供了一个参数next,我们只需要在queue()方法中传入这个参数并调用，那么queue()方法就有了一个返回值，连缀就可以继续了。