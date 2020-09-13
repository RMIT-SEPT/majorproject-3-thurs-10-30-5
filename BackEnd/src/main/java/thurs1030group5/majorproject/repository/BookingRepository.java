package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Availability;
import thurs1030group5.majorproject.model.Booking;

public interface BookingRepository extends CrudRepository<Booking, Long> {
}
