import React from 'react'
import { PageContent, Card, Paragraph } from 'bumbag';
import useUser from '../../hooks/useUser';
import axios from 'axios';
import * as Loads from 'react-loads';

export default function Appointments() {
    const { user } = useUser();

    const getAppointments = React.useCallback(async () => {
        //Create object with necessary data for POST
        const data = {
            username: user.username
        };
        //Set the headers 
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin': '*'
            }
        };
        // JSON.stringify(data), options
        const response = await axios.post('http://localhost:8080/api/booking/customer', JSON.stringify(data), options); 
        console.log(response);

        return response.data;
    }, []);
    
    let bookingsRecord = Loads.useLoads('bookings', getAppointments);
    let bookings = bookingsRecord.response || [];
    
    return (
        <PageContent>
        {bookings.map(booking => (
            <Paragraph>
                Id: {booking.id}, 
                Booking with {booking.worker.firstName + " " + booking.worker.lastName} on {booking.appointment.appointmentTime}
            </Paragraph>
          ))}
        </PageContent>
    )
}
