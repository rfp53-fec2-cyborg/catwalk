import React, { useEffect, useState } from 'react';

const placeholder = 'data:image/png;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

const LazyImage = (props) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect (() => {
    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        // IntersectionObserver takes a callback and options as its parameters
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(props.src); // only set the image if the viewport contains the image
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.25,
          rootMargin: '0px 0px 150px 0px'
        });
        observer.observe(imageRef);
      } else {
        setImageSrc(props.src);
      }
    }
  }, [props.src, imageSrc, imageRef]);

  return <img
    id={props.id}
    name={props.name}
    data-id={props['data-id'] || null}
    alt={props.alt || 'Image'}
    onClick={props.onClick || null}
    className={props.className || null}
    ref={setImageRef}
    src={imageSrc}
  />;


};

export default LazyImage;