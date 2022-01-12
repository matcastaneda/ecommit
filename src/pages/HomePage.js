import React from 'react';
import { Toaster } from 'react-hot-toast';

// * Import Component
import EmojiList from '../components/EmojiList/EmojiList';

const HomePage = () => {
  return (
    <>
      <EmojiList />
      <Toaster position="top-right" />
    </>
  );
};

export default HomePage;
