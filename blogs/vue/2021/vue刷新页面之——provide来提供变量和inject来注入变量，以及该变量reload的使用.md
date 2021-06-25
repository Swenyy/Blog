---
title: vue刷新页面之——provide来提供变量和inject来注入变量，以及该变量reload的使用
date: 2021-04-20
tags:
 - vue
categories: 
 - vue
---

## 一、在App.vue 中，通过provide来提供变量

vue 刷新页面，父组件中通过provide来提供变量，在子组件中通过inject来注入变量。


```
<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  provide() {  // 1. 通过provide提供变量，注意要写成方法格式。this.reload是定义在methods中的reload方法
    return { reload: this.reload };
  },
  data() {
    return {
      isRouterAlive: true  // 2. 定义变量 ，控制 router-view ，达到刷新效果
    };
  },
  methods: {
    reload() {  // 3. 控制 router-view， 达到刷新效果
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

```
## 二、在test.vue组件 中，通过inject来注入变量，并使用


```
<template>
  <div class="test">
    <h2 >数据显示</h2>
    <el-button @click="handleReload">点击刷新</el-button>
  </div>
</template>
<script>
  export default {
    inject:['reload'], // 注入reload变量
    methods:{
      handleReload(){
        this.reload(); //在这里可直接调用 ，一般用在新增一条数据，或者删除了一条数据，需要刷新当前页面的时候
      }
    }
  }
</script>

```
## 三、 用他们的原因

- 使用 window.reload()、router.go(0)刷新时，整个页面都会重新加载，用户体验不好。

- this.$router.push(this.$route.path); 用 vue-router 重新跳转到当前路由，页面数据不刷新。（如调后台给表格中新增了一条数据，成功，但在此时页面的表格中是没有这条数据的


- 使用场景： 如新增、删除数据等操作，调完后台需要对页面进行刷新，保证数据正确显示。
- 

## 四、概念解析

成对出现：provide和inject是成对出现的

作用：用于父组件向子孙组件传递数据

使用方法：provide在父组件中返回要传给下级的数据，inject在需要使用这个数据的子辈组件或者孙辈等下级组件中注入数据。

使用场景：由于vue有$parent属性可以让子组件访问父组件。但孙组件想要访问祖先组件就比较困难。通过provide/inject可以轻松实现跨级访问父组件的数据

另外一种理解：provider/inject：简单的来说就是在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量；需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。
