# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.expense_item import ExpenseItem  # noqa: E501
from swagger_server.test import BaseTestCase


class TestExpenseItemController(BaseTestCase):
    """ExpenseItemController integration test stubs"""

    def test_expense_items_get(self):
        """Test case for expense_items_get

        Get all expense items
        """
        response = self.client.open(
            '//expenseItems',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_expense_items_name_delete(self):
        """Test case for expense_items_name_delete

        Delete an expense item
        """
        response = self.client.open(
            '//expenseItems/{name}'.format(name='name_example'),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_expense_items_name_get(self):
        """Test case for expense_items_name_get

        Get an expense item by name
        """
        response = self.client.open(
            '//expenseItems/{name}'.format(name='name_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_expense_items_name_put(self):
        """Test case for expense_items_name_put

        Update an expense item
        """
        body = ExpenseItem()
        response = self.client.open(
            '//expenseItems/{name}'.format(name='name_example'),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_expense_items_post(self):
        """Test case for expense_items_post

        Create a new expense item
        """
        body = ExpenseItem()
        response = self.client.open(
            '//expenseItems',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
