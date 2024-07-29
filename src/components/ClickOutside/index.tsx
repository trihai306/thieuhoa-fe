import React, { ReactNode, useEffect, useRef } from 'react';

interface ClickOutsideComponentProps {
  children: ReactNode;
  onClickOutside: () => void;
}

const ClickOutside: React.FC<ClickOutsideComponentProps> = ({ children, onClickOutside }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);

  return <div ref={ref}>{children}</div>;
};

export default ClickOutside;
