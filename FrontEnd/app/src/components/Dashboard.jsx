import React from 'react';
import { Columns, Column, PageContent } from 'bumbag';
import Card from './CardComponent/CardComponent.jsx';
import useUser from '../hooks/useUser';

const bookingCard = { name: 'Booking', description: 'Click here to make a booking', button: 'Book' };
const profileCard = { name: 'Profile', description: 'Click here to view your profile', button: 'My Profile' };
const servicesCard = {
  name: 'Services',
  description: 'Click here to view available services',
  button: 'Services',
  buttonlink: '/services'
};
const workerCard = { name: 'Workers', description: 'View available workers', button: 'View Workers' };
const appointmentCard = {
  name: 'Appointments',
  description: 'View appointments',
  button: 'Appointments'
};
const extraCard = { name: 'Extra', description: 'Extra', button: 'Extra' };

const cards = [bookingCard, profileCard, servicesCard, workerCard, appointmentCard];

function Dashboard() {
  const { user } = useUser();

  return (
    <PageContent paddingBottom="15%">
      <h1 id="welcome"> Hi, {user.username} Welcome to your Dashboard</h1>
      <br />

      <Columns>
        {cards.map(card => (
          <Column key={card.name} spread={4}>
            <Card
              className="card"
              name={card.name}
              description={card.description}
              button={card.button}
              buttonlink={card.buttonlink}
            />
          </Column>
        ))}
      </Columns>
    </PageContent>
  );
}

export default Dashboard;
