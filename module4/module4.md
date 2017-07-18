#  Module 4: Layout and positioning   4.1 Introduction   Welcome to Module 4

# Welcome to Module 4
 Añadido a marcadores
Video: Welcome to Module 4
 

In this module, you will learn:

How to use padding and margin to position elements relative to each other and the window
How to use alignment to control how your content sits within its HTML element
How to use the float property to let multiple HTML elements share horizontal space
How to use relative positioning to design your page so that it maintains its layout regardless of screen size

#  Module 4: Layout and positioning   4.1 Introduction   Meet the box model

# Meet the box model
 Bookmark this page
Video: meet the Box Model
 
The Box Model

The Box Model is how Web browsers see individual HTML elements. Each element is comprised of 4 areas: the element, the padding, the border and the margin.

We discussed how to adjust the white space of these areas in Module 2.5, but in this module we will be discussing these areas as a method to position elements on a page.

anatomy of the box model

element - This is always contained within a square, even if it is a text block with jagged edges or a transparent image that isn't rectangular. Web browsers will impose a rectangle around the smallest area the HTML element's content actually occupies. Until now we've allowed the Web browser to determine the size of the element based solely on the content, but later in this section we'll learn how to adjust this sizing.
padding - This is the white space just outside the element's content. You can set each of the four sides independently, and you can set the value to 0. If you set the element's background color, that color will apply to the padding as well.
border - This is the area just outside the padding. Most HTML element's border default width is 0 and thus invisible. You can set each of the four sides independently. You can set a color, a pattern, even an image. This is a great way to add horizontal or vertical lines to an element on your page.
margin - This is the space surrounding an element, outside the border. Margins are the part of HTML elements that interact with one another. When two margins interact the larger of the two wins meaning the smaller margin "collapses", thus the actual space between two elements is the larger of the two, not the sum of the margins.

External resource:

Box model definition in the W3C's CSS2.1 specification: https://www.w3.org/TR/CSS2/box.html

# Module 4: Layout and positioning   4.2 The basics of layout   The alignment property

# The alignment property
 Bookmark this page
The alignment property

One of the simplest ways to align content is to use the direct text-align property. This can help you set the alignment of text or inline content within the context of their containing HTML element.

text-align

Documentation
```[css]
h1 {
   text-align: center;
}
```
If you have used a text editor before, like Microsoft Word, you've probably used the different text-align properties: left (default for English), right, center and justify. Text-align in CSS works the same way. Left, center and right specify how the lines of text within the text block are arranged. Justify sets the left and right edges of the text flush with the container's edges, which stretches the white space between words so that the overall block fits in a perfect rectangle.

See below for examples of what each of these values will do to your text:

Example of each text-align value options

Note that this property can only apply to block elements like paragraphs, divs and headers.

line-height

Documentation
```[css]
h1 {
   line-height: 1.2;

}
```
You may have noticed that the text-align property sets the content's alignment horizontally, but it leaves its vertical alignment unchanged. Text lives within a specified vertical space, in which the text is drawn by default in the middle of that vertical space. If you change the height of the containing HTML block, the text will remain at the top of the block. However, if you instead use the "line-height" property, then the block will grow and the text will vertically center within it.


... and the resulting output:

output from alignment example code

INTERNATIONAL CONSIDERATIONS

Please do not use text-align indiscriminately. If there's a possibility that your site will need to be translated into a language that uses the Arabic, Hebrew, or Thaana scripts (which read from right to left), it creates difficulties to have to change all the  right values to left and vice versa.

Most, but not yet all, major browsers support the values start and end. The start value aligns text with the side of the line where you start reading, whether that's on the left for English or the right for Urdu. They also make more sense for use with vertical text, such as for Japanese and Mongolian. Once these values are widely supported by browsers, they will often be a better choice than right and left, since there's no need to change the values for pages as the language changes.

Also, note that CSS will in the future provide better support for justification in languages where words are not separated by spaces, such as Chinese and Thai, or languages where words are separated by special marks, such as in Amharic. For more information about different approaches to justification, see this article.

Once you finish this course, look out for these and other international features of CSS as you explore its features further.

# Module 4: Layout and positioning   4.2 The basics of layout   Element width and height

# Element width and height
 
Element width and height

Until now we've let the browser decide how big the element is, but you can actually adjust its width and height manually.

Width and height

Documentation: the width property and the height property
```[css]
p {
   width: 30%;
}
```
You can use pixel values for both width and height, but you'll most often want to use percentages to set these so that your elements grow and shrink as appropriate based on the screen size.

For example, if we set the width of a paragraph to 30% as you resize the browser window, you'll see how that element dynamically resizes. That's because when you use percentages, the size is computed based on the element's "containing block", or the element that contains the one you're styling. If your element is just within the body tag, the width is computed based on the relationship with the screen width.

Things are a bit more complicated with using a percentage to set an element's height. This is because typically the body's height is not specified, so if you use a percentage the size won't adjust.

min-width, max-width, min-height, max-height

Documentation: max and min width and max and min height

Setting width and height with percentages will save you work because your design will automatically optimize for the user's screen size. However, some elements can't grow and shrink as dynamically as text can.

For example, images will get "pixelated" if you let them grow too large, and they can look really distorted. Thankfully, you can set max and min width and heights. This way, you can set a range for your image to grow and shrink where you know it will still look good. 
```[css]
img {
   width: 100%;
   max-width: 1024px;
}
```
When you view the above example, the paragraphs will dynamically resize based on the size of your window. For example, here is what the code looks like in a wide window:

dynamic width and height wide example

However, here is the exact same code viewed in a much narrower window:

dynamic width and high output narrow example

Here, you can see that the elements have resized accordingly, but have hit the limits of their min and max constraints. This is why using percentages for width and height are so important, it helps you write code that works for all screen sizes. 

# Module 4: Layout and positioning   4.2 The basics of layout   Padding and margin

# Positioning with padding and margin

Whenever possible, it is ideal to position your elements by adjusting their padding and margins. Sometimes this isn't enough to get the element exactly where you'd like it to be, so we'll learn more tools later in this module. Regardless, you'll almost always want some padding and margin around your element so it's best to adjust these before progressing onto more complicated positioning methods.

Once you have set the width for your element, then you can set margins as a way to position your element relative to others. One of the most commonly used margin settings is "auto". That is because if you set an element's left and right margin to auto it will be dynamically centered within its containing block.
```[css]
div {
   width: 50%;
   margin-left: auto;
   margin-right: auto;
}
```
However, note that this only works for block HTML elements like paragraphs, divs and headers. If you want to use this to position an inline element, such as img or a, you will need to tell CSS to treat them as block elements by setting display: block;
```[css]
img {
   display: block;
   width: 200px;
   margin-left: auto;
   margin-right: auto;
}
```

Here is what the above code looks like in a wide window:

centered elements with margin wide example

Now, if you resize the window, the elements remain centered no matter what. Here is the above code in a narrow window:

dynamically centered elements narrow example

External resources:

A W3C CSS tip: CSS centering things, on different ways to center your content.
A "CSS Tricks" article on What you should know about collapsing margins