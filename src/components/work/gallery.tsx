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
    <div className='gallery-wrapper work-image'>
      <svg width="100%" height="auto" viewBox="0 0 640 480" fill="#F9F8FC" xmlns="http://www.w3.org/2000/svg">
        <g id="Gradient/1-p">
          <path id="Yellow" d="M328.636 339.226C443.911 352.986 523.807 231.654 617.372 309.111C636.506 324.952 646.671 335.436 660.465 356.042C740.841 476.116 546.219 557.021 414.104 580.348C344.731 592.597 303.54 587.492 231.635 573.944C167.057 561.777 121.744 558.588 62.8109 525.306C14.6625 498.115 -18.8725 474.993 -42.737 425.182C-64.3627 380.044 -72.3225 341.423 -49.268 301.879C-24.8116 259.929 4.26615 243.841 53.4883 236.295C154.771 220.769 223.947 326.729 328.636 339.226Z" fill="#FFD27C" />
          <ellipse id="Pink" cx="94.4063" cy="94.43" rx="94.4063" ry="94.43" transform="matrix(0.409667 0.912235 0.912235 -0.409667 -144.783 -83.9453)" fill="#F6515B" />
          <ellipse id="Purple" cx="219.436" cy="219.128" rx="219.436" ry="219.128" transform="matrix(-0.17201 0.985095 0.999545 0.0301445 454.465 -69.6992)" fill="#E8DCFF" />
        </g>
      </svg>

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
    </div>
  )
}

interface Images {
  original: string,
  thumbnail: string,
}
