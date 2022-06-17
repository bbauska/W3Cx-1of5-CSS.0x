<h1>Module 1: Getting started with CSS</h1>

<h3>Definitions</h3>
<p>
CSS, or Cascading Style Sheets, is a style sheet language used to describe the way an HTML or XML document should look to a user. CSS is where you specifiy the color, size, spacing, font and other visual aspects of the content that you create in your markup language document.

Most often you will see CSS used alongside HTML to describe the way a Web page looks and feels. You can have a Web page without CSS, but it would be very difficult to make it look the way you want with just HTML. This is why almost every Web page is a combination of HTML and CSS.
</p>
<h3>CSS • /si-ɛs-ɛs/ • noun </h3>
<p>
Stands for "Cascading Style Sheets". A style sheet language for describing how to display an HTML document.
</p>
Sample CSS document:

```[css]
body {
   background-color: #d0e4fe;
}
h1 {
   color: orange;
   text-align: center;
}
p {
   font-family: "Times New Roman";
   font-size: 20px;
}
```

<h3>HTML • /eɪʧ-ti-ɛm-ɛl/ • noun </h3>
<p>
Stands for "HyperText Markup Language", and it is the primary document format on the Web. It is a standardized system for tagging content on a web page so that a web browser knows how to present it properly to the viewer. It is a standardized way to describe a document's structure and the roles of the different parts of that document.
</p>
Sample HTML document:
```[html5] 
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My HTML page</title>
    </head>
    <body>
        <p> This is an HTML document </p>
    </body>
</html>
```

<h3>Web page • /wɛb peɪʤ/ • noun </h3>
<p>
A hypertext document connected to the World Wide Web.
synonyms: website, home page, landing page
Internet

A global system of computer networks that connect to one another so that billions of different devices all over the world can share data. The internet is a collection of smaller networks that all combined create one large, all-inclusive global network.
</p>
<h3>World Wide Web</h3>
<p>
A collection of documents linked together by hypertext links, addressed using Uniform Resource Locators (URLs) accessible on the Internet. The World Wide Web is an application of the internet. 
abbreviated as WWW or "the Web".
</p>
<h3>Web browser • /wɛb ˈbraʊzər/ • noun </h3>
<p>
A software application for retrieving, presenting and traversing information resources on the World Wide Web.
examples: edge, chrome, Firefox, internet explorer, safari, opera

<h3>HTTP</h3>
<p>
Stands for "Hypertext Transfer Protocol". It is a protocol managed by the W3C to dictate the manner in which Web pages share data on the World Wide Web. You might recognize this from the start of many Web addresses.
</p>
<h3>HTTPS</h3>
<p>
Stands for "Hypertext Transfer Protocol Secure". It  is the secure version of HTTP, the protocol over which data is sent between your browser and the Web site that you are connected to. It means all communications between your browser and the Web site are encrypted. Some examples of sites that use HTTPS include the W3C and Microsoft Web sites: https://www.microsoft.com/ - https://www.w3.org/
</p>

<h2>Module 1: Getting started with CSS   1.2 What is CSS?</h2>

<h2?Activity 1.2 - The Web before CSS</h2>
<p>
Now it's your turn to do some exploration! For this activity, your job is to find examples of Web sites before and after CSS.

A great place to start is at archive.org (aka, the "WayBack machine") which stores copies of web pages throughout history. You can search for some of your favorite websites and see if they have stored copies older than 1996. You should find that any Web page made before 1996 will look very different than Web sites we typically see today. When you find a real retro gem, please share it in this week's discussion (see below).

Here's one of my personal favorite vintage sites (which is still live!): http://www.warnerbros.com/archive/spacejam/movie/jam.htm
</p>
<h2>Module 1: Getting started with CSS   1.3 Why CSS is important   Separating content from presentation</h2>

<h2>Separating content from presentation</h2>
<p>
Up until now, we have been discussing CSS's role within a Web site as the "presentation" component, but what is that and why is it so important?

From the history of CSS, we learned why CSS came about, but the short answer is simply because HTML was never designed to describe the way a Web page was supposed to look. When we use HTML for what it was intended to do, describe content, it leaves space for CSS to properly control a page's visuals. This makes it very easy to update or add content without having to even touch the style. 
</p>
<h3>Some benefits of CSS:</h3>
<p>
CSS has a host of specialized tools to give you powerful control over the look and feel of your Web site, much more powerful than the tools provided by HTML.

Designers can style many HTML pages with a single CSS document for a consistent look and feel across an entire Web page and less code to maintain.

