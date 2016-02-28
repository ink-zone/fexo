# Fexo 文档

### 安装
- [安装](#安装)
- [启用](#启用)
- [升级](#升级)
- [配置主题](#配置主题)
  - [设置基本信息](#设置基本信息)
  - [设置头像](#设置头像)
  - [设置favicon](#设置favicon)
  - [设置关键词](#设置关键词)
  - [设置首页内容](#设置首页内容)
  - [设置首页导航](#设置首页导航)
  - [设置页面导航](#设置页面导航)
  - [设置页面导航样式](#设置页面导航样式)
  - [设置面包屑](#设置面包屑)
  - [设置盒子](#设置盒子)
  - [设置文章标题对齐方式](#设置文章标题对齐方式)
  - [启用分类页面](#启用分类页面)
  - [启用标签页面](#启用标签页面)
  - [启用友链页面](#启用友链页面)
  - [启用统计](#启用统计)
  - [启用评论](#启用评论)


### 安装

```bash
$ cd my-blog
$ git clone git@github.com:forsigner/fexo.git themes/fexo
```

### 启用

打开博客根目录的 `_config.yml` 设为 `theme: fexo`

### 升级

```bash
$ cd themes/fexo
$ git pull
```

### 配置主题

主题配置全部在`theme/fexo`里面完成，所里下面所有配置指的是配置`theme/fexo/_config.yml`。

##### 设置基本信息
```yml
blog_name: Forsigner
slogan: Find the bug of the world
```

##### 设置头像

``` yml
# relative url
avatar: /images/avatar.jpg
# or absolute url
avatar: https://avatars0.githubusercontent.com/u/2668081?v=3&s=460
```

##### 设置favicon

``` yml
favicon: /favicon.ico
```

##### 设置关键词

关键词主要作用是优化SEO

```yml
keywords: forsigner,前端,设计,Hexo主题,前端开发,用户体验,设计,frontend,design,nodejs,JavaScript
```

##### 设置首页内容

你可以设置是否在首页直接显示文章

```yml
init_page_content: HOME_NAV  # HOME_NAV | POST
```

##### 设置首页导航

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

##### 设置页面导航

```yml
page_nav:
  - 博客: /archives/
  - 分类: /category/
  - 标签: /tag/
  - 友链: /link/
  - 关于: /about/
  - RSS: /atom.xml
```

##### 设置页面导航样式

```yml
page_nav_style: CIRCLE  # CIRCLE|ROUND_RECT
```

##### 设置面包屑

```yml
breadcrumb:
  isShow: true # true|fase
```

##### 设置盒子

```yml
toolbox:
  isShow: true # true|fase
```

##### 设置文章标题对齐方式

```yml
post:
  header_align: center # left|center
```

##### 启用分类页面

1. 在博客根目录执行 `hexo new page category`
2. 修改`my-blog/source/category/index.md`里面的内容:

```yml
---
title: category
layout: category
comments: false
---
```

##### 启用标签页面

1. 在博客根目录执行 `hexo new page tag`
2. 修改`my-blog/source/tag/index.md`里面的内容:

```yml
---
title: tag
layout: tag
comments: false
---
```

##### 启用友链页面

1. 在博客根目录执行 `hexo new page link`
2. 修改`my-blog/source/link/index.md`里面的内容:

```yml
---
title: link
layout: link
comments: false
---
```

##### 启用关于页面

1. 在博客根目录执行 `hexo new page about`
2. 修改`my-blog/source/about/index.md`里面的内容:

```yml
---
title: about
layout: about
comments: false
---
```

##### 启用统计

```yml
google_analytics:
baidu_analytics: 57e94d016sfsf1fba3xxxx8a2b0263af0
```

##### 启用评论

```yml
disqus_shortname: forsigner
# duoshuo_shortname: forsigner
```
