// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Emma Janani
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '2048 + 328 = ' + (2048 + 328)
  document.getElementById('subtract-math').innerHTML = '480 - 267 =  ' + (480 - 267)
  document.getElementById('multiply-math').innerHTML = '37 + 84 * 6 = ' + (37 + 84 * 6)
  document.getElementById('divide-math').innerHTML = '(27 / 3) + 348 = ' + ((27 / 3) + 348)
  document.getElementById('exponent-math').innerHTML = '36 + 15 ** 3 = ' + (36 + 15 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(87025) = ' + Math.sqrt(87025)
}