Separation of content and presentation makes Web site maintenance much simpler as you can address updates in isolation.

Over time more and more devices have become internet-capable, and now there are so many different orientations in which your user can view your content. With CSS, you can specifically cater the style to each device to ensure an optimal experience.

Some users have specific presentation needs based on personal or technological limitations or preferences. Separating content from presentation allows these users the option to control how they view content.

Before CSS visual elements were almost always achieved with static images, which can have a big affect on network performance. CSS provides an optimized way to style your page so it can load complex visuals quickly. 

<h4>External resources:</h4>

<h3>CSS design principles</h3>
<p>
Effective Use of Style Sheets (updated regularly since 1997!)
Repurposing of content
</p>

<h2>Module 1: Getting started with CSS   1.3 Why CSS is important</h2>

<h3>Meet CSS Zen Garden</h3>
<p>
These videos will introduce you to a web project titled "CSS Zen Garden". You can explore the project here: http://www.csszengarden.com/

Here is a bit about the project in their own words:

"CSS Zen Garden is a demonstration of what can be accomplished through CSS-based design. Littering a dark and dreary road lay the past relics of browser-specific tags, incompatible DOMs, broken CSS support, and abandoned browsers. We must clear the mind of the past. Web enlightenment has been achieved thanks to the tireless efforts of folk like the W3C, WASP, and the major browser creators. There is a continuing need to show the power of CSS. The Zen Garden aims to excite, inspire, and encourage participation".
- Dave Shea, Creator of CSS Zen Garden

<h3>Meet CSS Zen Garden</h3>

<h3>View source and browser tools</h3>
<p>
In the above demo, you saw me using what is called the "developer tool" within my Edge Web browser to inspect and real-time change the style of a page's CSS. You can actually right click on any site and choose to look at the code that creates it. This feature exists in both Chrome and Firefox. Here is what I see when I right click on a Web page in my browser.

Right click menu in Edge Web browser

As you can see, in this right click menu, there are two options: "Inspect element" and "View source". When you select view source, you can see the HTML and CSS powering that Web page. Here is what it looks like when I view the source of W3C's Web site:

Edge Web browser with view source window open

You can see a window that popped up from the bottom with all the HTML code for that site. Other Web browsers might pop this up in a separate window. 

You can also get more specific and look at individual HTML elements with the "Inspect element" option. Here is what it looks like in Edge when I inspect a specific title:

Edge inspect element view highlighting a specific title

As you can see, not only is the element highlighted on the page, but this also highlights the HTML code and shows you the CSS for that element on the right-hand side. In the video above, you can see me use this view to change the CSS and HTML real-time, which can be a very convenient way to play around with your designs.

As you work in your own sites you might want to use both of these features of your browser to understand what is happening in your own code, or in Web pages you find on the internet.
</p>
<h2>Module 1: Getting started with CSS   1.3 Why CSS is important   Activity 1.3 and discussion</h2>

