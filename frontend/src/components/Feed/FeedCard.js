import React from 'react';
import './FeedCard.css';

const FeedCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="post-author">Por: {post.autor}</span>
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
