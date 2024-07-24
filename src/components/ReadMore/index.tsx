import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
const ReadMore = ({ children, maxCharacterCount = 400 }: any) => {
  const text = children;
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };

  if (text?.length <= maxCharacterCount) {
    return (
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        components={{
          img: (props) => {
            return <img className="tw-mx-auto" src={props['data-src'] ?? props['src']} />;
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
              return <img className="tw-mx-auto" src={props['data-src'] ?? props['src']} />;
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
              return <img className="tw-mx-auto" src={props['data-src'] ?? props['src']} />;
            },
          }}
        >
          {text && `${text.substring(0, maxCharacterCount)}...`}
        </ReactMarkdown>
      )}
      {text && (
        <span onClick={toggleReadMore} className="more_description">
          {isReadMoreShown ? '' : 'Xem thêm'}
        </span>
      )}
    </div>
  );
};

export default ReadMore;
