import React from 'react';
import { Columns, Column, PageContent } from 'bumbag';
import Card from './CardComponent.jsx';

const bookingCard = { name: 'Booking', description: 'Click here to make a booking', button: 'Book' };
const profileCard = { name: 'Profile', description: 'Click here to view your profile', button: 'My Profile' };
const servicesCard = { name: 'Booking', description: 'Click here to make a booking', button: 'Book' };
const workerCard = { name: 'Workers', description: 'View available workers', button: 'View Workers' };
const appointmentCard = {
  name: 'Appointments',
  description: 'View appointments',
  button: 'Appointments'
};
const extraCard = { name: 'Extra', description: 'Extra', button: 'Extra' };

const cards = [bookingCard, profileCard, servicesCard, workerCard, appointmentCard];

function Dashboard() {
  return (
    <PageContent paddingBottom="15%">
      <h1 id="welcome"> Welcome to your Dashboard</h1>
      <br />

      <Columns>
        {cards.map(card => (
          <Column key={card.name} spread={4}>
            <Card className="card" name={card.name} description={card.description} button={card.button} />
          </Column>
        ))}
      </Columns>
    </PageContent>
  );
}

export default Dashboard;
