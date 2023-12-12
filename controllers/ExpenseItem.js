'use strict';

var utils = require('../utils/writer.js');
var ExpenseItem = require('../service/ExpenseItemService');

module.exports.expenseItemsGET = function expenseItemsGET (req, res, next) {
  ExpenseItem.expenseItemsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.expenseItemsNameDELETE = function expenseItemsNameDELETE (req, res, next, name) {
  ExpenseItem.expenseItemsNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.expenseItemsNameGET = function expenseItemsNameGET (req, res, next, name) {
  ExpenseItem.expenseItemsNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.expenseItemsNamePUT = function expenseItemsNamePUT (req, res, next, body, name) {
  ExpenseItem.expenseItemsNamePUT(body, name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.expenseItemsPOST = function expenseItemsPOST (req, res, next, body) {
  ExpenseItem.expenseItemsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
