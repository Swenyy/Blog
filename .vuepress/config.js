module.exports = {
  "title": "Sweny-blog",
  "description": "blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/sweny.jpg"
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
  "themeConfig": {
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
        "text": "GitHub",
        "link": "https://github.com/Swenyy",
        "icon": "reco-github"
      },
      
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
    "friendLink": [
      {
        "title": "王叨叨",
        "desc": "无叨叨，不博客！不懂用户体验的前端不是好爸爸……",
        "avatar": "/dao.png",
        "link": "https://wangdaodao.com/"
      },
      {
        "title": "王金山",
        "desc": "Good Good Study，Day Day Up！！！",
        "avatar": "/jinshan.png",
        "link": "https://www.wangjinshan.top/"
      },
      {
        "title": "赵十二",
        "desc": "努力奋进的赵十二",
        "avatar": "/zhaoshier.jpg",
        "link": "https://zhaoshier.top/"
      },
      {
        "title": "林梧桐",
        "desc": "simple.",
        "avatar": "/xuan.png",
        "link": "https://www.lynnwutong.top/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/sweny.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Sweny",
    "authorAvatar": "/sweny.jpg",
    "record": "xxxx",
    "startYear": "2016"
  },
  "markdown": {
    "lineNumbers": true
  }
}

/* 
{
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Swenyy",
            "icon": "reco-github"
          }
        ]
      }
*/