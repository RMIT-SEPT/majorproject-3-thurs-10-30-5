package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Booking;
import thurs1030group5.majorproject.model.Worker;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface BookingRepository extends CrudRepository<Booking, Long> {

    List<Booking> findBookingsByUser_username(String username);
    List<Booking> findBookingByWorker_IdAndAppointment_AppointmentTimeBetween(Long id, Date dayStart, Date dayEnd);
}
