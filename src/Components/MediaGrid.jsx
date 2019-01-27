'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import posed, { PoseGroup } from 'react-pose';
import EmptyState from './EmptyState';

const Media = posed.li();

const MediaGrid = ({ media }) => (
  <div className="media">
    <div>
      <div className="page-center">
        <ul className="movie-grid">
          {media.length === 0 && <EmptyState />}
          <PoseGroup>
            {media.map(m => (
              <Media key={uuid.v4()} className="movie-item">
                <img src={m.poster} alt={m.title} />
                <h3>
                  {m.title}
                  <span className="movie__year">{`(${m.year})`}</span>
                </h3>
                <p className="movie__genres">{`Genres: ${m.genre}`}</p>
              </Media>
            ))}
          </PoseGroup>
        </ul>
      </div>
    </div>
  </div>
);

MediaGrid.propTypes = {
  media: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MediaGrid;
