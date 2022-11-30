# Development

### Link to Deployed Website
If you used the stencil code, this is [https://anxiousfish745.github.io/react/](https://anxiousfish745.github.io/react/)

### Goal and Value of the Application
This application is a simple bakery shopping site, where the users can filter the items by their types(pastry, cake, etc.) and dietary restrictions(gluten-free, but-free, etc.), while sorting by the price(lowest - higest or vice versa), and see the most popular ones(the defalut display).

**At least 2 filtering categories:**
1. filter by type
2. filter by dietary restrictions


**At least 1 sorting feature**  

The users can sort by the price and go back to the default display by popularity

**Combinations of sorting/filtering work together**  

Tested.

**Ways to add and remove items**  

The users can add the item to the cart, and can also delete the items or reset the cart

**Way to reset the items**  

The users can reset the cart; the user can also go back to the original display(defalut) by selecting "all" and "popularity".

**An aggregator Component showing the items and aggregated value**  

The Cart.js aggregater Component is used to display the corresponding items, and the aggregated value in the cart will change according to the amount and price in the cart. 

**Uses Components for the items**  

It is the bakeryItem.js that I used to display the info of each bakery item.

**Uses props to pass item data to the Components**  

See BakeryItem.js and APP.js

**Uses state for the list of items, and the UI is reactive to the state**  

When adding/removing from the cart, and sorting/filtering the displayed items, the UI would respond accordingly. 

### Usability Principles Considered
**Layout:**  

I divided the interface into header(the logo), the vertical navbar at the left (filtering and sorting function), the main displayed items in the middle, and the cart at the right with a fixed position when scrolling. I think it would keep the page tidy while providing the user with the functions they need. 

**visibility:**  

It is easy for the users to know that filter/ sorting method they are currently at, so I used pill to indicate the current status. I also fixed the cart so that even the users scrolled down, they would still easily to figure out what is inside their cart.

**Efficiency:**  

I think the page is quite straightforward, and the users should easily navigate and use the functions.

### Organization of Components
As mentioned, I have only used one seperate component, which is BakeryItem. 

### How Data is Passed Down Through Components
I used props to pass the needed data. 

### How the User Triggers State Changes
In the navbar, when the user clicked the corresponsing key, the"onSelect={(selectedKey) => selectXXX" will be triggered with the keys, and it operates the function at the top of the code, like "selectFilterType", "selectFilterRestriction" and "selectSort" , which uses the corresponsing matchesXXX's returned value for the state changes.
