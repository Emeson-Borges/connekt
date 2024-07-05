import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Menu.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Supondo que o usuário logado tenha um ID de 1 para fins de exemplo
        // Em um aplicativo real, você provavelmente obterá esse ID do estado global ou de um token de autenticação
        const userId = 1;
        const response = await axios.get(`http://127.0.0.1:8000/users/${userId}/`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          className="sidebar__logo"
          src="/caminho/para/seu/logo.png"
          alt="Logo da sua rede social"
        />
      </div>
      <div className="sidebar__menu">
        <Link to="/" className="sidebar__menuItem active">
          <i className="fas fa-home"></i>
          <p>Início</p>
        </Link>
        <div className="sidebar__menuItem">
          <i className="fas fa-search"></i>
          <p>Pesquisa</p>
        </div>
        <div className="sidebar__menuItem">
          <i className="fas fa-compass"></i>
          <p>Explorar</p>
        </div>
        <div className="sidebar__menuItem">
          <i className="fas fa-video"></i>
          <p>Reels</p>
        </div>
        <div className="sidebar__menuItem">
          <i className="fas fa-envelope"></i>
          <p>Mensagens</p>
        </div>
        <div className="sidebar__menuItem">
          <i className="fas fa-bell"></i>
          <p>Notificações</p>
        </div>
        <Link to="/criar-post" className="sidebar__menuItem">
          <i className="fas fa-plus"></i>
          <p>Criar</p>
        </Link>
      </div>
      <div className="sidebar__footer">
        <img
          className="sidebar__profilePic"
          src={user.foto_perfil ? `http://127.0.0.1:8000${user.foto_perfil}` : '/caminho/para/default/profile.png'}
          alt="Foto de perfil"
        />
        <p>{user.nome_user}</p>
      </div>
    </div>
  );
};

export default Sidebar;
