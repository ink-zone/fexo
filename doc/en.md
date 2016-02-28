# Fexo Doc

- [Installation](#Installation)
- [Enable theme](#Enable theme)
- [Upgrade](#Upgrade)
- [Theme Configuration](#Theme Configuration)
  - [Setting blog basic info](#Setting blog basic info)
  - [Setting avatar](#Setting avatar)
  - [Setting favicon](#Setting favicon)
  - [Setting keywords](#Setting keywords)
  - [Setting initail page content](#Setting initail page content)
  - [Setting home nav](#Setting home nav)
  - [Setting page nav](#Setting page nav)
  - [Setting page nav style](#Setting page nav style)
  - [Setting breadcrumb](#Setting breadcrumb)
  - [Setting toolbox](#Setting toolbox)
  - [Setting post header align type](#Setting post header align type)
  - [Enable category page](#Enable category page)
  - [Enable tag page](#Enable tag page)
  - [Enable friend links page](#Enable friend links page)
  - [Enable about page](#Enable about page)
  - [Enable stats](#Enable stats)
  - [Enable comment](#Enable comment)

### Installation

```bash
$ cd my-blog
$ git clone git@github.com:forsigner/fexo.git themes/fexo
```

### Enable theme

In file `my-blog/_config.yml` set `theme: fexo`


### Upgrade

```bash
$ cd themes/fexo
$ git pull
```

### Theme Configuration

All setting is in file `theme/fexo/_config.yml`.

##### Setting blog basic info

```yml
blog_name: Forsigner
slogan: Find the bug of the world

```

##### Setting avatar

``` yml
# relative url
avatar: /images/avatar.jpg
# or absolute url
avatar: https://avatars0.githubusercontent.com/u/2668081?v=3&s=460
```

##### Setting favicon

``` yml
favicon: /favicon.ico
```

##### Setting keywords

Keywords is for SEO.

```yml
keywords: forsigner,frontend,design,nodejs,JavaScript
```

##### Setting initail page content

Show post list directly in home page or note.

```yml
init_page_content: HOME_NAV  # HOME_NAV | POST
```

##### Setting home nav

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

##### Setting page nav

```yml
page_nav:
  - Blog: /archives/
  - Category: /category/
  - Tag: /tag/
  - Links: /link/
  - About: /about/
  - RSS: /atom.xml
```

##### Setting page nav style

```yml
page_nav_style: CIRCLE  # CIRCLE|ROUND_RECT
```

##### Setting breadcrumb

```yml
breadcrumb:
  isShow: true # true|fase
```

##### Setting toolbox

```yml
toolbox:
  isShow: true # true|fase
```

##### Setting post header align type

```yml
post:
  header_align: center # left|center
```

##### Enable category page

1. Run `hexo new page category`
2. Replace `source/category/index.md` content with :

```yml
---
title: category
layout: category
comments: false
---
```

##### Enable tag page

1. Run `hexo new page tag`
2. Replace `source/tag/index.md` content with :

```yml
---
title: tag
layout: tag
comments: false
---
```

##### Enable friend links page

1. Run `hexo new page link`
2. Replace `source/link/index.md` content with :

```yml
---
title: link
layout: link
comments: false
---
```

##### Enable about page

1. Run `hexo new page about`
2. Replace `source/about/index.md` content with :

```yml
---
title: about
layout: about
comments: false
---
```

##### Enable stats

```yml
google_analytics:
baidu_analytics: 57e94d016sfsf1fba3xxxx8a2b0263af0
```

##### Enable comment

```yml
disqus_shortname: forsigner
# duoshuo_shortname: forsigner
```
