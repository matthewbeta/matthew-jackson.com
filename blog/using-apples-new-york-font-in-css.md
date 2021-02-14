---
layout: post.njk
title: "Using Apple's New York font in CSS"
snippet: "A slight redesign"
date: 2021-02-11
tags: ['blog', 'web', 'css', 'fonts', 'apple', 'new york', 'system fonts']
css: |
  :root {
    --color-light: #F1DEDB;
    --color-dark: #202020;
  }
  h1 {
    font-family: var(--font-serif);
  }
  h2 {
    font-family: ui-monospace, SFMono-Regular, ui-monospace, Monaco, monospace;
    font-weight: normal;
  }
---

[I don't care, Matt. Show me the code](#code)

Had a bit of a spring clean on the old web log this week. I wanted to keep things speedy, but wanted to mix up the fonts a bit. 

I've been using system fonts for a while, as I really like Apple's San-Francisco font and I like the fact thats its nice a quick as no files to download (sorry if your are on Windows). Recently(ish) Apple introduced a serif sister font to San Francisco, New York, which I also like.

Using San Francisco requires a bit of a hacky method to use it on the web:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

<a id="code">Using New York is basically the same:</a>

```css
font-family: -apple-system-ui-serif, ui-serif, 'Georgia', serif;
```

I've also added a style block in the head, where I can insert custom CSS within the post front-matter. In this one, I've set the headings to also use New York. 🤝

## Update - SF Mono is pretty easy to add too 🤖

Its the same principle. Here's my new code font stack:

```css
font-family: ui-monospace, SFMono-Regular, ui-monospace, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
```
