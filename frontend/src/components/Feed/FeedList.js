import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedCard from './FeedCard';
import './FeedList.css';

const FeedList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/posts/');
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
    <div className="posts-list">
      <h2 className="title">Feed de Notícias - Connekt</h2>
      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedList;
