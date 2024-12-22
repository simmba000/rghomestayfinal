import React from 'react';
import { Star } from 'lucide-react';

const RoomReviews = ({ reviews, overallRating, totalReviews }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 mb-8">
      <h2 className="text-2xl font-bold mb-6">User Reviews</h2>
      
      <div className="flex items-start gap-12 mb-8">
        <div>
          <div className="text-4xl font-bold mb-1">{overallRating}/5</div>
          <div className="text-sm text-gray-600">Based on {totalReviews} reviews</div>
        </div>
        
        <div className="flex-1">
          {[5,4,3,2,1].map(rating => (
            <div key={rating} className="flex items-center gap-2 mb-2">
              <span className="w-8">{rating}</span>
              <Star className="w-4 h-4 text-yellow-400" />
              <div className="flex-1 h-4 bg-gray-200 rounded">
                <div 
                  className="h-full bg-yellow-400 rounded" 
                  style={{ 
                    width: `${(reviews.filter(r => r.rating === rating).length / totalReviews) * 100}%`
                  }}
                />
              </div>
              <span className="w-8 text-right">
                {reviews.filter(r => r.rating === rating).length}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="border-b pb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-gray-500">Date of stay: {review.date}</div>
              </div>
              <div className="ml-auto flex items-center">
                {review.rating} <Star className="w-4 h-4 text-yellow-400 ml-1" />
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomReviews;