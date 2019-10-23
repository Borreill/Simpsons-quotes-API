import React from 'react';

function SimpsonsQuotes({ quote }) {
    return (
        <div className="SimpsonsQuotes">
            <img src={quote.image} alt={quote.character}/>
            <strong>{quote.character}</strong>
            <p>{quote.quote}</p>
        </div>
    );
}

export default SimpsonsQuotes;