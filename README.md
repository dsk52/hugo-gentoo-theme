# hugo-gentoo-theme
[![Build Status](https://travis-ci.org/d-kusk/hugo-gentoo-theme.svg?branch=develop)](https://travis-ci.org/d-kusk/hugo-gentoo-theme)

![hugo-gentoo-theme's screenshot](https://github.com/d-kusk/hugo-gentoo-theme/blob/develop/images/screenshot.png)

hugo-gentoo-theme is a [Hugo](https://gohugo.io) theme.  
This theme has a motif of Gentoo penguin.


## Get the Theme
Inside the folder of your Hugo site run:

```
$ cd themes
$ git clone https://github.com/d-kusk/hugo-gentoo-theme.git
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Setting
Write it in `` config.toml`` in the root directory of the Hugo site.

```
baseurl = "Your Public Page URL"
title = "Your Site Name"
author = "Your Name"
copyright = "(c) 2017 Your Site Name"
canonifyurls = true
paginate = 3

googleAnalytics = "Yout Google Analytics ID"

[params]
  description = "Your Site's Description."
  author = "Your Name"
```

## Preview your site locally
Use Hugo’s built-in server to see your site in action as you make changes.

```
$ hugo server -t hugo-gentoo-theme
```

Visit ``localhost:1313`` in your browser.

## Write your new blog posts
To create a new blog post, run:

```
$ hugo new post/your-post-name.md
```

## License
This theme is released under the [MIT license](https://github.com/d-kusk/hugo-gentoo-theme/blob/master/LICENSE.md)
