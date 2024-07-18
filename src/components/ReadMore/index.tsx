import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
const ReadMore = ({ children, maxCharacterCount = 400 }) => {
  const text = children;
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };

  if (text?.length ?? 0 <= maxCharacterCount) {
    return (
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        components={{
          img: (props) => {
            return <img src={props['data-src'] ?? props['src']} />;
          },
        }}
      >
        {text}
      </ReactMarkdown>
    );
  }

  return (
    <div>
      {isReadMoreShown ? (
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, remarkGfm]}
          components={{
            img: (props) => {
              return <img src={props['data-src'] ?? props['src']} />;
            },
          }}
        >
          {text}
        </ReactMarkdown>
      ) : (
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, remarkGfm]}
          components={{
            img: (props) => {
              return <img src={props['data-src'] ?? props['src']} />;
            },
          }}
        >
          {`${text.substring(0, maxCharacterCount)}...`}
        </ReactMarkdown>
      )}
      <span onClick={toggleReadMore} className="more_description">
        {isReadMoreShown ? '' : 'Xem thêm'}
      </span>
    </div>
  );
};

export default ReadMore;
