import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${id}/`);
        setUser(response.data);
      } catch (error) {
        setError('Erro ao carregar perfil do usuário.');
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!user) {
    return <div>{error || 'Carregando perfil...'}</div>;
  }

  return (
    <div className="profile-container">
      <h2>Perfil de {user.nome_user}</h2>
      <p>Nome: {user.nome_user}</p>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.telefone}</p>
      <p>Data de Nascimento: {user.data_nascimento}</p>
      <p>Bio: {user.bio}</p>
      {/* Outras informações do perfil */}
    </div>
  );
};

export default UserProfile;
