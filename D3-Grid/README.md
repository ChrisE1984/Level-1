# Grid Notes

## display: grid
- `display:grid` goes on the parent. direct children become grid items.
- `grid-template-columns: 1fr 1fr 1fr;` = 3 equal columns 
- `fr` = fraction, a chare of the space that is left
- can mix units i.e - `200px 1fr 1fr` first item is always 200px wide. the rest take up the fraction of the remaining space

## repeat ()
- `repeat (3, 1fr)` = 1fr 1fr 1fr
- First number = how many, second = what to repeat

## row heights
- `grid-template-row: 150px 150px` = sets 2 rows height to 150px.
- any additional rows will set their height based on text size
- `grid-auto-row: 150px` = sets every row to 150px.

## Spanning
- `grid-column: span 2;` takes up 2 columns.
- `grid-row: span 2;` takes up 2 rows.
- In a grid, we say how many columns or rows, not pixels

## Grid Lines
- Grid lines are numbered starting at 1. Three columns = 4 lines.
- `grid-column:1/3;` = start at line 1 and end at line 3.