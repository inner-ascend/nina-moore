import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  // Extract filename without extension
  const getBaseName = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, '');
  };

  const baseName = getBaseName(src);
  const imageDir = '/images/optimized';

  return (
    <picture>
      {/* WebP sources for different screen sizes */}
      <source
        media="(max-width: 640px)"
        srcSet={`${imageDir}/${baseName}-mobile.webp`}
        type="image/webp"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${imageDir}/${baseName}-tablet.webp`}
        type="image/webp"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${imageDir}/${baseName}.webp`}
        type="image/webp"
      />

      {/* JPG fallback sources */}
      <source
        media="(max-width: 640px)"
        srcSet={`${imageDir}/${baseName}-mobile.jpg`}
        type="image/jpeg"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${imageDir}/${baseName}-tablet.jpg`}
        type="image/jpeg"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${imageDir}/${baseName}.jpg`}
        type="image/jpeg"
      />

      {/* Final fallback to original image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className={className}
      />
    </picture>
  );
};

export default OptimizedImage;
