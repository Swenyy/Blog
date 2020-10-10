---
title: vue-cli4下环境变量和模式示例详解 
date: 2020-09-03
tags:
 - vue
categories: 
 - vue
---

# 环境变量
一个环境变量文件只包含环境变量的键值对

```
NODE_ENV = 'development'
VUE_APP_BASE_URL=http://127.0.0.1:8080/
VUE_APP_TITLE = 'Glodon-dev'
```
**注意：**
- NODE_ENV  是 “development”、“production”、"test"或者自定义的值。具体的值取决于应用运行的模式；
- BASE_URL 会和 vue.config.js 中的publicPath选项相符，即你的应用会部署到的基础路径；
- 除了 NODE_ENV，其他的环境变量必须以 VUE_APP_ 开头；
- 项目中的使用方式：process.env.环境变量名，如process.env.NODE_ENV，通过这一全局变量可以执行对应的逻辑；


# 模式
模式是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：
- development 模式（开发模式）用于 vue-cli-service serve;
- production 模式（生成模式）用于 vue-cli-service build 和 vue-cli-service test:e2e;
- test 模式用于 vue-cli-service test:unit;



```
//本地开发运行，会把process.env.NODE_ENV设置为development
"serve": "vue-cli-service serve", 

//默认打包模式，会把process.env.NODE_ENV设置为production
"build": "vue-cli-service build", 

//自定义打包模式，把process.env.NODE_ENV设置alpha
"alpha": "vue-cli-service build --mode alpha", 

```


**注意：**
- 一个模式可以包含多个环境变量；
- 每个模式都会将环境变量中的 NODE_ENV 的值设置为模式的名称；
- 可以通过为.env文件增加后缀来设置某个模式下特有的环境变量；
- 为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级；
- Vue CLI 启动时已经存在的环境变量拥有最高优先级，并不会被 .env 文件覆写


```
.env        # 在所有的环境中被载入
.env.local     # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]     # 只在指定的模式中被载入，优先级高于.env和.env.local
.env.[mode].local  # 只在指定的模式中被载入，但会被 git忽略，优先级高于.env和.env.local
```
## 使用案例

### 不同模式下，为axios指定不同的baseUrl
创建development模式的环境变量文件，项目根目录下新建.env.development文件

```
NODE_ENV=development
VUE_APP_BASE_URL=http://127.0.0.1:8080/
```
创建production模式的环境变量文件，项目根目录下新建.env.production文件

```
NODE_ENV=production
VUE_APP_BASE_URL=/
```
在src目录下main.js文件中使用环境变量

```js
import Vue from 'vue'
import App from './App.vue'
 
// 导入axios
import axios from 'axios'
// 设置请求根路径，使用环境变量
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
// axios拦截器
axios.interceptors.request.use(config => {
 // 为请求头对象，添加Token验证的Authorization字段
 config.headers.Authorization = window.sessionStorage.getItem('token')
 // 在最后必须return config
 return config
})
// 挂载到vue
Vue.prototype.$http = axios
 
Vue.config.productionTip = false
 
new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
```
也可以在其他vue组件中打印

```js
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_BASE_URL)
console.log(this.$http.defaults.baseURL)
```
## 使用案例：自定义模式——自定义一个fat模式
在项目根目录下新建环境变量文件 .env.glodon

```js
NODE_ENV=fat
VUE_APP_BASE_URL=https://www.glodon.com
```
根目录下package.json中新增脚本命令


```
{
 "name": "vue_shop",
 "version": "0.1.0",
 "private": true,
 "scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  // 这条命令是我自定义的，通过--mode指定模式为glodon
  "glodon": "vue-cli-service serve --mode glodon",
  "lint": "vue-cli-service lint"
 },
 "dependencies": {
  "axios": "^0.19.2",
  "core-js": "^3.4.4",
  "echarts": "^4.6.0",
  "element-ui": "^2.4.5",
  "vue": "^2.6.10",
  "vue-router": "^3.1.3"
 },
 "devDependencies": {
  "@vue/cli-plugin-babel": "^4.1.0",
  "@vue/cli-plugin-eslint": "^4.1.0",
  "@vue/cli-plugin-router": "^4.1.0",
  "@vue/cli-service": "^4.1.0",
  "@vue/eslint-config-standard": "^4.0.0",
  "babel-eslint": "^10.0.3",
  "babel-plugin-component": "^1.1.1",
  "eslint": "^5.16.0",
  "eslint-plugin-vue": "^5.0.0",
  "less": "^3.10.3",
  "less-loader": "^5.0.0",
  "vue-cli-plugin-element": "^1.0.1",
  "vue-template-compiler": "^2.6.10"
 }
}
```
然后就可以运行

```
npm run glodon
```
这个时候就可以读取glodon下的环境变量

