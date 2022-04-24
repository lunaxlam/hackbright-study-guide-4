'use strict';

/** ********************
 Make an Event Handler
********************* */

// find the DOM element to serve as the event listener
const alertBtn = document.querySelector('#popup-alert-button');

// create the event listener, 'click' will trigger and define an alert function
alertBtn.addEventListener('click', () => alert('You successfully completed Challenge #1!'));

/** ***********************
Practice Your Times Tables
************************ */

// find the DOM element to serve as the event listener
const multiplyForm = document.querySelector('#multiplying-form');

// define the callback function
function multiplyNumber(evt) {
  // prevent the form default behavior; stop redirect to '/nope'
  evt.preventDefault();

  // get the requested number
  const requestedNum = Number(multiplyForm.querySelector('option').value);
  // get the max value
  const upToNum = Number(multiplyForm.querySelector('#max').value);

  // store the products in an array
  const multiples = [];

  // intialize the operand
  let i = 1

  // while we iterate up-to-and-including the max value
  while (i <= upToNum) {
    // add the product to the array
    multiples.push(requestedNum * i);
    // increment the iterating variable
    i += 1;
  }

  // console log the array
  console.log(multiples);

}

// activate the event listener
multiplyForm.addEventListener('submit', multiplyNumber);

/** **************
An Agreeable Form
*************** */

// find the DOM element to serve as the event listener
const agreeableForm = document.querySelector('#agreeable-form');

// define the callback function
function agreeWithUser(evt) {
  // prevent the form default behavior
  evt.preventDefault();

  // get the form value to manipulate
  const food = document.querySelector('#favorite-food-input').value;

  // set the DOM element attribute
  document.querySelector('#agreeable-text').innerHTML = `"I like ${food}, too."`

}

// activate the event listener
agreeableForm.addEventListener('submit', agreeWithUser);

/** ****************
Five colored primes
***************** */

function calculatePrime(num, maxNum) {
  // initialize an empty array to store prime numbers
  const PRIME_NUMBERS = []

  // calculate prime numbers up to 11
  while (num <= maxNum) {

    // if the number is 2 or the number is not evenly divisible by 2
    if (num === 2 || num % 2 != 0) {
      // then check if the number is 3 or if the number is not evenly divisible by 3
      if (num === 3 || num % 3 != 0) {
        // if these conditions are met then add to the array
        PRIME_NUMBERS.push(num);
      }
    }
    // increment j so we do not have an endless loop! 
    num += 1;
  }

  return PRIME_NUMBERS
}


// define the callback function
function makePrime(evt) {

  // initialize the array of prime colors
  const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

  // call the helper function and store the array it returns
  const PRIME_NUMBERS = calculatePrime(2, 11);

  // find the DOM element to mount circles
  const container = document.querySelector('#prime-circle-area');

  // initialize an index variable to iterate through the arrays
  let i = 0; 

  for (const COLOR of PRIME_COLORS) {
    // create a div container for each element
    container.insertAdjacentHTML('beforeend', 
      `<div class="prime-circle" 
      style="background-color: ${PRIME_COLORS[i]}">
      ${PRIME_NUMBERS[i]}
      </div>`);
    i += 1;
  }
}

// find the DOM element to serve as the event listener
const primeBtn = document.querySelector('#make-prime-circles');

// activate the event listener 
primeBtn.addEventListener('click', makePrime);

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

// Your Code Here

// find the DOM element and create an eventListener
document.querySelector('#puppy-form').addEventListener('submit', (evt) => {
  // prevent the form default behavior
  evt.preventDefault();

  // get user input from the form, this data gets passed through the AJAX response
  // since the server cannot directly access form data inputted by the user
  // since this all happens on the browser-side; just like in a regular GET request
  // on ln 36 of the server.py, the request.args.get() accesses the form data through the query string
  const puppycount = document.querySelector('#num-puppies').value;
  console.log(puppycount)

  // construct query string, looks like ?puppycount=1
  const queryString = new URLSearchParams({puppycount}).toString()

  // contact the server at the following route and include the form data as a query string
  // this is a regular GET request
  fetch(`/puppies.json?${queryString}`)
    // wait for the Response object and get the object as JSON
    .then(response => response.json())
    // take the JSON object and do something
    .then(responseJSON => {
      // call the function and pass the JSON object
      showPuppies(responseJSON);
    })
});