<h2>Activity 1.3 - CSS Zen Garden critique</h2>
<p>
Now that you’ve gotten a good idea of what CSS Zen Garden is, take a closer look. Go to http://www.csszengarden.com/203/ and look through the different CSS Zen Garden designs for inspiration. Which is your favorite design? Pick one design and share your critiques with the discussion. 
http://www.csszengarden.com/221/
</p>
The following is the CSS for Zen Garden
```css
/* css Zen Garden submission 214 - 'Verde Moderna', by Dave Shea, http://www.mezzoblue.com/ */
/* css released under Creative Commons License - http://creativecommons.org/licenses/by-nc-sa/1.0/  */
/* All associated graphics copyright 2013, Dave Shea */
/*
/* IMPORTANT */
/* This design is not a template. You may not reproduce it elsewhere without the
/* designer's written permission. However, feel free to study the CSS and use
/* techniques you learn from it elsewhere. */
/*
	Verde Moderna by Dave Shea

	10 Years. http://mezzoblue.com/archives/2013/05/07/10_years/


	We've come a long way. Here it is, the first of what will hopefully be
	many more modern designs in the CSS Zen Garden.

	With this design, I've attempted to hit as many of today's front end
	buzzwords as possible. It's a mobile-first, responsive layout that was
	designed in the browser from start to finish. CSS3 is used liberally
	with fallbacks where necessary.

	All photos are mine, and were taken in the Japanese Garden at the
	Huntington Botanical Garden in Southern California.

	Other production notes:

	* Vector assets are used where appropriate. The logo is an SVG file,
	  the icons are a custom web font built with icomoon.io

	* The column effect is a CSS gradient instead of a background image.
	  By forcing a sharp transition at 66%, we can simulate columns. The way
	  Chrome rounds gradient values causes the columns to jump unexpectedly when
      	  the window is resized, which means that using an equal padding or width
	  value doesn't align the way you think it would. That forced a bit of
          extra contortion to get the header and body columns perfectly lined up.

	* Various sidebar H3s were hidden with display:none; This was a design
	  decision. Their inclusion seemed extraneous. Same goes for HTML/CSS
          download links at low screen sizes, presumably that screen is a phone
          and can't download the files anyway.

	* The sidebar positioning style is (necessarily) quite a mess on wider
          windows, especially the resource list. When flexbox is a bit closer to
          usable, maybe I'll take another crack at fixing that up.

	* A more logical place for the design list to appear in the mobile
	  version would have been up closer to the top, possibly disclosed with a
          menu toggle of some kind. Not something that's easily doable with CSS
          alone, if you don't want to rely on hovers.

	* The medium- and low-res versions don't differ that much; I may still push
	  the tablet layout a bit further, it doesn't quite feel right.

	* Parallax scrolling isn't doable without Javascript so you won't find it
	  in this design. I was able to use a bit of multiple background-position
	  trickery to create a slightly more interesting scrolling effect.

*/

@import url(http://fonts.googleapis.com/css?family=Julius+Sans+One|Libre+Baskerville:400,400italic);

/* base CSS */
* {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}

html, body {
  padding: 0;
  margin: 0;
}
body {
  color: #325050;
  background: #fff;
  font-family: 'Libre Baskerville', sans-serif;
  font-size: 70%;
}

a {
  color: #0d8ba1;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  text-decoration: none;
}
  a:visited {
    color: #1a5952;
  }
  a:hover, a:focus {
    color: #0599c2;
    text-decoration: underline;
  }
abbr {
  border: none;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.01em;
}
header {
  height: 230px;
  padding: 20px 0 70px 0;

  background: #2d6360 50% 0 url(huntington.jpg) no-repeat; /* old IE fallback */

  background-attachment: fixed, fixed, fixed, scroll;
  background-image: url(contours.png), url(noise.png), url(gridlines.png), url(huntington.jpg);
  background-position: 0 0, 0 0, -5px -25px, 0 50%;
  background-repeat: repeat, repeat, repeat, no-repeat;
  background-size: auto, auto, auto, cover;
  text-align: center;
}


h1, h2 {
  padding: 0 10%;
  margin: 0;
  color: #fff;
  font-weight: normal;
}
h1 {
  padding-top: 0;
  padding-bottom: 5px;
  border-bottom: none;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 3.2em;
  text-transform: uppercase;
}
h1::before {
  display: inline-block;
  position: relative;
  top: 20px;
  content: "";
  width: 80px;
  height: 80px;
  margin: -20px 20px 0 0;
  background: url(enso.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 0.6;
}
h2 {
  display: block;
  padding-top: 5px;
  padding-bottom: 30px;
  border-top: none;
  color: rgba(255,255,255,0.6);
  font-size: 1.6em;
  font-style: italic;
}
h2::before {
  content: " ";
  padding: 50px;
}
h3 {
  margin: 2em 0 0 0;
  color: #2e484c;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 1.8em;
  font-weight: normal;
  text-transform: uppercase;
}
p {
  margin: 0.75em 0;
  line-height: 2;
}


.page-wrapper {
  position: relative;
}
.summary, .preamble {
  width: 80%;
  margin: 0 auto;
}
.supporting h3, .supporting p {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.summary {
  padding-top: 2em;
}


/* intro block links -- download HTML/CSS */
.intro a, .intro a:visited {
  position: relative;
  display: inline-block;
  padding: 1px 10px 1px 32px;
  margin: -1px -10px -1px -6px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;

  color: #809b7e;
  font-family: 'Julius Sans One', sans-serif;
  text-transform: uppercase;
}
.intro a:hover, .intro a:focus {
  z-index: 2;
  color: #fff;
  background: #3d8a9f;
  text-decoration: none;
}

.intro a::before {
  display: inline-block;
  position: absolute;
  top: 6px;
  left: 8px;
  padding: 2px;
  color: #a9b995;
  background: #d9e1cd;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -o-border-radius: 2px;

  content: "D";
  font-size: 16px;
  text-indent: 0;


  /* icomoon.io defaults */
  font-family: 'verdemoderna';
  speak: none;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}
  .intro a:hover::before {
    color: #fff;
    background: #357d93;
  }


/* coloured cutoff */
div.participation, div.benefits {
  background-attachment: scroll, scroll, fixed;
  background-color: rgba(138,188,159,0.5);
  background-image: url(contours-opaque.png), url(gridlines-opaque.png), url(bamboo.png);
  background-repeat: repeat, repeat, no-repeat;
  background-size: auto, auto, cover;
}
/* extra padding at the cutoffs */
div.participation {
  padding: 3em 0;
  margin-top: 3em;
}
div.benefits {
  padding-bottom: 3em;
  margin-bottom: 3em;
}
div.participation h3, div.benefits h3 {
  margin-top: 0;
}
div.participation p, div.benefits p {
  margin-bottom: 0;
}


/* sidebar base styles */
.sidebar {
  background: #edf4f0;
}
.sidebar h3 {
  display: none;
}
.sidebar a {
  color: #607476;
  text-decoration: none;
}
  .sidebar a:hover, .sidebar a:focus {
    color: #49968e;
  }
.sidebar ul {
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: hidden;
}

/* shared sidebar styling */
.design-selection ul, .zen-resources ul {
  margin: 0;
}
.design-selection li, .zen-resources li {
  float: left;
  width: 50%;
  padding: 1.5em 10%;
  border-top: solid 1px #d9e3dc;
  color: #c0cac3;
  font-style: italic;
}
  .design-selection li:hover, .design-selection li:focus {
    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.5)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%); /* IE10+ */
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%); /* W3C */
  }
.design-selection li:nth-child(2n+1), .zen-resources li:nth-child(2n+1) {
  clear: left;
}
.design-selection .design-name, .zen-resources a, li.viewall a {
  display: block;
  margin-bottom: 0.25em;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 1.2em;
  font-style: normal;
  text-transform: uppercase;
}


/* select a design */
.design-selection h3 {
  display: none;
}
.design-selection .designer-name {
  color: #616857;
  font-size: 0.9em;
  font-style: normal;
}



/* archives navigation */
.design-archives {
  position: absolute;
  top: 160px;
  right: 0;
  width: 100%;
  height: 70px;
  background: rgba(255,255,255,0.2);
}
.design-archives h3 {
  display: none;
}
.design-archives ul {
  margin: 0;
}
.design-archives li {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  border: none;
  list-style: none;
}
.design-archives li.viewall {
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 71px;
  line-height: 50px;
}
.previous, .next {
  left: 0;
  z-index: 3;
}
.next {
  left: auto;
  right: 0;
}
.design-archives a, .design-archives a:visited {
  color: rgba(255, 255, 255, 0.65);
}
.design-archives a:hover, .design-archives a:focus {
  color: #fff;
}
.design-archives .previous a, .design-archives .next a {
  display: block;
  overflow: hidden;
  width: 70px;
  height: 70px;
  text-indent: 100%;
  text-decoration: none;
  white-space: nowrap;
}
.design-archives .viewall a {
  z-index: 2;
  width: 100%;
  min-height: 70px;
  padding: 12px 0 0 0;
  text-align: center;
}
.design-archives a::before {
  position: absolute;
  left: 0;
  width: 70px;
  height: 70px;
  text-align: center;
  text-indent: 0;
  font-size: 44px;

  /* icomoon.io defaults */
  font-family: 'verdemoderna';
  speak: none;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 70px;
  -webkit-font-smoothing: antialiased;
}
.design-archives .viewall a:hover, .design-archives .viewall a:focus, .design-archives .viewall a:active,
.design-archives a:hover::before, .design-archives a:focus::before, .design-archives a:active::before {
  background-color: rgba(255,255,255,0.25);
  box-shadow: inset 0 0 10px rgba(255,255,255,0.1);
}
.design-archives .previous a::before {
  content: "<";
}
.design-archives .next a::before {
  content: ">";
}



/* resources */
.zen-resources {
  overflow: hidden;
  background-color: rgba(138,188,159,0.5);
  background-image: url(bamboo.png);
}
.zen-resources li {
  border-top: solid 1px #a0b9ad;
  font-style: normal;
}
.zen-resources li:last-child {
  float: none;
  width: auto;
  border-bottom: solid 1px #a0b9ad;
}


/* busting out the credits block */
.requirements p:nth-child(5) {
  padding-bottom: 2em;
}
.supporting .requirements {
  float: none;
  clear: both;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}
.supporting .requirements a {
  text-decoration: none;
}
  .supporting .requirements a:hover, .supporting .requirements a:focus {
    text-decoration: underline;
  }
.supporting .requirements h3 {
  padding-top: 0;
}
.requirements p:last-child {
  width: auto;
  padding: 1em 12%;
  margin: 0;
  color: rgba(255, 255, 255, 0.4);
  background: #3e5d67;

  background-attachment: fixed, fixed, fixed, scroll;
  background-image: url(contours.png), url(gridlines.png), url(noise.png), url(koi.jpg);
  background-position: 0 0, -5px -25px, 0 0, 0 50%;
  background-repeat: repeat, repeat, repeat, no-repeat;
  background-size: auto, auto, auto, cover;

  font-size: 2em;
  font-style: italic;
  text-align: center;
}
.requirements p:last-child a {
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
}



/* main footer */
footer {
  clear: both;
  padding: 3em 10%;
  color: #fff;
  background: #134347;
  text-align: center;
}
footer a {
  display: inline-block;
  overflow: hidden;
  width: 40px;
  height: 40px;
  padding: 40px 0 0 0;
  margin: 0 0.5em;
  position: relative;
  color: rgba(255, 255, 255, 0.5);
  -webkit-transition: color 0.25s ease-out, box-shadow 0.25s ease-out;
  -moz-transition: color 0.25s ease-out, box-shadow 0.25s ease-out;
  transition: color 0.25s ease-out, box-shadow 0.25s ease-out;
}
footer a:hover, footer a:focus {
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
footer a:visited {
  color: rgba(255, 255, 255, 0.2);
}
footer a::before {
  display: block;
  position: absolute;
  top: 3px;
  left: 0;
  overflow: visible;
  font-size: 36px;
  text-indent: 0;

  /* icomoon.io defaults */
  font-family: 'verdemoderna';
  speak: none;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
  footer a.zen-validate-html::before {content: "5";}
  footer a.zen-validate-html:hover::before, footer a.zen-validate-html:focus::before {content: "%";}
  footer a.zen-validate-css::before {content: "3";}
  footer a.zen-validate-css:hover::before, footer a.zen-validate-css:focus::before {content: "#";}
  footer a.zen-license::before {content: "c";}
  footer a.zen-license:hover::before, footer a.zen-license:focus::before {content: "C";}
  footer a.zen-accessibility::before {content: "a";}
  footer a.zen-accessibility:hover::before, footer a.zen-accessibility:focus::before {content: "A";}
  footer a.zen-github::before {content: "g";}
  footer a.zen-github:hover::before, footer a.zen-github:focus::before {content: "G";}



/* low-res CSS */
@media only screen and (max-width: 600px) {

  /* these download links make approximately zero sense
     on a phone without a user-accessible file system. */
  .summary p:last-child {
    display: none;
  }

  /* type adjustments */
  h1 {
    margin-top: 30px;
    font-size: 2.5em;
  }
  h1::before {
    width: 50px;
    height: 50px;
  }
  h2::before {
    padding: 25px;
  }

  .requirements p:last-child {
    padding: 1em 6%;
  }

}


@media only screen and (max-width: 500px) {

  header {
    height: 250px;
    padding-top: 0;
  }
  h1 {
    margin: 0;
  }
  h1::before {
    display: block;
    left: 50%;
    width: 50px;
    height: 50px;
    margin: 0 0 0 -25px;
    padding: 0 0 35px 0;
  }
  h2::before {
    padding: 0;
  }

  .design-archives {
    top: 180px;
  }
  .design-selection li, .zen-resources li {
    padding: 1em 5%;
  }

  footer a {
    margin: 0 0.5em;
  }

}

@media only screen and (max-width: 320px) {

    /* adjusting the site header type size */
    h1 {
        font-size: 2em;
    }
    h2 {
        font-size: 1.3em;
    }

    /* linearizing the design list on small screens */
    .design-selection li, .zen-resources li {
        float: none;
        width: 100%;
    }

    /* adjusting footer type, icons */
    .requirements p:last-child {
        font-size: 1.4em;
    }
    footer {
        padding: 2em 5%;
    }
    footer a {
        width: 35px;
        height: 35px;
        padding: 35px 0 0 0;
        margin: 0 0.5em;
    }
    footer a::before {
        font-size: 32px;
    }

}


/* mid-res CSS */
@media only screen and (max-width: 1132px) {
  header {
    border-top: solid 10px rgba(19, 67, 71, 0.9);
  }
  p, li {
    font-size: 1.2em;
  }
}

@media only screen and (min-width: 500px) and (max-width: 1150px) {

  .requirements p:last-child {
    padding-bottom: 2em;
    padding-top: 2em;
  }

  /* page footer */
  footer {
    padding: 3em 0;
  }
  footer a {
    width: 52px;
    height: 52px;
    padding: 52px 0 0 0;
    margin: 0 2em;
  }
  footer a::before {
    font-size: 48px;
  }
}


/* high-res CSS */
@media only screen and (min-width: 1132px) {
  body {
    background: #ffffff;
    background: -moz-linear-gradient(left,  #ffffff 0%, #ffffff 66%, #e5ede8 66%, #e5ede8 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,#ffffff), color-stop(66%,#ffffff), color-stop(66%,#e5ede8), color-stop(100%,#e5ede8));
    background: -webkit-linear-gradient(left,  #ffffff 0%,#ffffff 66%,#e5ede8 66%,#e5ede8 100%);
    background: -o-linear-gradient(left,  #ffffff 0%,#ffffff 66%,#e5ede8 66%,#e5ede8 100%);
    background: -ms-linear-gradient(left,  #ffffff 0%,#ffffff 66%,#e5ede8 66%,#e5ede8 100%);
    background: linear-gradient(to right,  #ffffff 0%,#ffffff 66%,#e5ede8 66%,#e5ede8 100%);
    font-size: 100%;
  }
  header {
    width: 100%;
    height: 310px;
    padding: 0 10%;
    border-top: solid 12px rgba(19, 67, 71, 0.8);
    box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.3);
    vertical-align: middle;
    text-align: left;
  }

  header::before, header::after {
    display: block;
    content: " ";
    position: absolute;
    z-index: 3;
    top: 9px;
    left: 0;
    width: 100%;
    height: 7px;
    background: rgba(0, 39, 43, 0.2);
  }
  header::after {
    top: 306px;
    height: 4px;
    background: rgba(0, 39, 43, 0.075);
  }
  h1 {
    display: inline-block;
    position: relative;
    margin: 15px 0 0 0;
    padding: 60px 0 5px 0;
  }
  h1::before {
    display: inline-block;
    position: relative;
    top: 65px;
    content: "";
    width: 125px;
    height: 125px;
    margin: -65px 40px 0 0;
    background: url(enso.svg);
    background-size: 100%;
    opacity: 0.6;

    -webkit-animation: koan 36000s infinite alternate;
    -moz-animation: koan 36000s infinite alternate;
    animation: koan 36000s infinite alternate;
  }
  h2 {
    display: block;
    margin: 0;
    padding: 5px 0 60px 70px;
  }
  p {
    font-size: 1em;
  }

  /* main layout blocks */
  nav, .supporting {
    display: inline;
  }
  .summary, .preamble, .supporting div, .requirements h3, .requirements p {
    float: left;
    clear: left;
    width: 66%;
    padding: 1em 5% 1em 10%;
  }
  .explanation h3, .explanation p,
  .participation h3, .participation p,
  .benefits h3, .benefits p {
    width: 100%;
  }
  .summary {
    padding-top: 3.25em;
  }
  .requirements h3, .requirements p {
    margin: 0;
    padding-bottom: 0;
  }


  /* coloured cutoff */
  div.participation, div.benefits {
    width: 100%;
    padding-left: 10%;
    padding-right: 38%;
    margin: 0;
  }
  /* extra padding at the cutoffs */
  div.participation, div.requirements {
    padding-top: 4em;
  }
  div.explanation, div.benefits {
    padding-bottom: 4em;
  }
  .requirements p:nth-child(5) {
    padding-bottom: 4em;
  }


  .intro h3, .supporting h3 {
    margin-top: 0;
  }
  .intro p:last-child, .supporting p:last-child {
    margin-bottom: 0;
  }


  .requirements p:last-child {
    padding-bottom: 3em;
    padding-top: 3em;
    box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.3);
  }


  /* sidebar styling */
  .design-selection, .zen-resources {
    position: absolute;
    top: 360px;
    right: 0;
    width: 33.3%;
    padding: 0 0 20px 0;
    margin: 0;
    overflow: visible;
    background: transparent;
  }
  .sidebar li {
    float: none;
    width: auto;
    padding-left: 0;
    padding-right: 0;
    margin: 0 29.4% 0 14.7%; /* 0 10% 0 5% of total width */
  }


  /* select a design */
  .design-selection li:first-child {
    border-top: 0;
  }
  .design-selection li:hover, .design-selection li:focus {
    background: none;
  }

  /* archives navigation */
  .design-archives {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 310px;

    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0) 66%, rgba(0,0,0,0.2) 66%, rgba(33,84,95,0.3) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(66%,rgba(255,255,255,0)), color-stop(66%,rgba(33,84,95,0.3)), color-stop(100%,rgba(33,84,95,0))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 66%,rgba(33,84,95,0.3) 66%,rgba(33,84,95,0) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 66%,rgba(33,84,95,0.3) 66%,rgba(33,84,95,0) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 66%,rgba(33,84,95,0.3) 66%,rgba(33,84,95,0) 100%); /* IE10+ */
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 66%,rgba(33,84,95,0.3) 66%,rgba(33,84,95,0) 100%); /* W3C */
  }
  .design-archives nav {
    display: block;
    position: absolute;
    right: 1%;
    top: 120px;
    width: 32%;
  }
  .design-archives li {
    margin: 0;
  }
  .design-archives .viewall a, .design-archives a::before {
    background: rgba(255,255,255,0.1);
    text-decoration: none;
  }

  .design-archives .viewall a:hover, .design-archives a:hover::before {
    background-color: rgba(255,255,255,0.2);
  }


  /* resources navigation */
  .zen-resources {
    position: absolute;
    top: 1310px;
    right: 0;
    width: 34%;
    background: transparent;
  }
  .zen-resources h3 {
    display: none;
  }
  .zen-resources ul {
    width: 55.9%;
    margin: 0 29.4% 0 14.7%;
  }
  .zen-resources li {
    padding: 1.5em 0 1.25em 0;
    margin: 0;
  }

}


@media only screen and (min-width: 1150px) {
  /* page footer */
  footer a {
    width: 76px;
    height: 76px;
    padding: 76px 0 0 0;
    margin: 0 3em;
  }
  footer a::before {
    font-size: 72px;
  }
}

/*
  Okay, look, I feel rather awful about this. But due to source order it
  seems like the only way to pull off the separated sidebar. Perhaps
  flexbox is the way forward here, once the syntax settles down a bit.
*/
@media only screen and (min-width: 1120px) {.zen-resources {top: 1490px;}}
@media only screen and (min-width: 1240px) {.zen-resources {top: 1460px;}}
@media only screen and (min-width: 1260px) {.zen-resources {top: 1420px;}}
@media only screen and (min-width: 1320px) {.zen-resources {top: 1390px;}}
@media only screen and (min-width: 1370px) {.zen-resources {top: 1360px;}}
@media only screen and (min-width: 1520px) {.zen-resources {top: 1330px;}}
@media only screen and (min-width: 1812px) {.zen-resources {top: 1300px;}}
@media only screen and (min-width: 1848px) {.zen-resources {top: 1270px;}}
@media only screen and (min-width: 2015px) {.zen-resources {top: 1240px;}}
@media only screen and (min-width: 2115px) {.zen-resources {top: 1210px;}}
@media only screen and (min-width: 2400px) {/* you're kidding, right? */}


@-webkit-keyframes koan {
    from {
      -webkit-transform: scale(1);
    opacity: 1;
    }
    to {
      -webkit-transform: scale(3);
    opacity: 0;
    }
}
@-moz-keyframes koan {
    from {
      -moz-transform: scale(1);
    opacity: 1;
    }
    to {
      -moz-transform: scale(3);
    opacity: 0;
    }
}
@keyframes koan {
    from {
      transform: scale(1);
    opacity: 1;
    }
    to {
      transform: scale(3);
    opacity: 0;
    }
}

/* high-DPI adjustments */
@media
    (min--moz-device-pixel-ratio: 1.5),
    (-o-min-device-pixel-ratio: 3 / 2),
    (-webkit-min-device-pixel-ratio: 1.5),
    (min-device-pixel-ratio: 1.5),
    (min-resolution: 1.5dppx) {

    header {
        background-image: url(contours@2x.png), url(noise.png), url(gridlines.png), url(huntington.jpg);
        background-size: 50% auto, auto, auto, cover;
    }

    .requirements p:last-child {
        background-image: url(contours@2x.png), url(gridlines.png), url(noise.png), url(koi.jpg);
        background-size: 50% auto, auto, auto, cover;
    }

    /*
        This shouldn't be necessary, but it is. Due to differences in how
        Chrome calculates gradients and % widths / padding, the archives
        spill out of the visual container at some screen sizes.
    */
    .design-archives nav {
        right: 3%;
        width: 29%;
    }
}

/* icon fonts */
@font-face {
	font-family: 'verdemoderna';
	src:url('verdemoderna.eot');
	src:url('verdemoderna.eot?#iefix') format('embedded-opentype'),
		url('verdemoderna.woff') format('woff'),
		url('verdemoderna.ttf') format('truetype'),
		url('verdemoderna.svg#verdemoderna') format('svg');
	font-weight: normal;
	font-style: normal;
}                                                                                                               /* 1000 lines?! */
```
For your chosen design, please answer the following questions:

