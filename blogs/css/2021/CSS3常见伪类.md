---
title:  CSS3常用的伪类选择器
date: 2021-01-13
tags:
 - css
categories: 
 - css
sticky: 2
---

## 常见的伪类选择器：
 E:not(s)
 
 E:root
 
 E:target


一下5个会考虑其他元素的影响：
```css
 E:first-child
 
 E:last-child
 
 E:only-child
 
 E:nth-child(n)
 
 E:nth-last-child(n)
```


 
以下5个不会考虑其他元素的影响：
```css
 E:first-of-type
 
 E:last-of-type
 
 E:only-of-type
 
 E:nth-of-type(n)
 
 E:nth-of-last-type(n) 
```

E:empty

E:checked

E:enabled

E:disabled

E:read-only

E:read-write

## E:not()
这个选择器的意思是，选中除了谁。 ()里面填条件，也就是选择器。
![](https://gitee.com/Sweny/images/raw/master/img/20210111151814.png)

其次常见的应用：最后一个或者某一个特定的，更改样式

![](https://gitee.com/Sweny/images/raw/master/img/20210111153630.png)

##  E:root

选择根目录的意思，在我们的html文件里面，他是选 html标签 也就是  html标签选择器。但是呢，如果换成xml呢，他的根目录就不一定是 html了吧。所以有人说 root就是html，那是错误的

要用的话，直接写  


```css
:root{ background-color:red;} 
```


即可 相当于 

```css
html:{ background-color:red;} 
```
## E:target
URL后面跟锚点#，指向文档内某个具体的元素。 也就是说，url后面的锚点，指向  某个元素， 那么该元素就会触发 target

![](https://gitee.com/Sweny/images/raw/master/img/1609428-20190715112257016-2070351775.gif)

![](https://gitee.com/Sweny/images/raw/master/img/1609428-20190715182816346-1533408367.gif)

![](https://gitee.com/Sweny/images/raw/master/img/20210113110246.png)


## E:first-child　　E:last-child  

E:first-child选择父元素下的第一个子元素， 和E:last-child选择父元素下最后一个子元素。


看到这句话，可能会有点误解。 前提是， 他必须有父元素，最高层是body

如：

```html
<div>
    <p></p>  
    <p></p>
</div>

```
如果我们想选择第一个p标签

**错误的写法：**


```css
div:first-child{
    background-color: red;
}
```

**正确的写法：**


```css
p:first-child{
    background-color: red;
}
```
 因为填的是你要选择的本身，也就是你要选择p，他是会在 p的父元素找， 判断你这个p标签，是不是父元素下的 第一个。
 
 以下这种情况，依然选不到第一个P元素
 
```
<div>
    <span></span>
    <p></p>
    <p></p>
</div>

p:first-child{   //因为现在的 p的父元素， 第一个子元素， 是span   所以你选不到
    background-color: red;
}
```
![](https://gitee.com/Sweny/images/raw/master/img/20210113111009.png)

## E:only-child

选择，父元素下的 独生子，也就是说，看父元素下面的子元素，是不是仅有一个。是的话，那就选中

![](https://gitee.com/Sweny/images/raw/master/img/20210113111338.png)

## E:nth-child(n)

选择父元素下面的 第几个子元素，(n) 可以计算， n是从0 开始的， 但是 css里面的索引是从1 开始的，  js的数组什么是从0开始

![](https://gitee.com/Sweny/images/raw/master/img/20210113143342.png)

## E:nth-last-child(n)
跟上面的选择器大同小异， 只不过人家是从 最后一位开始查数。 填(1) 选的是最后一位。


E:first-child
 
 E:last-child
 
 E:only-child
 
 E:nth-child(n)
 
 E:nth-last-child(n)
 
 **以上的这5个选择器都会受到 其他元素的影响， 例如父元素下面第一个不是他的话，就选不了。**
 
## E:first-of-type
 
 意思是，在父元素下面寻找 第一个所匹配的子元素。 下面的ul  和li，在ul 里面找到第一个li
 
 ![](https://gitee.com/Sweny/images/raw/master/img/20210113144626.png)
 
 li:first-of-type的意思是只在li里面找第一个li,前面的p标签不会有影响。
 但是first-child就不一样了，他也是在div里面找子元素，但是第一个子元素是p，所以找不到。
 
## E:last-of-type

在有父元素的里面找最后一个 E ，跟上面的选择器一样， E:first-of-type选的是第一个， E:last-of-type选的是最后一个

##  E:only-of-type

匹配父元素的所有子元素中唯一的那个子元素


![](https://gitee.com/Sweny/images/raw/master/img/20210113151638.png)

## E:nth-of-type(n)

匹配父元素的第n个子元素，跟 E:nth-child(n)  差不多。 不过 nth-child 会受到其他元素影响， 而nth-of-type 不会 ，看下面例子

![](https://gitee.com/Sweny/images/raw/master/img/20210113153316.png)

## E:nth-of-last-type(n) 

跟 E:nth-of-type(n) 相反的， E:nth-of-type(n)是按照 第一个开始查，  这个是按照倒数第一位查

## E:empty

匹配里面没有任何东西的元素。也就是说，你选择的那个元素，里面没有东西才可以选中。

![](https://gitee.com/Sweny/images/raw/master/img/20210113155421.png)

出现了两个框，是因为第二个.two div，里面有空格，不算empty，注释但没有空格、换行，是可以选中的，因为css中注释不算节点，也算是空。

## E:checked

匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)

![](https://gitee.com/Sweny/images/raw/master/img/20210113182446.png)

![](https://gitee.com/Sweny/images/raw/master/img/20210113182506.png)

## E:enabled和E:disabled

用于选择 input的正常状态和不可操作状态。 没设置disabled 属性的 input  就是正常状态

![](https://gitee.com/Sweny/images/raw/master/img/20210113182621.png)

## E:read-only和E:read-write

readonly 呢 是input 标签上的属性， 设置了这个属性后，就是不可以填写，也不可以操作

E:read-write：也就是选中没有设置readonly。不常用

![](https://gitee.com/Sweny/images/raw/master/img/20210113182735.png)