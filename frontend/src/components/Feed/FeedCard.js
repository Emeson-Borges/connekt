import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedCard.css';

const FeedCard = ({ post }) => {
  const [authorName, setAuthorName] = useState('');
  const [perfilPhoto, setPerfilPhoto] = useState('');

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${post.autor}/`);
        setAuthorName(response.data.nome_user);
        setPerfilPhoto(response.data.foto_perfil)
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };

    fetchAuthor();
  }, [post.autor]);

  return (
    <div className="post-card">
      <div className="post-header">
      <img src={perfilPhoto} alt="Perfil" className="perfil-photo" />
        <span className="post-author">@{authorName}</span>
        <span className="post-date">{new Date(post.data_criacao).toLocaleDateString()}</span>
      </div>
      {post.imagem && <img src={post.imagem} alt="Post" className="post-image" />}
      <div className="post-content">
        <h4 className="post-title">{post.titulo}</h4>
        <p className="post-text">{post.conteudo}</p>
        {post.video && <video controls src={post.video} className="post-video"></video>}
        <div className="post-actions">
          <button className="action-button">Curtir</button>
          <button className="action-button">Comentar</button>
          <button className="action-button">Compartilhar</button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
