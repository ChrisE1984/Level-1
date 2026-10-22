# Method Notes

## String Methods
- a method is a function that belongs to a value ()= you call it
- "   cam payne   ".trim() -> "cam payne". takes white space off both ends
- They hand back a new string, the original is unchanged.

## .includes()
- "Mario Kart 8 Deluxe".includes("Kart")- checks for a string and returns true or false, case sensitive (this would return true, "kart" would return false)

## .split()
- "complete, sealed".split(",") -> ["complete","sealed"]
- cuts at character and hands back array; empty string cuts each letter, "e" cuts at each e and separates and remove.

## input.value is always a string
- typeof offerBox.value -> 'string'
- + is the dangerous math symbol because it has two jobs

## Number and parseFloat
- Number("25") -> 25 = returns string as a number
- Number("25 bucks") -> NaN = all or nothing, if any non numbers returns NaN
- parseFloat("25 dollarydoos") -> 25= runs as long as the string has numbers and stops, if a non number is first returns NaN
- Use Number() unless expecting units of measurement

## The empty box
- Number("") is 0, not NaN
- an empty form field has a value of "".

## NaN
- Number (abc) = NaN
- NaN===NAN is false. it's th only value not equal to itself
- typeof NaN is 'number
- Use Number.isNAN(value) to check for it

## .toFixed()
- (24).toFixed(2) -> '24.00'. Two decimal places, rounds if needed
- It hands back a string not a number
-(24).toFixed(2)  + 1 returns '24.0001'
-Do the math first and .toFixed last

## forEach
- trades.forEach(function(trade)){...what we want the function to do...}

## .map()
- builds a new array from the old one
- trades.map(function (trade) {return "$" + trade.offer.toFixed(2)})
- the return is the point. forEach ignores it, map collects it.

## .filter and .find
- filter -> a new array of all the items where we returned true
- find -> the item itself. first match only.