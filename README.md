#Fexo

A minimalist design theme for hexo.

![screenshot-1](https://raw.githubusercontent.com/forsigner/forsigner.github.io/master/images/screenshot-1.png)
![screenshot-2](https://raw.githubusercontent.com/forsigner/forsigner.github.io/master/images/screenshot-2.png)

### Installation

```bash
$ cd my-site
$ git clone git@github.com:forsigner/fexo.git themes/fexo
```

### Use theme

In file `_config.yml` set `theme: fexo`

### Upgrade

```bash
$ cd themes/fexo
$ git pull
```

### Set Avatar

Just replace image `theme/fexo/source/images/avatar.jpg`

### Enable category page

To enable category page :

1. Run `hexo new page category`. A new folder named category will be created in source/
2. Replace source/category/index.md content with :

```
---
title: "all-categories"
layout: "all-categories"
comments: false
---
```

New page will be reach at : /all-categories. On this page, users will be able to search and filter categories.



### Configuration

```yml
# Blog info
blog_name: Forsigner
slogan: Find the bug of the world

# Miscellaneous
google_analytics:
baidu_analytics: 57e94d016e201fba3603a8srewrwxxxxa

favicon:

# social
disqus_shortname: forsigner
# duoshuo_shortname: forsigner

home_nav:
  - Blog: /archives
  - Github: https://github.com/forsigner
  - Douban: http://www.douban.com/people/forsigner/
  - Twitter: https://twitter.com/forsigner
```

### Browser compatibility

- IE8+
- Firefox
- Chrome
- Safari
- Opera


### License

  [MIT](LICENSE)
