'use strict';


/**
 * Delete an account
 *
 * accountName String 
 * no response value expected for this operation
 **/
exports.accountsAccountNameDELETE = function(accountName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an account
 *
 * accountName String 
 * returns Account
 **/
exports.accountsAccountNameGET = function(accountName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accountStatus" : "accountStatus",
  "accountName" : "accountName",
  "accountType" : "accountType",
  "accountNumber" : "accountNumber"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an account
 *
 * body Account  (optional)
 * accountName String 
 * no response value expected for this operation
 **/
exports.accountsAccountNamePUT = function(body,accountName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all accounts
 *
 * returns List
 **/
exports.accountsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "accountStatus" : "accountStatus",
  "accountName" : "accountName",
  "accountType" : "accountType",
  "accountNumber" : "accountNumber"
}, {
  "accountStatus" : "accountStatus",
  "accountName" : "accountName",
  "accountType" : "accountType",
  "accountNumber" : "accountNumber"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new account
 *
 * body Account 
 * no response value expected for this operation
 **/
exports.accountsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

