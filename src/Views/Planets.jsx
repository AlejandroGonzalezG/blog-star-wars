import React from 'react'


const estiloCard = {
  width: "100%"
}


const Planets = () => {
  return (
    <div className='container'>
      <div className="card mb-3" style={estiloCard}>
        <div className="row g-0">
          <div className="col-md-8">
            <img src="https://akcdn.detik.net.id/visual/2021/12/31/ilustrasi-planet-mars_169.jpeg?w=650" className="img-fluid rounded-start" alt="..." ></img>
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
        <div className='col-md-1'>
          Rotation period
        </div>
        <div className='col-md-1'>
          Orbital period
        </div>
        <div className='col-md-1'>
          Diameter
        </div>
        <div className='col-md-1'>
          Climate
        </div>
        <div className='col-md-1'>
          Gravity
        </div>
        <div className='col-md-1'>
          Terrain
        </div>
        <div className='col-md-1'>
          Surface water
        </div>
        <div className='col-md-1'>
          Population
        </div>
        <div className='col-md-2'>
          Residents
        </div>
        <div className='col-md-2'>
          Films
        </div>
      </div>
    </div>
  );
};

export default Planets;
