# CSS Notes

## What is CSS?
- CSS stands for **Cascading Style Sheets**

## Connecting CSS
- `<link rel="stylesheet" href="styles.css">` goes in the `<head>`
- One CSS file can style every page that is linked to it.

## A CSS rule
- Shape: `selector` `{property; value;}`

## Selectors
- `p` = element selector. Styles every p element
- `#intro` = is selector. Styles one element. `<p id="intro">`
- `.card` = class selector. Styles everything with that class. `<div class="card">`

## Div
- `<div>` = a box with no meaning. used for grouping and styling
- If a meaningful tag fits (`<section>`, `<header>` ) use that instead.

## When rules fight
- more specific rule wins: id > class > element
- if tied, the lowest rule wins 
- `.card p` = any p inside a .card( the space means inside)

## Text
- `font-family` - a list of fonts. The browser uses the first one it has access to. always end with serif or sans-serif.
- `font-size` - sets how big the text is in `px`
- `font-weight` - sets how thick the text is
- `test-align` - left, center, or right
- `text-decoration`- `none` removes underline from links
- Text styles in the body get passed down to everything inside of the body

## Box Model
- Every element is a box: Content -> padding -> border -> margin.
- Padding = space inside the border and uses background color
- Border = the outline.
- Margin = the space outside of the border and pushes other boxes away.

## Block vs. Inline
- Block ( `div`, `p`, `h1`, `section`): Starts a new line and takes the full width
- Inline ( ``a`, `strong`, `span`): sits in the line of text. ignores width and height styles

# Flexbox Notes

## Display Flex
- `display: flex` goes on the parent
- The parent becomes a flex container.
- The children become flex items.
- Only direct children. Things inside the children aren't affected.

## The two axes
- Main axis- the direction the items go (default is horizontal left to right.)
- Cross axis- other direction, up and down by default.
- `justify-content` works on the main axis
- `align items` works on the cross axis.

## justify-content and gap
- `space-between`= first item at the start, last tiem at the end, even space between the spaces
- `gap` minimum space between flex items 

## align items
- Default is `stretch`. That's why flex items are all the same height
- center- lines up their middles

## flex-direction
- `row` - main access goes lef to right
- column = main axis goes top to bottoms.
- Chancing the direction flips what justify-content and align-items do.

## Flex-wrap
- Default is `nowrap`. Flex items shrink instead of moving to a new line


