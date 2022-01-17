import React from 'react';
import logo from '../../assets/images/ecommit-logo.svg';

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-sky-100 py-20 xs:py-10 select-none">
      <div className="container-ecommit mb-8">
        <a
          href="https://github.com/matcastaneda/ecommit/blob/main/README.md"
          className="flex flex-row justify-center items-end">
          <img src={logo} alt="logo-ecommit" className="w-24 md:w-40" />
          <p className="text-7xl md:text-9xl" style={{ color: '#6A6969' }}>
            commit
          </p>
        </a>
      </div>

      <div className="p-2 px-9 xs:px-5 text-center mb-8">
        <p className="text-xl italic" style={{ color: '#6A6969' }}>
          Personaliza tus mensajes de confirmación al momento de usar Git.
        </p>
      </div>

      <a
        href={`https://github.com/matcastaneda/ecommit`}
        className="text-white">
        <div
          className="relative flex items-center p-3 rounded-lg shadow-lg text-2xl"
          style={{ background: '#8DDBE5' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            className="bi bi-github absolute"
            viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <p className="pl-8 pt-1">Proyecto</p>
        </div>
      </a>
    </div>
  );
};

export default Header;
