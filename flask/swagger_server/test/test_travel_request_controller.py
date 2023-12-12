# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.travel_request import TravelRequest  # noqa: E501
from swagger_server.test import BaseTestCase


class TestTravelRequestController(BaseTestCase):
    """TravelRequestController integration test stubs"""

    def test_travel_requests_get(self):
        """Test case for travel_requests_get

        Get all travel requests
        """
        response = self.client.open(
            '//travelRequests',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_travel_requests_post(self):
        """Test case for travel_requests_post

        Create a new travel request
        """
        body = TravelRequest()
        response = self.client.open(
            '//travelRequests',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_travel_requests_request_name_delete(self):
        """Test case for travel_requests_request_name_delete

        Delete a travel request
        """
        response = self.client.open(
            '//travelRequests/{requestName}'.format(request_name='request_name_example'),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_travel_requests_request_name_get(self):
        """Test case for travel_requests_request_name_get

        Get a travel request by name
        """
        response = self.client.open(
            '//travelRequests/{requestName}'.format(request_name='request_name_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_travel_requests_request_name_put(self):
        """Test case for travel_requests_request_name_put

        Update a travel request
        """
        body = TravelRequest()
        response = self.client.open(
            '//travelRequests/{requestName}'.format(request_name='request_name_example'),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
