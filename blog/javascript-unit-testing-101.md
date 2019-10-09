---
layout: post.njk
tags: ['blog']
title: Javascript unit testing 101
date: 2015-06-13
snippet: Part of the reason I haven't been unit testing my Javascript is because I didn't really know how (shame-face emoji). Recently, I sat down and got my head around the practical implications of writing, running and passing JS unit tests.
---

<p class="lede">Unit testing seems like exercise: The consensus seems to be that we should do it, I'm sure we'd feel better if we did do it, but no one seems to do it as much as they should.</p>

<p class="drop-cap">Part of the reason I haven't been unit testing my Javascript is because I didn't really know how (shame-face emoji). Recently, I sat down and got my head around the practical implications of writing, running and passing JS unit tests. The basics at least. In the interests of posterity and sharing for the greater good, I'll try and explain what I learned</p>

First off, I am not going to get into the ins and outs of why you should (or shouldn't) unit test. I'll assume that you're here because, like me, you knew enough to know it sounds like a good idea. My interest in testing has meant I have listened to many podcasts (highly recommend [TTL](http://ttlpodcsat.com) with [Rebecca Murphy](http://rmurphey.com/) btw), conference talks and read many posts and documentation sites for various testing frameworks. In my previous job at Comtec, I was also fortunate to be sat behind some very talented JS and C# engineers and got to ask questions and see what their apporach was.

Based on what I've absorbed, I'm setting up my workflow as follows:

1. I'll be attempting Test Driven Development (TDD if you like accronyms). This is basically writing tests first, then writing code to make the tests pass. This makes the most sense to me
2. I'm going to use [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/) for no other reason than the docs are really good and there is also a cool Yeoman generator (more later)
3. I am *only* doing unit tests. This means I'm not going to try and test DOM interactions. Integration tests seem fun, but I need to walk before I can get onto that bus.

## Get setup

To get started, and follow along you will need to install [Node](http://nodejs.org). Just follow the link and click install. You'll also need to use the terminal or the command line (don't be afraid) to get set up with Yeoman and Bower. Bower requires git too. If you need to install that, go and  install the Github GUI for your system [Windows](https://windows.github.com/), [OSX](https://mac.github.com/)).  

After Node has installed, open your terminal and

````bash

npm install -g yo bower

````

Then install a Yeoman generator to quickly create our test stuff:

````bash

npm install -g generator-mocha

````

Then create a folder for your project and navigate there with your terminal/command line

````bash

mkdir testing && cd testing
````

Then run the generator to make all the folder structure

````bash
yo mocha
````


Alternatively, you could go and get the [files and folder structure from github](https://github.com/matthewbeta/testing/tree/master/test) (contains spoilers)

Once thats finished, you can get Bower to install all the files:

````bash
bower install
````

You'll be left with a folder structure something like this:

````
└── testing/
    └── test/
        ├── bower_components/
        ├── spec/
        └── index.html
````

Create a folder called ```scripts.js``` in the ```test``` folder. This will be where we write the code we want to test. Add a link to it in ```index.html``` where it tells you to include source files:

````html
<!-- ... -->
<!-- include source files here... -->
<script src="scripts.js"></script>

````

All set ```</yak-shaving>```.

*Aside: If you already had a project setup with scripts, styling, the whole deal, you could still have opened your command prompt at the route and run the ``` yo mocha ``` and ``` bower install ``` commands to add the test folder and required test suite, files and dependencies to your project. Thats why Yeoman is cool.*

## Testing time

If you open up ```index.html``` in a browser, you should see a Mocha test results page with some zeroes in the top right, showing no passes or failures. Yay. We'll fix that in a mo, but first, heres a simple thing to build and test:

- We'll build the functions for a basic calculator (add, subtract, divide and multiply)
- The calculator functions should only work on real JS numbers eg:

````js
// good
var number = 0;
//Bad
var fakeNumber1 = "1";
var fakeNumber2 = "two";
var wut = undefined;
````
Lets start with addition. We want a function which takes 2 parameters, a and b, then returns the result of adding those together. Therefore, if a is 1 and b is 2 we want it to return 3.

If you look in ```test.js``` you'll see the basics of a Mocha test. The first ```describe``` function call is gonna group all our tests together, then the second is for a specific function or piece of functionality. Then the ```it``` function explains some basic functionality. Lets update ```test.js```.

````js
// The overall suite of tests are for our calculator
describe('Calculator', function() {
  // The function we want to test
  describe('add(a, b)', function() {
    // describe a test
    it('a + b should be add up to the right amount', function() {
      // Write our assertion
      expect(add(2, 3)).to.equal(5);
    });
  });
});
````

Ok so we wrote a test. The assertion we wrote was using the Chai assertion library. It lets write a test in quite a natural style. [Check out the Chai docs](http://chaijs.com/api/) for some examples of other assertions and styles that will suit your use case. Lets open ```index.html``` in a browser. You should see your test and its all red and failing and gross. No probs, we expect it to fail because we haven't written any JS yet. Lets open ```scripts.js``` and create an ```add``` function.

````js
function add(a, b) {
  return a + b;
}
````

Save that and refresh index.html in your browser. Yay! passing test. But that really is the most basic portion of our test. Lets add some more tests to make sure we can only accept, real numbers. Back in ```test.js``` add some tests like these:

````js
// The overall suite of tests are for our calculator
describe('Calculator', function() {
  // The function we want test
  describe('add(a, b)', function() {
    // describe a test
    it('a + b should be add up to the right amount', function() {
      expect(add(2, 3)).to.equal(5);
    });
    it('should throw an error for non numbers', function() {

        var notNumber = {num: 3};

        expect(add.bind(window, ['three', 'four'])).to.throw(Error);
        expect(add.bind(window, [3, 'four'])).to.throw(Error);
        expect(add.bind(window, ['3', 4])).to.throw(Error);
        expect(add.bind(window, [3, notNumber])).to.throw(Error);
      });
  });
});
````
We're using Chai assertions again, only this time its a bit more complicated because we want to expect our function to throw an error. We can't call the add function directly to get Chai/Mocha to run the test (like we did above). We need to (and sorry this gets technical skip over if you trust me and don't care) pass in the function and use bind to attach the context (what the function's ```this``` would be. In this case ```window``` as add is in the global namespace), and the arguments (the two things we want to add together). To test different scenarios, I'm passing ```add``` strings and an object. The text strings and object should be pretty easy to check. JS has a special function for checking if something is not a number: ```isNaN(number)```. Except this has some gotchas. The main one being that '1' will return false (*is* a number).

We need to check if its a string first. Something like:

````js
if (typeof arg === 'string' || arg instanceof String) {
    throw new Error('Its not a number').
}
````

If its not a string, we need to test if it is not a number in any other way:

````js
isNaN(arg)
// or this more robust one I found on StackOverflow
isNaN(parseFloat(arg)) && isFinite(arg);
````

Given we are going to need to test the arguments of all our basic calculator functions, we could write a function to reuse. Lets write a test first:

````js
// ...other tests up here ^
describe('isNumber(n)', function() {
  it('should return false if n is not a number', function() {
    assert.isFalse(isNumber(undefined));
    assert.isFalse(isNumber('string'));
  })
  it('should return true if n is a number', function() {
    assert.isTrue(isNumber(1));
  });
})
````

Check index.html and all tests bar the first ```add``` test should be failing. Lets make our ```isNumber``` function:

````js
function isNumber(n) {
  if (typeof n === 'string' || n instanceof String) {
    return false
  } else {
    //returns false if it isn't a number and true if it does
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
````
Now the only test left to fix is the second ```add``` test. Lets fix that by updating the ```add``` function:

````js
function add(a, b) {
  // check our arguments are numbers
  if (isNumber(a) && isNumber(b)) {
  // and if everything checks out
    return a + b;
  } else {
    // Not numbers? Throw toys out of param (geddit?!)
    throw new Error('Not a number');
  }
}
````
Tada! all passing. That feels nice. We can fill in all our other tests in the same way and write our subtract, multiply and divide functions to ake them all pass too. You can see what I did [over in the Github repo](https://github.com/matthewbeta/testing).

## Wrapping up

You could absolutely take this all further. I doubt my tests are very robust (for a pretend, hypothetical app). For instance what if we overload the functions (eg. ```add(1,2,3)```)?

You could also take a look at the other assertion methods Chai provides. See if [there's one](http://chaijs.com/api/assert/#isNumber-section) that might have been useful here...

You could add a UI and consider other types of testing, like integration or regression testing. [You can even do this for CSS](https://css-tricks.com/automatic-css-testing/)

As I've been learning about testing, I have been more considerate and deliberate writing code. For example I always make sure I plan my approach before I start, keep my functions simple, and make sure I understand what the functionality needs to be. If your job involves you building to user stories, I could see unit tests being really great to ensure the code meets all of the requirements. I will definitely be trying to get deeper down the testing rabbit hole.


<a href="http://twitter.com/matthewbeta" class="signature">@matthewbeta</a>
