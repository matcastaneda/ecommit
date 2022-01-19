import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

// * Import component
import { ToastTag, ToastEmoji } from 'components/Toast/ToastCopy';

/**
  ** Extraidos de EmojiList.js
  @param id
  @param emoji
  @param code
  @param description 
  @param color

  * TODO: Creación de componente para renderizar los emojis.
*/
function EmojiCard({ id, emoji, code, description, color }) {
  // * Creación de evento onClick para copiar el Emoji o Tag.
  const onClickEmoji = () => {
    return toast.success(<ToastEmoji emoji={emoji} />, { duration: 2000 });
  };

  const onClickCode = () => {
    return toast.success(<ToastTag tag={code} />, { duration: 2000 });
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
