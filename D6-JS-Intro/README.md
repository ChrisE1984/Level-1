# JavaScript

## What is JavaScript
- HTML is structures, CSS is style, and JavaScript is behavior (functionality).
- It runs in the browser, after the page has loaded.
- It is not Java. That is a different language.

## Connection JavaScript to a Page
- JS goes in it's own file, like script.js
- the page needs `<script scr=script.js></script>

## Variables
- no type keyword. `const` or `let` then name.
- `const` = the value does not get reassigned. `let` it does.

## Erros
- An error stops the file. Lines below the error are never run.

## Functions
- `function name(parameter) {}` no access modifier, no return type, no parameter types
- Nothing checks what a function returns, or whether it returns at all (i.e remember the return or the code will run without showing it.)

## Objects
- {name: value, name1: value} (like adding objects in an API) curly braces, name, colon, value, comma.
- like a C# object without needing to write a class.

## The DOM
- DOM = Document Object Model.
- index.html is the instructions, the DOM is what the browser BUILT from those instructions.
- Every element is an object.

## getElementById and textContent
- document is the whole page as an object.
- document.getElementById("some-id") gets one element by it's id attribute
- .textContent read the text inside. Assigning to it changes text on the page.

## .classList
- element.classList.add("closed") puts a class on an element.
- element.classList.remove("closed") takes it off.

## createElement and appendChild
- document.createElement("li") makes an element. It is not on the page yet.
- parent.appendChild(child) puts it on the page as the last child.