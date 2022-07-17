import { useContext } from "react";
import PeopleCard from "../Components/PeopleCard.jsx"
import { Context } from "../store/appContext";



const DetailsPeople = ({identificador, setIdentificador}) => {
  const { store } = useContext(Context);
  return (
    <>
      <h1>index here</h1>
      <h1>{store.characters.results[identificador].name}</h1>
    </>
  );
};

export default DetailsPeople;
