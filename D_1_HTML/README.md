# HTML

+ To start with a template, enter `!` and enter to automatically fill.

## What is HTML?
+ HTML stands for *"Hypertext Markup Language"*
+ Hypertext- text that can link to other text. That's what links are.
+ Markup- labels around the content that tell the browser what each piece is.
+ HTML is a markup language, not a programming language. It describes content, it does not make decisions or do math.

## Tags vs. Elements
+ Tag:<h1> opens, </h1> closes. The */* makes it a closing tag
+ Element: The opening tag + the content + the closing tag together

## Headings
+ <h1> through <h6>, most important to least important
+ Headings are about ranking, not size. Don't use a heading just to make the text big.

## Nesting
+ Elements can go inside other elements. Outer = parent, inner = child.
+ Close the inner one before the outer one. Elements never overlap.

## Alt Text
+ *Alt* describes the image. It shows if the image can't load and screen readers read it out loud.

## Landmarks
+ `<header>`, `<main>`, `<footer>` say what a section of the page is. 

## Links and Paths
+ `<a href="..">` makes a link. `href` is where is goes
+ Paths start from the file I'm in
    - `contact.html` = a file right next to me
    - `pages/contact.html` = goes into pages folder
    - `../index.html` = goes up one folder

## Forms and Inputs
+ `<label for="">` connects to `<input id="x">`. Clicking the label jumps to the input
+ the `type` attribute changes what an input does= text, email, number, radio, and checkbox.