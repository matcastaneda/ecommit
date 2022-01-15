import React from 'react';
import { Toaster } from 'react-hot-toast';

// * Import Component
import EmojiList from '../components/EmojiList/EmojiList';
import banner from '../assets/images/ecommit-banner.png';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
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
