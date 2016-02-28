# Fexo 文檔

### 安裝
- [安裝](#安裝)
- [啟用](#啟用)
- [升級](#升級)
- [配置主題](#配置主題)
  - [設置基本信息](#設置基本信息)
  - [設置頭像](#設置頭像)
  - [設置favicon](#設置favicon)
  - [設置關鍵詞](#設置關鍵詞)
  - [設置首頁內容](#設置首頁內容)
  - [設置首頁導航](#設置首頁導航)
  - [設置頁面導航](#設置頁面導航)
  - [設置頁面導航樣式](#設置頁面導航樣式)
  - [設置面包屑](#設置面包屑)
  - [設置盒子](#設置盒子)
  - [設置文章標題對齊方式](#設置文章標題對齊方式)
  - [啟用分類頁面](#啟用分類頁面)
  - [啟用標簽頁面](#啟用標簽頁面)
  - [啟用友鏈頁面](#啟用友鏈頁面)
  - [啟用統計](#啟用統計)
  - [啟用評論](#啟用評論)


### 安裝

```bash
$ cd my-blog
$ git clone git@github.com:forsigner/fexo.git themes/fexo
```

### 啟用

打開博客根目錄的 `_config.yml` 設為 `theme: fexo`

### 升級

```bash
$ cd themes/fexo
$ git pull
```

### 配置主題

主題配置全部在`theme/fexo`裏面完成，所裏下面所有配置指的是配置`theme/fexo/_config.yml`。

##### 設置基本信息
```yml
blog_name: Forsigner
slogan: Find the bug of the world
```

##### 設置頭像

``` yml
# relative url
avatar: /images/avatar.jpg
# or absolute url
avatar: https://avatars0.githubusercontent.com/u/2668081?v=3&s=460
```

##### 設置favicon

``` yml
favicon: /favicon.ico
```

##### 設置關鍵詞

關鍵詞主要作用是優化SEO

```yml
keywords: forsigner,前端,設計,Hexo主題,前端開發,用戶體驗,設計,frontend,design,nodejs,JavaScript
```

##### 設置首頁內容

妳可以設置是否在首頁直接顯示文章

```yml
init_page_content: HOME_NAV  # HOME_NAV | POST
```

##### 設置首頁導航

```yml
home_nav:
  - name: Blog
    url: /archives
  - name: Github
    url: https://github.com/forsigner
    target: _blank
  - name: Douban
    url: http://www.douban.com/people/forsigner/
    target: _blank
  - name: Twitter
    url: https://twitter.com/forsigner
    target: _blank

```

##### 設置頁面導航

```yml
page_nav:
  - 博客: /archives/
  - 分類: /category/
  - 標簽: /tag/
  - 友鏈: /link/
  - 關於: /about/
  - RSS: /atom.xml
```

##### 設置頁面導航樣式

```yml
page_nav_style: CIRCLE  # CIRCLE|ROUND_RECT
```

##### 設置面包屑

```yml
breadcrumb:
  isShow: true # true|fase
```

##### 設置盒子

```yml
toolbox:
  isShow: true # true|fase
```

##### 設置文章標題對齊方式

```yml
post:
  header_align: center # left|center
```

##### 啟用分類頁面

1. 在博客根目錄執行 `hexo new page category`
2. 修改`my-blog/source/category/index.md`裏面的內容:

```yml
---
title: category
layout: category
comments: false
---
```

##### 啟用標簽頁面

1. 在博客根目錄執行 `hexo new page tag`
2. 修改`my-blog/source/tag/index.md`裏面的內容:

```yml
---
title: tag
layout: tag
comments: false
---
```

##### 啟用友鏈頁面

1. 在博客根目錄執行 `hexo new page link`
2. 修改`my-blog/source/link/index.md`裏面的內容:

```yml
---
title: link
layout: link
comments: false
---
```

##### 啟用關於頁面

1. 在博客根目錄執行 `hexo new page about`
2. 修改`my-blog/source/about/index.md`裏面的內容:

```yml
---
title: about
layout: about
comments: false
---
```

##### 啟用統計

```yml
google_analytics:
baidu_analytics: 57e94d016sfsf1fba3xxxx8a2b0263af0
```

##### 啟用評論

```yml
disqus_shortname: forsigner
# duoshuo_shortname: forsigner
```
