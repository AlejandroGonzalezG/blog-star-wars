const getState = ({ getStore, getActions, setStore }) => {
  /*
		getStore let us access to an object with all the properties defined inside the "store" attribute
		getActions let us acces to an object with all the methods defined inside the "actions" attribute
		setStore let us update the "store" object with the object that receives as parameter. ex: setStore({ attr: value })
	*/
  return {
    store: {
      characters: null,
    },
    actions: {
      getCharacters: async () => {
        try {
          const url = 'https://swapi.dev/api/people/';

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setStore({ characters: data });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
