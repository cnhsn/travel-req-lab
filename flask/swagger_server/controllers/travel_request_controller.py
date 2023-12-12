import connexion
import six

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.travel_request import TravelRequest  # noqa: E501
from swagger_server import util


def travel_requests_get():  # noqa: E501
    """Get all travel requests

     # noqa: E501


    :rtype: List[TravelRequest]
    """
    return 'do some magic!'


def travel_requests_post(body):  # noqa: E501
    """Create a new travel request

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: TravelRequest
    """
    if connexion.request.is_json:
        body = TravelRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def travel_requests_request_name_delete(request_name):  # noqa: E501
    """Delete a travel request

     # noqa: E501

    :param request_name: 
    :type request_name: str

    :rtype: None
    """
    return 'do some magic!'


def travel_requests_request_name_get(request_name):  # noqa: E501
    """Get a travel request by name

     # noqa: E501

    :param request_name: 
    :type request_name: str

    :rtype: TravelRequest
    """
    return 'do some magic!'


def travel_requests_request_name_put(request_name, body=None):  # noqa: E501
    """Update a travel request

     # noqa: E501

    :param request_name: 
    :type request_name: str
    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = TravelRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
