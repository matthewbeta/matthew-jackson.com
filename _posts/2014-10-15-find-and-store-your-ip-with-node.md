---
layout: post
title: Find and Store your IP Address with Node
categories: development javascript node
excerpt: A quick post on how to use built in Node JS magic to get your own IP address for use in your grunt and gulpfile
snippet: how to use built in Node JS magic to get your own IP address for use in your grunt and gulpfile
tags: javascript node grunt gulp
published: true
---

<p class="lede">Say you are using Grunt or Gulp on a team. You need to have your Gulp or Gruntfile in version control so that any changes or improvements can be enjoyed (or endured) by everyone.</p>

Now let's say you all want to be running a cool task like [Browser Sync](//browsersync.io) and due to the network neck-beards and their crazy rules, you need to specify your host explicitly using your IP (eg. 192.168.X.XX). All your IP addresses are different though! Oh noes. Looks like you'll have to manually edit it every time.

Or you could use the built in [Node OS](//nodejs.org/api/os.html) API. Like so:

{% highlight js linenos %}
// REQUIRE THE OS MODULE
var os          = require('os');
var ifaces      = os.networkInterfaces();

/*...*/

// THIS FUNCTION GETS YOUR LOCAL IP SO WE CAN SERVE THE BUILT SITE FROM IT
// No more having to keep swapping the IP
var lookupIpAddress = null;
for (var dev in ifaces) {
    if(dev != "en1" && dev != "en0") {
        continue;
    }
    ifaces[dev].forEach(function(details){
        if (details.family=='IPv4') {
            lookupIpAddress = details.address;
        }
    });
};
var ipAddress   = lookupIpAddress;

/*...*/

// EXAMPLE ONLY - NOT REAL
browsersync: {
	options: {
		host: ipAddress, // Use the variable we stored earlier!
	}
}
{% endhighlight %}

Now whenever anyone runs the gulp or grunt (or any node thingy) it will get their IP and use that. Swag.

[Full (Gulp) example as a gist](//gist.github.com/matthewbeta/25a33958de7cf5a8145d)

<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>

