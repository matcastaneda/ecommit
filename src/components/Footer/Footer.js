import React from 'react';

const Footer = ({ autor, usuario, proyecto }) => {
  return (
    <div className="bg-sky-100 text-base md:text-lg ">
      <div className="container-ecommit flex flex-col md:flex-row md:px-6 items-center justify-between py-10 break-words">
        <div className="mb-5 md:mb-0">
          Creado con ❤️ por{' '}
          <a
            href={`https://github.com/${usuario}`}
            className="relative italic font-bold">
            {autor}
          </a>
        </div>

        <div className="flex items-center">
          Este proyecto lo puedes encontrar en mi
          <a
            href={`https://github.com/${usuario}/${proyecto}`}
            className="text-white ml-1 pt-1 pb-0.5 px-1.5 rounded-xl"
            style={{ background: '#161B22' }}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
