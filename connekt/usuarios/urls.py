from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, UserDetailView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from usuarios.views import CustomAuthToken

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
    path('api-token-auth/', CustomAuthToken.as_view()),
]

