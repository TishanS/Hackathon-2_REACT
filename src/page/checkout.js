import './checkout.css';
import { useLocation } from 'react-router-dom';


 function Checkout() {

    const Location = useLocation();
    var Movie = Location.state.movie;
    var Ticket = Location.state.seat;
    var Price = Location.state.price;
    console.log(Movie, Ticket, Price);
    alert("Refresh the page");
 

    return (
        <>
 
            <h3>Checkout page</h3>
            <div className="cart-items" style={{ textAlign: 'center' , color: 'black'}}>
                <h3 style={{ textAlign: 'center' , color: 'black'}}>Cart Items</h3><br /><br />
                <div>
                    <table id='table'>
                        <thead>
                            <tr>
                                <td>S.No</td>
                                <td>Movie Name</td>
                                <td>Ticket Count</td>
                                <td>Price (in INR) </td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>{Movie}</td>
                                <td>{Ticket}</td>
                                <td>{Price}</td>
                            
                            </tr>
                          

                            <tr>
                                <td colSpan={5} className='total'>Sub-total </td>

                                <td id="val">{Price}</td>
                            </tr>
                            <tr>
                                <td colSpan={5} className='total'>GST(10%)</td>
                                <td>{(Price * 0.1).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan={5} className='total'>Total</td>
                                <td>{(Price + Price * 0.1).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> <br/>

                <input type="text" placeholder="Enter your card number" /> <br/> <br/>
                <button type="button" class="btn btn-primary" > Pay now </button>

            </div>

            
        </>
    )
}

export default Checkout;