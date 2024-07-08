import React, { useEffect, useState } from 'react';
import api from '../api/api'; // Importa a configuração centralizada do Axios
import FeedCard from './FeedCard';
import './FeedList.css';
import Sidebar from '../Menu/Menu';

const FeedList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts/'); // Usa a configuração centralizada do Axios
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          // O servidor respondeu com um status de erro (por exemplo, 404, 500)
          setError('Erro ao carregar posts: ' + error.response.status);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta do servidor
          setError('Sem resposta do servidor');
        } else {
          // Erro durante o processo de requisição
          setError('Erro ao carregar posts: ' + error.message);
        }
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="main-container">
      <Sidebar />
      <div className="posts-list-container">
        <h2 className="title">Feed de Notícias</h2>
        <div className="posts-list">
          {posts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedList;
