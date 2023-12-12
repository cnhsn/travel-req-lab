# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.account import Account  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAccountController(BaseTestCase):
    """AccountController integration test stubs"""

    def test_accounts_account_name_delete(self):
        """Test case for accounts_account_name_delete

        Delete an account
        """
        response = self.client.open(
            '//accounts/{accountName}'.format(account_name='account_name_example'),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_accounts_account_name_get(self):
        """Test case for accounts_account_name_get

        Get an account
        """
        response = self.client.open(
            '//accounts/{accountName}'.format(account_name='account_name_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_accounts_account_name_put(self):
        """Test case for accounts_account_name_put

        Update an account
        """
        body = Account()
        response = self.client.open(
            '//accounts/{accountName}'.format(account_name='account_name_example'),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_accounts_get(self):
        """Test case for accounts_get

        Get all accounts
        """
        response = self.client.open(
            '//accounts',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_accounts_post(self):
        """Test case for accounts_post

        Create a new account
        """
        body = Account()
        response = self.client.open(
            '//accounts',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
