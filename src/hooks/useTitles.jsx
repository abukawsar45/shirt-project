import { useEffect } from 'react';

const useTitles = (title) => {
  useEffect(() => {
    document.title = `Best Shirt ${title}`;
  });
};

export default useTitles;
