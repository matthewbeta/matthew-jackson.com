---
title: "Getting my (blog) shit together"
snippet: "Spring cleaning the old blog and making it as simple as possible to publish"
published:  true
---

A change is as good as a rest so I've cleaned up the site with a new colour scheme some minor tweaks and less minor under the hood improvements. I made a list of stuff I wanted to tackle. Some of it was technical, some of it was just to make publishing and maintenance easier. I am also on a drive to simplify everything, so I wanted the easiest way forward with every decision.

## HTTPS ~~Everywhere~~ anywhere
Firstly, I really wanted to get HTTPS working. This site was previously hosted on [Github Pages](https://pages.github.com/) (which I love) but with a custom domain, its pretty much impossible to get a real SSL. I thought about self hosting, but I know it'll be a pain to deploy. GH Pages makes that really easy by doing a build whenever you commit. 

I recently heard about [Netlify](https://netlify.com) and how they do hosting of static sites so I went and had a read. The news is:

* Its basically free (for my purposes)
* It deploy/build on git push *and* you can have build hooks (e.g. ```curl``` a URL and trigger a build).
* SSL is a one click process (as is forcing HTTPS)
* They do DNS too - I didn't end up using this as it would have meant too much dicking around. If you do use it, you get their super cool CDN too for free.
* H2 out of the box
* They offer a simple way to configure headers info (e.g. a CSP) by including a ```_headers``` file.

I encourage you to go take a look. The docs are great and my site was hosted and setup in 5 minutes (not an exageration).

## Offline is the new online
Now I had SSL setup, I could finally the second thing on my shame list – setting up a Service Worker. I basically stole all my SW code from this [CSS Tricks post](https://css-tricks.com/serviceworker-for-offline/). The setup caches pages as you view them, loads pages cache first then goes to the network.I added an [offline page](/offline.html) to show if a page is not in the cache or available over the network. Worked like a charm. 

## Auditors
Next was some general tidying up around the site. I used Chrome Dev Tools Audits to run a bit of a scan of the site. After a few accessibility and SEO tweaks I got some pretty ok scores:

![A screen shot showing 100% scores for all audits in Chrome]({{ "/assets/audit-scores.png" | absolute_url }})

*N.B. I know this isn't the be-all-and-end-all but it was a pretty good benchmark - Good enough for my levels of effort.*

## Syndication
Next I like the idea of owning my content, but also would be good to syndicate the content to [Medium](https://medium.com/@matthewbeta) (at first). I found a nice Jekyll plugin for [cross posting to Medium](https://github.com/aarongustafson/jekyll-crosspost-to-medium). It took some fiddling to get it running, but was reasonably straight forward. I'm struggling to get all the posts up at the mo due to the API upload limit. Once the old posts are up, it should just work™️ for new posts.

Bonus: I also added an [IFTTT](https://ifttt.com) task to tweet about it - as I'm shit at publicising when I post).

## Keep it regular
The last thing on my list is to actually write some stuff to post. So this is the first one of those ✅. I also want to get better at sharing links on my blog first and then pushing them to Twitter so I've now tweaked som estuff to make that possible by just adding a variable to a post.

Speak soon&hellip;

