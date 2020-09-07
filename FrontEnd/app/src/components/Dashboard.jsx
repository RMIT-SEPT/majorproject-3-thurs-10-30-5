import React from 'react'
import Card from './CardComponent.jsx';
import CardDeck from 'react-bootstrap/CardDeck'
import './Dashboard.css';

const bookingCard = {name: "Booking", description: "Click here to make a booking", button: "Book"};
const profileCard = {name: "Profile", description: "Click here to view your profile", button: "My Profile"};
const servicesCard = {name: "Booking", description: "Click here to make a booking", button: "Book"};
const workerCard = {name: "Workers", description: "View available workers", button: "View Workers"};
const appointmentCard = {name: "Appointments", description: "Click here to view appointments", button: "Appointments"};
const extraCard = {name: "Extra", description: "Extra", button: "Extra"};

const cards = [bookingCard, profileCard, servicesCard, workerCard, appointmentCard];

function Dashboard() {
    return (

            <div id = "cardDiv">
                <h1 id = "welcome"> Welcome to your Dashboard</h1>
                <br></br>
                <table id = "cardTable">
                    <tr>
                        {cards.map((card)=>
                                    <td><Card className = "card" name = {card.name} description = {card.description} button = {card.button}/></td>
                                )
                            }
                    </tr>
                </table>              
            </div>
    )
}

export default Dashboard;
