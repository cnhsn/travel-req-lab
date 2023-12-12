'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.accountsAccountNameDELETE = function accountsAccountNameDELETE (req, res, next, accountName) {
  Account.accountsAccountNameDELETE(accountName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountNameGET = function accountsAccountNameGET (req, res, next, accountName) {
  Account.accountsAccountNameGET(accountName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountNamePUT = function accountsAccountNamePUT (req, res, next, body, accountName) {
  Account.accountsAccountNamePUT(body, accountName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsGET = function accountsGET (req, res, next) {
  Account.accountsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsPOST = function accountsPOST (req, res, next, body) {
  Account.accountsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
