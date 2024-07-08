import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    nome_user: '',
    email: '',
    telefone: '',
    data_nascimento: '',
    bio: '',
    foto_perfil: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${id}/`);
        setUser(response.data);
        setFormData(response.data); // Inicializa o formulário com os dados atuais do usuário
      } catch (error) {
        setError('Erro ao carregar perfil do usuário.');
      }
    };

    fetchUserProfile();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/users/${id}/`, formData);
      setSuccessMessage('Perfil atualizado com sucesso!');
      setUser(response.data); // Atualiza o estado do usuário com os novos dados
    } catch (error) {
      setError('Erro ao atualizar perfil.');
    }
  };

  if (!user) {
    return <div>{error || 'Carregando perfil...'}</div>;
  }

  return (
    <div className="edit-profile-container">
      <h2>Editar Perfil</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <label>
          Sobrenome:
          <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />
        </label>
        <label>
          Nome de Usuário:
          <input type="text" name="nome_user" value={formData.nome_user} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
        <label>
          Data de Nascimento:
          <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </label>
        <label>
          Foto de Perfil:
          <input type="text" name="foto_perfil" value={formData.foto_perfil} onChange={handleChange} />
        </label>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditProfile;
