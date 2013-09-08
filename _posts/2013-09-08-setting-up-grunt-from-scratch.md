---
layout: post__content
title:  "Setting up Grunt from scratch"
categories: Development
excerpt: Where I walk through getting set up with Grunt. We're gonna get in the command line in a minute. I promise it isn't gonna get weird.
snippet: Grunt from scratch. We're gonna get in the command line in a minute. I promise it isn't gonna get weird.
tags: front-end, development, design, tools, grunt, node
published: true
---

<p class="drop-cap">Being a modern web designer involves a lot of tools. <a href="http://gruntjs.com">Grunt</a> is currently my new hotness. Its a tool I use to manage a bunch of other tools I use. In fact its consolidated about 5 different tools I had into one click (well command but more on that later). In this post I'll walk through getting set up with Grunt and in the next post, we'll set up Grunt to handle Sass with Compass, Jekyll, JS concatenation and minification, Live reloading changes to any of the HTML/CSS/JS and finally multi-device browsing and browser refresh. Boom.</p>

## Rule 1: Don't fear the Terminal

We're gonna get in the command line in a minute. I promise it isn't gonna get weird. I used to hate it too. Then I got to love it. Then I started using it for loads of stuff. Then I hated it, because all the tabs or windows I needed open drove me nuts. What's so beautiful about Grunt, is you can run loads of commands in one line. Stick with me on this, its awesome[^1]. 

Just follow along with what I'm doing by copying everything out of the code example <em>after</em> the <code>$</code> sign (that's just t omake it look more like OSX terminal and makes me feel cool). The commands examples are the same for Mac and Windows and if they aren't I'll write them both out cos I got your back. 

Windows note: You can't ctrl+v to paste in CMD in windows. You can right-click and paste though.

## Install all the things

Ok So first we gonna need to get our Node on. This is a cinch. Go to the [Node JS Website](http://nodejs.org/). Click install. Job done. You are one of the cool kids.

When you install node, you also get [NPM](https://npmjs.org/). NPM is a big library of Node modules (kinda like apps or plugins built with and for Node). Its also how we're gonna install Grunt. Its Terminal time.

Open up the Terminal (Mac) or Cmd (Windows) and type in:

{% highlight bash linenos %}
$ npm install -g grunt-cli
{% endhighlight %}

Lets break that down:

1. "npm" tells terminal/cmd what program we're commanding
2. "install" is the command
3. "-g" is an argument (a kind of optional bit of info) for the command short way of saying "--global" This means we're installing Grunt globally on our system. This is a good thing. You want to be able to use it everywhere.
4. "grunt-cli" Is another argument. This time telling NPM what you want to install. In this instance the Grunt Command Line Interface.

So basically you told your computer:
{% highlight bash linenos %}
$ Yo, Computer 
$ Get NPM to install Grunt globally, is it? 
$ I'll put the kettle on.
{% endhighlight %}

Hit enter.

The terminal or the cmd window is gonna go a bit Matrix for a bit. It's basically telling you what its doing. It can look a bit scary, but should all be fine.

When I installed something from NPM for the first time on a mac, I got an EACCESS Error (which scared me). Didn't happen on Windows though.

A lot of solutions online tell you to just install the package again like this, using SUDO. 
{% highlight bash linenos %}
$ sudo npm install -g grunt-cli
{% endhighlight %}

Ummm. Don't do that. Although I trust Bocoup and the community around the grunt-cli, this is a bad habit to get into. The sudo command is basically the airport security for your mac waiving someone through an airport security check. Sometimes thats good. Sometimes we want people to be checked.

The method I used is to type this in the terminal once:
{% highlight bash linenos %}
$ sudo chown -R $USER /usr/local
{% endhighlight %}

I got this code from [Aral Balkan](http://aralbalkan.com/scribbles/npm-install-g-please-try-running-this-command-again-as-root-administrator/) and he also points to this [What, no sudo? article](http://foohack.com/2010/08/intro-to-npm/#what_no_sudo) furthering the point above.

## Getting ready to Grunt

First we're going to get the terminal/command prompt to the right folder. To do this we use the change directory command or <code>cd</code>.

{% highlight bash linenos %}
$ cd path/to/my/project-folder
{% endhighlight %}

and hit enter. The terminal should show you what folder you're now in. This means any commands you run now will be specific to that folder.

Mac note: on a mac, you can do this

{% highlight bash linenos %}
$ cd ~/path/to/project
{% endhighlight %}

The <code>~</code> puts you in your home directory. 

Windows note: on windows, I do this

{% highlight powershell linenos %}
>_ cd c:\path\to\project
{% endhighlight %}

Setting up a Grunt on a new or existing project is easy. You just need to add 2 files to the folder where everything lives: Gruntfile.js and package.json. These files are pretty central to how Grunt works. The package.json file tells node all the things you need to include in your project and also some general information, which might be useful if your project is on github or something. Here's an example fo the package.json file for this site, with some dependecies removed so its not really long:

{% highlight js linenos %}

// package.json

{
  "name": "Matthew-Jackson.com",
  "version": "1.1.0",
  "description": "Personal Site",
  "main": "_site/index.html",
  "repository": "https://github.com/matthewbeta/matthewbeta.github.io",
  "author": "@matthewbeta",
  "devDependencies": {
    // dependencies here... 
  }
}
{% endhighlight %}

You can make a package.json file in the command line or you can copy the example into a new file, save it as package.json nd edit the bits you need.

To create it in the command line hop over to the terminal. You should be in the right folder if you followed along earlier:

{% highlight bash linenos %}
$ npm init
{% endhighlight %}

The command prompt will walk you through setting up the file automatically§ in this format:

{% highlight bash linenos %}
Question(NPM Suggested answer)
{% endhighlight %}

You can either type in an answer, or if NPM guessed right in the suggestion, you can just hit enter.

Next create a new file in your project and name it Gruntfile.js. Copy and paste in the following code (we'll go over it in the next post):
{% highlight js linenos %} 
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   // Tasks
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('');

  // Default task(s).
  grunt.registerTask('default', ['']);

};
{% endhighlight %}

## Recap

Ok. That was more epic than I intended but the initial set up is the hardest/least fun bit. We installed Node.js and NPM. Got used to using the command line, installed Grunt globally and set up our project to use Grunt. You should feel like a fucking boss. Good job. Next time all the cool stuff.

<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>

<h3 class="heading heading--sub">Footnotes</h3>

[^1]: Check out this [guide to terminal for Mac](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/) or this [Guide to command prompt for Windows](http://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/) 

<h3 class="heading heading--sub">Further reading</h3>
- [Introduction to NPM - How To Node](http://howtonode.org/introduction-to-npm)
- [Getting started guide - Grunt JS](http://gruntjs.com/getting-started)




