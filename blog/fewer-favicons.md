---
layout: post.njk
title: "Fewer Favicons"
snippet: "Andrey Sitnik's post on using fewer favicons is just what I needed"
date: 2021-02-18
link: 'https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs'
tags: ['blog', 'links', 'web', 'favicons']
---

Andrey Sitnik's post on [how to favicon in 2021](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) is right up my street as ostensibly its a lot less faff than doing all of the files we make as standard.

Weirdly this was on my mind this week as we are beginning to modernise our dev workflow [at the office](https://bluegg.co.uk).

I'm not sure for most of the work I do (websites) that anything more than a `favicon.ico` is really necessary. However, I do like the idea of making sure things are finished nicely (like a cabinet maker caring what the back of the unit looks like).

Mostly our icon generation isn't manual; we use [The Real Favicon Generator](http://realfavicongenerator.net/), integrated with our build step. Seen as favicons are usually a set it and forget it deal, this new way is actually a little bit more cumbersome. I like the simplicity of it though, and I like the idea of providing light and dark icons via SVG with a media query in it.

Maybe time to write a little Node CLI...

