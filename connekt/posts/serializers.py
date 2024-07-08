from rest_framework import serializers
from .models import Post, Curtida, Comentario

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class ComentarioSerializer(serializers.ModelSerializer):
    autor = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Comentario
        fields = ['id', 'post', 'autor', 'conteudo', 'data_criacao']

class PostSerializer(serializers.ModelSerializer):
    comentarios = ComentarioSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'titulo', 'conteudo', 'autor', 'imagem', 'video', 'data_criacao', 'data_atualizacao', 'comentarios']
