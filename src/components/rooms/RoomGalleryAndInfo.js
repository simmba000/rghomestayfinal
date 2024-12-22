import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../App.css'

const RoomGalleryAndInfo = ({ hotelData }) => {
    const images = [
        {
          original: 'https://via.placeholder.com/800x400.png?text=Dummy+Image+1',
          thumbnail: 'https://via.placeholder.com/100x67.png?text=Thumbnail+2',
        },
        {
          original: 'https://via.placeholder.com/800x400.png?text=Dummy+Image+2',
          thumbnail: 'https://via.placeholder.com/100x67.png?text=Thumbnail+2',
        },
        {
          original: 'https://via.placeholder.com/800x400.png?text=Dummy+Image+3',
          thumbnail: 'https://via.placeholder.com/100x67.png?text=Thumbnail+3',
        },
      ];
      

  return (
    <div className="w-full mb-8">
      <div className="max-w-4xl mx-auto ">
        <ImageGallery 
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={true}
          thumbnailPosition="bottom"
        
        />
      </div>
      
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{hotelData.name}</h1>
        <p className="text-gray-600 mb-2">{hotelData.location}</p>
        <p className="text-sm text-gray-500 mb-4">{hotelData.distance}</p>
        
        <div className="prose max-w-none">
          <p className="mb-3">A serene stay awaits at our plush hotel, offering a blend of luxury and comfort with top-notch amenities.</p>
          <p className="mb-3">Experience the pinnacle of elegance in our beautifully designed rooms with stunning cityscape views.</p>
          <p className="mb-3">Indulge in gastronomic delights at our in-house restaurants, featuring local and international cuisines.</p>
          <p className="mb-3">Unwind in our state-of-the-art spa and wellness center, a perfect retreat for the senses.</p>
          <p className="mb-3">Located in the heart of the city, our hotel is the ideal base for both leisure and business travelers.</p>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>Free cancellation | No prepayment needed – pay at the property</p>
        </div>
      </div>
    </div>
  );
};

export default RoomGalleryAndInfo;