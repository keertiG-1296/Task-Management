from rest_framework.permissions import BasePermission

class IsAdminOrOwner(BasePermission):
    """
    Custom permission to allow only task owners or admins to edit/delete.
    """
    def has_object_permission(self, request, view, obj):
        # Admin can do anything
        if request.user.role == 'admin':
            return True
        # Only owner can access
        return obj.user == request.user
