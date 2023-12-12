'use strict';

var utils = require('../utils/writer.js');
var TravelRequest = require('../service/TravelRequestService');

module.exports.travelRequestsGET = function travelRequestsGET (req, res, next) {
  TravelRequest.travelRequestsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.travelRequestsPOST = function travelRequestsPOST (req, res, next, body) {
  TravelRequest.travelRequestsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.travelRequestsRequestNameDELETE = function travelRequestsRequestNameDELETE (req, res, next, requestName) {
  TravelRequest.travelRequestsRequestNameDELETE(requestName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.travelRequestsRequestNameGET = function travelRequestsRequestNameGET (req, res, next, requestName) {
  TravelRequest.travelRequestsRequestNameGET(requestName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.travelRequestsRequestNamePUT = function travelRequestsRequestNamePUT (req, res, next, body, requestName) {
  TravelRequest.travelRequestsRequestNamePUT(body, requestName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
