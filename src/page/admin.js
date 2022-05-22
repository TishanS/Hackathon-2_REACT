
import './dashboard.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function Admin() {

    const [seat, setSeat] = useState('0');
    const [price, setPrice] = useState('0')
    const [movie, setMovie] = useState('Doctor Strange')

    const [theatrename, setTheatreName] = useState('')
    const [moviename, setMovieName] = useState('')
    const [submit, setSubmit] = useState('')


    const [value, setValue] = useState({
        user: [''],
        error: {
            age: 'required',
        }

    });


    // // Seat click event
    const handleSeat = (e) => {
        setSeat((seat) => parseInt(seat) + 1);
        setPrice((price) => parseInt(price) + 100)

        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected')
        }  
    }

  
    const deleteData = async (id) => {
        let response = await axios.delete(
            `https://backendbookmyshow.herokuapp.com/admin/remove/${id}`
        )
        let user = value.user.filter((row) => row.id != id);
        setValue({ user });
        alert('Refresh page')
    }

    
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value)  

    var response = await axios.post(
        'http://localhost:3000/admin/postdata',
        {
            moviename: moviename,
            theatrename: theatrename, 
        }

    );
    let user = [...value.user]
    user.push(response.data);
    setValue({ user })
    setMovieName('')
    setTheatreName('') 
    
}


    useEffect(async () => {
        var response = await axios.get(
            'https://backendbookmyshow.herokuapp.com/admin/getdata'
        );
        // console.log(response.data);
        await setValue({ user: response.data })

        console.log(value)
    }, [])

    return (

        <>
        <div style={{margin: '10px'}}>
           <h1>Admin Page</h1>  <br /><br />

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

            <h5>Update Theatre and Movies by Admin</h5> <br/> 
           
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Theatre Name </label>
                    <input type='text' name='theatrename' value={theatrename} onChange={(e) => setTheatreName(e.target.value)} /> <br /> <br />
                    <label>Movie Name  </label>
                    <input type='text' name='moviename' value={moviename} onChange={(e) => setMovieName(e.target.value)} /> <br />
                    {/* <span style={{ color: 'red' }}>{value.error.age}</span>   */}
                    <br />
                    

                    <button  class="btn btn-info" type="submit">Submit</button> &nbsp; &nbsp;

                    <span style={{ color: 'red' }}>{submit}</span>  <br />

                </div>
            </form> <br />
            <table border={1} >
                <thead  >
                    <tr>
                        <td>Theatre Name</td>
                        <td>Movie Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {value.user.map((row) => (
                        <tr>
                            <td>{row.theatrename}</td>
                            <td>{row.moviename}</td>
                            <Link to={''}>
                            <td>
                                <button  class="btn btn-secondary" onClick={() => deleteData(row._id)}>Delete</button>
                            </td>
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table> <br />


            </div>

        </>
    )
}


export default Admin;
