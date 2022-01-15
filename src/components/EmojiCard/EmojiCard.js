import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

/**
  ** Extraidos de EmojiList.js
  @param id
  @param emoji
  @param code
  @param description 

  * TODO: Creación de componente para renderizar los emojis.
*/
function EmojiCard({ id, emoji, code, description, color }) {
  const styleToast = 'bg-blue-500 text-white font-regular';

  const onClickEmoji = () => {
    return toast.success(`${emoji} ► Copiado!`, {
      duration: 2500,
      className: styleToast,
    });
  };

  const onClickCode = () => {
    return toast.success(`${code} ► Copiado!`, {
      duration: 2500,
      className: styleToast,
    });
  };

  return (
    <figure className="emoji-card relative">
      <span
        className="emoji-card-id absolute select-none"
        style={{ background: `${color}` }}>
        {id}
      </span>
      <header
        className="select-none rounded-t-lg py-7"
        style={{ background: `${color}` }}>
        <CopyToClipboard text={emoji}>
          <span
            onClick={onClickEmoji}
            className="cursor-pointer text-6xl font-sans">
            {emoji}
          </span>
        </CopyToClipboard>
      </header>

      <div className="emoji-card-text py-6">
        <div className="select-none cursor-pointer mb-3 py-1 rounded-2xl bg-sky-100">
          <CopyToClipboard text={code}>
            <h1
              onClick={onClickCode}
              className="text-xl font-bold px-3 break-all md:break-words">
              {code}
            </h1>
          </CopyToClipboard>
        </div>
        <p className="px-4 break-words text-lg">{description}</p>
      </div>
    </figure>
  );
}

export default EmojiCard;
