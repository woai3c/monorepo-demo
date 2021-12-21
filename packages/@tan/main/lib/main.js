const add = require('@tan/component-a')
const multiply = require('@tan/component-b')
const _ = require('lodash')

console.log(add(100, 100) == _.add(100, 100))
console.log(multiply(100, 100) == _.multiply(100, 100))
console.log(add(100, 100) == _.multiply(100, 100))