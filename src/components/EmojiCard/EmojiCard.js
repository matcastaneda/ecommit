import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

/**
  ** Extraidos de EmojiList.js
   @param emoji
   @param code
   @param description 

  * TODO: Creación de componente para renderizar los emojis.
*/
function EmojiCard({ emoji, code, description }) {
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
    <>
      <figure className="flex items-center overflow-hidden text- rounded-lg shadow-lg max-w-sm h-24 p-5">
        <CopyToClipboard text={emoji}>
          <span
            onClick={onClickEmoji}
            className="cursor-pointer text-4xl select-none">
            {emoji}
          </span>
        </CopyToClipboard>

        <div className="pl-2">
          <CopyToClipboard text={code}>
            <span
              onClick={onClickCode}
              className="cursor-pointer bg-slate-200 px-2 py-1 rounded select-none">
              {code}
            </span>
          </CopyToClipboard>

          <p>{description}</p>
        </div>
      </figure>
    </>
  );
}

export default EmojiCard;
