package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Booking;
import thurs1030group5.majorproject.model.Worker;

import java.util.List;

public interface BookingRepository extends CrudRepository<Booking, Long> {

    List<Booking> findBookingsByUser_username(String username);
}
