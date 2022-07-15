import { useEffect, useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState(null);

  // Run only once

  // useEffect(() => {
  //   getCharacters();
  // }, []);

  // Fetch data from API

  const getCharacters = async () => {
    try {
      const url = 'https://swapi.dev/api/people/';

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  getCharacters();
  // const getCharacters = () => {
  //   fetch('https://swapi.dev/api/people/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Setting data obtained from API to the characters state
  //       setCharacters(data);
  //       console.log(data);
  //     })
  //     // Handle errors
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="container">
      <h1>App goes here</h1>
    </div>
  );
};

export default App;
