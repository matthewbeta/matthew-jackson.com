---
layout: post__content
title:  "Converting an SVG Polyline to a Path with this one weird trick"
categories:
excerpt: Need to animate an SVG Polyline with CSS? Convert it to a path.
snippet: Need to animate an SVG Polyline with CSS? Convert it to a path.
tags: CSS, SVG, Development
published: true
---

Quick post: Today I was saving an SVG for a line graph out of Illustrator and found that the lines were rendered as [polylines](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline). This is all well and good, except when you want to animate them, when it isn't.

You'll probably get something that looks like this:

````xml
<polyline fill="#000000" stroke="#000000" stroke-miterlimit="10" points="100,200,300,400" />
````

You just need to make a couple of tweaks. Change the tag name, change the "points" attribute to "d", and put an "M" in front of first point (which moves the start of the point to the right position):

````xml
<path fill="#000000" stroke="#000000" stroke-miterlimit="10" d="M100,200,300,400" />
````

I had a hunt online and there was not a specific post on how to do this (just [this Gist](https://gist.github.com/andytlr/9283541)), so I've made one. I'm pretty confident this won't always work so go careful out there. If I'm doing this wrong or just being a dumby, [tweet at me](http://twitter.com/matthewbeta).





<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>
