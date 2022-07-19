import { useContext } from 'react';
import { Context } from '../store/appContext';
import FavoriteItem from './FavoriteItem';

const FavoritesList = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-primary btn-toggle dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {/* {store.favorites?.name.map(favorite => (
            <FavoriteItem key={favorite.id} name={favorite.name} />
          ))} */}
          {!!store.favorites &&
            store.favorites.length > 0 &&
            store.favorites.map((favorite, index) => (
              <FavoriteItem
                key={index}
                name={favorite.name}
                deleteFn={actions.deleteFavorite}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritesList;
