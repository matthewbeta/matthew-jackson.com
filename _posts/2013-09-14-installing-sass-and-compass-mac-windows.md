---
layout: post__content
title:  "Installing Sass and Compass on Mac or Windows"
categories: development
excerpt: If you want to Sass and Compass without a tool like Codekit or Prepros (I did to use Grunt) then you might have to go and install Sass and Compass manually. Don't worry. Its super easy. 
snippet: Install Sass and Compass manually. Don't worry. Its super easy. 
tags: sass compass development
---

<p class="lede">Quick post. I'm going to assume you've heard of Sass and Compass before and I'm not going to cover any of that. If you haven't heard about them or their preprocessor cousins I hope you get good broadband under your rock cos you need to do some serious google catch up. </p>

<p class="drop-cap">If you want to Sass and Compass without a tool like <a href="http://incident57.com/codekit/">Codekit</a> or <a href="http://alphapixels.com/prepros">Prepros</a> (I did to use Grunt) then you might have to go and install Sass and Compass manually. Don't worry. Its super easy.</p>

## Don't fear the command line

First thing's first, we need to do this via the command line (CMD in Windows, Terminal on Mac). I used to fear not having a GUI. Then someone pointed out to me "The Command Line *is* the GUI". Once you get used to it and get over the inital fear of wiping out your hard drive or sending your browsing history to the NSA (lolz) its really awesome. I recommend reading these posts if you wanna bit of a primer or a walk through some basics:

* [guide to terminal for Mac](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/) 
* [Guide to command prompt for Windows](http://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/) 
* [Installing Grunt from scratch (by me)](http://matthew-jackson.com/notes/development/setting-up-grunt-from-scratch/)

## Installing Compass

OK so if you want Compass you need Sass, and if you need Sass you need Ruby. If you're on a Mac, you already have it[^1]. If you're on Windows - too bad... Just kidding. Installing Ruby on a Windows is easy. Go get [rails Installer](http://railsinstaller.org/) and download the appropriate package for your OS. install it (it installs a bunch of useful stuff, including Ruby, Ruby-on-Rails and Git). Go do that and I'll wait here... 

Done? Cool. So now we want to make sure [Ruby Gems](http://rubygems.org) is up to date. Ruby Gems is like [NPM](http://npmjs.org) but for Ruby (maybe NPM is like Gems for Node, I dunno). If you don't know what I'm talking about, go read the [previous article]({{ site.url }}/notes/2013-09-08-setting-up-grunt-from-scratch/).

So jump over to your command line

{% highlight bash linenos %}
$ gem update --system
{% endhighlight %}

That'll get everything up to date before we install Compass. Now enter

{% highlight bash linenos %}
$ gem install compass
{% endhighlight %}

Done. Thats Sass and Compass (and Ruby) installed and this is only the 5th(ish) paragraph. 

<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>
