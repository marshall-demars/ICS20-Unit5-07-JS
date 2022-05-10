// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-07-JS/sw.js", {
    scope: "/ICS20-Unit5-07-JS/",
  })
}

// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-06-JS/sw.js", {
    scope: "/ICS20-Unit5-06-JS/",
  })
}

'use strict'

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var firstInteger = document.getElementById("integer-one").value

    // process and output
  var total = 0;
  
  for (let counter = 0; counter <= firstInteger; counter ++) {
     total += counter;
  }
  document.getElementById("loop").innerHTML = "The number is " + (total)
}