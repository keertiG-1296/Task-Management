from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer
from .permissions import IsAdminOrOwner

class TaskViewSet(ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated, IsAdminOrOwner]
    queryset = Task.objects.all()  # include all tasks here

    def get_queryset(self):
        """
        List view: users see only their tasks, admins see all.
        Other actions (retrieve/update/delete) handled by permission.
        """
        user = self.request.user
        if self.action == 'list' and user.role != 'admin':
            return Task.objects.filter(user=user)
        return Task.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
