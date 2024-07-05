import React from 'react';
import './Menu.css'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
          src="/caminho/para/sua/foto-de-perfil.png"
          alt="Foto de perfil"
        />
        <p>Perfil</p>
      </div>
    </div>
  );
};

export default Sidebar;
