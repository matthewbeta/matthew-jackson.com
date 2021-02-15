---
layout: post.njk
title: "Adding your latest post to your homepage in Eleventy"
snippet: "How to add your most recent post to your homepage"
date: 2021-02-15
tags: ['blog', 'web', 'eleventy', '11ty']
---

This weekend I wanted to add my most recent blog post to my homepage. I googled how to do it but couldn't find the cut and paste code I wanted, so here it is.

In your `index.njk` or `index.liquid` file, you'll need to get your most recent post like this:

{% raw %}
```js
{% set posts = collections.blog | reverse %}
{% set post = posts[0] %}
```
{% endraw %}

You may need to change `collections.blog` to whatever your collection is. You can the output anything from your post variable. I'm using a snippet, but you could output the whole post. You do you!
