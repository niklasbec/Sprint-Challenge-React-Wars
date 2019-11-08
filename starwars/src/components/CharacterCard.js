import React, { useState, useEffect } from 'react';

// name={character.name}
//                     birthYear={character.birth_year}
//                     gender={characters.gender}
//                     height={character.height}
//                     mass={character.mass}
//                     hairColor={character.hair_color}
//                     skinColor={character.skin_color}
//                     homeworld={characters.homeworld}
//                     films={characters.films}


const CharacterCard = props => {
    return(
        <div className ='characer-card'>
            <h2>
                {props.name}
            </h2>
            <p>
                Born: {props.birthYear}<br />
                Gender: {props.gender}<br />
                Height: {props.height}<br />
                Mass: {props.mass}<br />
                HairColor: {props.hairColor}<br />
                SkinColor: {props.skinColor}<br />
            </p>
        </div>
    )
}

export default CharacterCard