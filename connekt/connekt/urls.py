
# # Registra os viewsets com o router
# router.register(r'posts', PostViewSet)
# # router.register(r'comentarios', ComentarioViewSet)
# # router.register(r'curtidas', CurtidaViewSet)
# # router.register(r'solicitacoes_amizade', SolicitacaoAmizadeViewSet)
# # router.register(r'mensagens', MensagemViewSet)
# # router.register(r'notificacoes', NotificacaoViewSet)
# router.register(r'users', UserViewSet)


from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from posts.views import PostViewSet
from usuarios.views import UserViewSet

from django.conf import settings
from django.conf.urls.static import static

# Cria um router padrão
router = DefaultRouter()

# Registra os viewsets com o router
router.register(r'posts', PostViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)), 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
