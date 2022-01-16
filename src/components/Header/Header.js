import React from 'react';
import logo from '../../assets/images/ecommit-logo.svg';

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-sky-100 py-32 select-none">
      <div className="container-ecommit flex flex-row justify-center items-end mb-8">
        <img src={logo} alt="logo-ecommit" className="w-24 md:w-32" />
        <p className="text-7xl md:text-8xl" style={{ color: '#6A6969' }}>
          commit
        </p>
      </div>

      <div className="p-2 text-center">
        <p>
          Personaliza tus mensajes de confirmación al momento de usar Git, por
          medio de emojis representativos.
        </p>
      </div>
    </div>
  );
};

export default Header;
