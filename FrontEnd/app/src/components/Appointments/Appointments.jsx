import React from 'react'
import { PageContent, Card, Heading, Paragraph } from 'bumbag';
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
        <PageContent paddingBottom="350px" paddingRight="30px" paddingLeft="30px" height="100%">
        <Heading fontWeight="bold" paddingBottom="20px">Your Appointments</Heading>
        {bookings.map(booking => (
            <Card marginBottom = "15px">
                <Card.Header >
                    <span>
                        <Heading use="h4" color="steelblue">
                            Booking with {booking.worker.firstName + " " + booking.worker.lastName}
                        </Heading>
                    </span> 
                    <span>
                        <Paragraph fontStyle="italic">
                            {booking.appointment.appointmentTime}
                        </Paragraph>
                    </span>
                </Card.Header>

                <Card.Content>
                    <Heading use="h6" color="darkgray">
                        Details:
                    </Heading>
                    <Paragraph width="52%">
                         {booking.appointment.description}
                    </Paragraph>
                </Card.Content>
            </Card>               
          ))}
        </PageContent>
    )
}
