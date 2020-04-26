import React from 'react';
import PropTypes from 'prop-types';

import Album from '../AlbumCard';

import '../../../style/components/AlbumList.scss';

function ResultList({ albums }) {
  return (
    <div className="result-list">
      {albums.length > 0
        ? albums.map(item => (
          <div className="album" key={item.id}>
            <Album
              id={item.id}
              name={item.name}
              image={item.images.length !== 0 ? item.images[1].url : null}
              artist={item.artists[0].name}
              artistid={item.artists[0].id} />
          </div>
        ))
        : <p>sorry...</p>
      }
    </div>
  );
}

ResultList.propTypes = {
  albums: PropTypes.array,
}

export default ResultList;
