# notes/urls.py

from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet

router = DefaultRouter()
router.register('notes', NoteViewSet, basename='note')

urlpatterns = router.urls
