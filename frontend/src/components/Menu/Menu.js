// Menu.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import './Menu.css';
import Logo from './logo/logo.png';

const Sidebar = () => {
  const [user, setUser] = useState({});
  const [fotoPerfil, setFotoPerfil] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        if (!userId || userId === 'undefined') {
          throw new Error('User ID not found or undefined in localStorage');
        }
        const response = await api.get(`/users/${userId}/`);
        setUser(response.data);
        setFotoPerfil(response.data.foto_perfil);
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
          src={Logo}
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
        <Link to={`/perfil/${user.id}`} className="perfil-link">
          <img src={fotoPerfil} alt="Perfil" className="perfil-photo" />
          <p>{user.nome}</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
