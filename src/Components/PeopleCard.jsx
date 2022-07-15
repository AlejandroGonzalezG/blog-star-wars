const PeopleCard = ({ name, height, mass, gender }) => {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://aux.iconspalace.com/uploads/204257333216454877.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <ul>
                        <li>{height}</li>
                        <li>{mass}</li>
                        <li>{gender}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default PeopleCard;

