// 1) There are 3 different point values in basketball:
    // Free Throws = 1 point
    // Mid-range = 2 points
    // Three pointers = 3 points

// Write a function called totalBasketballScore that is defined with 3 parameters: 
    // First parameter: freeThrows 
    // Second parameter: midRange
    // Third parameter: threePointers
// The function will calculate and return the score of the basketball game when given the number of free throws, mid-range, and three pointers made.
// Check to make sure that all arguments passed in are of data type number
    // If an argument is not of data type number, a message should be logged to the console informing the user that all entries must be numbers.

// For Example:

// totalBasektballScore(2,3,4) should return a score of 20.

const totalBasketballScore = (freeThrows, midRange, threePointers) => {
    if (typeof freeThrows === 'number' && typeof midRange === 'number' && typeof threePointers === 'number') {
        return (freeThrows * 1) + (midRange * 2) + (threePointers * 3); 
    } else {
        return 'please enter proper value'
    }
}; 

console.log(totalBasketballScore(2,3,4)) //output: 20; 

// 2) Below are the items available for sale at a local computer store:

    // computer = $500
    // mouse = $10
    // tablet = $250
    // case = $25
    // router = $100

// Write a function called itemPrice that is defined with 1 parameter: item
// The function will use a switch statement to return the price of the item passed in.
// Check to make sure that all arguments passed in are of data type string
    // If an argument is not of data type string, a message should be logged to the console informing the user that all entries must be of type string.
// If the item passed into the function is not in the store, then a statement informing the user of this should be logged to the console.

// For Example:

// itemPrice(“case”) should return the string $25.

const itemPrice = (item) => {
    let price = 0;
    for (let i = 0; i < item.length; i++) {
      if (typeof item[i] != 'string'){
          return 'Entries must be a string'
      } else {
          switch (item[i]) {
              case "computer":
                // console.log(`${item[i]} is for $500`);
                price += 500;
                break;
              case "mouse":
                // console.log(`${item[i]} is for $10`);
                price += 10;
                break;
              case "tablet":
                // console.log(`${item[i]} is for $250`);
                price += 250;
                break;
              case "case":
                // console.log("case is for $25");
                price += 25;
                break;
              case "router":
                // console.log("router is for $100");
                price +=100; 
                break;
              default:
                console.log("Invalid item");
                break;
            }
      }
    } return price; 
  };
  
  console.log(itemPrice(['case'])); //output: 25; 
  
// 3) In this challenge you will create a random restaurant generator.

//   Add the following restaurants to an array named restaurants.
    //   Applebees
    //   Panera Bread
    //   Popeyes
    //   Chopt
    //   Chick-fil-A
    //   Cheesecake Factory
    //   Five Guys
//   Write a function called randomRestaurant that is defined with 1 parameter: numOfRestaurants.
//   The function will add the specified amount of restaurant names passed in (numOfRestaurants) from the restaurants array to another array called randomRestaurantList. It is ok if a restaurant appears in your list more than once.
//   Return the randomRestaurantList array.
  
//   For Example:
  
//   randomRestaurant(3) should return a randomRestaurantList array with the names of 3 random from the restaurants array.
  
const restaurants = [ 'Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys'];

const randomRestaurant = numOfRestaurants => {
    let randomRestaurant=[]; 
    if (typeof numOfRestaurants == 'number') {
        for (let i = 0; i < numOfRestaurants; i++) {
            randomRestaurant.push(restaurants[Math.floor(Math.random()*7)]);
        }
    } else {
            return 'Enter a number'
        }
        return randomRestaurant; 
    };

console.log(randomRestaurant(3)); //output: names of 3 random from the restaurants array.

// 4) A leap year is a year containing one additional day added to keep the calendar year synchronized with the astronomical or seasonal year. Because seasons and astronomical events do not repeat in a whole number of days, calendars that have the same number of days in each year drift over time with respect to the event that the year is supposed to track. By inserting an additional day or month into the year, the drift can be corrected. A year that is not a leap year is called a common year.

// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial (years divisible by 100) years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

// Write a function named isLeapYear with a single parameter named year, that returns true if the year input is a leap year, and false if the year input is a common year.
// For Example:
//  When isLeapYear(2000) is called, it should return the value true.

const isLeapYear = (year) => {
    for (let i = 0; i < year; i++) {
      if (year % 400 === 0 && year % 4 === 0) {
        return true
      } else {
        return false; 
      }
    }
  };
  
  console.log(isLeapYear(2000));

