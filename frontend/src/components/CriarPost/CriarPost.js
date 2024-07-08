import React, { useState } from 'react';
import axios from 'axios';
import './CriarPost.css';

const CreatePostForm = ({ redirectTo }) => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('conteudo', conteudo);
      if (imagem) {
        formData.append('imagem', imagem);
      }
      if (video) {
        formData.append('video', video);
      }

      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      await axios.post('http://127.0.0.1:8000/api/posts/criar/', formData, config);

      redirectTo('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post-form">
      <h2>Criar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>
        <label>
          Conteúdo:
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
          />
        </label>
        <label>
          Imagem:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files[0])}
          />
        </label>
        <label>
          Vídeo:
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </label>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
