from django.urls import path, include
from rest_framework.routers import DefaultRouter
from posts.views import PostViewSet
# from comentarios.views import ComentarioViewSet
# from curtidas.views import CurtidaViewSet
# from seguidores.views import SolicitacaoAmizadeViewSet
# from mensagens.views import MensagemViewSet
# from notificacoes.views import NotificacaoViewSet
from usuarios.views import UserViewSet

from django.conf import settings
from django.conf.urls.static import static


# Cria um router padrão
router = DefaultRouter()

# Registra os viewsets com o router
router.register(r'posts', PostViewSet)
# router.register(r'comentarios', ComentarioViewSet)
# router.register(r'curtidas', CurtidaViewSet)
# router.register(r'solicitacoes_amizade', SolicitacaoAmizadeViewSet)
# router.register(r'mensagens', MensagemViewSet)
# router.register(r'notificacoes', NotificacaoViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)