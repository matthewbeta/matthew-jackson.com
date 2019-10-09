---
layout: post.njk
tags: ['blog', 'link']
snippet: This really helped me get array.reduce
title: 🔗 Understand Javascript Array Reduce in 1 Minute
date: 2015-01-30
linked: https://www.airpair.com/javascript/javascript-array-reduce
---

This really helped me "get" array.reduce: 

"Everybody knows what looping over a collection is. But do you know what reducing a collection means? No? Are you sure?"
"It sounds scary. But it is in fact pretty simple. You do it all the time. Here. Let me show you an example:"

{% highlight js linenos %}
var total = 0;
var numbers = [1, 5, 7, 3, 8, 9];
for ( var i = 0; i < numbers.length; i++ ){
   total += numbers[i];
}
{% endhighlight%}

"That’s it. You just reduced the “numbers” collection into the “total” variable. Pretty simple huh?"

It is now, yeah :)

[Understand Javascript Array Reduce in 1 Minute](https://www.airpair.com/javascript/javascript-array-reduce)
