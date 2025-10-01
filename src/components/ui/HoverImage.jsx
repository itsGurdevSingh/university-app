import React from 'react';

const HoverImage = ({ src, alt, className }) => {
  return (
    // The `group` class allows us to style a child on the parent's hover state.
    <div className={`overflow-hidden group ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        // 2. These classes create the smooth transition effect.
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};

export default HoverImage;