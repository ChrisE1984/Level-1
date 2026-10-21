# Event Notes

## Why the Script tag is at the bottom
- the browser reads the file t to b and builds the elements as it goes.
- a script in the `<head>` runs before the body exists.

## Events and listeners
- an event is something that happens, a click, a keypress, a resize.
- element.addEventListener("click", someFunction)

## The parentheses mistake
- addEventListener("click", openTruck) <-- passing the function
- addEventListener("click", openTruck()) <-- passing the result of running th function i.e. it runs at the start so clicking th button no longer functions.

## Anonymous functions
- a function with no name written where it gets handed over.
- openButton.addEventListener("click", function(){...})

## listeners on elements I made
- an element with createElement can have a listener.
- add the listener before appending the element.

## A click hits the parents too
- clicking a button inside an li runs the buttons listener and the li's listener
- Deepest element first, then outward through it's parents

## Other even types
- "input"= every keystroke, value already updated
- "change" = once, when they leave the box
- "keydown" = key going down before the input updates, value is one behind
- event.key = tells us which key was pressed.