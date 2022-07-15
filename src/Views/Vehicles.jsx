import React from 'react'

const estiloCard = {
    width: "100%"
}

const Vehicles = () => {
  return (
    <div className='container'>
            <div className="card mb-3" style={estiloCard}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src="https://w7.pngwing.com/pngs/347/128/png-transparent-luke-skywalker-landspeeder-skywalker-family-jedi-youtube-youtube-outdoor-shoe-mode-of-transport-vehicle.png" className="img-fluid rounded-start" alt="..." ></img>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    Model
                </div>
                <div className='col-md-2'>
                    Manufacturer
                </div>
                <div className='col-md-3'>
                    Characteristics
                </div>
                <div className='col-md-2'>
                    Vehicle Class
                </div>
                <div className='col-md-1'>
                    Pilots
                </div>
                <div className='col-md-1'>
                    Films
                </div>
            </div>
        </div>
  );
};

export default Vehicles;
