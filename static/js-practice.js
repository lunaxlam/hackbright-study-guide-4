'use strict';

/** ********************
 Make an Event Handler
********************* */

// Your Code Here

/** ***********************
Practice Your Times Tables
************************ */

// Your Code Here

/** **************
An Agreeable Form
*************** */

// Your Code Here

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

// Your Code Here

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
