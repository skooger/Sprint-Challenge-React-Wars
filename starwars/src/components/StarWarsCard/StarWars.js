import React, {useState, useEffect} from 'react';
import StarWarsCard from './StarWarsCard';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

`;

const StarWars = () => {

  const axios = require('axios').default;
  const [starWarsChars, setStarWarsChars] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {

        const response =  await axios.get(`https://swapi.co/api/people/`);
        setStarWarsChars(response.data.results)

      }

      fetchData();

      }, []);  

  return (
    <StyledDiv>
      {
        starWarsChars.map((char,index) => (
          <StarWarsCard key={index}
                        char={char}/>

        ))
      }
    </StyledDiv>
  );
  
 
};

export default StarWars;