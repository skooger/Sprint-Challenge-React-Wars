import React, {useState, useEffect} from "react";
import StarWarsCard from "./StarWarsCard";



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
  
      console.log(starWarsChars)
  return (
    <div>
      {
        starWarsChars.map((char,index) => (
          <StarWarsCard key={index}
                        char={char}/>

        ))
      }
    </div>
  );
  
 
};

export default StarWars;