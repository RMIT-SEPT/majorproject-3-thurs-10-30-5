package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.model.Booking;
import thurs1030group5.majorproject.repository.BookingRepository;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }


    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getCustomerBookings(String username) {
        return bookingRepository.findBookingsByUser_username(username);
    }

    public List<Booking> getWorkerBookings(Long workerId, Date dayStart, Date dayEnd) {
        return bookingRepository.findBookingByWorker_IdAndAppointment_AppointmentTimeBetween(workerId, dayStart, dayEnd);
    }

}
