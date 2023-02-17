///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalFujiAcres = 0
let totalGalaAcres = 0
let totalPinkAcres = 0


for(i = 0; i < fujiAcres.length; i++){
    totalFujiAcres += fujiAcres[i]
}
for(i = 0; i < galaAcres.length; i++){
    totalGalaAcres += galaAcres[i]
}
for(i = 0; i < pinkAcres.length; i++){
    totalPinkAcres += pinkAcres[i]
}

let totalAcres = totalFujiAcres + totalGalaAcres + totalPinkAcres

console.log(totalAcres)

//I did three separate for loops, one for each array of acres. This allows me to get a total for each individual array (which is set beforehand to 0) and then use that information to get a total for all three arrays. This will allow me to manipulate data for each individual array as well as all three combined. 


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7

console.log(averageDailyAcres)

//I could have done what I did in problem one and gotten the averages for each individual array and then added them together to get the same answer. If i had done this it would allow me to change the average if one type of apple was not harvested on all seven days. However, to keep it simple, and because all three types of apples were harvested on all seven days, I could divide the totalAcres by 7 days to get my average.


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while(acresLeft > 0){
    acresLeft = acresLeft - 7;
    days = days + 1;
}

console.log(days)

// This problem took me a little bit longer to do because I wasn't sure how have the while loop do multiple things within the same loop. I had to Google it. Within the while loop the acresLeft variable is going down by seven and for each time that it goes down by seven a day is added to show the total number of days needed to completely harvest all of the acres.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons =[]
let pinkTons =[]

for(i=0; i<fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
}
for(i=0; i<galaAcres.length; i++){
    galaTons.push(galaAcres[i] * 6.5)
}
for(i=0; i<pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * 6.5)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)


//For this problem I did a for loop to loop through the old arrays and insert the number * 6.5 into the empty arrays I created for the total number of apples picked. Something that would have been easier would be to take my total apple acres that I calculated in problem 1 and multiplied that by 6.5 like I did in this comment. However, this would not create a new array, simply give me the total tons
/*
let fujiTons = totalFujiAcres * 6.5
let galaTons = totalGalaAcres * 6.5
let pinkTons = totalPinkAcres * 6.5
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)
*/ 

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(i=0; i<fujiTons.length; i++){
    fujiPounds += fujiTons[i] * 2000
}
console.log(fujiPounds)

for(i=0; i<galaTons.length; i++){
    galaPounds += galaTons[i] * 2000
}
console.log(galaPounds)

for(i=0; i<pinkTons.length; i++){
    pinkPounds += pinkTons[i] * 2000
}
console.log(pinkPounds)


// For this problem I started with all my variables at zero. I then did a for loop going through each tons array to get a total tonnage for each type of apple multiplying each number by 2000


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = ((fujiPrice * fujiPounds) / 100)
let galaProfit = ((galaPrice * galaPounds) / 100)
let pinkProfit = ((pinkPrice * pinkPounds) / 100)

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

//In order to find the total profit I needed to multiply the price per pound by the total pounds of apples gather. I than divided that number by 100 in order to get the profit in dollars instead of cents because no one uses change anymore. Dollars makes much more sense. If the price was wanted in cents, all I would have to do is not divide it by 100.

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)

//This one is very straightforward. I simply added up all of the individual apple profits and made that equal to the total profit.