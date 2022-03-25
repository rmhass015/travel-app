import React from 'react'
import './Searchstyles.css'


function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>DESTINATION VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the very pinnacle of travel for couples at our selection of resorts. Our destinations are hand picked to provide a wide range of options for every kind of couple. Relax at one of our select beaches or hit the slopes in Lake Tahoe! The choice is yours in the place you wish to be! More destinations being added by the end of 2022!</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                {/* <img alt="/" style={{ marginRight: '1rem' }} /> */}
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Portugal</option>
                                <option value="1">Lake Tahoe</option>
                                <option value="1">Maldives</option>
                                <option value="1">Hawaii (Coming Soon)</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search