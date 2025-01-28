import React from 'react'
import useLazyLoadImage from '../../hooks/useLazyLoadImage ';

export const LazyImage = ({ src, alt, className, }) => {
  const [isVisible, imgRef] = useLazyLoadImage(src);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default LazyImage