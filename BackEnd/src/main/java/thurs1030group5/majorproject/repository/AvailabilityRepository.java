package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Availability;

public interface AvailabilityRepository extends CrudRepository<Availability, Long> {
    Availability findAvailabilityById(Long id);
}
