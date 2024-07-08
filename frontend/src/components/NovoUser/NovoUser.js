// CreateUser.js
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [nome_user, setNomeUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/create_user/', {
        nome_user,
        email,
        password
      });

      // Aqui você pode lidar com a resposta após criar o usuário, como redirecionar para a página de login
      console.log('Usuário criado com sucesso:', response.data);
    } catch (error) {
      setError('Erro ao criar usuário. Verifique os dados informados.');
    }
  };

  return (
    <div className="create-user-container">
      <h2>Criar Novo Usuário</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={nome_user}
          onChange={(e) => setNomeUser(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Criar Usuário</button>
      </form>
    </div>
  );
};

export default CreateUser;
