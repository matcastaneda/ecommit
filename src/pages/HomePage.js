import React from 'react';
import { Toaster } from 'react-hot-toast';

// * Import Component
import EmojiList from '../components/EmojiList/EmojiList';
import Footer from '../components/Footer/Footer';

import logo from '../assets/images/ecommit-logo.svg';

const HomePage = () => {
  return (
    <>
      <header className="flex flex-col items-center bg-sky-100 py-32">
        <div className="container-ecommit flex flex-row justify-center items-end mb-8">
          <img src={logo} alt="logo-ecommit" className="w-24 md:w-32" />
          <p className="text-7xl md:text-8xl" style={{ color: '#6A6969' }}>
            commit
          </p>
        </div>

        <div className='p-2 text-center'>
          <p>
            Personaliza tus mensajes de confirmación (commit) al momento de usar
            Git, por medio de emojis representativos.
          </p>
        </div>
      </header>

      <main className="container-ecommit main">
        <EmojiList />
      </main>

      <Footer
        autor={'Matías Castañeda'}
        usuario={'matcastaneda'}
        proyecto={'ecommit'}
      />

      <Toaster position="top-center" />
    </>
  );
};

export default HomePage;
