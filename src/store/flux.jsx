const getState = ({ getStore, getActions, setStore }) => {
  /*
		getStore let us access to an object with all the properties defined inside the "store" attribute
		getActions let us acces to an object with all the methods defined inside the "actions" attribute
		setStore let us update the "store" object with the object that receives as parameter. ex: setStore({ attr: value })
	*/
  return {
    store: {
      characters: null,
      planetas: null,
      vehiculos: null,
      favorites: [],
    },
    actions: {
      getCharacters: async url => {
        try {
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
      getPlanetas: async url => {
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setStore({ planetas: data });
        } catch (error) {
          console.log(error);
        }
      },
      getVehiculos: async url => {
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setStore({ vehiculos: data });
        } catch (error) {
          console.log(error);
        }
      },
      addFavorite: (name, index) => {
        const { favorites } = getStore(); // store.favorites = []
        const favorite = {
          name: `${name}`,
          index: `${index}`,
        };

        // console.log(favorite.name, favorite.index);

        const findFav = favorites.find(elem => elem.name === favorite.name);
        if (!findFav) {
          favorites.push(favorite);
          setStore({ favorites: favorites });
        }

        console.log(favorites);
      },
    },
  };
};

export default getState;
