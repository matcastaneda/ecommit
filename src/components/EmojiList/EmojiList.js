import React from 'react';

// * Import Component & Data
import EmojiCard from '../EmojiCard/EmojiCard';
import data from '../../data/ecommit.json';

// TODO: Recore el archivo JSON ecommit para obtener todos los datos de los emojis.
function EmojiList({ search }) {
  const emojis = data.ecommit;

  const emojisFiltrados = emojis.filter(
    emojis =>
      emojis.name.toLowerCase().includes(search.toLowerCase()) |
      emojis.description.toLowerCase().includes(search.toLowerCase()) |
      emojis.code.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    // * Los datos se envian al Componente <EmojiCard />
    <>
      {emojisFiltrados.length > 1 ? (
        <div className="container-ecommit main">
          {emojisFiltrados.map(emoji => (
            <EmojiCard
              key={emoji.id}
              id={emoji.id}
              emoji={emoji.emoji}
              code={emoji.code}
              description={emoji.description}
              color={emoji.color}
            />
          ))}
        </div>
      ) : (
        <div className="container-ecommit py-10 px-5 md:px-10">
          <p className="text-sm sm:text-xl select-none">
            ¡Lo sentimos! No encontramos ningún resultado. ☹️
          </p>
        </div>
      )}
    </>
  );
}

export default EmojiList;
