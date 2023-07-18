import React from 'react';

const PokemonCard = ({ name, url }) => {
    return (
        <div className='pokemon-card'>
            <img src={url} alt={name} />
            <br />
            <label>{name}</label>
            <br />
        </div>
    );
};

export default PokemonCard;