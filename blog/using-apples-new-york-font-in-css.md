---
layout: post.njk
title: "Using Apple's New York font in CSS"
snippet: "A slight redesign"
date: 2021-02-11
tags: ['web', 'css', 'fonts', 'apple', 'new york', 'system fonts']
css: |
  :root {
    --color-light: #F4DFDD;
    --color-dark: #2C2923;
  }
  h1, h2 {
    font-family: var(--font-serif);
  }
---

[I don't care, Matt. Show me the code](#code)

Had a bit of a spring clean on the old web log this week. I wanted to keep things speedy, but wanted to mix up the fonts a bit. 

I've been using system fonts for a while, as I really like Apple's San-Francisco font and I like the fact thats its nice a quick as no files to download (sorry if your are on Windows). Recently(ish) Apple introduced a serif sister font to San Francisco, New York, which I also like.

Using San Francisco (used to?) require a bit of a hacky method to use it on the web:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

<a id="code">Using New York is basically the same:</a>

```css
font-family: -apple-system-ui-serif, ui-serif, 'Georgia', serif;
```

I've also added a style block in the head, where I can insert custom CSS within the post front-matter. In this one, I've set the headings to also use New York. 🤝
