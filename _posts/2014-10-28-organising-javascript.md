---
layout: post__content
title: Organising Javascript for beginners (like me)
categories: dev
excerpt: So you've heard about this Java Script thing (I'm tipping it to be big this year). You've played with it and can write some jQuery soup. But eww. Everything gets messy and difficult and your head hurts  and it makes you want to go kick a tree. I'm starting to wrap my tiny brain around some basic Javascript structuring and here's a brain fart containing some of what I understand
snippet:  I'm starting to wrap my tiny brain around some basic Javascript structuring and here's a brain fart containing some of what I understand
tags: javascript, organising, structure architecture
published: true
---

<p class="lede">So you've heard about this Java Script thing (I'm tipping it to be big this year). You've played with it and can write some jQuery soup. But eww. Everything gets messy and difficult and your head hurts  and it makes you want to go kick a tree.</p>

<p class="dropcap">I've felt like this. Many times. I'm starting to wrap my tiny brain around some basic Javascript structuring and here's a brain fart containing some of what I understand:</p>

## Objects

The easiest way to structure your JS is to organise it into an object literal. An object literal is a means of storing data. The data takes the form of key value pairs (key = value) and the values can take the form of strings, arrays, functions or other objects.

There are a few ways to create an object literal. My preferred (and I think the most straightforward) is by making a variable, who's value is an empty object.

{% highlight js linenos %}
var me = {};
{% endhighlight %}

Sweet. We now have an object literal called "me". But it's pretty boring... Let's fill it with some stuff:

{% highlight js linenos %}
me.firstname = 'Matthew';
console.log(me); // {firstname: 'Matthew'}
{% endhighlight %}

Let's add my lastname in the same way, then print the lastname property to the console:

{% highlight js linenos %}
me.lastname = 'Jackson';
console.log(me.lastname); // 'Jackson'
{% endhighlight %}

You can get the data or set the data via an intuitive dot syntax (<code>objectName.propertyName</code>). Let's add a function to my object:

{% highlight js linenos %}
me.greeting = function() {
  return 'Hello, '' + this.firstname + ' ' + this.lastname;
}
{% endhighlight %}

Now we can call that function like this:

{% highlight js linenos %}
me.greeting(); // 'Hello, Matthew Jackson'
{% endhighlight %}

So far so good. Our code is more organised, we can write some pretty expressive and easy to read code, and we get a bonus. We are namespacing our application. In this instance our namespace is <code>me</code>, namespacing is important. It means we avoid accidentally overriding things.

## Namespacing

When I were a lad, we didn't have "TV on demand", the "internet" or "The Cloud". If we wanted to watch something when we weren't in, we would record it on a video tape. The blank video tapes we had in the olden days, came with some stickers for you to label the video (eg. Mum's Tape - London's Burning). This stopped, other people just picking the video and recording over it with Predator, _without realising they were doing it_ (sorry, Mum).  

Namespacing applies the same principal to our Javascript. Its very easy to give 2 different things the same name when you're coding (especially on a team). This makes it very easy to override one thing with another without realising. By namespacing our code under <code>me</code> we can have another object, <code>you</code>, with the same properties, and neither overrides the other:

{% highlight js linenos %}
var you = {
  firstname: 'Gary',
  lastname: 'Biscuits',
  greeting: function() {
    return "G'day, " + this.firstname
  }
}

console.log(you.greeting()) // "G'day, Gary"
{% endhighlight %}

Thats a little contrived, but you can hopefully see how, in a larger application, namespacing makes it harder for us to override our values accidentally.

But what if we name our namespace the same thing as another namespace?

{% highlight js linenos %}
// later in our code
var me = {};

me.powers= 'grumpiness'

me.greeting() //undefined is not a function
{% endhighlight %}

Well we can test to see if our name already exists, when we set the variable:

{% highlight js linenos %}
var me = me || {};
{% endhighlight %}

This checks to see if "me" already exists. If it does, we just use the existing "me"[^1]. Then we can continue adding properties to it using the dot syntax (<code>me.powers = 'grumpiness'</code>). If it doesn't already exist, we assign an empty object as the value, just like in the first example (<code> var me = {}</code>).

## Breaking it up

We can further organise our code by splitting it into smaller files. The object literal pattern can help here too:

{% highlight js linenos %}
// scripts/personal-details.js

var me = me || {};

me.details = {
  firstname: 'Matthew',
  lastname: 'Jackson',
  fullname: function(firstname, lastname) {
    return firstname + ' ' + lastname;
  },
  age: 31,
  twitter: '@matthewbeta'
}
{% endhighlight %}

{% highlight js linenos %}
// scripts/head.js

var me = me || {};
me.head = {
  facialHair: true,
  eyes: 2
}

{% endhighlight %}

You could then either link both of these seperately (eww... gross), or with a build step to concatenate them.

## Conclusions

In larger more complex applications or sites, I could see the nesting getting crazy (<code>me.property.name.long.list.myfunction();</code>). I think just being pragmatic and sensible would avoid anything too mad.

I also found it took a but longer to write at first (not an issue now). The wins from breaking everything up and keeping it organised are definitely worth a few extra minutes up front. Having a simple pattern to follow has also encouraged me to write more reusable objects and functions.

Code architecture is a spectrum and this is on the very-quick-easy-end. It does feel good taking steps into making more organised and maintanable code but I'm also aware that there are many applications and this won't be the best pattern for all of them.

## Enjoy better writers? Read these:

* [Using Objects to Organize Your Code](http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/) by [Rebecca Murphey](https://twitter.com/rmurphey)
* [Can You “Over Organize” JavaScript?](http://css-tricks.com/can-you-over-organize-javascript/) by [Chris Coyier](https://twitter.com/chriscoyier)
* [Essential JavaScript Namespacing Patterns](http://addyosmani.com/blog/essential-js-namespacing/) b [Addy Osmani](https://twitter.com/addyosmani)


<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>

<h3 class="heading heading--sub">Footnotes</h3>

[^1]: Its not doing that really. Its assigning the value of the existing "me" to the newly declared "me". The above is easier to write though.  
