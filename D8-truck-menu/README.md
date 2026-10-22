## Loosely typed
- The TYPE belongs to the VALUE, not to the variable.
- let thing = 5; thing = "five"; thing = true;  <- all legal
- JS does have types. The variable just isn't one of them.

## typeof
- typeof someValue  tells me what kind of thing it is.
- It answers with a STRING: 'number', 'string', 'boolean', 'object', 'undefined'

## The rule underneath everything
- When two things don't match, JS CONVERTS one instead of complaining.
- It never tells me it converted.

## + does two jobs
- Two numbers: addition.
- A string anywhere in it: gluing (concatenation).
- 4 + "7" is "47". Then "47" + 2 is "472". It never goes back to numbers.

## Falsy values (the whole list)
- false, 0, "", null, undefined, NaN
- EVERYTHING else is truthy.
- "0" is truthy (it's a string with something in it).
- [] is truthy (it's an object). Check array.length, not the array.

## == vs ===
- == CONVERTS before comparing. "" == 0 is true. "5" == 5 is true.
- === does not convert. Same type AND same value, or false.
Jot something down

## Change the data,the page follows
- The array is the only place the menu exists
- Change the menu in one place, it changes everywhere.

Use the dashboard to open or close the truck, set today's location, and add menu items. Select an item's name to mark it sold out, or use **Sold one** to update the total sold.

# Redraw Notes

## Rebuilding a list
- appendChild APPENDS. replaceChildren() with no parameter empties.

## querySelector and  querySelectorAll
- The selectors are the same as CSS style sheet: ids, classes and element tags.
- querySelector("li") - the first one only
- querySelectorAll("li") - all of them
- can call them on elements not just the document: menuList.querySelectorAll("li")
