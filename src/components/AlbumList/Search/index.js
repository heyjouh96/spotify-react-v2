import React from 'react';
import PropTypes from 'prop-types';

import '../../../style/components/Search.scss';

const Input = ({ inputed }) => {
	return (
		<input type="text" placeholder="Comece a escrever" onInput={inputed} className="searchAlbum" />
	);
}

function Search({ sendSearchValue }) {
	const onInput = value => sendSearchValue(value);

	return (
		<div className="search">
			<span>Busque por álbuns, artistas ou músicas</span>
			<Input inputed={(e) => onInput(e.target.value)} />
		</div>
	);
}

Search.propTypes = {
	sendSearchValue: PropTypes.func.isRequired,
}

export default Search;
