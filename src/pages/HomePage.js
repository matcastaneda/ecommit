import { React, useState } from 'react';
import { Toaster } from 'react-hot-toast';

// * Import Component
import EmojiList from '../components/EmojiList/EmojiList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const HomePage = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header />

      <div className="container-ecommit flex justify-center items-center px-10">
        <input
          type="text"
          placeholder="Busca tu Emoji"
          className="placeholder:italic placeholder:text-slate-400 block w-full md:w-7/12 bg-white border border-slate-300 rounded-md py-3 px-5 mt-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <main className="container-ecommit main">
        <EmojiList search={search} />
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
