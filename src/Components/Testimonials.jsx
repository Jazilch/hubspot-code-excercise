'use es6';

import React from 'react';
import TestimonialFetcher from './TestimonialFetcher';

const Testimonials = () => (
  <TestimonialFetcher>
    {({ data, isLoading, handleClick }) => (
      <div className="testimonial">
        {isLoading && <p>Im loading...</p>}
        <div>
          <div className="testimonial__container page-center">
            <div className="testimonial__content icon">
              <p>{data}</p>
              <span>Chuck Norris</span>
            </div>
            <a
              role="button"
              tabIndex="-1"
              onKeyPress={handleClick}
              className="testimonial__button"
              onClick={handleClick}
            >
              Tell Me More
            </a>
          </div>
        </div>
      </div>
    )}
  </TestimonialFetcher>
);

export default Testimonials;
