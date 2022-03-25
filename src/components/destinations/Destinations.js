import React from 'react'
import './DestinationStyles.css'

import Portugal from '../../assets/img/portugal/portugal.jpg'
import LakeTahoe from '../../assets/img/lake-tahoe/lake-tahoe.jpg'
import Maldives from '../../assets/img/maldives/maldives.jpg'

function Destinations() {
  return (
    <div className='destinations'>
        <div className='container'>
            <h1>All-Inclusive Destinations</h1>
            <p>Anywhere you wish to go!</p>
            <div className='card-deck'>
                    <div class="card shadow mb-md-gutter">
                        <a href=".\destinations.js">
                            <img class="card-img-top" src={Portugal} alt='Portugal' />
                        </a>
                        <div class="card-body">
                            <h5 className="card-title text-uppercase">
                                <a href=".\destinations.js" className="card-title">
                                    Portugal
                                </a>
                            </h5>
                            <p className="card-text">
                                From clublike resorts to chic boutique resorts, from those which offer family fun to those that are...
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href=".\destinations.js" className="card-btn">
                                Explore
                            </a>
                        </div>
                    </div>
                    <div className="card shadow mb-md-gutter">
                        <a href=".\destinations.js">
                            <img className="card-img-top" src={LakeTahoe} alt="Lake Tahoe" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">
                                <a href=".\destinations.js"  className="card-title">
                                    Lake Tahoe
                                </a>
                            </h5>
                            <p className="card-text">
                                From clublike resorts to chic boutique resorts, from those which offer family fun to those that are...
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href=".\destinations.js" className="card-btn">
                                Explore
                            </a>
                        </div>
                    </div> 
                    <div className="card shadow mb-md-gutter">
                        <a href=".\destinations.js">
                            <img className="card-img-top" src={Maldives} alt="Maldives" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">
                                <a href=".\destinations.js" className="card-title">
                                    Maldives
                                </a>
                            </h5>
                            <p className="card-text">
                                From clublike resorts to chic boutique resorts, from those which offer family fun to those that are...
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href=".\destinations.js" className="card-btn">
                                Explore
                            </a>
                        </div>
                    </div>
            </div>
            <h3 style={{'font-weight': '400'}}>More destinations coming soon!</h3>
        </div>
    </div>
  )
}

export default Destinations