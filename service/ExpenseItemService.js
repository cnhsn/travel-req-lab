'use strict';


/**
 * Get all expense items
 *
 * returns List
 **/
exports.expenseItemsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "requestName" : "requestName",
  "expenseType" : "expenseType",
  "amount" : 0.8008281904610115,
  "name" : "name"
}, {
  "date" : "2000-01-23",
  "requestName" : "requestName",
  "expenseType" : "expenseType",
  "amount" : 0.8008281904610115,
  "name" : "name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an expense item
 *
 * name String 
 * no response value expected for this operation
 **/
exports.expenseItemsNameDELETE = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an expense item by name
 *
 * name String 
 * returns ExpenseItem
 **/
exports.expenseItemsNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "requestName" : "requestName",
  "expenseType" : "expenseType",
  "amount" : 0.8008281904610115,
  "name" : "name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an expense item
 *
 * body ExpenseItem  (optional)
 * name String 
 * no response value expected for this operation
 **/
exports.expenseItemsNamePUT = function(body,name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new expense item
 *
 * body ExpenseItem 
 * returns ExpenseItem
 **/
exports.expenseItemsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "requestName" : "requestName",
  "expenseType" : "expenseType",
  "amount" : 0.8008281904610115,
  "name" : "name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

