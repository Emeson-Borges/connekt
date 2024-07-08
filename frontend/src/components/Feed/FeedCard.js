import React, { useEffect, useState } from 'react';
import api from '../api/api'; // Importa a configuração centralizada do Axios
import './FeedCard.css';

const FeedCard = ({ post }) => {
  const [authorName, setAuthorName] = useState('');
  const [perfilPhoto, setPerfilPhoto] = useState('');
  const [comments, setComments] = useState(post.comentarios || []);
  const [newComment, setNewComment] = useState('');
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await api.get(`users/${post.autor}/`);
        setAuthorName(response.data.nome_user);
        setPerfilPhoto(response.data.foto_perfil);
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };

    const fetchLoggedUser = async () => {
      try {
        const response = await api.get(`users/${post.autor}`);
        setLoggedUser(response.data);
      } catch (error) {
        console.error('Error fetching logged user:', error);
      }
    };

    fetchAuthor();
    fetchLoggedUser();
  }, [post.autor]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return; // Não permite comentários vazios

    try {
      const response = await api.post(
        `posts/${post.id}/comentarios/`,
        {
          conteudo: newComment,
          autor: loggedUser.id, // Usa o ID do usuário logado
        }
      );
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
    }
  };

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
          <button className="action-button">Compartilhar</button>
        </div>
      </div>

      <div className="comments-section">
        <h4>Comentários</h4>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.autor.nome_user}</strong>: {comment.conteudo}</p>
            <p><small>{new Date(comment.data_criacao).toLocaleString()}</small></p>
          </div>
        ))}
        <div className="add-comment">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Adicione um comentário..."
          />
          <button onClick={handleAddComment}>Comentar</button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
