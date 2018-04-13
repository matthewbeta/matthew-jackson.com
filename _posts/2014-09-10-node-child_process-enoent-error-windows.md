---
layout: post
title: Node.js Child Process ENOENT Error on Windows (title for make SEO Good)
categories: development
excerpt: I got an ENOENT Error running a child_process on Windows someone on Stack Overflow helped
snippet: Fixing an ENOENT Error running child_process on Windows
tags: node js gulp jekyll
published: true
---

<p class="lede">Node JS on Windows can be a <a href="https://github.com/joyent/node/issues/6960">challenge</a>. TBQH Windows can be a challenge. I ran into a sticky problem the other day and thought I would share the solution.</p>

Lets say we're running a [Gulp](http://gulpjs.com) task to build a [Jekyll](http://jekyllrb.com) site. Part of [Gulp's philosophyy](http://blog.overzealous.com/post/74121048393/why-you-shouldnt-create-a-gulp-plugin-or-how-to-stop) is that plugins are a means of last resort, and you should just write straight Node/JS. We can use node's built in [child_process](http://nodejs.org/api/child_process.html) module to run commands just like we were typing them in to the terminal:

{% highlight js linenos %}
var cp = require('child_process');
// later
cp('jekyll', ['build'], {stdio: 'inherit'});
// cool shit happens
{% endhighlight %}

This is pretty cool. I was pretty pleased with myself when I was building a Jekyll site (and my Sass) using Gulp. Like all of the cool kids, I wanted to show off my coolness to the folks at work (we use Jekyll for prototyping a lot). Unfortunately when I tried it on my Windows machine in the office, I got this bullshit:

{% highlight bash linenos %}
events.js:72
    throw er; // Unhandled 'error' event
          ^
Error: spawn ENOENT
    at errnoException (child_process.js:988:11)
    at Process.ChildProcess._handle.onexit (child_process.js:779:34)
HAHAHAHAHA You suck at your job. Why don't you tell your girlfriend to call me when she wants to see a real programmer
{% endhighlight %}

Yes. My PC is a dick. I hacked around the problem (by using child_process.exec seen as you ask), but why didn't it work? Well This week I found out the answer&hellip;

Turns out this ENOENT error means that it can't execute the command. eg. Jekyll doesn't resolve to an executable file. When we run ````jekyll```` from the Command Prompt, it looks for an actual executable and doesn't find one, but *does* find a jekyll.bat file and helpfully resolves to that for you.

Node's child_process doesn't do that, so you need to do something like this:

{% highlight js linenos %}
cp('jekyll.bat', ['build'], {stdio: 'inherit'});
{% endhighlight %}

Hooray! it worked. Oh noees but now it doesn't work on not-Windows. Sad face. I want portable code dammit! We need it to write ````jekyll```` on non-windows systems, and ````jekyll.bat```` in windows land. If only there was a way to conditionally set a variable value in Javascript with some kind of ternary operator&hellip;

{% highlight js linenos %}
var cp = require('child_process');
// make a variable based ont he system
var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
// Use that sukka
cp(jekyll, ['build'], {stdio: 'inherit'});
// cool shit happens E V E R Y W H E R E
{% endhighlight %}

[The resulting Gulpfile as a Gist](https://gist.github.com/matthewbeta/25a33958de7cf5a8145d)


<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>


Thanks to [SpikeMeister](http://stackoverflow.com/users/1877762/spikemeister) off of Stack Overflow ([@bighuggies on twitter?](https://twitter.com/bighuggies/)) for answering [this question](http://stackoverflow.com/q/21856861)