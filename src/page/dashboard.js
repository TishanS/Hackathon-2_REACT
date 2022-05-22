
import './dashboard.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function App() {

    const navigate = useNavigate();
    const [seat, setSeat] = useState('0');
    const [price, setPrice] = useState('0')
    const [movie, setMovie] = useState('Doctor Strange')
    const [seconds, setSeconds] = useState(30);
    const [minutes, setMinutes] = useState(0);

    
    // // Seat click event
    const handleSeat = (e) => {
        setSeat((seat) => parseInt(seat) + 1);
        setPrice((price) => parseInt(price) + 100)

        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
            // updateSelectedCount();

        }
    }

    // // Movie select event
    const handleMovie = (e) => {
        setMovie(e.target.value)
    }
    
    useEffect(() => {
        if ((minutes === parseInt(0)) && (seconds === parseInt(0))) {
            alert("refresh page")
            setMinutes(0);
            setSeconds(30)
        }
        const timer = setInterval(() => {
            setSeconds(seconds - 1);

            if (seconds === parseInt(0)) {
                setMinutes(minutes - 1);
                setSeconds(59)
            }
        }, 1000)

        return () => clearInterval(timer)


    }, [minutes, seconds])

    return (


        <>
            Dashboard Page <br /><br />

            <h1> Timer </h1>
            <h1> {minutes}: {seconds < 10 ? '0' + seconds : seconds} </h1> <br />
            <div classNameName="movie-container">
                <label>Pick a movie:</label>
                <select id="movie" onClick={(e) => handleMovie(e)} >
                    <option value="Doctor Strange">Doctor Strange </option>
                    <option value="SpiderMan: No Way home ">SpiderMan: No Way home </option>
                    <option value="Jurassic World ">Jurassic World </option>
                    <option value="KGF ">KGF </option>
                </select>
            </div> <br /> <br />

            <ul class="showcase">
                <li>
                    <div class="seat"></div>
                    <small>N/A</small>
                </li>

                <li>
                    <div class="seat selected"></div>
                    <small>Selected</small>
                </li>

                <li>
                    <div class="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <div className="container">
                <div className="screen"></div>
                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                </div>
                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                </div>

                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                </div>

                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                </div>

                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                </div>

                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                </div>

                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                </div>

                <div className="row">
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat" onClick={(e) => { handleSeat(e) }}></div>
                    <div className="seat occupied"></div>
                </div>
            </div>

            <p className="text" >
                You have selected {seat} seats for a "{movie}" price of {price}
            </p> <br /> <br />

            <button type="button" class="btn btn-primary" style={{ marginLeft: "30%" }} onClick={() => navigate('/checkout', { state: { movie, price, seat } })} > Checkout </button> <br/> <br/>

<div className='help'>
   <Link to={""}>Contact Us</Link> 
</div>
        </>
    )
    
}

export default App;
