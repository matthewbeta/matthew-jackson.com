---
layout: post.njk
title: "Phone Blogging (Phlogging)"
snippet: "My new patented phone blogging setup"
tags: ['blog']
date: 2019-01-03
---

So to help me with one of [my new year changes](https://matthew-jackson.com/notes/twenty-ninteen-ad) (to blog more frequently), I’ve set up my phone so I can blog without needing my laptop. 

For this setup I needed 2 apps:

## Working Copy

[Working Copy](https://itunes.apple.com/gb/app/working-copy/id896694807?mt=8) by Anders Borum, is a Git client for iOS. It’s pretty full featured. All I really need though is to edit text and commit/push/pull from my blog Git repo. 

Pushing new changes to the repo kicks off a build on Netlify and my blog is published. 

The editing experience isn’t ideal though. I’d rather use a purpose built text editor. So…

## iA Writer

[iA Writer](https://itunes.apple.com/gb/app/ia-writer/id775737172?mt=8) by Information Architects is a lovely text editor (and has great Markdown features). It’s available on iOS and MacOS and, importantly for my purposes, I can open/edit/create a document from Working Copy right in iA Writer. 

## Automation & Problems

So as I mentioned, my blog auto builds on commit. I also have it setup to cross-post to Medium automatically (if I want). I’ve also got an IFTTT action to tweet new posts when my RSS feed updates. 

So minimal friction. My issue is I want to have a text shortcut to format my YAML front matter at the start of the post MD file. This needs to be formatted like this:

````yaml
---
title: ""
snippet: ""
crosspost_to_medium:  false
published:  false
---
````

I thought I could just setup a text-snippet shortcut in iOS settings, but that doesn’t allow multiple lines. You can set this up on MacOS and it gets shared to all devices by iCloud, but using it on iOS in Notes or Writer crashes the app. Yikes. 

My best solution for now is to have the YAML saved in a note which I can copy and paste in each time. This is kind of gross to me. What I need is to setup some kind of template for Writer that lets me start a post with the front matter already there. Not sure that’s possible though…

## Phlogging workflow 1.0

So my workflow is now:

1. Open Writer
2. Create or open a doc in `_posts` or `_drafts`
3. Copy and paste my YAML front-matter from a note 🤮
4. Write post
5. Open Working Copy 
6. Commit and push
7. 🍸

So far it’s working. I’ve blogged every day so far in 2019. I won’t keep that up, but I don’t need to. Just need to get into a more regular rhythm of blogging what I would tweeted. 