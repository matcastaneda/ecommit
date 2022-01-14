import React from 'react';
import { Toaster } from 'react-hot-toast';

// * Import Component
import EmojiList from '../components/EmojiList/EmojiList';

const HomePage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid content-center grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
        <EmojiList />
      </div>

      <Toaster position="top-right" />
    </>
  );
};

export default HomePage;
