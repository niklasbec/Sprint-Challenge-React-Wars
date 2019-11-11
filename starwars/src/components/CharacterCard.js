import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// name={character.name}
//                     birthYear={character.birth_year}
//                     gender={characters.gender}
//                     height={character.height}
//                     mass={character.mass}
//                     hairColor={character.hair_color}
//                     skinColor={character.skin_color}
//                     homeworld={characters.homeworld}
//                     films={characters.films}

const NameHeading = styled.h2`
`
const CharacterDiv = styled.div`
      background: linear-gradient(to right bottom, #ff0099, #493240);
      width: 18rem;
      margin: 4rem 2rem;
      padding: 1rem;
      border-radius: 5%;
`




const CharacterCard = props => {
    return(
        <CharacterDiv>
            <NameHeading>
                {props.name}
            </NameHeading>
            <p>
                Born: {props.birthYear}<br />
                Gender: {props.gender}<br />
                Height: {props.height}<br />
                Mass: {props.mass}<br />
                HairColor: {props.hairColor}<br />
                SkinColor: {props.skinColor}<br />
            </p>
        </CharacterDiv>
    )
}

export default CharacterCard