import connexion
import six

from swagger_server.models.account import Account  # noqa: E501
from swagger_server import util


def accounts_account_name_delete(account_name):  # noqa: E501
    """Delete an account

     # noqa: E501

    :param account_name: 
    :type account_name: str

    :rtype: None
    """
    return 'do some magic!'


def accounts_account_name_get(account_name):  # noqa: E501
    """Get an account

     # noqa: E501

    :param account_name: 
    :type account_name: str

    :rtype: Account
    """
    return 'do some magic!'


def accounts_account_name_put(account_name, body=None):  # noqa: E501
    """Update an account

     # noqa: E501

    :param account_name: 
    :type account_name: str
    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Account.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def accounts_get():  # noqa: E501
    """Get all accounts

     # noqa: E501


    :rtype: List[Account]
    """
    return 'do some magic!'


def accounts_post(body):  # noqa: E501
    """Create a new account

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Account.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
