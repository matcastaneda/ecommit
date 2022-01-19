import { useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');

  function searchEmoji(e) {
    setSearch(e.target.value);
  }

  return { search, searchEmoji };
};
