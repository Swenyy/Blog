module.exports = {
  "title": "Sweny-blog",
  "description": "Look on the bright side.",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/iconyues.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  /* locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  }, */
  "themeConfig": {
    valineConfig: {
      appId: 'jCcQvXhKhH9o9eOLertivEzk-gzGzoHsz',// your appId
      appKey: 'u16RpqD3dsvu3WeSI4g3druU', // your appKey
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-document",
        "items": [
          {
            "text": "vue教程",
            "link": "https://cn.vuejs.org/"
          },
          {
            "text": "vue视频教程",
            "link": "https://learning.dcloud.io/#/?vid=12"
          },
          {
            "text": "VUE Cli",
            "link": "https://cli.vuejs.org/zh/"
          },
          {
            "text": "vue-loader官网",
            "link": "https://vue-loader.vuejs.org/zh/"
          },
          {
            "text": "vuepress指南",
            "link": "https://www.vuepress.cn/guide/"
          },
          {
            "text": "vuepress主题",
            "link": "https://vuepress-theme-reco.recoluan.com/"
          },
          {
            "text": "Axios",
            "link": "https://www.kancloud.cn/yunye/axios/234845"
          },
          {
            "text": "jQuery",
            "link": "https://www.jquery123.com/"
          },
          {
            "text": "Ant.design",
            "link": "https://ant.design/index-cn"
          },
          {
            "text": "Bootstrap",
            "link": "https://www.runoob.com/bootstrap/bootstrap-tutorial.html"
          },
          {
            "text": "现代JavaScript教程",
            "link": "https://zh.javascript.info/"
          },
          {
            "text": "MarkDown教程",
            "link": "https://www.runoob.com/markdown/md-tutorial.html"
          }
        ]
      },
      {
        "text": "工具",
        "icon": "reco-api",
        "items": [
          {
            "text": "在线便捷",
            "items": [
              {
                "text": "PDF编辑器",
                "link": "https://smallpdf.com/cn/pdf-to-word"
              },
              {
                "text": "JSON在线解析器",
                "link": "https://www.json.cn/"
              },
              {
                "text": "正则表达式手册",
                "link": "https://tool.oschina.net/uploads/apidocs/jquery/regexp.html"
              },
              {
                "text": "MD表格生成器",
                "link": "https://tableconvert.com/?output=text"
              },
              {
                "text": "代码格式化",
                "link": "https://tool.oschina.net/codeformat/html"
              },
              {
                "text": "LaTeX公式编辑器",
                "link": "https://zh.numberempire.com/latexequationeditor.php"
              },
              {
                "text": "二维码生成器",
                "link": "https://cli.im/"
              },
              {
                "text": "转码编辑器",
                "link": "http://tool.chinaz.com/tools/native_ascii.aspx"
              },
              {
                "text": "MD编辑器",
                "link": "https://www.zybuluo.com/mdeditor"
              },
              {
                "text": "gif合成器",
                "link": "http://gif.55.la/"
              },
              {
                "text": "在线工具库",
                "link": "https://tool.lu/"
              }
            ]
          },
          {
            "text": "在线服务",
            "items": [
              {
                "text": "BOOT CDN",
                "link": "https://www.bootcdn.cn/"
              },
              {
                "text": "微信CDN",
                "link": "https://qydev.weixin.qq.com/cdn/cdnjs.html"
              }
            ]
          },
          {
            "text": "开源镜像",
            "items": [
              {
                "text": "阿里云镜像站",
                "link": "https://developer.aliyun.com/mirror/"
              },
              {
                "text": "Azure",
                "link": "https://mirror.azure.cn/"
              },
              {
                "text": "Docker hub",
                "link": "https://hub.docker.com/"
              }
            ]
          },
          {
            "text": "趋势分析",
            "items": [
              {
                "text": "谷歌趋势",
                "link": "https://trends.google.com/trends/?geo=US"
              },
              {
                "text": "百度指数",
                "link": "http://index.baidu.com/v2/index.html#/"
              },
              {
                "text": "百度流量研究院",
                "link": "https://tongji.baidu.com/research/"
              }
            ]
          }
        ]
      },
      {
        "text": "GitHub",
        "link": "https://github.com/Swenyy",
        "icon": "reco-github"
      }      
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    subSidebar: 'auto',
    sidebarDepth: 4,
    "friendLink": [
      {
        "title": "王叨叨",
        "desc": "无叨叨，不博客！不懂用户体验的前端不是好爸爸……",
        "link": "https://wangdaodao.com/"
      },
      {
        "title": "王金山",
        "desc": "Good Good Study，Day Day Up！！！",
        "email": "1113080830@qq.com",
        "link": "https://www.wangjinshan.top/"
      },
      {
        "title": "赵十二",
        "desc": "努力奋进的赵十二",
        "email": "zhaoshiermy@sina.com",
        "link": "https://zhaoshier.top/"
      },
      {
        "title": "林梧桐",
        "desc": "天大地大，世界比你想象中朦胧",
        "email": "lynnyx18@sina.com",
        "link": "https://www.lynnwutong.top/"
      },
      {
        "title": "桦林",
        "desc": "生活学习总结.",
        "link": "http://zhanghualin.com/"
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      }
    ],
    "logo": "/iconyue.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Sweny",
    "authorAvatar": "/sweny.jpg",
    "record": "@sweny---",
    "startYear": "2016"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ["vuepress-plugin-boxx"],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [ 'shizuku', 'koharu', 'whiteCat', 'blackCat', 'wanko', 'haruto'],
        clean: false,
        messages: {
          welcome: ' 欢迎来到$site.title ',
          home: '让我带你回家。',
          theme: '希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        messageStyle: {
          right: '18px',
          bottom: '180px' 
        },
        width: 180,
        height: 250
      }
    ],
    [
      //先安装在配置， npm install @vuepress-plugin-meting --save
      'meting', {
        metingApi: "https://api.i-meto.com/meting/api",
        meting: {
          server: "netease",
          type: "playlist",
          mid: "5288966023",
          auto: "https://music.163.com/#/playlist?id=5288966023"
        },          // 不配置该项的话不会出现全局播放器
        aplayer: {
          lrcType: 3,
          autoplay: false
        }
      }
    ],
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.7, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    /* [
      //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ] */
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }]


  ]
}
