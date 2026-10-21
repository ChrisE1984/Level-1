console.log("The Truck is Open!");
const truckName = "Isaiah's Taco Truck";
const price = 3.5;
console.log(price);

let tacosSoldToday = 0;
tacosSoldToday++;
console.log(tacosSoldToday);

function sum(num1, num2) {
  return `The sum is ${num1 + num2}`;
}

const menuItems = [
  "carne asada",
  "al pastor",
  "birria (when we have it)",
  "just the meat",
];

console.log(menuItems.length); //lists how many in array
console.log(menuItems[3]); /*lists all or use array number [] to list an item, 
entering a number outside the array does not cause the program to error, but "undefined" is still shown on the page
*/

const carneAsada ={
    name: "Carne Asada",
    price:"3.50",
    spicy: false,
    toppings: ["onion", "cilantro", "salsa"]

};

console.log(carneAsada.toppings);

const isaiahOrder ={
    name: "just the meat",
    price: 3.00,
    spicy: false,
    toppings:[]
};

console.log(isaiahOrder.toppings.length);

for(let i = 1; i < 6; i++)
    {
    console.log(i);
}

for(let i=0; i<menuItems.length; i++){
    console.log(menuItems[i])
}

function describe(dish){
    let line =dish.name + " is $" +dish.price;
    if(dish.spicy){
        line = line + "(bring a napkin)";
    }
    return line;
}

const menu = [
  { name: "Carne asada", price: 3.50, spicy: false, toppings: ["onion", "cilantro", "salsa"] },
  { name: "Al pastor", price: 3.75, spicy: true, toppings: ["onion", "cilantro", "pineapple"] },
  { name: "Birria, when we have it", price: 4.50, spicy: false, toppings: ["onion", "cilantro", "consome"] },
  { name: "Just the meat", price: 3.00, spicy: false, toppings: [] }
];

for(let i=0; i < menu.length; i++)
    {
    console.log(describe (menu[i]));
}

console.log(document);
const heading = document.getElementById("truck-name")
console.log(heading);

heading.textContent = "Isaiah's Taco Truck (now with Horchata)"

const tagline = document.getElementById("tagline");
console.log(tagline);

tagline.textContent = "Parked on Weber Ave, cash only";

const statusLine = document.getElementById("status-line");

statusLine.textContent = "Sold out";
statusLine.classList.add("Closed");
statusLine.classList.remove("Closed");

const crewList = document.getElementById("crew-list");
const firstItem = document.createElement("li")
console.log(firstItem);
firstItem.textContent = "Dave";

crewList.appendChild(firstItem);

const crew = ["Big Kevin", "Darnell"];

for (let i=0; i< crew.length; i++){
    const item = document.createElement("li");
    item.textContent = crew[i];
    crewList.appendChild(item);
}