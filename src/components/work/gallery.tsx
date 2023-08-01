/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Carousel } from 'react-responsive-carousel';

import "photoswipe/dist/photoswipe.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function MyGallery({ images }: { images: Images[] }) {
  const [slide, setSlide] = useState(0);
  const onBeforeOpen = (pswpInstance: any) => {
    pswpInstance.on('change', () => {
      setSlide(pswpInstance.currSlide.index)
    })
  }

  return (
    <Gallery onBeforeOpen={onBeforeOpen} >
      <Carousel
        showStatus={false}
        showThumbs={false}
        className='work-image'
        selectedItem={slide}>
        {
          images.map((image: Images, index: number) => {
            return (
              <Item
                key={index}
                original={image.original}
                thumbnail={image.thumbnail}
                width="1168"
                height="806"
              >
                {({ ref, open }) => (
                  <div
                    ref={ref as React.MutableRefObject<HTMLDivElement>}
                    onClick={open}
                  >
                    <img
                      className='work-image'
                      src={image.thumbnail}
                      alt=""
                    />
                  </div>
                )}
              </Item>
            )
          }
          )
        }
      </Carousel>
    </Gallery>
  )
}

interface Images {
  original: string,
  thumbnail: string,
}