What made this design stand out to you?
What do you like best about this design?
What is one thing you don't like about this design?

<h2>Module 1: Getting started with CSS   1.4 Project - your first CSS   "Hello beautiful world"</h2>

<h4>"Hello beautiful world" Intro</h4>

Here is the HTML part:
```[html5]
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>
            Hello Beautiful World
        </p>
    </body>
</html>
```
... and the CSS file (style.css) is below:
```[CSS]
      p {
        color: blue;
        font-family:Helvetica;
      }
... and here is the "output":
```

<h4>Blue Helvetica text "Hello Beautiful World" in a browser window</h4>

<h2>Module 1: Getting started with CSS   1.4 Project - your first CSS   Comments</h2>

<h4>Comments</h4>
<p>
As you write your CSS, you might end up with a pretty large document that can be hard to manage, or you might find yourself working on a team and having to read CSS someone else has written. In these cases, it helps to leave "notes" for the humans that read the file. 

There is a way to leave notes that the Web browser will ignore when it is reading your CSS code, they're called "comments". In fact, leaving comments in your code is considered a best practice by developers and is a habit we highly recommend you develop now. 

To add comments to your CSS file, you need to surround any text you want the computer to ignore with a set of slashes and asterisks like so:
</p>
```[css]
/* those two symbols start my comment block
 I can have more comment text here
and the following two symbols end my comment */
```
<p>
As you can see, you can put as much text between the open and close symbols as you need, you can even have multiple lines. If you are working in an editor like Visual Studio code, you will notice that when you turn text into a comment, it turns green to indicate that the computer ignores that code.

