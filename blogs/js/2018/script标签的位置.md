---
title: script标签的位置
date: 2018-08-28
tags:
 - JavaScript
categories:
 -  js
---

在我们编写代码的时候，会在页面内使用<script>标签来写JS，虽然理论上script标签的位置放在哪里可以，但是还是有一点区别的。


### 为什么很多人把script标签放在底部？

　　初学者在学习JS的时候看见很多DEMO里面的script标签写在底部，但是却不是很清楚为什么，下面来解释一下：

　　虽然理论上放在哪里都是可以的，但是对于前端页面优化来讲，还是放在底部是最佳的，因为如果JS执行出现错误了，最起码页面中的元素还能加载出来，因为DOM文档是从上往下的顺序执行的。
　　
　　
### script标签在body标签内还是外？

　许多人认为只要放在底部了，无论是“body标签闭合之前”还是在“body标签闭合之后”都是一样的，其实还是有差别的，因为从HTML 2.0起放在“body标签闭合之后”就是不合标准的。之所以但是浏览器却不会报错，是因为如果在“body标签闭合之后”后再出现script或任何元素的开始标签，都是parseerror，浏览器会忽略之前的</body>，即视作仍旧在body内。所以实际效果和写在“body标签闭合之前”之前是没有区别的。

　　**所以，只要是让浏览器做了多余的事都是不好的，虽然差别细微，但是还是应该按照标准来，放在“body标签闭合之前”。**

下面我们举个例子：


```html
<!DOCTYPE HTML>
<html>
    <head>
        <title> </title>
    </head>
    <body>
    
    
        <script type="text/javascript"></script>    
    </body>
</html>

```

