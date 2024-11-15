import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export const Carousel = (props:{images: StaticImageData[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  };

  const ensureDisplayArrowButtons = (imagesCount: number) =>{
    if(imagesCount >= 2){
        return(
            <div>
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-white bg-opacity-30 text-white hover:bg-opacity-50 shadow-md"
                >
                    &#8249;
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-white bg-opacity-30 text-white hover:bg-opacity-50 shadow-md"
                >
                    &#8250;
                </button>
            </div>
        )
    }
  }


  const ensureAtLeastOneImg = (_images: StaticImageData[]) =>{
    console.log(_images);
    if(_images && _images.length > 0 && _images[currentIndex].src != null){        
        return (
            
                <div className="absolute inset-0 flex items-center justify-center">
                {/* Carousel Images */}
                <Image
                    src={_images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
                {/* Navigation Buttons */}
                {ensureDisplayArrowButtons(_images.length)}
            </div>
        )
    }
  }

  return (
    <div>
        {ensureAtLeastOneImg(props.images)}
    </div>
  );
}