Image of Visual Studio Code Comments

Generally, it is a good idea to put a comment at the top of each CSS rule, or at the very least at the top of sets of rules that apply to a single category or section of your Web page. 
</p>

<h2>Module 1: Getting started with CSS   1.4 Project - your first CSS</h2>

<h2>Module 1 project - Hello your world</h2>
<p>
It's finally time to write your own CSS! Open your code editor of choice and save the following code as a new HTML document.

Remember: to do this, you will need to give it a .html file extension when you are saving it. For example, you could call it index.html
</p>
```[html]
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
   </head>
   <body>
      <p>
         Hello Beautiful World
      </p>
   </body>
</html>
```
<p>
Once you have your HTML document view it in a Web browser. It should look like this:

An image of Hello Beautiful World in a web browser with black text

Now it’s time to add some CSS. Here is the CSS we wrote in the "Hello Beautiful World" demo. Make a new file with this css and save it with a .css file extension. For example, you can call it styles.css
</p>
```[css]
p {
    color: blue;
}
```
<p>
This won’t change the look of your HTML until you link the two files with this HTML tag.

To do this:

remember it should be placed in the header, that is between the <head> and </head> tags in the HTML file. 
place the HTML and CSS files in the same folder on your computer
add the linking code to the HTML header (that means after the <head> tag and before the </head> tag). If your css is called "styles.css", here is what it would look like:
</p>
```[html]
<link rel="stylesheet" href="styles.css">
```
<p>
Now change the HTML and CSS files so that it says “Hello <your name>, welcome to my first CSS Web page” in your favorite color! Here’s what mine looks like:

An image of Hello Kasey in green text

HINT: Is your favorite color not working? Not all color names are recognized by CSS. Sometimes the best way is to use HEX. We'll talk in more detail about colors in the next module, but here is a list of colors you can use: Extended color keywords
</p>

<h2>Module 1: Getting started with CSS   1.5 Conclusion and exercises   Module learnings</h2>

<h3>After this module, you should feel comfortable…</h3>
<ul>
<li>Explaining what CSS is, and why is it important,</li>
<li>Opening HTML and CSS files in your chosen code editor,</li>
<li>Using browser tools to inspect the source of a Web page you wrote.</li>
</ul>
   
<h3>In next module, you will:</h3>
<li>Review the basics of HTML,</li>
<li>Learn the anatomy of a CSS "rule",</li>
<li>Discover the concept of a property,</li>
<li>Get to know selectors and how you can directly attach them to HTML tags,</li>
<li>Finally, for your module project, you'll get a get a chance to build the CSS for an HTML page from scratch.</li>
</ul>
