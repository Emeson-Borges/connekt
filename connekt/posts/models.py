from django.db import models
from django.conf import settings

class Post(models.Model):
    titulo = models.CharField(max_length=255)
    conteudo = models.TextField()
    autor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='post_images/', blank=True, null=True)
    video = models.FileField(upload_to='post_videos/', blank=True, null=True)
    data_criacao = models.DateTimeField(auto_now_add=True)
    data_atualizacao = models.DateTimeField(auto_now=True) 
    
    def __str__(self):
        return self.titulo

class Curtida(models.Model):
    post = models.ForeignKey(Post, related_name='curtidas', on_delete=models.CASCADE)
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = ('post', 'usuario')  # Evita curtidas duplicadas pelo mesmo usuário

class Comentario(models.Model):
    post = models.ForeignKey(Post, related_name='comentarios', on_delete=models.CASCADE)
    autor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    conteudo = models.CharField(max_length=255)
    data_criacao = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Comentário por {self.autor} em {self.post}'

    class Meta:
        ordering = ['-data_criacao']  # Ordena por data de criação descendente
