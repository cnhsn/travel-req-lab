import connexion
import six

from swagger_server.models.expense_item import ExpenseItem  # noqa: E501
from swagger_server import util


def expense_items_get():  # noqa: E501
    """Get all expense items

     # noqa: E501


    :rtype: List[ExpenseItem]
    """
    return 'do some magic!'


def expense_items_name_delete(name):  # noqa: E501
    """Delete an expense item

     # noqa: E501

    :param name: 
    :type name: str

    :rtype: None
    """
    return 'do some magic!'


def expense_items_name_get(name):  # noqa: E501
    """Get an expense item by name

     # noqa: E501

    :param name: 
    :type name: str

    :rtype: ExpenseItem
    """
    return 'do some magic!'


def expense_items_name_put(name, body=None):  # noqa: E501
    """Update an expense item

     # noqa: E501

    :param name: 
    :type name: str
    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = ExpenseItem.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def expense_items_post(body):  # noqa: E501
    """Create a new expense item

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: ExpenseItem
    """
    if connexion.request.is_json:
        body = ExpenseItem.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
