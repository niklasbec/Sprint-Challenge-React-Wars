import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import styled from 'styled-components'


const Characters = () => {
    const [characters, setCharacters] = useState([])

const FlexDiv = styled.div`
display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
`

    useEffect(() => {
        
        axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
        .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results)
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        })
        }, [])

    return (
        <FlexDiv>
            {
            characters.map(character => {
                return (
                <CharacterCard 
                    name={character.name}
                    birthYear={character.birth_year}
                    gender={characters.gender}
                    height={character.height}
                    mass={character.mass}
                    hairColor={character.hair_color}
                    skinColor={character.skin_color}
                />
                )
            })
            }
        </FlexDiv>
    );
    }

export default Characters;