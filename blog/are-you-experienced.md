---
layout: post.njk
title: "Are you (an) experienced (developer)?"
date: 2019-01-12
snippet: "What does it mean to be an experienced developer? It definitely doesn’t mean you know how to do everything."
tags: ['blog']
---

What does it mean to be an experienced developer? It definitely doesn’t mean you know how to do everything. 

I think mostly, it means you know how to work out how to build pretty much anything (within reason). 

This came up this week at work when the design team wanted to build a pop up nav. You know the kind where you hover over a link on desktop and you get an extended menu below. A mega-ish-nav. 

Our awesome junior developer immediately thought “yeah looks great”. My spider sense started twitching. These things can look really simple in a comp, but have lots of hidden factors which without experience, you won’t think about until they punch you in the face. 

Generally for developments, I’ll go through a process (either written or sketched or in my head) to check off the following things. This gives me a better understanding of what it will take to build something. 

## Do I need to build anything?
Always question whether this is a necessary development for the user or business. This might get you the reputation of being an arsehole, but sometimes it’s not s given that functionality needs to exist. If it doesn’t help anyone, it’s better not to build it. 

## What does it do?
Take some time to work out how it works. This will usually involve sitting with the designer and working out what happens in every scenario.

In our example: What is the expected behaviour when you click the top level links? Should this open the menu, or hyperlink to the next page? If it should hyperlink, how do you access the menu on a tablet? Should you have to manually close the menu, or should it close by clicking off? What is the expected behaviour when we’re in the mobile design? Can I use the same nav, or will they be sufficiently different that we need to have 2? And so on…

## What’s the semantic/progressive enhanced way to build this?
I like to work out how I can build this in HTML. If we need buttons or links for things. What native elements we can use for stuff to make it work with as few moving parts as possible. Ultimately, it should work as a nav without CSS or JS. 

Once I’ve worked out the basic HTML, I like to work through styling and basic JS and how we’re going to build  up the functionality in layers. That means it’ll probably be more robust. 

## What is the accessibility story for this sort of thing?
Anything with showing/hiding and navigation will have some form of accessibility concerns to address. As an example, you may think having the menu show/hide when the parent link is hovered/focused, is enough. The issue here would be, if the user wants to get to the last link, they need to tab through every link in every menu to get to it. Therefore you need to allow users to tab over the top level links, and provide a means of them entering the sub-menus. You’ll need to work out what the conventions are for this. Is it using arrow keys? The space bar? How would you announce that to a screen reader? 😫

You also have to try and figure out what ARIA<sup>*</sup>spell you need to summon the accessibility gods. 

This stuff is hard. I find it hard to test, and there isn’t always one correct answer. Experience helps you work out what information to trust. 

\* *ARIA is a standard for helping add accessibility to applications. For example you can show that a button has a popup attached, or that it is expanded etc. It’s bonkers and, confusingly, has weird support among screen readers.*

## Do I have to build this?

So by this stage I’ve probably worked out how much of an arse-ache this will be to make. It’s usually around this time I check if anyone else has made one of these (and made it well). 

You will need to consider plenty of things when deciding if you will use someone else’s code. Is it accessible? Does it meet your functional requirements? Is it well built? Is it going to have performance implications. What’s the compromises (there will be plenty) compared to the time savings. You’ll need to make a call on how much trust you have in the developer. What will the support story be? 

Experience means I trust my judgement more and know better when to lean on third party code, and when to roll my own. 

## How do we build it in the simplest way possible? 

So you’ve decided to build it your damn self. Good for you! Now you need to plan out how your going to do it. What will you be doing in CSS and what will be JS? Sometimes you can just use JS to change your ARIA attributes and classes for styling. Sometimes, JS will be more involved, for example to manage the tabbing/keyboard functionality. 

Simplest could mean time to build, ease of maintenance, flexibility, or all of the above. I like to do as little as possible. Fewer moving parts generally means easier to build and maintain. It should be as simple as possible, but not simpler. 

## Can I build this so I never have to build it again?

Lastly, can I build whatever it is, to be flexible enough and reusable. This way we can put the effort in once and get multiple uses out of the code. In the old days, this might be a jQuery plugin. Now we might make a module or a react component. 

## Conclusion 

I think certainly, all of these things can explain a perceived lack of enthusiasm for building new features.    It definitely means you are better able to estimate the time and effort  it will take. I think this process can be enjoyable… sometimes. 