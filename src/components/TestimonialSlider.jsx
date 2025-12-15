import React from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CEO, TechVision",
      review: "Working with this agency transformed our brand presence. Our social media engagement increased by 340% in just three months. Their strategic approach and creative execution are unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Marketing Director, GrowthHub",
      review: "The ROI we've seen from their campaigns is incredible. They don't just deliver on promises - they exceed expectations. Our lead generation has tripled since partnering with them.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Founder, EcoLux Brands",
      review: "Their team's creativity and data-driven approach helped us break into new markets. The content they produce resonates perfectly with our audience. Best decision we made this year.",
      rating: 5
    },
    {
      id: 4,
      name: "David Park",
      position: "VP Marketing, Innovate Solutions",
      review: "Professional, responsive, and results-oriented. They took our digital presence from mediocre to market-leading. Their expertise in both strategy and execution is remarkable.",
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Trusted by leading brands worldwide</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-96 bg-black/40 backdrop-blur-lg border border-gray-600 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15)] transition-all duration-300"
                  style={{
                    transform: 'translateZ(0)',
                  }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-200 text-base leading-relaxed mb-6">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;