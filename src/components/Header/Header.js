import React from 'react';
import logo from '../../assets/images/ecommit-logo.svg';

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-sky-100 py-20 xs:py-10 select-none">
      <div className="container-ecommit flex flex-row justify-center items-end mb-8">
        <img src={logo} alt="logo-ecommit" className="w-24 md:w-40" />
        <p className="text-7xl md:text-9xl" style={{ color: '#6A6969' }}>
          commit
        </p>
      </div>

      <div className="p-2 px-9 xs:px-5 text-center">
        <p className="text-xl italic" style={{ color: '#6A6969' }}>
          Personaliza tus mensajes de confirmación al momento de usar Git.
        </p>
      </div>
    </div>
  );
};

export default Header;
