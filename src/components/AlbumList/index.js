import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAlbums } from '../../actions/mainActions';
import { getRecent } from '../../helpers/utils';

import Search from './Search';
import ResultList from './ResultList';


function AlbumList() {
  const [search, setSearch] = useState('');
  const title = search == '' ? 'Álbuns buscados recentemente' : `Resultados encontrados para "${search}"`;
  
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albumReducer.items.albums ? state.albumReducer.items.albums.items : getRecent());

  useEffect(() => {
    if (window.audio) {
      window.audio.pause();
    }
  });

  const receiveSearchValue = (value) => {
    if (value.trim() !== '') {
      setSearch(value);
      dispatch(fetchAlbums(value));
    }
  }

  return (
    <div>
      <Search sendSearchValue={receiveSearchValue} />

      <h2>{title}</h2>
      <ResultList albums={albums} />
    </div>
  );
}

export default AlbumList;