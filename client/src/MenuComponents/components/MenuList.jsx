import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuList() {
  return (
    <div>
      <ul className='menu'>
        <NavLink to='/home'>
          <li>Inicio</li>
        </NavLink>
        <li>Explorar</li>
        <li>Notificaciones</li>
        <li>Mensajes</li>
        <li>Listas</li>
        <NavLink to='perfil'>
          <li>Perfil</li>
        </NavLink>
        <li>Mas Opciones</li>
      </ul>
    </div>
  );
}
