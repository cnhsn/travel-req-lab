'use strict';


/**
 * Get all travel requests
 *
 * returns List
 **/
exports.travelRequestsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "requestName" : "requestName",
  "duration" : 0,
  "endDate" : "2000-01-23",
  "purpose" : "purpose",
  "accountName" : "accountName",
  "destination" : "destination",
  "totalExpenses" : 6.027456183070403,
  "employee" : "employee",
  "startDate" : "2000-01-23"
}, {
  "requestName" : "requestName",
  "duration" : 0,
  "endDate" : "2000-01-23",
  "purpose" : "purpose",
  "accountName" : "accountName",
  "destination" : "destination",
  "totalExpenses" : 6.027456183070403,
  "employee" : "employee",
  "startDate" : "2000-01-23"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new travel request
 *
 * body TravelRequest 
 * returns TravelRequest
 **/
exports.travelRequestsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "requestName" : "requestName",
  "duration" : 0,
  "endDate" : "2000-01-23",
  "purpose" : "purpose",
  "accountName" : "accountName",
  "destination" : "destination",
  "totalExpenses" : 6.027456183070403,
  "employee" : "employee",
  "startDate" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a travel request
 *
 * requestName String 
 * no response value expected for this operation
 **/
exports.travelRequestsRequestNameDELETE = function(requestName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a travel request by name
 *
 * requestName String 
 * returns TravelRequest
 **/
exports.travelRequestsRequestNameGET = function(requestName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "requestName" : "requestName",
  "duration" : 0,
  "endDate" : "2000-01-23",
  "purpose" : "purpose",
  "accountName" : "accountName",
  "destination" : "destination",
  "totalExpenses" : 6.027456183070403,
  "employee" : "employee",
  "startDate" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a travel request
 *
 * body TravelRequest  (optional)
 * requestName String 
 * no response value expected for this operation
 **/
exports.travelRequestsRequestNamePUT = function(body,requestName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

