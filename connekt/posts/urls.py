from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import PostViewSet, criar_post, editar_post, deletar_post

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('posts/criar/', criar_post, name='criar_post'),
    path('posts/<int:pk>/editar/', editar_post, name='editar_post'),
    path('posts/<int:pk>/deletar/', deletar_post, name='deletar_post'),
]
