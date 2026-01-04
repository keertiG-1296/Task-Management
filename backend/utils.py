# backend/utils.py
from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    """
    Custom exception handler that adds status_code and error_type to all errors.
    """
    response = exception_handler(exc, context)

    if response is not None:
        response.data['status_code'] = response.status_code
        response.data['error_type'] = exc.__class__.__name__

    return response
