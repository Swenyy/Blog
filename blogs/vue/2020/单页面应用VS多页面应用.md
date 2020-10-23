---
title: 单页面应用VS多页面应用 
date: 2020-10-10
tags:
 - vue
categories: 
 - vue
---

## 多页应用模式MPA，MultiPage Application


```
graph LR

page1-->page2

```
整页刷新

多页应用模式示意图：

http://xxx/page1.html | http://xxx/page2.html
---|---
页面资源 | 页面资源
公共资源（js、css等） | 公共资源（js、css等）
页面1 | 页面2

## 单页应用模式SPA,即SinglePage Application



局部刷新

单页应用模式示意图：


<table>
    <tr>
        <td colspan="2">外壳页面http://xxx/shell.html</td>
    <tr/>
    <tr>
        <td>#page1</td>
        <td>#page2</td>
    <tr/>
    <tr>
        <td>页面片段资源</td>
        <td>页面片段资源</td>
    <tr/>
    <tr>
        <td>页面片段1</td>
        <td>页面片段2</td>
    <tr/>
    <tr>
        <td colspan="2">公共资源（js、css等）</td>
    <tr/>
</table>


## 单页面应用

单页面应用又被称为SPA,即SinglePage Application。指只有一个主页面的应用，一开始只需加载一次 js,css等相关资源（组件公用的资源只需要加载一次）。所有的内容都包含在主页面，对每一个功能模块组件化。单页应用跳转，就是切换相关组件，仅刷新局部资源。

而多页面应用MultiPage Application，MPA，指有多个独立的页面的应用，每个页面必须重复加载 js,css 等相关资源。多页应用跳转，需要整页资源刷新。

## 两者表格对比



|  | SPA |  MPA |
| :-- | :-- | :-- |
| 结构 | 一个主页面 + 许多模块的组件| 许多完整的页面 |
| 体验 |页面切换快，体验佳；当初次加载文件过多时，需要做相关的调优。| 页面切换慢，网速慢的时候，体验尤其不好|
|资源文件 |组件公用的资源只需要加载一次| 每个页面都要自己加载公共资源|
|适用场景|对体验度和流畅度有较高要求的应用，不利于 SEO（可借助 SSR 优化 SEO）| 适用于对 SEO 要求较高的应用|
|过渡动画|Vue 提供了 transition 的封装组件，容易实现|很难实现|
|内容更新|相关组件的切换，即局部更新| 整体 HTML 的切换，费钱（重复 HTTP 请求）|
|路由模式|可以使用hash，也可以使用history|普通链接跳转|
|数据传递|因为单页面，使用全局变量就好（Vuex）| cookie 、localStorage 等缓存方案，URL 参数，调用接口保存等|
|相关成本|前期开发成本较高，后期维护较为容易|前期开发成本低，后期维护就比较麻烦，因为可能一个功能需要改很多地方

## 单页面实现的核心：前端路由


:::warning 注意
 前端路由的核心：改变视图的同时不会向后端发出请求。
:::

**vue-router 路由的两种模式：hash&history**


###  1、hash 模式
hash 模式背后的原理是 onhashchange 事件。


```js
window.addEventListener('hashchange',function(e){
    console.log(e.oldURL);
    conlose.log(e.newURL)
},false);
```



```js
if ("onhashchange" in window) {
    alert("该浏览器支持 hashchange 事件!");
}
```

#### hashchange 事件

hashchange 事件对象有下面两个属性：


|属性 | 类型| 描述 |
| :-- | :-- | :-- |
|newURL | DOMString |当前页面新的URL|
|oldURL | DOMString |当前页面旧的URL|

> 通过 window.location.hash 属性获取和设置 hash 值。


hash 模式的特点在于 hash 出现在 url 中，但是不会被包括在 HTTP 请求中，对后端没有影响，不会重新加载页面。

### 2、history 模式

> 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState()，它们提供了对历史记录进行修改的功能

浏览器窗口有一个history对象，用来保存浏览历史。
如果当前窗口先后访问了三个网址，那么history对象就包括三项，history.length属性等于3。

 

> history.length // 3

history对象提供了一系列方法，允许在浏览历史之间移动。

 

> back()：移动到上一个访问页面，等同于浏览器的后退键。

> forward()：移动到下一个访问页面，等同于浏览器的前进键。

> go()：接受一个整数作为参数，移动到该整数指定的页面，比如go(1)相当于forward()，go(-1)相当于back()。


```js
history.back();

history.forward();

history.go(-2);
```


如果移动的位置超出了访问历史的边界，以上三个方法并不报错，而是默默的失败。

 

> history.go(0)相当于刷新当前页面。

 

> history.go(0);

常见的“返回上一页”链接，代码如下。
```js
document.getElementById('backLink').onclick = function () {

  window.history.back();

}
```
**注意，返回上一页时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页**

> history.pushState()

**HTML5为history对象添加了两个新方法，history.pushState()和history.replaceState()，用来在浏览历史中添加和修改记录。**

```js
if (!!(window.history && history.pushState)){

  console.log("支持History API");

} else {

 console.log("不支持History API");

}
```

history.pushState方法接受三个参数，依次为：

state：一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null。

title：新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。

url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。

假定当前网址是example.com/1.html，我们使用pushState方法在浏览记录（history对象）中添加一个新记录。

var stateObj = { foo: 'bar' };

history.pushState(stateObj, 'page 2', '2.html');

添加上面这个新记录后，浏览器地址栏立刻显示example.com/2.html，但并不会跳转到2.html，甚至也不会检查2.html是否存在，它只是成为浏览历史中的最新记录。假定这时你访问了google.com，然后点击了倒退按钮，页面的url将显示2.html，但是内容还是原来的1.html。你再点击一次倒退按钮，url将显示1.html，内容不变。

**总之，pushState方法不会触发页面刷新，只是导致history对象发生变化，地址栏会有反应。如果pushState的url参数，设置了一个新的锚点值（即hash），并不会触发hashchange事件。如果设置了一个跨域网址，则会报错**

// 报错

history.pushState(null, null, 'https://twitter.com/hello');

上面代码中，pushState想要插入一个跨域的网址，导致报错。这样设计的目的是，防止恶意代码让用户以为他们是在另一个网站上。



