import React from 'react';

// * Import Component & Data
import EmojiCard from '../EmojiCard/EmojiCard';
import data from '../../data/ecommit.json';

// TODO: Recore el archivo JSON ecommit para obtener todos los datos de los emojis.
function EmojiList() {
  const emojis = data.ecommit;

  return (
    // * Los datos se envian al Componente <EmojiCard />
    <>
      {emojis.map(emoji => (
        <EmojiCard
          key={emoji.id}
          id={emoji.id}
          emoji={emoji.emoji}
          code={emoji.code}
          description={emoji.description}
          color={emoji.color}
        />
      ))}
    </>
  );
}

export default EmojiList;
